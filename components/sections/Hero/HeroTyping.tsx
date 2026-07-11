"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroTyping() {
  return (
    <div className="mt-8 h-16 flex items-center">
      <TypeAnimation
        sequence={[
          "Data Analyst",
          1800,

          "Business Intelligence Enthusiast",
          1800,

          "Python Developer",
          1800,

          "Machine Learning Enthusiast",
          1800,

          "Aspiring AI Engineer",
          1800,
        ]}
        wrapper="span"
        speed={55}
        repeat={Infinity}
        cursor={true}
        className="
          text-2xl
          font-semibold

          text-violet-300

          sm:text-3xl
          lg:text-4xl
        "
      />
    </div>
  );
}