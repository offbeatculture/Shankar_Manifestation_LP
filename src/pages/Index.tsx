import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FGASection from "@/components/FGASection";
import DiscoveriesSection from "@/components/DiscoveriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <ProblemSection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <FGASection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <DiscoveriesSection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <TestimonialsSection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <OfferSection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <FAQSection />
    <div className="w-16 h-px bg-gold/30 mx-auto" />
    <ClosingSection />
  </main>
);

export default Index;
