const steps = [
  {
    letter: "F",
    title: "Forgiveness",
    description:
      "Release deep-seated resentment and subconscious blocks that silently repel abundance from every area of your life.",
  },
  {
    letter: "G",
    title: "Gratitude",
    description:
      "Activate a daily abundance-alignment practice that rewires your brain to notice and attract more of what you want.",
  },
  {
    letter: "A",
    title: "Affirmations",
    description:
      "Reprogram your internal language so your thoughts, words, and beliefs become a magnet for health, wealth, and love.",
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