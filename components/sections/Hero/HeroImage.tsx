export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Main Circle */}
      <div
        className="
          relative
          flex
          h-80
          w-80
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
        "
      >
        <span className="text-7xl">🌌</span>
      </div>

    </div>
  );
}