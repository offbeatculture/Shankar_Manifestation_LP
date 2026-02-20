import CTAButton from "./CTAButton";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    text: "Within 2 weeks of applying the F.G.A. Formula, I felt a shift I can't even explain. My anxiety reduced, I got a promotion I wasn't even chasing, and my relationships improved. This masterclass is worth 100x the price.",
  },
  {
    name: "Rajesh K.",
    text: "I was skeptical — ₹99 felt too cheap to be real. But the Ho'oponopono meditation alone changed my life. I released 20 years of resentment towards my father.",
  },
  {
    name: "Anita S.",
    text: "Shankar sir's teaching style is grounded and practical. I've tried many manifestation courses but this is the first one that gave me a clear system.",
  },
  {
    name: "Vikram P.",
    text: "I started the gratitude ritual daily. Within 10 days my mental clarity improved massively. Even my business conversations became more confident.",
  },
  {
    name: "Sneha R.",
    text: "This didn’t just motivate me — it gave me structure. The affirmations rewired how I speak to myself every day.",
  },
  {
    name: "Amit T.",
    text: "I came for curiosity. I stayed because it worked. The energy shift was subtle but powerful.",
  },
];

const TestimonialsSection = () => (
  <section className="w-full bg-[#f4ebdd] pt-8 pb-16 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#2f3e4e]">
        Testimonials
      </p>

      <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 text-[#2f3e4e]">
        Real Results from{" "}
        <span className="text-[#8a6a4a]">Real People</span>
      </h2>

      {/* Horizontal Scroll */}
      <div className="mt-12 overflow-x-auto scrollbar-none snap-x snap-mandatory">
        <div className="flex gap-6 w-max">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="
                snap-start
                w-[300px] md:w-[350px]
                shrink-0
                rounded-2xl
                p-6
                border border-[#2f3e4e]/15
                text-left
                bg-white
                transition duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#8a6a4a]/40
              "
            >
              <Quote className="w-6 h-6 text-[#2f3e4e] mb-4" />

              <p className="text-[#2f3e4e] text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <p className="font-semibold text-[#8a6a4a] text-sm">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
          <div className="flex justify-center ">
  <CTAButton>
    <span className="flex items-center gap-2">
      Register Now For Just
      <span className="line-through opacity-70">₹999</span>
      <span className="font-bold">₹99</span>
    </span>
  </CTAButton>
</div>

        <p className="mt-3 text-sm text-[#2f3e4e]/80">
          Join thousands shifting their inner world.
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;