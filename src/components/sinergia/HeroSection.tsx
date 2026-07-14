import { motion } from "framer-motion";
import { HeroMockup } from "./HeroMockup";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { APP_CONFIG } from "@/config/constants";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-32 px-5 md:px-margin-desktop max-w-container-width mx-auto text-center overflow-hidden">
      {/* Living Background Elements - Hidden on small mobile for performance */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none animate-breathe"></div>
      <div className="hidden sm:block absolute top-20 right-20 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[80px] -z-10 pointer-events-none animate-breathe-alt"></div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="heading-hero mx-auto mb-6 max-w-4xl"
      >
        Seu próximo Recrutador mora no <span className="text-gradient">WhatsApp</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="body-text-lg mx-auto mb-10 max-w-2xl leading-relaxed"
      >
        O ecossistema de recrutamento inteligente que fecha vagas operacionais na <strong className="font-semibold text-white">metade do tempo</strong> e <strong className="font-semibold text-white">zera o Job Ghosting</strong>.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <Button 
          variant="hero" 
          size="lg" 
          className="relative overflow-hidden group w-full sm:w-auto rounded-full"
          aria-label="Agendar Demonstração"
          onClick={() => window.open(APP_CONFIG.WHATSAPP_LINK, '_blank')}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <span className="relative z-10 flex items-center gap-2">
            Agendar Demonstração
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </span>
        </Button>
        <Button 
          variant="outline-hero" 
          size="lg"
          className="w-full sm:w-auto rounded-full font-label-md border-white/10 bg-white/5 hover:bg-white/20 transition-all text-white backdrop-blur-md"
          aria-label="Fale conosco"
          onClick={() => window.location.href = `mailto:${APP_CONFIG.SUPPORT_EMAIL}`}
        >
          Fale conosco
        </Button>
      </motion.div>
      
      <HeroMockup />
    </section>
  );
};

