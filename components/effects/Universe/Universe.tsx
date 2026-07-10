"use client";

import GradientGlow from "../GradientGlow";
import MouseGlow from "../MouseGlow";
import Nebula from "../Nebula";
import ShootingStars from "../ShootingStars";
import StarField from "../StarField";

export default function Universe() {
  return (
    <div
      aria-hidden
      className="
      fixed
      inset-0
      -z-50
      overflow-hidden
      pointer-events-none
      select-none
    "
    >
      {/* Base Space */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Cosmic Gradient */}
      <GradientGlow />

      {/* Nebula */}
      <Nebula />

      {/* Stars */}
      <StarField />

      {/* Meteors */}
      <ShootingStars />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(2,6,23,.45) 100%)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="
        absolute
        inset-x-0
        bottom-0
        h-96
        bg-gradient-to-t
        from-[#020617]
        via-[#020617]/60
        to-transparent
      "
      />
    </div>
  );
}