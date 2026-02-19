const CTAButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href="#get-access"
    className={`
      relative overflow-hidden
      inline-block
      bg-gold-gradient
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

export default CTAButton;