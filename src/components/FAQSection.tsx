import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "Preciso entender de programação ou tecnologia para usar a IA da Azios?",
    answer: "Absolutamente não. Nossa missão é tornar a tecnologia acessível. O Agente de IA da Azios já vem treinado e pronto para usar. Se você sabe usar o WhatsApp, você sabe usar a nossa solução. Nós cuidamos de toda a parte técnica para que você foque apenas em ver as vendas acontecendo.",
  },
  {
    question: "E se a IA responder algo errado para o meu cliente?",
    answer: "O Agente Azios não \"inventa\" respostas. Ele responde exclusivamente conforme a Base de Conhecimento da sua empresa (seus preços, prazos e regras) que nós configuramos juntos. Além disso, você tem controle total: pode assumir a conversa manualmente a qualquer momento com um clique.",
  },
  {
    question: "O atendimento vai ficar robotizado?",
    answer: "Definitivamente não. Esqueça os robôs antigos. Usamos Inteligência Artificial Generativa (similar ao ChatGPT). Isso significa que o Agente Azios entende o contexto, interpreta áudios, entende erros de português e conversa de forma natural e fluida, como se fosse o seu melhor funcionário de vendas de forma humanizada.",
  },
  {
    question: "É mais caro do que contratar um funcionário?",
    answer: "Não. É incomparável. Pense assim: um funcionário tem salário, impostos, transporte e encargos todo mês. A Azios custa apenas uma assinatura fixa, muito mais barata. É como ter o melhor vendedor da sua equipe trabalhando 24 horas por dia, mas custando menos que um estagiário.",
  },
  {
    question: "Quanto tempo demora para começar a funcionar?",
    answer: "A implementação é rápida. Diferente de softwares complexos que levam meses, nossa estrutura permite que, após a configuração da sua Base de Conhecimento, seu Agente de IA esteja operando e vendendo em poucos dias.",
  },
  {
    question: "O Agente de IA sabe fazer agendamentos ou enviar links de pagamento?",
    answer: "Sim! Ele pode ser configurado para qualificar o cliente, consultar sua agenda, marcar horários e até enviar links de checkout ou chaves PIX. Ele guia o cliente por toda a jornada de compra até o fechamento.",
  },
];

export const FAQSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background com padrão diagonal sutil */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background via-primary/3 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(var(--border)/0.1)_49%,hsl(var(--border)/0.1)_51%,transparent_52%)] bg-[size:3rem_3rem]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Tire suas dúvidas antes de começar sua transformação
          </p>
        </motion.div>
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 sm:px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <span className="text-base sm:text-lg font-semibold text-foreground pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-12 sm:mt-16 text-center px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.15 }}
        >
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ainda tem dúvidas?
          </p>
          <a 
            href="https://wa.me/5537998192146?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20Azios" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-primary hover:opacity-90 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl shadow-glow transition-all transform hover:scale-105 touch-manipulation"
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fale com nosso time de especialistas
          </a>
        </motion.div>
      </div>
    </section>
  );
};
