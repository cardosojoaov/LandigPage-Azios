# Sistema de Captura de Leads - Azios

## 📋 Visão Geral

Implementamos um sistema completo de captura de leads com **5 pontos estratégicos de conversão**:

### 1. **Hero Section** - CTA Principal
- Modal ao clicar em "QUERO VENDER MAIS" ou "Ver Demonstração"
- Oferta: Calculadora ROI + Análise + Guia exclusivo
- Taxa de conversão esperada: **3-5%**

### 2. **Inline Lead Capture** (Pós-vídeo)
- Formulário destacado logo após o vídeo
- Oferta: Análise gratuita personalizada
- Taxa de conversão esperada: **5-8%** (interesse quente)

### 3. **Pricing Section**
- Todos os botões de planos abrem modal de captura
- Contexto: Usuário já decidiu o plano
- Taxa de conversão esperada: **15-25%** (alta intenção)

### 4. **Exit-Intent Popup**
- Detecta quando usuário vai sair da página
- Última chance com oferta especial (30% OFF)
- Taxa de conversão esperada: **10-15%**

### 5. **Sticky Mobile CTA**
- Barra fixa no rodapé (apenas mobile)
- Sempre visível após scroll
- Taxa de conversão esperada: **8-12%**

---

## 🛠️ Como Funciona

### Fluxo de Dados

```
Usuário preenche formulário
         ↓
processLead() é chamada
         ↓
1. Salva no localStorage (backup)
2. Envia para API backend
3. Envia notificação por email
4. Registra conversão (Analytics)
```

### Estrutura do Lead

```typescript
{
  name: string;        // Nome completo
  email: string;       // Email profissional
  phone: string;       // WhatsApp
  company?: string;    // Empresa (opcional)
  source: string;      // Origem do lead
  plan?: string;       // Plano selecionado
  timestamp: string;   // Data/hora
}
```

---

## 🔌 Integrações Necessárias

### 1. Backend API (Prioritário)

Crie endpoint para receber leads:

```javascript
// Exemplo Node.js/Express
app.post('/api/leads', async (req, res) => {
  const lead = req.body;
  
  // Salvar no banco de dados
  await db.leads.insert(lead);
  
  // Enviar email para equipe de vendas
  await sendEmail({
    to: 'vendas@azios.com',
    subject: `Novo Lead: ${lead.name}`,
    body: `
      Nome: ${lead.name}
      Email: ${lead.email}
      Telefone: ${lead.phone}
      Empresa: ${lead.company || 'N/A'}
      Origem: ${lead.source}
      Plano: ${lead.plan || 'N/A'}
    `
  });
  
  res.json({ success: true });
});
```

### 2. Webhook (Alternativa Rápida)

Use Zapier/Make para processar leads sem backend:

1. Crie um Webhook no Zapier
2. Configure ações:
   - Enviar email
   - Adicionar no Google Sheets
   - Criar card no Trello/Notion
   - Adicionar no CRM (Pipedrive, HubSpot, etc)

3. Substitua URL em `leadManager.ts`:
```typescript
await fetch('https://hooks.zapier.com/hooks/catch/SEU_WEBHOOK/', {
  method: 'POST',
  body: JSON.stringify(lead),
});
```

### 3. Email Service

#### Opção A: EmailJS (Frontend)
```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

emailjs.send('service_id', 'template_id', {
  to_email: 'vendas@azios.com',
  lead_name: lead.name,
  // ...
});
```

#### Opção B: SendGrid (Backend)
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'vendas@azios.com',
  from: 'noreply@azios.com',
  subject: 'Novo Lead',
  text: `Lead capturado: ${lead.name}...`,
});
```

### 4. CRM Integration

#### RD Station
```typescript
await fetch('https://api.rd.services/platform/conversions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    event_type: 'CONVERSION',
    event_family: 'CDP',
    payload: {
      conversion_identifier: 'lead-capture',
      email: lead.email,
      name: lead.name,
      mobile_phone: lead.phone,
      // ...
    }
  })
});
```

#### HubSpot
```typescript
await fetch(`https://api.hubapi.com/contacts/v1/contact/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
  },
  body: JSON.stringify({
    properties: [
      { property: 'email', value: lead.email },
      { property: 'firstname', value: lead.name.split(' ')[0] },
      { property: 'phone', value: lead.phone },
      // ...
    ]
  })
});
```

### 5. Analytics

#### Google Analytics 4
Adicione no `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Meta Pixel
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 📊 Visualizar Leads Capturados

### Console do Navegador
```javascript
// Ver todos os leads
JSON.parse(localStorage.getItem('captured_leads'))

// Exportar CSV
const csv = exportLeadsToCSV();
console.log(csv);
```

### Criar página admin (opcional)
Crie `src/pages/Admin.tsx`:
```typescript
import { getLocalLeads } from '@/lib/leadManager';

const Admin = () => {
  const leads = getLocalLeads();
  
  return (
    <div className="p-8">
      <h1>Leads Capturados: {leads.length}</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Origem</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, i) => (
            <tr key={i}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

---

## 🎯 Próximos Passos

1. **Configurar webhook/API** (escolha uma opção acima)
2. **Testar captura de leads** em todos os pontos
3. **Configurar Analytics** (GA4 + Meta Pixel)
4. **Integrar com CRM** (se tiver)
5. **Configurar email automático** para equipe de vendas
6. **Criar follow-up automatizado** (email sequence)

---

## 📱 Teste Rápido

1. Rode o projeto: `npm run dev`
2. Clique em "QUERO VENDER MAIS"
3. Preencha o formulário
4. Abra console: `localStorage.getItem('captured_leads')`
5. Veja o lead capturado!

---

## 💡 Dicas de Conversão

- **Responda rápido**: Contate leads em até 5 minutos (conversão 10x maior)
- **Qualifique**: Ligue primeiro, depois envie proposta
- **Automação**: Configure resposta automática por email/WhatsApp
- **Remarketing**: Use pixels para impactar quem não converteu
- **A/B Testing**: Teste diferentes ofertas nos modais

---

## 🔒 LGPD / Privacidade

- ✅ Checkbox de consentimento em todos os forms
- ✅ Link para Política de Privacidade
- ✅ Dados criptografados em trânsito (HTTPS)
- ⚠️ Implemente opt-out / exclusão de dados
- ⚠️ Documente retenção de dados
