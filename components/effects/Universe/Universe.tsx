"use client";

import GradientGlow from "../GradientGlow";
import MouseGlow from "../MouseGlow";
import Nebula from "../Nebula";
import ShootingStars from "../ShootingStars";
import StarField from "../StarField";
import { useState } from "react";

export default function Universe() {
  // dev controls for shooting stars
  const isDev = process.env.NODE_ENV !== "production";
  const [enabled, setEnabled] = useState(true);
  const [minDelay, setMinDelay] = useState(1200);
  const [maxDelay, setMaxDelay] = useState(6000);
  const [tint, setTint] = useState("rgba(139,92,246,0.7)");

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
      <ShootingStars minDelay={minDelay} maxDelay={maxDelay} tint={tint} enabled={enabled} />

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

      {/* Dev controls (pointer-events enabled inside) */}
      {isDev && (
        <div className="pointer-events-auto fixed left-4 bottom-4 z-60 p-3 bg-black/40 backdrop-blur rounded-md border border-white/10 text-sm text-white">
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
              <span>meteors</span>
            </label>
            <label className="flex items-center gap-2">
              <span>tint</span>
              <input type="color" value={rgbaToHex(tint)} onChange={(e) => setTint(hexToRgba(e.target.value, 0.75))} />
            </label>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            <label>
              Min delay
              <input className="w-full" type="range" min={200} max={5000} value={minDelay} onChange={(e) => setMinDelay(Number(e.target.value))} />
            </label>
            <label>
              Max delay
              <input className="w-full" type="range" min={500} max={10000} value={maxDelay} onChange={(e) => setMaxDelay(Number(e.target.value))} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

function hexToRgba(hex: string, alpha = 1) {
  const v = hex.replace('#','');
  const bigint = parseInt(v, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

function rgbaToHex(rgba: string) {
  // very small parser for rgba(r,g,b,a) or rgb
  const m = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return '#8b5cf6';
  const r = Number(m[1]);
  const g = Number(m[2]);
  const b = Number(m[3]);
  return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
}