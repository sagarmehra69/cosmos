"use client";

import { useMemo } from "react";
import { generateStars } from "@/lib/generateStars";

export default function StarField() {
  const farStars = useMemo(
    () => generateStars(140, 1001, 0.8, 1.4, [0.2, 0.45]),
    []
  );

  const midStars = useMemo(
    () => generateStars(70, 2002, 1.4, 2.2, [0.35, 0.7]),
    []
  );

  const nearStars = useMemo(
    () => generateStars(25, 3003, 2.2, 3.5, [0.5, 1]),
    []
  );

  const renderLayer = (stars: typeof farStars, glow = 6) =>
    stars.map((star) => (
      <span
        key={star.id}
        className="absolute rounded-full animate-star"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          opacity: star.opacity,
          background: star.color,
          animationDelay: `${star.delay}s`,
          animationDuration: `${star.duration}s`,
          boxShadow: `
            0 0 ${glow}px ${star.color},
            0 0 ${glow * 2}px rgba(255,255,255,.4)
          `,
        }}
      />
    ));

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {renderLayer(farStars, 4)}
      {renderLayer(midStars, 8)}
      {renderLayer(nearStars, 14)}
    </div>
  );
}