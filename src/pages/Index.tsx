import { lazy, Suspense } from "react";
import { Navbar } from "@/components/sinergia/Navbar";
import { HeroSection } from "@/components/sinergia/HeroSection";
import { TrustSection } from "@/components/sinergia/TrustSection";

// Lazy Loaded Components
const ProblemSolutionSection = lazy(() => import("@/components/sinergia/ProblemSolutionSection").then(m => ({ default: m.ProblemSolutionSection })));
const FeaturesBento = lazy(() => import("@/components/sinergia/FeaturesBento").then(m => ({ default: m.FeaturesBento })));
const AIActionSection = lazy(() => import("@/components/sinergia/AIActionSection").then(m => ({ default: m.AIActionSection })));
const HuntingSection = lazy(() => import("@/components/sinergia/HuntingSection").then(m => ({ default: m.HuntingSection })));
const WhatsAppTriagemSection = lazy(() => import("@/components/sinergia/WhatsAppTriagemSection").then(m => ({ default: m.WhatsAppTriagemSection })));
const IntegrationsSection = lazy(() => import("@/components/sinergia/IntegrationsSection").then(m => ({ default: m.IntegrationsSection })));
const FAQSection = lazy(() => import("@/components/sinergia/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTA = lazy(() => import("@/components/sinergia/FinalCTA").then(m => ({ default: m.FinalCTA })));
const TestimonialsSection = lazy(() => import("@/components/sinergia/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const Footer = lazy(() => import("@/components/sinergia/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div 
      className="min-h-screen text-white font-body-md antialiased overflow-x-hidden"
      style={{ background: 'radial-gradient(circle at 0% 0%, #03060b, #002757)' }}
    >
      <Navbar />
      <HeroSection />
      <TrustSection />
      
      <Suspense fallback={<div className="min-h-[50vh] w-full" />}>
        <ProblemSolutionSection />
        <FeaturesBento />
        <HuntingSection />
        <WhatsAppTriagemSection />
        <AIActionSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
