import HeroSection from "@/components/ga1/HeroSection";
import ProblemSection from "@/components/ga1/ProblemSection";
import FGASection from "@/components/ga1/FGASection";
import DiscoveriesSection from "@/components/ga1/DiscoveriesSection";
import TestimonialsSection from "@/components/ga1/TestimonialsSection";
import OfferSection from "@/components/ga1/OfferSection";
import FAQSection from "@/components/ga1/FAQSection";
import ClosingSection from "@/components/ga1/ClosingSection";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const IndexGa1 = () => {


   return (
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
};
export default IndexGa1;

