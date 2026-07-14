import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCube } from "@fortawesome/free-solid-svg-icons";

export const AIActionSection = () => {
  return (
    <section id="ai" className="max-w-container-width mx-auto px-5 md:px-margin-desktop py-32 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-breathe"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-white mb-6">Sua IA de RH em Ação</h2>
          <p className="body-text-lg mb-8">
            Libere sua equipe de tarefas repetitivas. A Azios AI resolve dúvidas, agenda processos e guia os colaboradores <strong className="font-semibold text-white">24 horas por dia</strong>, de forma natural e amigável.
          </p>
          <ul className="space-y-6 mb-8">
            <li className="flex items-center gap-4 text-white font-body-md group">
              <span className="text-[#10B981] bg-[#10B981]/10 rounded-full p-2 w-10 h-10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Resolução instantânea de dúvidas de políticas
            </li>
            <li className="flex items-center gap-4 text-white font-body-md group">
              <span className="text-[#10B981] bg-[#10B981]/10 rounded-full p-2 w-10 h-10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Onboarding automatizado e guiado
            </li>
            <li className="flex items-center gap-4 text-white font-body-md group">
              <span className="text-[#10B981] bg-[#10B981]/10 rounded-full p-2 w-10 h-10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Solicitações de férias e ausências sem formulários
            </li>
          </ul>
        </motion.div>
        
        {/* Chat Simulation */}
        <div className="relative h-[450px] w-full max-w-md mx-auto">
          {/* Employee Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute right-4 top-10 w-[80%] glass-bubble rounded-[24px] rounded-tr-sm p-6 border border-white/20 shadow-xl z-10"
          >
            <p className="font-body-md text-slate-800">Como faço para solicitar férias para o próximo mês?</p>
            <span className="text-[10px] text-slate-500 mt-2 block text-right font-medium uppercase tracking-wider">Agora mesmo</span>
          </motion.div>
          
          {/* Azios AI Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute left-4 top-40 w-[85%] bg-gradient-to-br from-primary to-blue-600 rounded-[24px] rounded-tl-sm p-6 border border-white/20 shadow-[0px_20px_40px_rgba(79,70,229,0.3)] z-20"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <FontAwesomeIcon icon={faCube} className="text-white text-sm" />
              </div>
              <span className="font-label-md text-white font-bold tracking-wide">Azios AI</span>
            </div>
            <p className="font-body-md text-white/90 leading-relaxed">Claro! Posso te ajudar com isso agora mesmo. Vi que você tem <span className="font-bold text-white">15 dias disponíveis</span>. Gostaria de solicitar o período completo ou fracionado?</p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <button className="bg-white/10 border border-white/30 text-white font-label-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">Período Completo</button>
              <button className="bg-white/10 border border-white/30 text-white font-label-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">Fracionado</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
