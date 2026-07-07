"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroTyping() {
  return (
    <div className="mt-6 h-10">
      <TypeAnimation
        sequence={[
          "Data Analyst",
          2000,
          "Future Data Scientist",
          2000,
          "AI & ML Engineer",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        className="text-2xl font-semibold text-violet-400 md:text-3xl"
      />
    </div>
  );
}