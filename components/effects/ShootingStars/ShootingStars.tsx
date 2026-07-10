"use client";

import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  top: number;
  left: number;
  duration: number;
  length: number;
  angle: number;
  tx: number;
  ty: number;
  blur: number;
  tint?: string;
  headSize?: number;
}

const randomMeteor = (id: number): Meteor => {
  const angle = -20 - Math.random() * 25; // -20 to -45 deg
  const tx = 1400 + Math.random() * 1200; // travel distance in px
  const ty = 300 + Math.random() * 600; // vertical drop in px
  const length = 120 + Math.random() * 320;
  const duration = Math.max(0.7, length / 400 + Math.random() * 1.2);

  // spawn slightly off the right edge (percent)
  const left = 100 + Math.random() * 20;
  const top = 5 + Math.random() * 60;

  return {
    id,
    top,
    left,
    duration,
    length,
    angle,
    tx: -tx,
    ty,
    blur: 1 + Math.random() * 6,
  };
};

interface Props {
  /** Minimum spawn delay in ms */
  minDelay?: number;
  /** Maximum spawn delay in ms */
  maxDelay?: number;
  /** Color tint for meteor glow (CSS color) */
  tint?: string;
  /** Enable or disable meteors */
  enabled?: boolean;
}

export default function ShootingStars({
  minDelay = 1200,
  maxDelay = 6000,
  tint = "rgba(139,92,246,0.35)",
  enabled = true,
}: Props) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // helper blue tint used for mixing (low alpha to avoid tinting background)
  const blueTint = "rgba(96,165,250,0.35)";
  
  // state kept minimal; reduced-motion is checked inside effect
  
  
  useEffect(() => {
    // respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enabled || prefersReduced) return;

    let id = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let removeTimerId: ReturnType<typeof setTimeout> | undefined;

    const spawnMeteor = () => {
      const meteor = randomMeteor(id++);

      // compute per-meteor tint and headSize here to avoid impure calls in render
      meteor.tint = mixTint(tint, blueTint, Math.random());
      meteor.headSize = Math.min(14, 3 + meteor.length / 60);

      setMeteors((prev) => [...prev, meteor]);

      removeTimerId = setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
      }, meteor.duration * 1000 + 300);

      const nextDelay = minDelay + Math.random() * (maxDelay - minDelay);

      timeoutId = setTimeout(spawnMeteor, nextDelay);
    };

    timeoutId = setTimeout(spawnMeteor, 800 + Math.random() * 1400);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (removeTimerId) clearTimeout(removeTimerId);
    };
  }, [minDelay, maxDelay, enabled, tint]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="shooting-star"
              style={(() => {
                const style: React.CSSProperties & Record<string, string> = {
                  top: `${meteor.top}%`,
                  left: `${meteor.left}%`,
                };

                style["--duration"] = `${meteor.duration}s`;
                style["--length"] = `${meteor.length * 1.2}px`;
                style["--angle"] = `${meteor.angle}deg`;
                style["--tx"] = `${meteor.tx}px`;
                style["--ty"] = `${meteor.ty}px`;
                style["--blur"] = `${meteor.blur}px`;
                style["--tint"] = meteor.tint || tint;
                style["--head-size"] = `${meteor.headSize || Math.min(14, 3 + meteor.length / 60)}px`;

                return style as React.CSSProperties;
              })()}
        >
          <div className="shooting-star__trail shooting-star__trail--glow" />
          <div className="shooting-star__trail shooting-star__trail--core" />
          <div className="shooting-star__head" />
        </div>
      ))}
    </div>
  );
}

function mixTint(a: string, b: string, t = 0.5) {
  // parse rgba or hex-ish a and b into r,g,b,a and linearly interpolate
  const pa = parseRgba(a);
  const pb = parseRgba(b);
  if (!pa || !pb) return a;
  const r = Math.round(pa.r + (pb.r - pa.r) * t);
  const g = Math.round(pa.g + (pb.g - pa.g) * t);
  const bC = Math.round(pa.b + (pb.b - pa.b) * t);
  const alpha = (pa.a + (pb.a - pa.a) * t).toFixed(2);
  return `rgba(${r},${g},${bC},${alpha})`;
}

function parseRgba(input: string) {
  // handles rgba(r,g,b,a) or rgb(r,g,b)
  const m = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
  if (!m) return null;
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a: m[4] ? Number(m[4]) : 1 };
}