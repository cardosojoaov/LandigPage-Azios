import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section id="cta" className="py-32 px-4 md:px-margin-desktop text-center">
        <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto glass-card text-white p-12 md:p-16 rounded-[40px] relative overflow-hidden shadow-2xl border-t border-primary/30 group"
      >
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700"
        ></motion.div>
        
        <h2 className="font-display-lg tracking-tight text-display-lg md:text-[48px] md:leading-[56px] mb-6 relative z-10 font-extrabold">
          Pronto para transformar seu RH?
        </h2>
        
        <p className="font-body-lg text-slate-400 font-light mb-10 relative z-10 max-w-2xl mx-auto text-xl">
          Junte-se a centenas de empresas que já <strong className="font-semibold text-white">modernizaram a gestão de pessoas</strong> com a Azios.
        </p>
        
        <button className="relative overflow-hidden group bg-primary text-white font-label-md text-label-md px-10 py-5 rounded-full hover:-translate-y-1 transition-all duration-300 relative z-10 shadow-xl glow-shadow">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <span className="relative z-10 font-bold tracking-wide">Agendar Demonstração Gratuita</span>
        </button>
      </motion.div>
    </section>
  );
};
