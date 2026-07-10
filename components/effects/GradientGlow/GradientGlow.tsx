"use client";

export default function GradientGlow() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Left Purple */}

      <div
        className="
          absolute
          -left-72
          -top-72
          h-[850px]
          w-[850px]
          rounded-full
          bg-violet-700/20
          blur-[220px]
          animate-gradient-float-slow
        "
      />

      {/* Top Right Blue */}

      <div
        className="
          absolute
          -right-80
          -top-52
          h-[900px]
          w-[900px]
          rounded-full
          bg-blue-600/15
          blur-[240px]
          animate-gradient-float-medium
        "
      />

      {/* Bottom Left Cyan */}

      <div
        className="
          absolute
          -left-60
          bottom-[-250px]
          h-[750px]
          w-[750px]
          rounded-full
          bg-cyan-500/10
          blur-[220px]
          animate-gradient-float-fast
        "
      />

      {/* Bottom Right Pink */}

      <div
        className="
          absolute
          -right-64
          bottom-[-260px]
          h-[850px]
          w-[850px]
          rounded-full
          bg-fuchsia-600/10
          blur-[240px]
          animate-gradient-float-medium
        "
      />

      {/* Hero Glow */}

      <div
        className="
          absolute
          left-1/2
          top-[12%]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[170px]
          animate-pulse
        "
      />
    </div>
  );
}