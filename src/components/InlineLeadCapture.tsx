import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LeadCaptureModal, LeadFormData } from "./LeadCaptureModal";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

export const InlineLeadCapture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLeadSubmit = (data: LeadFormData) => {
    console.log("Inline Lead:", data);
    // Enviar para backend/CRM
  };

  return (
    <>
      <motion.div
        {...ANIMATION_DEFAULTS}
        className="max-w-4xl mx-auto px-4 -mt-8 mb-16"
      >
        <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 blur-3xl" />
          
          <div className="relative p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              OFERTA LIMITADA
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Receba uma <span className="bg-gradient-primary bg-clip-text text-transparent">Análise Gratuita</span>
            </h3>
            <p className="text-lg text-white mb-6">
              Descubra quanto você pode aumentar suas vendas com IA em apenas 90 dias
            </p>

            <Button
              variant="hero"
              size="lg"
              className="w-full md:w-auto md:min-w-[300px] touch-manipulation"
              onClick={() => setIsModalOpen(true)}
            >
              Quero Minha Análise Gratuita
            </Button>

            <p className="text-xs text-white mt-4">
              ✓ 100% gratuito • ✓ Sem compromisso • ✓ Resposta em 24h
            </p>
          </div>
        </Card>
      </motion.div>

      <LeadCaptureModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Receba Sua Análise Gratuita"
        description="Preencha os dados abaixo:"
        incentive="✓ Análise personalizada do seu potencial\n✓ ROI estimado em 90 dias\n✓ Plano de ação customizado"
        buttonText="Solicitar Análise"
        source="inline"
        onSubmit={handleLeadSubmit}
      />
    </>
  );
};
