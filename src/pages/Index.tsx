import { HeroSection } from "@/components/HeroSection";
import { PillarsSection } from "@/components/PillarsSection";
import { CompanySection } from "@/components/CompanySection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { InlineLeadCapture } from "@/components/InlineLeadCapture";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PillarsSection />
      <CompanySection />
      <DiagnosticSection />
      <FAQSection />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
