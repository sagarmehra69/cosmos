export default function HeroTitle() {
  return (
    <div className="mt-8 space-y-6">
      <p className="text-lg font-medium tracking-wide text-violet-400">
        Hi, I'm
      </p>

      <h1
        className="
          bg-gradient-to-r
          from-white
          via-violet-200
          to-violet-500
          bg-clip-text
          text-transparent
          font-black
          tracking-tight
          leading-none
          drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]
          text-6xl
          sm:text-7xl
          md:text-8xl
          lg:text-9xl
        "
      >
        <span className="block">SAGAR</span>
        <span className="block">MEHRA</span>
      </h1>

      <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
        Transforming{" "}
        <span className="font-semibold text-white">
          data into actionable insights
        </span>{" "}
        through analytics, visualization, and machine learning while building
        the foundation for a career in{" "}
        <span className="font-semibold text-violet-400">
          Data Science and Artificial Intelligence.
        </span>
      </p>
    </div>
  );
}