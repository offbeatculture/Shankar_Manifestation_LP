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
  <section className="w-full bg-white pt-8 pb-16 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#092B00]">
        Testimonials
      </p>

      <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 text-[#092B00]">
        Real Results from{" "}
        <span className="text-[#660090]">Real People</span>
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
                border border-[#092B00]/15
                text-left
                bg-white
                transition duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#660090]/40
              "
            >
              <Quote className="w-6 h-6 text-[#FFF0BA] mb-4" />

              <p className="text-[#092B00] text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <p className="font-semibold text-[#660090] text-sm">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <CTAButton className="shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
          Get Instant Access for ₹99
        </CTAButton>

        <p className="mt-3 text-sm text-[#092B00]/80">
          Join thousands shifting their inner world.
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;