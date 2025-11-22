import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Lock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    obstacle: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
        >
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-2 border-primary/30 shadow-2xl shadow-primary/20">
            {/* Título */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-accent bg-clip-text text-transparent"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.05 }}
            >
              Descubra como automatizar sua rotina
            </motion.h2>

            {/* Benefícios */}
            <motion.div 
              className="mb-10 space-y-4"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">
                O que você vai receber:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Raio-X do Processo</p>
                    <p className="text-sm text-muted-foreground">Vamos identificar onde sua equipe está perdendo tempo com tarefas manuais.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Plano de IA Personalizado</p>
                    <p className="text-sm text-muted-foreground">Descubra qual automação exata resolve o seu gargalo de vendas hoje.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Caminho da Liberdade</p>
                    <p className="text-sm text-muted-foreground">Como implementar isso para sua empresa rodar sem você apagar incêndios.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.15 }}
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Como prefere ser chamado?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  autoComplete="name"
                  className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email Profissional *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enviaremos o resultado aqui"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">
                  WhatsApp *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Para suporte direto e exclusivo"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-base font-semibold">
                  Empresa (opcional)
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Para personalizar ainda mais sua análise"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  autoComplete="organization"
                  className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="obstacle" className="text-base font-semibold">
                  Qual seu maior obstáculo hoje?
                </Label>
                <Input
                  id="obstacle"
                  type="text"
                  placeholder="Ex: Falta de tempo, atendimento lento, processos manuais..."
                  value={formData.obstacle}
                  onChange={(e) => setFormData({ ...formData, obstacle: e.target.value })}
                  required
                  className="h-12 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-primary w-4 h-4" />
                <span>
                  Concordo em receber comunicações da Azios conforme a{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Política de Privacidade
                  </a>
                </span>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                QUERO PARAR DE PERDER DINHEIRO
              </Button>

              <motion.div 
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                <Lock className="w-4 h-4" />
                <span>Agenda limitada para esta semana.</span>
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
