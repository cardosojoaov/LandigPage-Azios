import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCube } from "@fortawesome/free-solid-svg-icons";
import { APP_CONFIG } from "@/config/constants";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-4 px-5 md:px-4' : 'pt-0 px-0'}`}
      >
        <div className={`mx-auto flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? 'max-w-5xl floating-pill rounded-full px-6 py-3' 
            : 'max-w-container-width px-5 md:px-margin-desktop py-6 bg-transparent border-b border-white/5'
        }`}>
          <div className="font-headline-md text-headline-md font-bold text-white flex items-center gap-2">
            <FontAwesomeIcon icon={faCube} className="text-primary text-xl" aria-hidden="true" />
            {APP_CONFIG.COMPANY_NAME}
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            {APP_CONFIG.LINKS.map((link) => (
              <a 
                key={link.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-label-md text-label-md" 
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-slate-300 hover:text-white font-label-md text-label-md transition-colors" aria-label="Fazer login na plataforma">Login</button>
            <Button 
              className="hidden md:flex rounded-full glow-shadow scale-95 hover:scale-100 active:scale-95 transition-transform"
              onClick={() => window.open(APP_CONFIG.WHATSAPP_LINK, '_blank')}
              aria-label="Agendar Demonstração"
            >
              Agendar Demonstração
            </Button>
            
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#03060b]/95 backdrop-blur-xl pt-24 px-5 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {APP_CONFIG.LINKS.map((link) => (
                <a 
                  key={link.href}
                  className="text-white font-headline-md text-2xl border-b border-white/10 pb-4" 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pb-8 flex flex-col gap-4">
              <button className="text-white font-label-md py-4 border border-white/20 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                Login
              </button>
              <Button 
                size="lg"
                className="rounded-full w-full"
                onClick={() => window.open(APP_CONFIG.WHATSAPP_LINK, '_blank')}
              >
                Agendar Demonstração
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
