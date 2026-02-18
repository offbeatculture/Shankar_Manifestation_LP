const steps = [
  {
    letter: "F",
    title: "Forgiveness",
    description:
      "Release the handbrake. Let go of negative stories about money, health, love, and self-worth using the powerful Ho'oponopono technique. Like Diwali — first clean the room, then decorate.",
  },
  {
    letter: "G",
    title: "Gratitude",
    description:
      "What you appreciate, appreciates. Learn the daily morning abundance gratitude practice and the Japanese 'Arigato' technique to keep abundance flowing into your life.",
  },
  {
    letter: "A",
    title: "Affirmations",
    description:
      "eprogram your subconscious with the Master Abundance Mantra, Afformations, and the 'What If Up' technique. Right words create right thinking, right actions, right results.",
  },
];

const FGASection = () => (
  <section className="w-full pt-8 pb-16 px-6 bg-[#092B00] text-white">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#FFF0BA]">
          The Formula
        </p>

        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mt-4">
          The{" "}
          <span className="text-[#FFF0BA]">
            F.G.A.
          </span>{" "}
          Framework
        </h2>

        <p className="text-[#FFF0BA]/80 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A simple, proven 3-step method to reprogram your subconscious mind
          for lasting abundance.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div
            key={s.letter}
            className="
              group relative rounded-2xl p-8
              bg-white
              text-[#092B00]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* Letter Badge */}
            <div className="flex justify-center mb-5">
              <div
                className="
                  w-16 h-16 rounded-full
                  bg-[#660090]
                  flex items-center justify-center
                  transition duration-300
                  group-hover:bg-[#092B00]
                "
              >
                <span className="font-display font-bold text-2xl text-[#FFF0BA]">
                  {s.letter}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center font-display font-semibold text-xl mb-3">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-center text-sm leading-relaxed">
              {s.description}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-6 h-1 w-12 mx-auto bg-[#660090] group-hover:bg-[#FFF0BA] transition" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FGASection;