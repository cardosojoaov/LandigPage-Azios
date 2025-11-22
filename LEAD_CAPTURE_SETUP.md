# 🎯 Sistema de Captação de Leads - CONFIGURADO

## ✅ O que foi implementado:

### 1. Modal "Descubra Quanto Você Pode Economizar"
Agora **TODOS os leads** capturados pelo modal são enviados para **comercial@azios.com.br**

### 2. Origens de Leads Configuradas:
- ✅ **Hero Section** (Botão "Saiba Mais")
- ✅ **Inline Lead Capture** (Seção "Quero vender mais")
- ✅ **Pricing Section** (Cards de preços) - inclui plano escolhido
- ✅ **Exit Intent Popup** (Quando o usuário tenta sair)
- ✅ **Contact Form** (Formulário de contato completo)

### 3. Informações Capturadas:
Cada lead enviado para comercial@azios.com.br contém:
- 📝 Nome Completo
- 📧 Email
- 📱 Telefone/WhatsApp
- 🏢 Empresa (opcional)
- 💬 Mensagem (quando aplicável)
- 🎯 **Origem** (hero, pricing, inline, exit-intent, contact-form)
- 💼 **Plano escolhido** (quando aplicável)
- ⏰ Data/Hora exata

---

## 🚀 PARA ATIVAR O ENVIO DE EMAILS:

### Passo 1: Criar conta no Web3Forms (2 minutos)
```
🔗 Acesse: https://web3forms.com
✅ Clique em "Get Started Free"
✅ Faça login com Google ou GitHub
✅ Clique em "Create New Form"
✅ Configure o email de destino: comercial@azios.com.br
✅ Copie sua Access Key (formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
```

### Passo 2: Configurar Access Key
Edite o arquivo `.env` na raiz do projeto e cole sua chave:

```env
VITE_WEB3FORMS_ACCESS_KEY=cole_sua_chave_aqui
VITE_CONTACT_EMAIL=comercial@azios.com.br
VITE_WHATSAPP_NUMBER=5537998192146
```

### Passo 3: Reiniciar servidor
```bash
# Pare o servidor (Ctrl+C) e reinicie:
npm run dev
```

### Passo 4: Testar
1. Abra o site
2. Clique em qualquer CTA (Saiba Mais, Começar Agora, etc)
3. Preencha o formulário
4. Verifique o email em **comercial@azios.com.br**

---

## 📊 Exemplo de Email Recebido:

```
Assunto: 🎯 Novo Lead Azios - João Silva

Nome: João Silva
Email do Lead: joao@empresa.com
Telefone: (37) 99819-2146
Empresa: Empresa Ltda
Mensagem: Quero mais informações sobre o plano Professional
Origem: pricing
Plano de Interesse: Professional
Data/Hora: 22/11/2025, 14:30:45
```

---

## 🔍 Como Verificar se Está Funcionando:

### No Console do Navegador (F12):
- ✅ **Sucesso:** `✅ Email enviado com sucesso para comercial@azios.com.br`
- ⚠️ **Aviso:** `⚠️ Web3Forms access key não configurada`
- ❌ **Erro:** Verifique se a chave está correta no `.env`

### Notificação Visual:
- Toast verde: "Material enviado com sucesso!"
- Modal: "Sucesso! Enviamos o material para seu email"

### Backup Automático:
Mesmo se o email falhar, todos os leads são salvos no `localStorage` do navegador como backup.

---

## 🎁 Plano Gratuito Web3Forms:
- ✅ Até 250 emails/mês GRATUITO
- ✅ Sem necessidade de código backend
- ✅ Entrega garantida
- ✅ Sem propaganda ou branding
- ✅ Suporte a anexos e formatação HTML

---

## 🆘 Problemas Comuns:

### Email não chega?
1. Verifique pasta de SPAM/Lixo Eletrônico
2. Confirme que a Access Key está correta no `.env`
3. Certifique-se que o `.env` tem variáveis começando com `VITE_`
4. Reinicie o servidor após editar `.env`

### Erro "access key não configurada"?
- Crie o arquivo `.env` na raiz se não existir
- Copie o conteúdo do `.env.example`
- Cole sua Access Key do Web3Forms
- Reinicie: `Ctrl+C` e `npm run dev`

---

## 📞 Contato:
- Email: comercial@azios.com.br
- WhatsApp: (37) 99819-2146

**Todos os leads agora são enviados automaticamente para o seu email! 🎉**
