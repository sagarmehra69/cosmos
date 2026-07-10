"use client";

export default function Nebula() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =========================================
          Hero Nebula
      ========================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[28%]
          h-[950px]
          w-[950px]
          -translate-x-1/2
          rounded-full
          bg-violet-700/15
          blur-[190px]
          animate-nebula-slow
        "
      />

      {/* =========================================
          Top Left
      ========================================= */}

      <div
        className="
          absolute
          -left-52
          -top-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-fuchsia-600/12
          blur-[170px]
          animate-nebula-medium
        "
      />

      {/* =========================================
          Top Right
      ========================================= */}

      <div
        className="
          absolute
          right-[-220px]
          top-[6%]
          h-[760px]
          w-[760px]
          rounded-full
          bg-indigo-600/12
          blur-[180px]
          animate-nebula-fast
        "
      />

      {/* =========================================
          Bottom Left
      ========================================= */}

      <div
        className="
          absolute
          bottom-[-260px]
          left-[8%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
          animate-nebula-medium
        "
      />

      {/* =========================================
          Bottom Right
      ========================================= */}

      <div
        className="
          absolute
          bottom-[-240px]
          right-[4%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
          animate-nebula-slow
        "
      />

      {/* =========================================
          Center Accent
      ========================================= */}

      <div
        className="
          absolute
          left-[45%]
          top-[45%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-pink-500/8
          blur-[130px]
          animate-nebula-fast
        "
      />
    </div>
  );
}