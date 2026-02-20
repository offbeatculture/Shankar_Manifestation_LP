import CTAButton from "./CTAButton";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "Inner World Creates Outer World — the foundational principle",
  "The Three Quadrants of Reality — health, wealth, love & happiness",
  "Guided Forgiveness Meditation (Ho'oponopono)",
  "Daily Gratitude Ritual that takes only 5 minutes",
  "The Arigato Technique for instant energy shifts",
  "Master Abundance Mantra you can use anywhere",
  "Affirmations & the powerful 'What If' technique",
  "The 9 Universal Laws of Abundance",
];

const DiscoveriesSection = () => (
  <section className="w-full bg-white pt-8 pb-12 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#2f3e4e]">
          Inside The Session
        </p>

        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mt-3 text-[#2f3e4e]">
         Everything You'll Discover in{" "}
          <span className="text-[#8a6a4a]">120 Minutes</span>
        </h2>
      </div>

      {/* Organized Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {outcomes.map((o, i) => (
          <div
            key={i}
            className="
              flex items-start gap-3
              border border-[#2f3e4e]/15
              rounded-xl
              px-4 py-4
              transition duration-300
              hover:border-[#8a6a4a]/40
              hover:shadow-md
            "
          >
            <CheckCircle2 className="w-5 h-5 text-[#8a6a4a] shrink-0 mt-1" />
            <p className="text-[#2f3e4e] text-sm leading-relaxed font-medium">
              {o}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Area */}
      <div className="mt-10 text-center">
        <div className="inline-block">
          <CTAButton>
            Get Instant Access for ₹99
          </CTAButton>
        </div>

        <p className="mt-3 text-sm text-[#2f3e4e]/80">
          One-time payment · 3 hours session
        </p>
      </div>
    </div>
  </section>
);

export default DiscoveriesSection;