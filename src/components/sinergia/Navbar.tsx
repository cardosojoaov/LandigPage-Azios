import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}
    >
      <div className={`mx-auto flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'max-w-5xl floating-pill rounded-full px-8 py-3' 
          : 'max-w-container-width px-4 md:px-margin-desktop py-6 bg-transparent border-b border-white/5'
      }`}>
        <div className="font-headline-md text-headline-md font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>hive</span>
          Azios
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-slate-300 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="#solucao">Solução</a>
          <a className="text-slate-300 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="#hunting">Hunting</a>
          <a className="text-slate-300 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="#features">Recursos</a>
          <a className="text-slate-300 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="#faq">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-slate-300 hover:text-white font-label-md text-label-md transition-colors">Login</button>
          <a href="#cta" className="bg-primary text-white font-label-md text-label-md px-6 py-2.5 rounded-full glow-shadow scale-95 hover:scale-100 active:scale-95 transition-transform">Agendar Demonstração</a>
        </div>
      </div>
    </motion.nav>
  );
};
