import { motion } from "framer-motion";

export const TrustSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="max-w-container-width mx-auto px-4 md:px-margin-desktop py-12 border-y border-white/10"
    >
      <div className="text-center mb-8">
        <p className="font-label-sm text-slate-400 uppercase tracking-widest font-semibold">
          Confiado pelas empresas que mais inovam no Brasil
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <span className="font-headline-md text-xl font-bold text-white transition-opacity duration-300 hover:opacity-100 opacity-60 cursor-default">Uber</span>
        <span className="font-headline-md text-xl font-bold text-white transition-opacity duration-300 hover:opacity-100 opacity-60 cursor-default">Nubank</span>
        <span className="font-headline-md text-xl font-bold text-white transition-opacity duration-300 hover:opacity-100 opacity-60 cursor-default">iFood</span>
        <span className="font-headline-md text-xl font-bold text-white transition-opacity duration-300 hover:opacity-100 opacity-60 cursor-default">Gympass</span>
        <span className="font-headline-md text-xl font-bold text-white transition-opacity duration-300 hover:opacity-100 opacity-60 cursor-default">Loft</span>
      </div>
    </motion.section>
  );
};
