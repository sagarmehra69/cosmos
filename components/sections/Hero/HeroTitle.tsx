import { hero } from "@/data/hero";

export default function HeroTitle() {
  return (
    <div className="mt-8 max-w-3xl">
      {/* Intro */}

      <p
        className="
          text-base
          font-medium
          uppercase
          tracking-[0.28em]
          text-violet-400
        "
      >
        {hero.intro}
      </p>

      {/* Name */}

      <h1
        className="
          mt-6

          font-black
          leading-[0.95]
          tracking-[-0.05em]

          text-white

          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          xl:text-[6.5rem]
        "
      >
        {hero.name}
      </h1>

      {/* Accent Line */}

      <div
        className="
          mt-8
          h-[2px]
          w-28
          rounded-full

          bg-gradient-to-r
          from-violet-500
          via-fuchsia-400
          to-transparent
        "
      />

      {/* Description */}

      <p
        className="
          mt-10
          max-w-2xl

          text-lg
          leading-9

          text-slate-300

          md:text-xl
        "
      >
        I build{" "}
        <span className="font-semibold text-white">
          data-driven applications
        </span>{" "}
        and transform complex datasets into meaningful insights using{" "}
        <span className="font-semibold text-white">
          Python
        </span>
        ,{" "}
        <span className="font-semibold text-white">
          SQL
        </span>
        ,{" "}
        <span className="font-semibold text-white">
          Power BI
        </span>{" "}
        and{" "}
        <span className="font-semibold text-white">
          Excel
        </span>
        .
      </p>

      {/* Secondary Description */}

      <p
        className="
          mt-6
          max-w-2xl

          text-base
          leading-8

          text-slate-400

          md:text-lg
        "
      >
        Currently expanding my expertise in{" "}
        <span className="font-medium text-violet-300">
          Machine Learning
        </span>
        ,{" "}
        <span className="font-medium text-violet-300">
          Data Science
        </span>{" "}
        and{" "}
        <span className="font-medium text-violet-300">
          Artificial Intelligence
        </span>{" "}
        while developing scalable, real-world solutions focused on business impact.
      </p>
    </div>
  );
}