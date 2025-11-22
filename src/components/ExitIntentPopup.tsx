import { useState, useEffect } from "react";
import { LeadCaptureModal, LeadFormData } from "./LeadCaptureModal";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Não mostrar se já foi exibido nesta sessão
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai pela parte superior da página
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Adiciona listener após 5 segundos (usuário já viu conteúdo)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (data: LeadFormData) => {
    console.log("Exit Intent Lead:", data);
    // Enviar para backend/CRM
  };

  return (
    <LeadCaptureModal
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Espere! Não Perca Esta Oportunidade"
      description="Última chance de garantir GRÁTIS:"
      incentive="✓ Raio-X do Processo: Identificar gargalos e tarefas manuais.\n✓ Plano de IA Personalizado: Automação exata para seu gargalo de vendas.\n✓ Caminho da Liberdade: Empresa no piloto automático."
      buttonText=" Quero Receber Minha Análise!"
      source="exit-intent"
      onSubmit={handleSubmit}
    />
  );
};
