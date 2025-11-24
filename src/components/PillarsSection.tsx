import { motion, useReducedMotion } from "framer-motion";
import { X, AlertCircle } from "lucide-react";

const painPoints = [
  {
    title: "Cemitério de Leads",
    description: "Clientes ficam horas sem resposta no WhatsApp e acabam comprando no concorrente.",
  },
  {
    title: "Caos da Planilha",
    description: "Sua equipe perde mais tempo organizando dados do que vendendo de fato.",
  },
  {
    title: "Dono Operacional",
    description: "Você passa o dia resolvendo problemas pequenos e não tem tempo para pensar na estratégia.",
  },
  {
    title: "Atendimento Lento",
    description: "Se um cliente chama no domingo, ele só é respondido na segunda-feira.",
  },
];

export const PillarsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background com gradiente diagonal moderno */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-radial from-primary/10 to-transparent blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-radial from-secondary/10 to-transparent blur-2xl sm:blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          {/* Badge de alerta */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <AlertCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Atenção: Você está perdendo dinheiro</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight px-2">
            Sua empresa sofre da{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              "Síndrome do Bombeiro"?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mt-4 sm:mt-6 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
            Você construiu sua empresa para ter liberdade, mas hoje virou refém dela? 
            Se você se identifica com os pontos abaixo, você está pagando o{" "}
            <span className="text-foreground font-bold">"Preço da Desorganização"</span>:
          </p>
        </motion.div>
        
        <div className="grid gap-4 sm:gap-5 max-w-4xl mx-auto">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.4, 
                delay: shouldReduceMotion ? 0 : index * 0.05,
                ease: "easeOut"
              }}
              className="relative group"
            >
              {/* Linha de conexão vertical (exceto no último) */}
              {index < painPoints.length - 1 && (
                <div className="absolute left-[19px] top-[60px] w-0.5 h-[calc(100%+16px)] bg-gradient-to-b from-border to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
              )}
              
              <div className="relative flex items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-7 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300 group-hover:translate-x-2">
                {/* Ícone X com efeito */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-muted/50 rounded-full blur-md group-hover:blur-lg transition-all" />
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-border group-hover:border-primary/50">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground" strokeWidth={3} />
                  </div>
                </div>
                
                <div className="flex-1 pt-0.5 sm:pt-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors">
                    {pain.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                </div>
                
                {/* Indicador numérico */}
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA de transição */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16 px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic">
            💡 <span className="text-foreground font-semibold">A boa notícia?</span> Existe uma forma de resolver isso de uma vez por todas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
