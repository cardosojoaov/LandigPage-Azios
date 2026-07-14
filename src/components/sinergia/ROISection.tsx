import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faPiggyBank, faStopwatch } from "@fortawesome/free-solid-svg-icons";

const AnimatedValue = ({ value, prefix = "", suffix = "", duration = 2 }: { value: number, prefix?: string, suffix?: string, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, value, duration]);

  return (
    <span ref={ref} className="font-display-lg font-extrabold text-5xl md:text-6xl text-white tracking-tight">
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

export const ROISection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="py-24 px-5 md:px-margin-desktop relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-container-width mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm font-semibold tracking-wide uppercase mb-4">
            Impacto Financeiro
          </div>
          <h2 className="heading-section mb-4">
            O RH deixa de ser custo, vira <span className="text-gradient">Lucro</span>.
          </h2>
          <p className="body-text mx-auto">
            Números reais baseados nas centenas de empresas que já transformaram seu recrutamento operacional.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* ROI Card 1 */}
          <motion.div variants={item} className="glass-card rounded-2xl p-8 border-t border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faStopwatch} className="text-primary text-xl" />
            </div>
            <div className="mb-2">
              <AnimatedValue value={70} prefix="-" suffix="%" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">no Tempo de Fechamento</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Vagas operacionais que levavam 20 dias para fechar agora são preenchidas em menos de uma semana.
            </p>
          </motion.div>

          {/* ROI Card 2 */}
          <motion.div variants={item} className="glass-card rounded-2xl p-8 border-t border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group bg-gradient-to-b from-white/5 to-emerald-500/5">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faPiggyBank} className="text-emerald-400 text-xl" />
            </div>
            <div className="mb-2">
              <AnimatedValue value={43} prefix="-" suffix="%" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">no Custo por Contratação</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Economia direta em anúncios pagos, banco de currículos obsoletos e horas improdutivas da equipe.
            </p>
          </motion.div>

          {/* ROI Card 3 */}
          <motion.div variants={item} className="glass-card rounded-2xl p-8 border-t border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faChartLine} className="text-primary text-xl" />
            </div>
            <div className="mb-2">
              <AnimatedValue value={3} prefix="" suffix="x" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">maior Retenção (Fit Cultural)</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Candidatos triados pela IA têm alinhamento profundo com a cultura, despencando o turnover nos primeiros 90 dias.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
