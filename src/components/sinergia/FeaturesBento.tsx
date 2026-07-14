import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faUsers, faHeartPulse, faUserTie } from "@fortawesome/free-solid-svg-icons";

export const FeaturesBento = () => {
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
    <section id="features" className="max-w-container-width mx-auto px-5 md:px-margin-desktop py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="heading-section mb-4"
        >
          Poderoso. Intuitivo. Completo.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="body-text"
        >
          Tudo o que você precisa para uma gestão moderna em um só lugar.
        </motion.p>
      </div>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap"
      >
        {/* Card 1 */}
        <motion.div variants={item} className="md:col-span-8 glass-card rounded-bento p-8 hover:bg-white/5 transition-all duration-500 flex flex-col justify-between h-auto md:h-[300px] min-h-[250px] group border-t border-white/5 hover:border-primary/20">
          <div>
            <div className="bg-white/5 border border-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-primary text-xl" />
            </div>
            <h3 className="heading-card mb-2">Folha de Pagamento Inteligente</h3>
            <p className="body-text max-w-md">
              Processamento automatizado com zero erros. A IA valida impostos, benefícios e horas extras em segundos.
            </p>
          </div>
          <div className="w-full h-24 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden transition-colors duration-500 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </div>
        </motion.div>
        {/* Card 2 */}
        <motion.div variants={item} className="md:col-span-4 glass-card rounded-bento p-8 hover:bg-white/5 transition-all duration-500 h-auto md:h-[300px] min-h-[250px] group border-t border-white/5 hover:border-primary/20">
          <div className="bg-white/5 border border-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <FontAwesomeIcon icon={faUsers} className="text-primary text-xl" />
          </div>
          <h3 className="heading-card mb-2">Gestão de Talentos</h3>
          <p className="body-text">
            Mapas de carreira personalizados e avaliações de desempenho contínuas.
          </p>
        </motion.div>
        {/* Card 3 */}
        <motion.div variants={item} className="md:col-span-5 glass-card rounded-bento p-8 hover:bg-white/5 transition-all duration-500 h-auto md:h-[300px] min-h-[250px] group border-t border-white/5 hover:border-primary/20">
          <div className="bg-white/5 border border-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <FontAwesomeIcon icon={faHeartPulse} className="text-primary text-xl" />
          </div>
          <h3 className="heading-card mb-2">Bem-estar do Time</h3>
          <p className="body-text">
            Monitore o clima organizacional e receba alertas preditivos sobre burnout ou insatisfação.
          </p>
        </motion.div>
        {/* Card 4 */}
        <motion.div variants={item} className="md:col-span-7 glass-card rounded-bento p-8 hover:bg-white/5 transition-all duration-500 h-auto md:h-[300px] min-h-[250px] relative overflow-hidden group border-t border-white/5 hover:border-primary/20">
          <div className="relative z-10">
            <div className="bg-white/5 border border-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faUserTie} className="text-primary text-xl" />
            </div>
            <h3 className="heading-card mb-2">Recrutamento Ágil</h3>
            <p className="body-text max-w-sm">
              Triagem inteligente de currículos que prioriza diversidade e fit cultural, reduzindo o tempo de contratação em 40%.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
