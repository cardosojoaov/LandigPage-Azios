import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSearch, faMapMarkerAlt, faArrowRight, faBrain } from "@fortawesome/free-solid-svg-icons";

export const HuntingSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="hunting" className="max-w-container-width mx-auto px-4 md:px-margin-desktop py-32 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-breathe"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm font-semibold tracking-wide uppercase mb-6">
            Hunting Ativo 24/7
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-[48px] leading-tight text-white font-extrabold mb-6">
            Não espere talentos aplicarem. <span className="bg-gradient-to-r from-primary to-[#10B981] bg-clip-text text-transparent">Nós vamos até eles.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-slate-400 font-light mb-8 max-w-lg">
            Defina o cargo, a localidade e os requisitos técnicos. A inteligência artificial da Azios varre o mercado para encontrar o candidato passivo perfeito e abordá-lo automaticamente via WhatsApp.
          </p>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="text-primary text-sm font-bold" />
              </div>
              <span className="text-slate-300 font-medium">Busca paramétrica avançada</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="text-primary text-sm font-bold" />
              </div>
              <span className="text-slate-300 font-medium">Abordagem ativa e humanizada</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="text-primary text-sm font-bold" />
              </div>
              <span className="text-slate-300 font-medium">Ranking imediato por IA (Fit Cultural & Técnico)</span>
            </li>
          </ul>
        </motion.div>

        {/* Mockup Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main App Window Mockup */}
          <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 bg-slate-900/60 shadow-2xl relative overflow-hidden">
            {/* Fake window header */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>

            {/* Search Bar Mockup */}
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl flex flex-col md:flex-row gap-2 mb-8 relative z-10 shadow-lg">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-lg">
                <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-lg" />
                <span className="text-white text-sm font-medium">Desenvolvedor Front-end</span>
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-lg border-l border-white/5 md:border-l-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-slate-400 text-lg" />
                <span className="text-white text-sm font-medium">São Paulo, SP</span>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
                <span>Buscar</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
            </div>

            {/* Candidates List */}
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3 relative z-10"
            >
              {[
                { name: "C***", role: "Senior Front-end Engineer", location: "São Paulo, SP", match: 98, color: "from-[#2563EB] to-[#4F46E5]" },
                { name: "R***", role: "React Developer", location: "São Paulo, SP", match: 94, color: "from-[#10B981] to-[#059669]" },
                { name: "M***", role: "Software Engineer UI", location: "Remoto (SP)", match: 89, color: "from-[#F59E0B] to-[#D97706]" },
              ].map((candidate, i) => (
                <motion.div 
                  key={i}
                  variants={card}
                  className="bg-slate-800/50 border border-white/5 hover:border-white/10 transition-colors p-4 rounded-xl flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${candidate.color} flex items-center justify-center text-white font-bold text-lg shadow-inner opacity-90 group-hover:opacity-100 transition-opacity`}>
                    {candidate.name[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm flex items-center gap-2">
                      {candidate.name}
                      <span className="text-[#0A66C2] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></span>
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5">{candidate.role} • {candidate.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center justify-center px-2 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md text-[#10B981] text-xs font-bold gap-1">
                      <FontAwesomeIcon icon={faBrain} className="text-[12px]" />
                      Match {candidate.match}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
