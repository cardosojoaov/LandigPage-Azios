import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Check } from "lucide-react";
import { processLead } from "@/lib/leadManager";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  incentive?: string;
  buttonText?: string;
  source?: 'hero' | 'inline' | 'pricing' | 'exit-intent' | 'sticky-cta';
  plan?: string;
  onSubmit?: (data: LeadFormData) => void;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  obstacle?: string;
  message?: string;
}

export const LeadCaptureModal = ({
  open,
  onOpenChange,
  title = "Descubra como automatizar sua rotina:",
  description = "O que você vai receber:",
  incentive = "",
  buttonText = "QUERO PARAR DE PERDER DINHEIRO",
  source = 'hero',
  plan,
  onSubmit,
}: LeadCaptureModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    obstacle: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        obstacle: formData.obstacle,
        message: formData.message,
        source: source,
        plan: plan,
      };

      const success = await processLead(leadData);

      if (onSubmit) {
        onSubmit(formData);
      }

      setIsSuccess(true);

      if (success) {
        toast({
          title: "Solicitação enviada com sucesso!",
          description: "Nossa equipe entrará em contato em breve!",
        });
      } else {
        toast({
          title: "Solicitação recebida!",
          description: "Seus dados foram salvos. Nossa equipe entrará em contato em breve!",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      toast({
        title: "Erro ao processar solicitação",
        description: "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[480px] max-h-[85vh] sm:max-h-[95vh] overflow-y-auto p-3 sm:p-6 rounded-xl">
        {isSuccess ? (
          <div className="py-8 sm:py-12 text-center px-2">
            <div className="relative inline-block mb-3 sm:mb-4">
              <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto animate-bounce" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">✅ Solicitação Enviada!</h3>
            <p className="text-base sm:text-lg font-semibold mb-2">
              Recebemos seu caso com sucesso!
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Nossa equipe está analisando sua situação e entrará em contato em até 24h com um plano personalizado para automatizar sua empresa.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-0.5 pb-1">
              <DialogTitle className="text-lg sm:text-xl font-bold leading-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{title}</DialogTitle>
              <DialogDescription className="text-xs sm:text-sm font-semibold text-foreground/90">
                {description}
              </DialogDescription>
            </DialogHeader>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-2 my-1.5 space-y-1">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-tight">
                  <strong>Raio-X do Processo:</strong> Identificar gargalos e tarefas manuais.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-tight">
                  <strong>Plano de IA Personalizado:</strong> Automação exata para seu gargalo de vendas.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-tight">
                  <strong>Caminho da Liberdade:</strong> Empresa no piloto automático.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <Label htmlFor="modal-name" className="text-xs sm:text-sm font-semibold">Nome Completo *</Label>
                <Input
                  id="modal-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 h-9 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="modal-email" className="text-xs font-semibold">Email *</Label>
                <Input
                  id="modal-email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 h-9 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="modal-phone" className="text-xs font-semibold">WhatsApp (com DDD) *</Label>
                <Input
                  id="modal-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 h-9 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="modal-company" className="text-xs font-semibold">Empresa *</Label>
                <Input
                  id="modal-company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1 h-9 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="modal-obstacle" className="text-xs font-semibold">Maior obstáculo? *</Label>
                <Select
                  value={formData.obstacle}
                  onValueChange={(value) => setFormData({ ...formData, obstacle: value })}
                  required
                >
                  <SelectTrigger id="modal-obstacle" className="mt-1 h-9 text-sm">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="falta-tempo">Falta de Tempo / Sobrecarga</SelectItem>
                    <SelectItem value="atendimento-lento">Atendimento Lento / WhatsApp Lotado</SelectItem>
                    <SelectItem value="processos-manuais">Processos Manuais / Planilhas</SelectItem>
                    <SelectItem value="vendas-estagnadas">Vendas Estagnadas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="modal-message" className="text-xs font-semibold">Seu caso (opcional)</Label>
                <Textarea
                  id="modal-message"
                  placeholder="Descreva brevemente sua situação..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 text-sm min-h-[60px] resize-none"
                  rows={2}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full h-11 sm:h-10 text-sm sm:text-base font-bold mt-3 touch-manipulation"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : buttonText}
              </Button>

              <p className="text-center text-[10px] sm:text-xs text-muted-foreground pt-1">
                🔒 Dados seguros • Resposta em 24h
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
