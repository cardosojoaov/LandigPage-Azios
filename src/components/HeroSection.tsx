import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import heroVisual from "@/assets/hero.png";
import { useState } from "react";
import { LeadCaptureModal, LeadFormData } from "./LeadCaptureModal";

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLeadSubmit = (data: LeadFormData) => {
    console.log("Hero Lead:", data);
    // Enviar para backend/CRM
  };
  
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Logo no topo */}
      <div className="relative z-20 w-full flex justify-center pt-6 sm:pt-8">
        <img 
          src="/azios-logo.png" 
          alt="Azios Logo" 
          className="h-28 sm:h-36 md:h-44 lg:h-52 xl:h-60 w-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Background com imagem e overlay moderno */}
      <div className="absolute inset-0">
        <img src={heroVisual} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-primary/20" />
      </div>
      
      {/* Efeitos de brilho radial */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" 
        animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" 
        animate={shouldReduceMotion ? {} : { opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Padrão de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center py-16 sm:py-20"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
      >
        {/* Manchete (H1) - Foco na dor */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <span className="text-foreground">
            Descubra onde o trabalho manual está{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              drenando o lucro
            </span>
            {" "}da sua empresa.
          </span>
        </motion.h1>
        
        {/* Subtítulo (H2) - A solução */}
        <motion.h2 
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-2 sm:px-4 font-light"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
        >
          Solicite uma <span className="text-foreground font-semibold">Sessão Estratégica de IA gratuita</span> com a Azios e receba um plano prático para substituir rotinas manuais por Inteligência Artificial.
        </motion.h2>
        
        {/* CTA Principal */}
        <motion.div 
          className="flex justify-center px-2 sm:px-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.5 }}
        >
          <Button 
            variant="hero" 
            size="xl" 
            className="group w-full sm:w-auto px-6 sm:px-8 md:px-12 touch-manipulation min-h-[56px] sm:min-h-[64px] text-base sm:text-lg md:text-xl font-bold"
            onClick={() => setIsModalOpen(true)}
          >
            QUERO PARAR DE PERDER DINHEIRO
            <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        source="hero"
        onSubmit={handleLeadSubmit}
      />
    </section>
  );
};