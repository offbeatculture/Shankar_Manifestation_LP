import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYouPageFb = () => {
    useFacebookPixel();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#E8D8C3]">
      <div className="max-w-2xl w-full bg-[#F4EBDD] rounded-2xl p-10 text-center shadow-lg">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-14 h-14 text-[#C89B3C]" />
        </div>

        {/* Brand */}
        <p className="font-[Cinzel] text-lg text-[#8A6A4A] mb-3 tracking-wide">
          Abundance Masterclass
        </p>

        {/* Heading */}
        <h1 className="font-[Playfair_Display] italic text-3xl md:text-4xl text-[#2E2A26] leading-tight mb-4">
          You’re In.
        </h1>

        {/* Subheading */}
        <h2 className="font-[Playfair_Display] text-xl text-[#2F3E4E] mb-6">
          Your Abundance Journey Begins Now.
        </h2>

        {/* Description */}
        <p className="font-[Lato] text-[#2E2A26] text-base leading-relaxed mb-8">
          Your registration is confirmed.  
          Click the button below to join the WhatsApp group and receive
          access instructions instantly.
        </p>

        {/* WhatsApp CTA */}
        <a
          href="connect.manifestwithshankar.com/wap-fb"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3
            bg-[#C89B3C]
            text-white
            font-[Lato] font-semibold
            px-8 py-4
            rounded-xl
            shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          Join WhatsApp Group
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Footer Note */}
        <p className="font-[Lato] text-xs text-[#8A6A4A] mt-6">
          If the button doesn’t work, check your email for instructions.
        </p>

      </div>
    </section>
  );
};

export default ThankYouPageFb;
