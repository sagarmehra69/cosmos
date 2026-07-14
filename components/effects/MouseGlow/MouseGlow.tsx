"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let x1 = mouseX;
    let y1 = mouseY;

    let x2 = mouseX;
    let y2 = mouseY;

    let frame = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    const animate = () => {
      x1 += (mouseX - x1) * 0.08;
      y1 += (mouseY - y1) * 0.08;

      x2 += (mouseX - x2) * 0.03;
      y2 += (mouseY - y2) * 0.03;

      const scroll = window.scrollY * 0.12;

      primaryRef.current?.style.setProperty(
        "transform",
        `translate3d(${x1}px, ${y1 + scroll}px,0)
         translate(-50%,-50%)`
      );

      secondaryRef.current?.style.setProperty(
        "transform",
        `translate3d(${x2}px, ${y2 + scroll}px,0)
         translate(-50%,-50%)`
      );

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Cursor Glow */}

      <div
        ref={primaryRef}
        className="
          fixed
          left-0
          top-0
          hidden
          md:block
          pointer-events-none
          -z-10
          h-[520px]
          w-[520px]
          rounded-full
          blur-[130px]
          animate-glow-breathe
        "
        style={{
          opacity: .55,
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(139,92,246,.40) 0%, rgba(99,102,241,.20) 45%, transparent 100%)",
        }}
      />

      {/* Ambient */}

      <div
        ref={secondaryRef}
        className="
          fixed
          left-0
          top-0
          hidden
          md:block
          pointer-events-none
          -z-20
          h-[900px]
          w-[900px]
          rounded-full
          blur-[190px]
          animate-glow-breathe-slow
        "
        style={{
          opacity: .25,
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(59,130,246,.30) 0%, rgba(139,92,246,.12) 55%, transparent 100%)",
        }}
      />
    </>
  );
}