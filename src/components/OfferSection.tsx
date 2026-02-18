import CTAButton from "./CTAButton";
import { CheckCircle2, Sparkles } from "lucide-react";

const includes = [
  "75+ minute Abundance Attraction Masterclass",
  "The complete F.G.A. Formula (Forgiveness, Gratitude, Affirmations",
  "Guided forgiveness meditation (Ho'oponopono)",
  "Guided abundance attraction meditation",
  "The Master Abundance Mantra",
  "9 Laws of Abundance deep-dive",
  "5 daily rituals & practices you can start immediately",
  "Afformations & 'What If Up' technique",
  "Arigato Technique & Abundance Dance"
];

const OfferSection = () => (
  <section id="get-access" className="w-full bg-white pt-8 pb-12 px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Label */}
      <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#092B00]">
        Get Instant Access
      </p>

      {/* Heading */}
      <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 text-[#092B00] leading-tight">
       Transform Every Dimension of Your Life
for Less Than a <span className="text-[#660090]">Coffee</span>
      </h2>

      {/* Price Row */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="text-[#092B00]/70 text-lg md:text-xl line-through">
          ₹2,999
        </span>
        <span className="text-[#092B00] font-bold text-3xl md:text-4xl">
          ₹99
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0BA] px-4 py-2 text-[#092B00] text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-[#660090]" />
          Limited Offer
        </span>
      </div>

      {/* Card */}
      <div
        className="
          mt-8 rounded-2xl border border-[#092B00]/15 bg-white
          p-6 md:p-8 text-left
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        "
      >
        <h3 className="font-display font-semibold text-xl text-[#092B00] mb-5">
          What you get inside:
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#660090] shrink-0 mt-0.5" />
              <span className="text-[#092B00] font-body text-sm md:text-base leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mt-7 h-px w-full bg-[#092B00]/10" />

        {/* Trust line */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[#092B00]/80 text-sm">
            One-time payment · No hidden fees
          </p>
          <p className="text-[#092B00]/80 text-sm">
            Instant access after payment
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <CTAButton className="px-10">
          Yes! I Want Abundance
        </CTAButton>
      </div>

      {/* Footer note */}
      <p className="text-[#092B00]/70 text-xs mt-4">
        Secure checkout · Works on mobile & desktop
      </p>
    </div>
  </section>
);

export default OfferSection;