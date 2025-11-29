import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import aziosLogo from "@/assets/azios-logo.png";

const footerLinks = {
  product: [
    { name: "Produtos", href: "#" },
    { name: "Preços", href: "#" },
    { name: "Demo", href: "#" },
    { name: "Contato", href: "#" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background do footer com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-background to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company Column */}
          <div className="text-center sm:text-left w-full col-span-full flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <img src={aziosLogo} alt="Azios" className="h-16 sm:h-20 md:h-24" />
            </div>
            <p className="text-sm sm:text-base text-white italic font-medium">
              "Automatizando o braçal para você focar no essencial."
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-white">
            © 2025 Azios Group. Todos os direitos reservados.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
