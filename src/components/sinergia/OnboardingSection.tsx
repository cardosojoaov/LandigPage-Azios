import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faPlug, faGraduationCap, faRocket } from "@fortawesome/free-solid-svg-icons";

const STEPS = [
  {
    icon: faCogs,
    title: "Setup da Conta",
    description: "Configuramos suas filiais, permissões de usuário e parâmetros de triagem da IA.",
    day: "Dias 1-3"
  },
  {
    icon: faPlug,
    title: "Integração (ERP)",
    description: "Nossa equipe conecta a Azios à sua folha de pagamento via API sem dor de cabeça.",
    day: "Dias 4-10"
  },
  {
    icon: faGraduationCap,
    title: "Treinamento",
    description: "Capacitamos seus recrutadores e líderes de setor com as melhores práticas da plataforma.",
    day: "Dias 11-14"
  },
  {
    icon: faRocket,
    title: "Go-Live",
    description: "Lançamento oficial. A inteligência artificial já começa a triar e fechar as primeiras vagas.",
    day: "Dia 15"
  }
];

export const OnboardingSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
  };

  return (
    <section className="py-32 px-5 md:px-margin-desktop relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-container-width mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-label-sm font-semibold tracking-wide uppercase mb-4">
            Sem fricção
          </div>
          <h2 className="heading-section mb-4">
            Sua operação rodando em <span className="text-emerald-400">15 dias.</span>
          </h2>
          <p className="body-text mx-auto max-w-2xl">
            Sabemos que o RH não tem tempo a perder. Nosso processo de implantação é ágil, guiado por especialistas e feito para não atrapalhar a sua rotina.
          </p>
        </motion.div>

        {/* Timeline Desktop */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="w-full h-full bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-primary"
             />
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10"
          >
            {STEPS.map((step, index) => (
              <motion.div variants={item} key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#0B141A] border-2 border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-emerald-400 group-hover:scale-110 transition-all duration-300 relative z-10">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <FontAwesomeIcon icon={step.icon} className="text-2xl text-slate-300 group-hover:text-emerald-400 transition-colors relative z-10" />
                </div>
                
                <div className="bg-emerald-500/10 text-emerald-400 font-bold text-sm px-3 py-1 rounded-full mb-4">
                  {step.day}
                </div>
                
                <h3 className="font-display-lg text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 font-light text-sm max-w-[250px]">{step.description}</p>
                
                {/* Mobile Connector */}
                {index !== STEPS.length - 1 && (
                  <div className="md:hidden w-1 h-12 bg-gradient-to-b from-white/10 to-emerald-500/30 mt-6 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
