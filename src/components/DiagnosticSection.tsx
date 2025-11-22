import { Card } from "@/components/ui/card";
import { Search, FileCheck, Rocket, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import growthVisual from "@/assets/growth-visual.png";

const diagnosticSteps = [
  {
    icon: Search,
    title: "Mapeamento",
    description: "Identificamos exatamente onde estão os gargalos manuais do seu processo.",
    highlight: "Análise profunda em 30 minutos",
  },
  {
    icon: FileCheck,
    title: "A Solução",
    description: "Mostramos qual automação específica resolve aquele problema.",
    highlight: "Solução personalizada na hora",
  },
  {
    icon: Rocket,
    title: "O Plano",
    description: "Você sai com um caminho claro para implementar a IA e ver sua empresa rodar sozinha.",
    highlight: "Roadmap completo de implementação",
  },
];

export const DiagnosticSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Mesh gradient moderno */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Diagnostic Steps Title */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Como funciona o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Diagnóstico</span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">3 passos simples para transformar seu negócio</p>
        </motion.div>

        {/* Steps Grid - Enhanced */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {diagnosticSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            >
              <Card className="relative p-5 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-secondary/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative p-3 sm:p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all duration-300">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-secondary">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
