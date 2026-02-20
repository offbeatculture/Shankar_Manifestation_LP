import React from "react";

const CTAButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches; // lg breakpoint
    const targetId = isDesktop
      ? "registration-form-desktop"
      : "registration-form-mobile";

    const el = document.getElementById(targetId);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // OPTIONAL: focus first input after scroll (small delay)
      setTimeout(() => {
        const input = el.querySelector("input, select, textarea") as
          | HTMLInputElement
          | HTMLSelectElement
          | HTMLTextAreaElement
          | null;
        input?.focus();
      }, 250);
    }
  };

  return (
    <a
      href="#registration-form"
      onClick={handleClick}
      className={`
        relative overflow-hidden
        inline-block
        bg-[#C89B3C]
        font-body font-semibold
        text-primary-foreground
        px-8 py-4
        rounded-lg
        text-lg md:text-xl
        transition-all duration-300
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
        hover:-translate-y-1
        active:translate-y-0
        ${className}
      `}
    >
      {/* Shine Layer */}
      <span className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <span
          className="
            absolute top-0 left-[-75%]
            h-full w-1/2
            bg-gradient-to-r from-transparent via-white/50 to-transparent
            skew-x-[-20deg]
            animate-shine
          "
        />
      </span>

      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default CTAButton;
