import { motion } from "framer-motion";
import { HeroMockup } from "./HeroMockup";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-32 px-4 md:px-margin-desktop max-w-container-width mx-auto text-center overflow-hidden">
      {/* Living Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none animate-breathe"></div>
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[80px] -z-10 pointer-events-none animate-breathe-alt"></div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display-lg font-extrabold tracking-tight text-4xl md:text-[64px] leading-tight md:leading-[72px] text-white max-w-4xl mx-auto mb-6"
      >
        Seu próximo Recrutador mora no <span className="bg-gradient-to-r from-primary to-[#10B981] bg-clip-text text-transparent">WhatsApp</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="font-body-lg text-body-lg text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        O ecossistema de recrutamento inteligente que fecha vagas operacionais na <strong className="font-semibold text-white">metade do tempo</strong> e <strong className="font-semibold text-white">zera o Job Ghosting</strong>.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <button className="relative overflow-hidden group bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-full glow-shadow hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <span className="relative z-10 flex items-center gap-2">
            Agendar Demonstração
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </button>
        <button className="bg-white/5 border border-white/10 text-white font-label-md text-label-md px-8 py-4 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto justify-center backdrop-blur-md">
          Fale conosco
        </button>
      </motion.div>
      
      <HeroMockup />
    </section>
  );
};
