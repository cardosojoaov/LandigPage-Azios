import { Card } from "@/components/ui/card";
import { Search, FileCheck, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import growthVisual from "@/assets/growth-visual.png";

const diagnosticSteps = [
  {
    icon: Search,
    emoji: "🔍",
    title: "Mapeamento",
    description: "Identificamos exatamente onde estão os gargalos manuais do seu processo.",
    highlight: "Análise profunda em 30 minutos",
  },
  {
    icon: FileCheck,
    emoji: "🌉",
    title: "A Solução",
    description: "Mostramos qual automação específica resolve aquele problema.",
    highlight: "Solução personalizada na hora",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "O Plano",
    description: "Você sai com um caminho claro para implementar a IA e ver sua empresa rodar sozinha.",
    highlight: "Roadmap completo de implementação",
  },
];

export const CompanySection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background com ondas sutis */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Enhanced */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/10 border border-secondary/20"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">A Ponte Entre Você e a IA</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight sm:leading-relaxed px-2">
            A tecnologia não precisa ser <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-primary bg-clip-text text-transparent">complicada</span>
              <motion.span 
                className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-secondary/20 -z-10"
                initial={shouldReduceMotion ? { width: "100%" } : { width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
              />
            </span>
            <br />
            Ela precisa <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-primary bg-clip-text text-transparent">funcionar.</span>
              <motion.span 
                className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-secondary/20 -z-10"
                initial={shouldReduceMotion ? { width: "100%" } : { width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.4 }}
              />
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-9xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
            Na Azios, nós somos <span className="text-foreground font-semibold">a ponte</span> entre o seu negócio e as melhores IAs do mundo.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground max-w-4xl mx-auto px-2">
            Não vendemos <span className="line-through text-muted-foreground">"softwares"</span><br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">vendemos o seu tempo de volta.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
