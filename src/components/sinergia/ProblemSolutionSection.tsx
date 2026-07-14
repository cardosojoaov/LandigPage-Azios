import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const AnimatedNumber = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const ProblemSolutionSection = () => {
  return (
    <section id="solucao" className="max-w-container-width mx-auto px-5 md:px-margin-desktop py-32 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="font-display-lg tracking-tight text-headline-lg md:text-display-lg text-white font-extrabold mb-6">
          O custo oculto do recrutamento lento
        </h2>
        <p className="font-body-lg text-body-lg text-slate-400 font-light max-w-3xl mx-auto">
          Processos manuais e burocráticos matam a experiência do candidato e custam <strong className="font-semibold text-white">muito caro</strong> para a sua operação.
        </p>
      </motion.div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Problem Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 rounded-[32px] border border-white/5 bg-slate-900/40 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
          
          <h3 className="font-display-lg text-3xl mb-12 text-slate-400 font-medium">O modelo atual</h3>
          
          <div className="space-y-12 relative z-10">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-display-lg font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={60} />%
                </span>
                <span className="text-xl text-slate-300 font-semibold tracking-wide">Desistência</span>
              </div>
              <p className="text-slate-500 font-light text-body-md mt-2">Candidatos abandonam processos longos e complexos por falta de clareza.</p>
            </div>
            
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-display-lg font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={76} />%
                </span>
                <span className="text-xl text-slate-300 font-semibold tracking-wide">Ghosting</span>
              </div>
              <p className="text-slate-500 font-light text-body-md mt-2">Falta total de retorno ou demora excessiva após o envio do currículo.</p>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-display-lg font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={51} />%
                </span>
                <span className="text-xl text-slate-300 font-semibold tracking-wide">Dano à Marca</span>
              </div>
              <p className="text-slate-500 font-light text-body-md mt-2">Param de consumir a marca após uma experiência negativa no recrutamento.</p>
            </div>
          </div>
        </motion.div>

        {/* Solution Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 rounded-[32px] border border-primary/30 bg-primary/5 relative overflow-hidden group shadow-[0_0_40px_rgba(0,158,191,0.1)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          
          <h3 className="font-display-lg text-3xl mb-12 text-primary font-bold">O efeito Azios</h3>
          
          <div className="space-y-12 relative z-10">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-display-lg font-extrabold text-white tracking-tight">
                  -<AnimatedNumber value={50} />%
                </span>
                <span className="text-xl text-primary font-bold tracking-wide">Tempo de Contratação</span>
              </div>
              <p className="text-slate-300 font-light text-body-md mt-2">Sua equipe foca no estratégico enquanto a inteligência artificial avalia e entrevista.</p>
            </div>
            
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl md:text-[52px] font-display-lg font-extrabold text-white tracking-tight leading-none">
                  Zero
                </span>
                <span className="text-xl text-primary font-bold tracking-wide ml-2">Ghosting</span>
              </div>
              <p className="text-slate-300 font-light text-body-md mt-2">Resposta e engajamento instantâneo via WhatsApp para 100% dos candidatos.</p>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-display-lg font-extrabold text-white tracking-tight">
                  24/7
                </span>
                <span className="text-xl text-primary font-bold tracking-wide">Sempre Ativa</span>
              </div>
              <p className="text-slate-300 font-light text-body-md mt-2">Triagem contínua de dia e de noite, sem interrupções ou gargalos humanos.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Premium Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 mx-auto bg-[#03060b] border border-white/10 px-6 md:px-8 py-4 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left w-fit max-w-full"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center">
          <FontAwesomeIcon icon={faAward} className="text-primary text-sm" />
        </div>
        <p className="font-label-md text-slate-300 text-sm md:text-base font-medium">
          Aprovado pelos maiores líderes de RH do país.
        </p>
      </motion.div>
    </section>
  );
};
