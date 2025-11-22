# 📧 Configuração de Email para Captação de Leads

## Problema
Os emails do formulário não estão chegando na caixa de entrada do `comercial@azios.com.br`.

## Solução: Web3Forms

### Passo 1: Criar conta no Web3Forms (GRATUITO)

1. Acesse: https://web3forms.com
2. Clique em "Get Started Free"
3. Faça login com Google/GitHub
4. Crie um novo formulário
5. Configure o email de destino: **comercial@azios.com.br**
6. Copie sua **Access Key** (formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

### Passo 2: Configurar no Projeto

1. Crie um arquivo `.env` na raiz do projeto:
```bash
# Na pasta: c:\Users\conta\Desktop\azios\azios-ai-sales-engine
# Copie o .env.example e renomeie para .env
```

2. Adicione sua chave no arquivo `.env`:
```env
VITE_WEB3FORMS_ACCESS_KEY=sua_chave_aqui_do_web3forms
VITE_CONTACT_EMAIL=comercial@azios.com.br
VITE_WHATSAPP_NUMBER=5537998192146
```

### Passo 3: Testar

1. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Preencha o formulário de contato no site
3. Verifique se o email chegou em `comercial@azios.com.br`

## Alternativas

### Opção 1: EmailJS (Recomendado se Web3Forms não funcionar)
- Site: https://www.emailjs.com
- Plano gratuito: 200 emails/mês
- Precisa configurar template no painel

### Opção 2: Getform.io
- Site: https://getform.io
- Plano gratuito: 50 submissões/mês
- Mais simples, mas com menos customização

### Opção 3: FormSpree
- Site: https://formspree.io
- Plano gratuito: 50 submissões/mês
- Sem necessidade de código backend

## Dados Capturados

Cada lead enviará as seguintes informações:

- 📝 **Nome Completo**
- 📧 **Email do Lead**
- 📱 **Telefone/WhatsApp**
- 🏢 **Empresa** (opcional)
- 💬 **Mensagem**
- 🎯 **Origem** (contact-form, hero, pricing, etc)
- 💼 **Plano de Interesse** (se aplicável)
- ⏰ **Data/Hora** da submissão

## Verificação de Funcionamento

### Console do Navegador:
- ✅ Sucesso: "Email enviado com sucesso para comercial@azios.com.br"
- ⚠️ Aviso: "Web3Forms access key não configurada"
- ❌ Erro: "Erro ao enviar email"

### Fallback:
Mesmo se o email falhar, os leads são salvos localmente no navegador (localStorage) e podem ser recuperados depois.

## Troubleshooting

### Email não chega?
1. Verifique pasta de SPAM/Lixo eletrônico
2. Confirme que a Access Key está correta no `.env`
3. Verifique o console do navegador (F12) para erros
4. Teste com outro email primeiro para validar

### Erro "access key não configurada"?
1. Certifique-se que o arquivo `.env` existe na raiz
2. Variável deve começar com `VITE_`
3. Reinicie o servidor: `Ctrl+C` e `npm run dev`

### Precisa de ajuda?
- Documentação Web3Forms: https://docs.web3forms.com
- Suporte Azios: comercial@azios.com.br ou (37) 99819-2146
