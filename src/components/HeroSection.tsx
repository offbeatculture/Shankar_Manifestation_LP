import CTAButton from "./CTAButton";
import RegistrationCard from "./RegistrationCard";

const HeroSection = () => (
  <section className="w-full bg-[#092B00] text-white">
    <div className="section-padding max-w-6xl mx-auto">
      {/* Layout: mobile = stacked, desktop = 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LEFT: Content */}
        <div className="text-center lg:text-left">
         
          {/* Heading */}
          <h1 className="font-display font-bold text-3xl md:text-9xl lg:text-6xl leading-tight mb-6">
            Stop Chasing Abundance.{" "}
            <br></br><span className="text-[#FFF0BA]">Let It Flow To You.</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            The proven 3-step formula to reprogram your mind for health, wealth , & happiness — so abundance doesn't just arrive, it stays.
          </p>

          {/* CTA */}
          <div className="flex justify-center lg:justify-start">
            <CTAButton>Get Instant Access for ₹99</CTAButton>
          </div>

          {/* MOBILE ONLY: Registration form right after CTA */}
          <div className="mt-8 lg:hidden">
            <RegistrationCard
              priceLabel="Join The Workshop (Rs.99 Only)"
              onSubmit={(data) => {
                console.log("Registration:", data);
              }}
            />
          </div>

          {/* Trust line */}
          <p className="text-white/60 text-xs md:text-sm mt-4">
            One-time payment · 75+ minutes · Lifetime access
          </p>

          {/* Mini bullets */}
         {/* Stats Section */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center lg:text-left">
  {/* 75+ Minutes */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#FFF0BA]">
      75+
    </div>
    <div className="text-white/80 text-sm uppercase tracking-wide mt-1">
      Minutes
    </div>
  </div>

  {/* 12+ Techniques */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#FFF0BA]">
      12+
    </div>
    <div className="text-white/80 text-sm uppercase tracking-wide mt-1">
      Techniques
    </div>
  </div>

  {/* 4 Life Dimensions */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#FFF0BA]">
      3
    </div>
    <div className="text-white/80 text-sm uppercase tracking-wide mt-1">
      Life Dimensions
    </div>
  </div>

  {/* ₹99 Only */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#FFF0BA]">
      ₹99
    </div>
    <div className="text-white/80 text-sm uppercase tracking-wide mt-1">
      Only
    </div>
  </div>
</div>
          {/* Separator */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#FFF0BA]/70" />
            <div className="flex items-center gap-2 text-[#FFF0BA] text-xs md:text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
              <span>Scroll Down</span>
              <span className="animate-bounce">↓</span>
            </div>
            <div className="h-px flex-1 bg-[#FFF0BA]/70" />
          </div>
        </div>

        {/* RIGHT: Desktop form */}
        <div className="hidden lg:flex justify-end">
          <div className="w-full max-w-md">
            <RegistrationCard
              priceLabel="Join The Workshop (Rs.99 Only)"
              onSubmit={(data) => {
                console.log("Registration:", data);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;