import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faCheckDouble, faMicrophone, faComments, faBolt, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export const WhatsAppTriagemSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
  };

  const bubbleLeft = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 14 } }
  };

  const bubbleRight = {
    hidden: { opacity: 0, x: 20, scale: 0.9 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 14 } }
  };

  return (
    <section id="whatsapp-triagem" className="max-w-container-width mx-auto px-4 md:px-margin-desktop py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Mockup Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Half Phone Mockup */}
          <div className="w-full max-w-[320px] md:max-w-[350px] h-[500px] bg-slate-950 rounded-t-[40px] border-t-[8px] border-x-[8px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col translate-y-12 lg:translate-y-0">
            {/* Phone Notch/Speaker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-[16px] z-20"></div>

            {/* WhatsApp Header */}
            <div className="bg-slate-800/90 backdrop-blur-md pt-10 pb-3 px-4 flex items-center gap-3 z-10 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative shrink-0">
                <FontAwesomeIcon icon={faRobot} className="text-primary text-xl" />
                <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 border-2 border-slate-800"></div>
              </div>
              <div>
                <h4 className="text-white font-medium text-sm leading-tight">Assistente Azios</h4>
                <p className="text-slate-400 text-xs">online</p>
              </div>
            </div>

            {/* Chat Area (Background pattern simulating WA) */}
            <div className="flex-1 p-4 flex flex-col gap-4 relative z-10 bg-[#0B141A]">
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-4 mt-2"
              >
                {/* Message 1: User */}
                <motion.div variants={bubbleRight} className="self-end max-w-[85%]">
                  <div className="bg-[#005C4B] text-[#E9EDEF] p-3 rounded-2xl rounded-tr-sm text-[13px] shadow-sm leading-relaxed">
                    Olá! Vi a vaga para Front-end no Site e gostaria de me candidatar.
                    <div className="text-[10px] text-[#8696A0] text-right mt-1 flex justify-end items-center gap-1">
                      10:42 <FontAwesomeIcon icon={faCheckDouble} className="text-[14px] text-[#53BDEB]" />
                    </div>
                  </div>
                </motion.div>

                {/* Message 2: Bot */}
                <motion.div variants={bubbleLeft} className="self-start max-w-[85%]">
                  <div className="bg-[#202C33] text-[#E9EDEF] p-3 rounded-2xl rounded-tl-sm text-[13px] shadow-sm leading-relaxed">
                    Olá! Que ótimo. Sou o assistente da Azios e vou te ajudar. Para iniciarmos sua triagem técnica, você tem quantos anos de experiência com React/TypeScript?
                    <div className="text-[10px] text-slate-500 text-right mt-1">10:43</div>
                  </div>
                </motion.div>
                
                {/* Typing Indicator */}
                <motion.div variants={bubbleRight} className="self-end max-w-[85%] mt-2">
                  <div className="bg-[#005C4B] p-3 rounded-2xl rounded-tr-sm shadow-sm flex items-center gap-1 h-[38px]">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Input Mockup */}
            <div className="bg-[#202C33] p-2 flex items-center gap-2 z-10 absolute bottom-0 left-0 right-0">
              <div className="flex-1 bg-[#2A3942] rounded-full h-10 px-4 flex items-center">
                <span className="text-[#8696A0] text-sm">Mensagem</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faMicrophone} className="text-[#111B21] text-xl" />
              </div>
            </div>

            {/* Gradient Fade out at bottom to make it "cut off" seamlessly if needed, though border handles it mostly */}
            <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-[#03060b] to-transparent z-30"></div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00A884]/10 rounded-full blur-[80px] -z-10"></div>
        </motion.div>

        {/* Copy Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#00A884]/10 border border-[#00A884]/20 text-[#00A884] font-label-sm font-semibold tracking-wide uppercase mb-6">
            Candidate Experience
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-[48px] leading-tight text-white font-extrabold mb-6">
            A triagem acontece onde o candidato <span className="text-[#00A884]">já está.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-slate-400 font-light mb-8 max-w-lg">
            Esqueça formulários longos, senhas esquecidas e portais engessados. Nossa IA interage, qualifica e engaja o talento através de uma conversa fluida, rápida e humana pelo WhatsApp.
          </p>
          
          <ul className="space-y-5 mb-10">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00A884]/10 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faComments} className="text-[#00A884]" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">100% via WhatsApp</h5>
                <p className="text-slate-400 text-sm">O candidato não precisa baixar novos apps ou acessar links complicados.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00A884]/10 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faBolt} className="text-[#00A884]" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Respostas imediatas</h5>
                <p className="text-slate-400 text-sm">O robô está disponível 24/7, agilizando o funil de contratação sem gargalos.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00A884]/10 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-[#00A884]" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Zero atrito</h5>
                <p className="text-slate-400 text-sm">Um processo simples gera altíssima taxa de engajamento e conclusão da triagem.</p>
              </div>
            </li>
          </ul>
        </motion.div>
        
      </div>
    </section>
  );
};
