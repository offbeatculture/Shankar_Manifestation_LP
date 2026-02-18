import {
  Sprout,
  Scale,
  Crown,
  HandCoins,
  Clock,
  HeartCrack,
} from "lucide-react";

const beliefs = [
  {
    belief: "Money doesn't grow on trees",
    impact:
      "This programs scarcity into every financial decision you make. You unconsciously repel the very wealth you're chasing.",
    icon: Sprout,
  },
  {
    belief: "You can't have it all",
    impact:
      "The most destructive belief. It forces you to choose — health OR wealth, career OR family, success OR happiness. Says who?",
    icon: Scale,
  },
  {
    belief: "Rich people are bad",
    impact:
      "Every Bollywood movie — the villain is the rich guy. We grew up hating wealth, then wonder why wealth won’t come to us.",
    icon: Crown,
  },
  {
    belief: "Asking for more is selfish",
    impact:
      "The entire world runs on asking and receiving — yet we've been told wanting more makes us greedy. This belief alone can keep you small forever.",
    icon: HandCoins,
  },
  {
    belief: "After 40, it's all downhill",
    impact:
      "Health declines, relationships stagnate, it's 'too late' to change. Not a fact — a toxic command your brain blindly obeys.",
    icon: Clock,
  },
  {
    belief: "I don't deserve abundance",
    impact:
      "The deepest, most toxic belief. Somewhere inside, you carry the feeling that you're simply not worthy. It's time to release this.",
    icon: HeartCrack,
  },
];

const ProblemSection = () => (
  <section className="w-full bg-white py-8 px-6 text-center">
    <div className="max-w-6xl mx-auto">
      {/* Top Label */}
      <p className="text-[#092B00] text-xs tracking-[0.4em] uppercase mb-6 font-semibold">
        The Problem
      </p>

      {/* Heading */}
      <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-[#111111]">
        These Toxic Beliefs Are Silently <br />
        <span className="text-[#B8860B]">
          Destroying Your Life
        </span>
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-base md:text-lg leading-relaxed">
        Before you turned 10, someone installed these viruses in your brain.
        They're still running on autopilot — sabotaging your health, wealth,
        relationships & happiness.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beliefs.map((b) => {
          const Icon = b.icon;

          return (
            <div
              key={b.belief}
              className="
                group relative rounded-2xl p-8
                bg-[#f9faf9]
                border border-gray-200
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#B8860B]/40
                hover:shadow-xl
                text-center
                flex flex-col items-center
              "
            >
              {/* Decorative X */}
              <span className="
                absolute top-4 right-5 text-6xl font-bold
                text-gray-100 group-hover:text-[#B8860B]/15
                transition
                select-none
              ">
                ×
              </span>

              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#B8860B]/10 group-hover:bg-[#B8860B]/20 transition">
                <Icon className="w-6 h-6 text-[#B8860B]" />
              </div>

              {/* Belief Heading */}
              <h3 className="font-semibold text-[#111111] mb-3 text-base md:text-lg">
                {b.belief}
              </h3>

              {/* Impact */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {b.impact}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProblemSection;