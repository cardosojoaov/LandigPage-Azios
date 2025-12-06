// API para gerenciar leads capturados
// Este arquivo pode ser expandido com integração real com backend

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  obstacle?: string;
  optIn?: boolean;
  source: 'hero' | 'inline' | 'pricing' | 'exit-intent' | 'sticky-cta' | 'contact-form';
  plan?: string;
  message?: string;
  timestamp: string;
}

/**
 * Salva lead no localStorage (para desenvolvimento)
 * Em produção, substituir por chamada à API real
 */
export const saveLeadLocally = (lead: LeadData): void => {
  try {
    const existingLeads = getLocalLeads();
    existingLeads.push(lead);
    localStorage.setItem('captured_leads', JSON.stringify(existingLeads));
    console.log('Lead salvo localmente:', lead);
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
  }
};

/**
 * Recupera leads salvos localmente
 */
export const getLocalLeads = (): LeadData[] => {
  try {
    const leads = localStorage.getItem('captured_leads');
    return leads ? JSON.parse(leads) : [];
  } catch (error) {
    console.error('Erro ao recuperar leads:', error);
    return [];
  }
};

/**
 * Envia lead para API backend
 * Exemplo de integração com webhook/API
 */
export const sendLeadToAPI = async (lead: LeadData): Promise<boolean> => {
  try {
    // Exemplo 1: Enviar para seu backend
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) throw new Error('Falha ao enviar lead');

    // Exemplo 2: Integração com Webhook (Zapier, Make, etc)
    // await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/', {
    //   method: 'POST',
    //   body: JSON.stringify(lead),
    // });

    console.log('Lead enviado com sucesso para API');
    return true;
  } catch (error) {
    console.error('Erro ao enviar lead para API:', error);
    // Salvar localmente como fallback
    saveLeadLocally(lead);
    return false;
  }
};

/**
 * Envia notificação por email para comercial@azios.com.br
 * Configuração: https://web3forms.com (gratuito, até 250 emails/mês)
 */
export const sendEmailNotification = async (lead: LeadData): Promise<boolean> => {
  try {
    // Obter chave do ambiente ou usar valor padrão para testes
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const targetEmail = import.meta.env.VITE_CONTACT_EMAIL || 'comercial@azios.com.br';

    if (!accessKey || accessKey === 'your_access_key_here') {
      console.warn('⚠️ Web3Forms access key não configurada');
      console.log('📝 Configure em .env: VITE_WEB3FORMS_ACCESS_KEY=sua_chave');
      console.log('🔗 Obtenha em: https://web3forms.com');
      
      // Salvar localmente como fallback
      saveLeadLocally(lead);
      return false;
    }
    
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('subject', `🎯 Novo Lead Azios - ${lead.name}`);
    formData.append('from_name', 'Azios AI');
    // Campos ajustados para Web3Forms / integração
    formData.append('Primeiro Nome', lead.name);
    formData.append('Email', lead.email);
    formData.append('WhatsApp', lead.phone);
    formData.append('Empresa', lead.company || 'Não informado');
    formData.append('Maior Obstáculo', lead.obstacle || 'Não informado');
    formData.append('Mensagem', lead.message || 'Não informado');
    formData.append('Autorizo WhatsApp', lead.optIn ? 'Sim' : 'Não');
    formData.append('Origem', 'azios.com.br');
    formData.append('Data/Hora', new Date(lead.timestamp).toLocaleString('pt-BR'));

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log(`✅ Email enviado com sucesso para ${targetEmail}`);
      return true;
    } else {
      throw new Error(data.message || 'Falha ao enviar email');
    }
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    // Salvar localmente como fallback
    saveLeadLocally(lead);
    
    return false;
  }
};

/**
 * Função principal para processar lead capturado
 */
export const processLead = async (
  leadData: Omit<LeadData, 'timestamp'>,
): Promise<void> => {
  const lead: LeadData = {
    ...leadData,
    timestamp: new Date().toISOString(),
  };

  // Salvar localmente primeiro (garantia)
  saveLeadLocally(lead);

  // Tentar enviar para API
  const apiSuccess = await sendLeadToAPI(lead);

  // Se API funcionou, enviar notificação
  if (apiSuccess) {
    await sendEmailNotification(lead);
  }

  // Analytics/Tracking (Google Analytics, Meta Pixel, etc)
  trackLeadConversion(lead);
};

/**
 * Tracking de conversão para analytics
 */
const trackLeadConversion = (lead: LeadData): void => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', {
      currency: 'BRL',
      value: getLeadValue(lead.source),
      lead_source: lead.source,
      plan: lead.plan || 'N/A',
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: lead.source,
      content_category: lead.plan || 'general',
    });
  }

  console.log('Conversão rastreada:', lead.source);
};

/**
 * Define valor estimado do lead por fonte
 */
const getLeadValue = (source: LeadData['source']): number => {
  const values = {
    'hero': 50,
    'inline': 75,
    'pricing': 100,
    'exit-intent': 30,
    'sticky-cta': 60,
  };
  return values[source] || 50;
};

/**
 * Exporta leads como CSV (para download manual)
 */
export const exportLeadsToCSV = (): string => {
  const leads = getLocalLeads();
  if (leads.length === 0) return '';

  const headers = ['Nome', 'Email', 'Telefone', 'Empresa', 'Origem', 'Plano', 'Data'];
  const rows = leads.map(lead => [
    lead.name,
    lead.email,
    lead.phone,
    lead.company || '',
    lead.source,
    lead.plan || '',
    new Date(lead.timestamp).toLocaleString('pt-BR'),
  ]);

  const csv = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
  ].join('\n');

  return csv;
};
