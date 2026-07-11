import { motion } from "framer-motion";

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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-container-width mx-auto px-4 md:px-margin-desktop relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-white font-extrabold mb-4">Quem usa, confia</h2>
          <p className="font-body-md text-body-md text-slate-400 font-light">Líderes de RH que estão <strong className="font-semibold text-white">transformando a experiência</strong> do colaborador.</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap"
        >
          {/* Testimonial 1 */}
          <motion.div variants={item} className="glass-card rounded-bento p-8 hover:-translate-y-2 transition-all duration-500 border-t border-white/5 hover:border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 p-1">
                <img alt="Ana Silva" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIdoVJXrT8WmAzkbsH4bOkpCMM7NIqkHAlCwykbpAyZB0uwc0PY5n5GvUDBgPzP-m_0_wll0ZP5i_UjyPXbeknq55IdsRZSnOWw0i4D3KY0g45otv3-LHxm0wMlVCyGuycEASzMsv6POh73NSDus_HrX4MsXwNTkWFgqELEQBm6gD2j_QvJeHHiLpzag1pm8WdKd_BD4ZWQtum75AH_AnlsuEOeiWc8Gq9hiDsj3HwX1Qa8IjXjPLs" />
              </div>
              <div>
                <h4 className="font-label-md text-white font-bold">Ana Silva</h4>
                <p className="text-sm text-slate-400">Diretora de RH, TechFlow</p>
              </div>
            </div>
            <p className="font-body-md text-slate-300 italic font-light">"A Azios reduziu nosso tempo de contratação em 50%. A integração com o WhatsApp mudou completamente o engajamento dos candidatos."</p>
          </motion.div>
          {/* Testimonial 2 */}
          <motion.div variants={item} className="glass-card rounded-bento p-8 hover:-translate-y-2 transition-all duration-500 border-t border-white/5 hover:border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 p-1">
                <img alt="Ricardo Santos" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDIO6kZESeIb9oDx2PxmL8Qi14_mQ1luec2OkmwzHq0Y034lsOsXY7LTJx2Yr-9XxoGLoyPnqe45ZBVGkZVf7kRd4oFFTek4Lsy-wLE4PKMi9cP-SYkOkQFUyfdA0CCfYCeBs3NPGYarqRTh8AN1lgSO4TLTfWzmQnd825cou84XIZ-DYzV7eUAF8cB8EdZ21ZB23P6PkzVrVKhnfgkmKrypd1diagC89C07LrITI_HY593sh-N39-" />
              </div>
              <div>
                <h4 className="font-label-md text-white font-bold">Ricardo Santos</h4>
                <p className="text-sm text-slate-400">Head de People, InovaRetail</p>
              </div>
            </div>
            <p className="font-body-md text-slate-300 italic font-light">"Finalmente uma ferramenta que entende a realidade operacional do Brasil. A IA de atendimento resolve 80% das dúvidas básicas do time."</p>
          </motion.div>
          {/* Testimonial 3 */}
          <motion.div variants={item} className="glass-card rounded-bento p-8 hover:-translate-y-2 transition-all duration-500 border-t border-white/5 hover:border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 p-1">
                <img alt="Mariana Costa" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnpAfilfH72l3KJvdYl709Vh8ZiOV7kDw_X1-nFvBNt444dU2W0UCRUjbUAa7fQTJpsmjpdJmis5cRzD7YySpyo2vLeBDIqZ81np3Wf-oH2S9EZ1VAQXwRtpkuFqIndNRiTvwRH88_zgtGuQiBThuYirPFU4HYgScNgRP70BltBr7QYfVitUvOst45OyXr3T1Q5BrBM-VFrTPkxX7wt1yQj0nPpqoaX9_erNS3fU3f5Ws_n0GDzuVQ" />
              </div>
              <div>
                <h4 className="font-label-md text-white font-bold">Mariana Costa</h4>
                <p className="text-sm text-slate-400">Gerente de DHO, LogiExpress</p>
              </div>
            </div>
            <p className="font-body-md text-slate-300 italic font-light">"O dashboard de bem-estar nos ajudou a identificar gargalos de estresse antes que virassem turnover. Essencial para nossa escala."</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
