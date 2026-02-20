import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is this Masterclass for?",
    a: "Anyone who feels stuck — whether it's financial, health-related, emotional, or spiritual. If you've ever felt like you're working hard but not seeing results, or that life should be richer and more fulfilling, this masterclass is designed specifically for you. No prior experience or knowledge needed.",
  },
  {
    q: "Is this just about money?",
    a: "Not at all. This masterclass covers Three dimensions of abundance — health, wealth,and happiness. The techniques you'll learn work for attracting prosperity in every area of your life, not just financial.",
  },
  {
    q: "How long is the masterclass?",
    a: "The masterclass runs for 3 hours and includes guided meditations, practical techniques, and actionable frameworks you can implement starting today.",
  },
  {
    q: "What if I'm skeptical?",
    a: "Shankar is an engineer by training. This masterclass combines ancient wisdom with practical brain science — afformations, cognitive reframing, gratitude practices backed by research, and meditation techniques. It's not vague 'think positive' advice — it's a structured system with specific daily actions.",
  },
  {
    q: "Do I need any prior experience?",
    a: "No. Everything is taught step-by-step in a beginner-friendly way.",
  },
  //  {
  //   q: "Is it Live?",
  //   a: "- This Masterclass was originally recorded during a live session and is now available as a limited-time broadcast.- You’ll experience the full energy of the original session — just like those who attended it live.",
  // },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#f4ebdd] pt-8 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.35em] uppercase font-semibold text-[#2f3e4e]">
            FAQs
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 text-[#2f3e4e] leading-tight">
            Frequently Asked{" "}
            <span className="text-[#8a6a4a]">Questions</span>
          </h2>
          <p className="mt-3 text-[#2f3e4e]/80 max-w-2xl mx-auto">
            Quick answers to the most common questions before you join.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`
                  rounded-2xl border overflow-hidden bg-white
                  transition-all duration-300
                  ${isOpen ? "border-[#fff]/40" : "border-[#2f3e4e]/15"}
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-semibold text-[#2f3e4e]">
                    {faq.q}
                  </span>

                  <span
                    className={`
                      inline-flex items-center justify-center
                      w-9 h-9 rounded-full
                      transition-all duration-300 shrink-0
                      ${isOpen ? "bg-[#2f3e4e]" : "bg-[#2f3e4e]/70"}
                    `}
                  >
                    <ChevronDown
                      className={`
                        w-5 h-5 text-[#fff]
                        transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[#2f3e4e]/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom separator */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#2f3e4e]/15" />
          <div className="text-xs uppercase tracking-[0.35em] font-semibold text-[#2f3e4e]/70">
            Ready
          </div>
          <div className="h-px flex-1 bg-[#2f3e4e]/15" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
