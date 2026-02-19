import CTAButton from "./CTAButton";
import RegistrationCard from "./RegistrationCard";

const HeroSection = () => (
  <section className="w-full bg-[#e8d8c3] text-white">
    <div className="section-padding max-w-6xl mx-auto">
      {/* Layout: mobile = stacked, desktop = 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LEFT: Content */}
        <div className="text-center lg:text-left">
         
          {/* Heading */}
          <h1 className="font-display text-[#2f3e4e] font-bold text-3xl md:text-9xl lg:text-6xl leading-tight mb-6">
            Stop Chasing Abundance.{" "}
            <br></br><span className="text-[#2a2e26]">Let It Flow To You.</span>
          </h1>

          {/* Subheading */}
          <p className="text-[#2f3e4e] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            The proven 3-step formula to reprogram your mind for health, wealth , & happiness — so abundance doesn't just arrive, it stays.
          </p>

          {/* CTA */}
          <div className="flex justify-center lg:justify-start">
  <CTAButton>
    <span className="flex items-center gap-2">
      Register for
      <span className="line-through opacity-70">₹999</span>
      <span className="font-bold">₹99</span>
    </span>
  </CTAButton>
</div>


          {/* MOBILE ONLY: Registration form right after CTA */}
          <div className="mt-8 lg:hidden" id="registration-form-mobile">
            <RegistrationCard
              priceLabel="Join The Workshop (Rs.99 Only)"
              onSubmit={(data) => {
                console.log("Registration:", data);
              }}
            />
          </div>

          {/* Trust line */}
          {/* <p className="text-[#2f3e4e] text-xs md:text-sm mt-4">
            One-time payment · 3 hours · 
          </p> */}

          {/* Mini bullets */}
         {/* Stats Section */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center lg:text-left">
  {/* 3 hours */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
      120
    </div>
    <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
      Minutes
    </div>
  </div>

  {/* 12+ Techniques */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
      12+
    </div>
    <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
      Techniques
    </div>
  </div>

  {/* 4 Life Dimensions */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
      3
    </div>
    <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
      Life Dimensions
    </div>
  </div>

  {/* ₹99 Only */}
  <div>
    <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
      ₹99
    </div>
    <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
      Only
    </div>
  </div>
</div>
          {/* Separator */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#2f3e4e]/70" />
            <div className="flex items-center gap-2 text-[#2f3e4e] text-xs md:text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
              <span>Scroll Down</span>
              <span className="animate-bounce">↓</span>
            </div>
            <div className="h-px flex-1 bg-[#2f3e4e]/70" />
          </div>
        </div>

        {/* RIGHT: Desktop form */}
        <div className="hidden lg:flex justify-end" id="registration-form-desktop">
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