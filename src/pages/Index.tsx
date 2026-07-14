import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/sinergia/Navbar";
import { HeroSection } from "@/components/sinergia/HeroSection";
import { TrustSection } from "@/components/sinergia/TrustSection";

import { SkeletonLoader } from "@/components/sinergia/SkeletonLoader";

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

// Novas seções adicionadas
const ROISection = lazy(() => import("@/components/sinergia/ROISection").then(m => ({ default: m.ROISection })));
const UseCasesSection = lazy(() => import("@/components/sinergia/UseCasesSection").then(m => ({ default: m.UseCasesSection })));
const OnboardingSection = lazy(() => import("@/components/sinergia/OnboardingSection").then(m => ({ default: m.OnboardingSection })));

const Index = () => {
  return (
    <div 
      className="min-h-screen text-white font-body-md antialiased overflow-x-hidden"
      style={{ background: 'radial-gradient(circle at 0% 0%, #03060b, #002757)' }}
    >
      <Helmet>
        <title>Azios - Recrutamento Operacional e IA para RH</title>
        <meta name="description" content="Feche vagas operacionais mais rápido com a Azios. Plataforma de RH com inteligência artificial, recrutamento via WhatsApp e gestão integrada." />
        <meta property="og:title" content="Azios - Recrutamento Operacional Inteligente" />
        <meta property="og:description" content="Acelere o recrutamento e retenha talentos com a IA da Azios. Triagem 100% via WhatsApp." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <TrustSection />
      
      <Suspense fallback={<SkeletonLoader />}>
        <ProblemSolutionSection />
        <ROISection />
        <FeaturesBento />
        <HuntingSection />
        <WhatsAppTriagemSection />
        <UseCasesSection />
        <AIActionSection />
        <IntegrationsSection />
        <OnboardingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
