import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { LeadCaptureModal, LeadFormData } from "./LeadCaptureModal";

const plans = [
  {
    name: "Essencial",
    price: "R$ 199",
    period: "/mês",
    description: "Ideal para equipes pequenas e startups",
    features: [
      "Captação Inteligente (Básico)",
      "Até 500 leads/mês",
      "Suporte Padrão",
      "Dashboard de Analytics",
      "Integração via API",
    ],
    cta: "Começar Grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 499",
    period: "/mês",
    description: "Otimizado para PMEs em crescimento",
    features: [
      "Tudo do Essencial +",
      "Nutrição Automatizada Completa",
      "Fechamento Otimizado (Limitado)",
      "Até 2.000 leads/mês",
      "Analytics Avançado",
      "Suporte Prioritário 24/7",
      "Integrações Premium",
    ],
    cta: "Começar Grátis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Para grandes corporações e customização total",
    features: [
      "Todos os recursos ilimitados",
      "IA On-Premise",
      "Gerente de Conta Dedicado",
      "SLAs Customizados",
      "Treinamento Personalizado",
      "Integrações Customizadas",
    ],
    cta: "Falar com Especialista",
    highlighted: false,
  },
];

export const PricingSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleLeadSubmit = (data: LeadFormData) => {
    console.log("Pricing Lead:", { ...data, plan: selectedPlan });
    // Enviar para backend/CRM com informação do plano selecionado
  };

  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      {/* Background elegante para pricing */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Escolha o Plano Perfeito para o Seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Crescimento</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : index * 0.06 }}
            >
              <Card 
                className={`relative p-8 bg-card border-2 transition-all duration-300 h-full flex flex-col ${
                  plan.highlighted 
                    ? "border-primary shadow-glow scale-105" 
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-accent text-white text-sm font-bold px-6 py-2 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.highlighted ? "hero" : "outline-hero"} 
                  size="lg"
                  className="w-full touch-manipulation"
                  onClick={() => handlePlanClick(plan.name)}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="outline-hero" 
            size="lg"
            onClick={() => handlePlanClick("Enterprise")}
          >
            Fale com nossos especialistas sobre o plano Enterprise
          </Button>
        </motion.div>

        {/* Lead Capture Modal */}
        <LeadCaptureModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          title={`Comece com o Plano ${selectedPlan}`}
          description="Preencha seus dados para iniciar:"
          incentive="✓ Teste grátis por 14 dias\n✓ Setup em menos de 10 minutos\n✓ Suporte dedicado para implantação"
          buttonText="Solicitar Acesso"
          source="pricing"
          plan={selectedPlan}
          onSubmit={handleLeadSubmit}
        />
      </div>
    </section>
  );
};
