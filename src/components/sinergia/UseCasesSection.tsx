import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTruckFast, faIndustry, faCheck } from "@fortawesome/free-solid-svg-icons";

const USE_CASES = [
  {
    id: "varejo",
    title: "Varejo & Supermercados",
    icon: faStore,
    headline: "Vença a alta rotatividade na frente de loja.",
    description: "No varejo, cada dia com uma vaga aberta significa perda de vendas e sobrecarga da equipe. A Azios contrata caixas, estoquistas e atendentes antes que o problema afete a operação.",
    benefits: [
      "Triagem massiva de candidatos da região (geolocalização).",
      "Qualificação automática para horários flexíveis e fins de semana.",
      "Redução drástica do turnover precoce com Fit Cultural via IA."
    ]
  },
  {
    id: "logistica",
    title: "Logística & Transporte",
    icon: faTruckFast,
    headline: "Preencha galpões e frotas na velocidade do e-commerce.",
    description: "A logística não pode parar. Contratar motoristas, conferentes e auxiliares de carga exige velocidade, mas também checagem rigorosa de requisitos de segurança.",
    benefits: [
      "Coleta rápida de CNHs e documentação diretamente pelo WhatsApp.",
      "Avaliação de experiência e histórico de forma automatizada.",
      "Comunicação em massa para vagas temporárias de Black Friday e Natal."
    ]
  },
  {
    id: "industria",
    title: "Indústria & Manufatura",
    icon: faIndustry,
    headline: "Encontre operadores qualificados sem atrasar a linha de produção.",
    description: "Contratar para o chão de fábrica exige atenção a normas técnicas, turnos e segurança do trabalho. A IA da Azios mapeia a aderência do candidato a ambientes de alta exigência.",
    benefits: [
      "Testes técnicos básicos e de normas de segurança pré-entrevista.",
      "Alinhamento de disponibilidade para turnos complexos (12x36, noturno).",
      "Contratações mais duradouras que reduzem custos de retreinamento."
    ]
  }
];

export const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(USE_CASES[0].id);

  const activeContent = USE_CASES.find(u => u.id === activeTab) || USE_CASES[0];

  return (
    <section className="py-24 px-5 md:px-margin-desktop relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm font-semibold tracking-wide uppercase mb-4">
            Feito para Operações
          </div>
          <h2 className="heading-section mb-4">
            Como a Azios resolve o seu cenário
          </h2>
          <p className="body-text mx-auto max-w-2xl">
            Entendemos que o recrutamento operacional varia de acordo com a sua indústria. Nossa IA adapta o fluxo de conversação para extrair o que realmente importa.
          </p>
        </motion.div>

        {/* Custom Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Tab Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3 relative z-10">
            {USE_CASES.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`relative px-6 py-5 rounded-2xl text-left transition-all duration-300 border flex items-center gap-4 group ${
                  activeTab === useCase.id 
                    ? "bg-primary/10 border-primary/30" 
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                {activeTab === useCase.id && (
                  <motion.div 
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeTab === useCase.id ? "bg-primary text-white" : "bg-white/10 text-slate-400 group-hover:text-white"
                }`}>
                  <FontAwesomeIcon icon={useCase.icon} />
                </div>
                <span className={`font-headline-md text-lg font-bold ${
                  activeTab === useCase.id ? "text-white" : "text-slate-400 group-hover:text-white"
                }`}>
                  {useCase.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3 glass-card border border-white/10 rounded-[32px] p-8 md:p-12 min-h-[400px] relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10"
              >
                <h3 className="font-display-lg text-3xl md:text-4xl text-white font-bold mb-4 leading-tight">
                  {activeContent.headline}
                </h3>
                <p className="text-slate-300 font-body-lg text-lg mb-8 leading-relaxed">
                  {activeContent.description}
                </p>
                
                <div className="space-y-4">
                  {activeContent.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="text-primary text-xs" />
                      </div>
                      <p className="text-slate-300 font-medium">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
