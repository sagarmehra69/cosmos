"use client";

import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  top: number;
  left: number;
  duration: number;
  length: number;
}

const randomMeteor = (id: number): Meteor => ({
  id,
  top: Math.random() * 45,
  left: 65 + Math.random() * 30,
  duration: 1.2 + Math.random() * 1.2,
  length: 140 + Math.random() * 120,
});

export default function ShootingStars() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    let id = 0;

    const spawnMeteor = () => {
      const meteor = randomMeteor(id++);

      setMeteors((prev) => [...prev, meteor]);

      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
      }, meteor.duration * 1000);

      const nextDelay = 2500 + Math.random() * 4500;

      timeout = window.setTimeout(spawnMeteor, nextDelay);
    };

    let timeout = window.setTimeout(spawnMeteor, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-shooting-star"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          <div
            style={{
              width: meteor.length,
              height: 2,
              transform: "rotate(-35deg)",
              borderRadius: 999,
              background:
                "linear-gradient(90deg,#ffffff,rgba(255,255,255,.8),rgba(255,255,255,.15),transparent)",
              boxShadow:
                "0 0 10px rgba(255,255,255,.9),0 0 22px rgba(139,92,246,.7)",
            }}
          />
        </div>
      ))}
    </div>
  );
}