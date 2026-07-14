import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft, faAmazon, faUber } from "@fortawesome/free-brands-svg-icons";

export const TestimonialsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-container-width mx-auto px-5 md:px-margin-desktop relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">Quem usa, confia</h2>
          <p className="body-text-lg">Líderes de RH que estão <strong className="font-semibold text-white">transformando a experiência</strong> do colaborador.</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap"
        >
          {/* Testimonial 1 */}
          <motion.div variants={item} className="glass-card rounded-bento p-8 hover:-translate-y-2 transition-all duration-500 border-t border-white/5 hover:border-primary/20 relative">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-6 right-8 text-4xl text-white/5" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 p-1 bg-white/5">
                <img alt="Ana Silva - Diretora de RH" className="w-full h-full object-cover rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" loading="lazy" />
              </div>
              <div>
                <h4 className="font-label-md text-white font-bold">Ana Silva</h4>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                  Diretora de RH 
                  <FontAwesomeIcon icon={faMicrosoft} className="text-slate-500" />
                </p>
              </div>
            </div>
            <p className="font-body-md text-slate-300 italic font-light relative z-10">"A Azios reduziu nosso tempo de contratação em 50%. A integração com o WhatsApp mudou completamente o engajamento dos candidatos."</p>
          </motion.div>
          {/* Testimonial 2 */}
          <motion.div variants={item} className="glass-card rounded-bento p-8 hover:-translate-y-2 transition-all duration-500 border-t border-white/5 hover:border-primary/20 relative">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-6 right-8 text-4xl text-white/5" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 p-1 bg-white/5">
                <img alt="Ricardo Santos - Head de People" className="w-full h-full object-cover rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" loading="lazy" />
              </div>
              <div>
                <h4 className="font-label-md text-white font-bold">Ricardo Santos</h4>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                  Head de People 
                  <FontAwesomeIcon icon={faAmazon} className="text-slate-500" />
                </p>
              </div>
            </div>
            <p className="font-body-md text-slate-300 italic font-light relative z-10">"Finalmente uma ferramenta que entende a realidade operacional do Brasil. A IA de atendimento resolve 80% das dúvidas básicas do time."</p>
          </motion.div>
          {/* Testimonial 3 */}
          <motion.div variants={item} className="glass-card rounded-bento p-8 hover:-translate-y-2 transition-all duration-500 border-t border-white/5 hover:border-primary/20 relative">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-6 right-8 text-4xl text-white/5" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 p-1 bg-white/5">
                <img alt="Mariana Costa - Gerente de DHO" className="w-full h-full object-cover rounded-full" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" loading="lazy" />
              </div>
              <div>
                <h4 className="font-label-md text-white font-bold">Mariana Costa</h4>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                  Gerente de DHO 
                  <FontAwesomeIcon icon={faUber} className="text-slate-500" />
                </p>
              </div>
            </div>
            <p className="font-body-md text-slate-300 italic font-light relative z-10">"O dashboard de bem-estar nos ajudou a identificar gargalos de estresse antes que virassem turnover. Essencial para nossa escala."</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
