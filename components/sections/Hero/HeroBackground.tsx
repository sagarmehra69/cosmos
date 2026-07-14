export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Hero Spotlight */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full

          bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0.06)_35%,transparent_72%)]

          blur-3xl
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56

          bg-gradient-to-t
          from-[#020617]
          via-[#020617]/70
          to-transparent
        "
      />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]

          [background-image:
            linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]

          [background-size:64px_64px]
        "
      />

      {/* Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,.35)_100%)]
        "
      />
    </div>
  );
}