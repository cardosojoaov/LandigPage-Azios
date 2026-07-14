import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const faqs = [
  {
    question: "A Azios se integra com o meu ERP atual?",
    answer: "Sim! A Azios foi construída com uma arquitetura API-first. Integrar com sistemas legados ou plataformas como Senior, TOTVS, SAP e plataformas de folha de pagamento é um processo simples que nossa equipe de sucesso do cliente conduz junto com o seu time técnico."
  },
  {
    question: "Como funciona a proteção dos dados dos colaboradores?",
    answer: "A segurança e privacidade são pilares da Azios. Somos 100% aderentes à LGPD. Todos os dados são criptografados ponta-a-ponta e hospedados em servidores de altíssima segurança. Você tem controle granular de acesso sobre quem pode visualizar cada informação."
  },
  {
    question: "Quanto tempo leva a implantação?",
    answer: "Nossa implementação é ágil. Em média, empresas com até 500 funcionários concluem o processo de setup, parametrização e treinamento das lideranças em 15 a 30 dias. Para o módulo de recrutamento via WhatsApp, você pode começar a usar no mesmo dia."
  },
  {
    question: "Os colaboradores precisam baixar um novo aplicativo?",
    answer: "Não! Esse é o nosso maior diferencial de adoção. Todo o contato com o colaborador (admissão, dúvidas, holerite) pode ser feito diretamente pelo WhatsApp ou pelo portal web responsivo, zerando a barreira de adoção tecnológica."
  },
  {
    question: "Como a Inteligência Artificial realmente me ajuda?",
    answer: "Nossa IA atua como um assistente de RH 24/7. Ela tria milhares de currículos em segundos, responde dúvidas frequentes de colaboradores instantaneamente e analisa o sentimento do time em tempo real para prever e evitar rotatividade (turnover)."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-margin-desktop relative">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display-lg text-display-md md:text-display-lg tracking-tight text-white font-extrabold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-body-lg text-slate-400 font-light">
            Tudo o que você precisa saber sobre a implementação e o funcionamento da Azios.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl overflow-hidden border-t border-white/5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-label-lg text-white font-semibold pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 text-primary flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 font-body-md text-slate-400 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
