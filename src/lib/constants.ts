// Constantes globais da aplicação

// Contatos
export const CONTACT_PHONE = '+5537998192146';
export const CONTACT_PHONE_DISPLAY = '(37) 99819-2146';

// Animações padrão
export const ANIMATION_DEFAULTS = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export const ANIMATION_SUBTLE = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Trust badges
export const TRUST_BADGES = {
  trial: '✓ Teste grátis por 14 dias',
  noCard: '✓ Sem cartão de crédito',
  secure: '🔒 Seus dados estão seguros e protegidos',
  response: '✓ Resposta em até 2 horas úteis',
  noCommitment: '✓ Sem compromisso',
};

// Emails de contato
export const CONTACT_EMAIL = 'comercial@azios.com.br';
export const SUPPORT_EMAIL = 'suporte@azios.com.br';

// URLs sociais (exemplo)
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/azios',
  instagram: 'https://instagram.com/azios',
  youtube: 'https://youtube.com/@azios',
};

// Configurações de formulários
export const FORM_CONFIG = {
  autoComplete: {
    name: 'name',
    email: 'email',
    phone: 'tel',
    company: 'organization',
  },
  inputMode: {
    email: 'email' as const,
    phone: 'tel' as const,
  },
};
