import CTAButton from "./CTAButton";
import { Sparkles } from "lucide-react";

const ClosingSection = () => (
  <section className="w-full bg-[#092B00] pt-12 pb-16 px-6 text-center text-white relative overflow-hidden">
    {/* Subtle Purple Glow Accent */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#660090]/20 blur-3xl rounded-full pointer-events-none" />

    <div className="max-w-3xl mx-auto relative z-10">
      {/* Label */}
      <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#FFF0BA]">
        Final Step
      </p>

      {/* Heading */}
      <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mt-4">
       Take One Abundance Action{" "}
        <span className="text-[#FFF0BA]">
          Today
        </span>
      </h2>

      {/* Description */}
      <p className="text-white/80 text-base md:text-lg leading-relaxed mt-6 mb-10 max-w-2xl mx-auto">
        365 days from now, you'll have taken 365 abundance actions. Your life will be unrecognizable — in the best possible way.
      </p>

      {/* CTA */}
      <div className="flex justify-center">
        <CTAButton className="px-10 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Get The Masterclass for ₹99
          </span>
        </CTAButton>
      </div>

      {/* Trust Line */}
      <p className="text-[#FFF0BA]/80 text-sm mt-6">
        One-time payment · Start instantly · 75-minute masterclass
      </p>
    </div>
  </section>
);

export default ClosingSection;
