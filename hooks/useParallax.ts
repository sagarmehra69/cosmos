"use client";

import { useEffect, useRef } from "react";

export default function useParallax(strength = 20) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let animation = 0;

    const move = (e: MouseEvent) => {
      targetX =
        (e.clientX / window.innerWidth - 0.5) *
        strength;

      targetY =
        (e.clientY / window.innerHeight - 0.5) *
        strength;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (ref.current) {
        ref.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px,0)`;
      }

      animation = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animation);
    };
  }, [strength]);

  return ref;
}