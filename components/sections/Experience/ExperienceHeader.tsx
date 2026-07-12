export default function ExperienceHeader() {
  return (
    <header className="mx-auto max-w-4xl text-center">
      {/* Eyebrow */}

      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.35em]
          text-violet-400
        "
      >
        Experience
      </p>

      {/* Heading */}

      <h2
        className="
          mt-5

          text-4xl
          font-black
          leading-tight
          tracking-tight

          text-white

          md:text-5xl
          lg:text-6xl
        "
      >
        Turning Knowledge Into
        <span className="block text-violet-400">
          Real-World Impact
        </span>
      </h2>

      {/* Divider */}

      <div
        className="
          mx-auto
          mt-8

          h-1
          w-24

          rounded-full

          bg-gradient-to-r
          from-violet-500
          via-fuchsia-400
          to-cyan-400
        "
      />

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl

          text-lg
          leading-8

          text-slate-400

          md:text-xl
        "
      >
        Through professional internships, I have applied
        <span className="font-semibold text-white">
          {" "}Data Analytics
        </span>,
        <span className="font-semibold text-white">
          {" "}Business Intelligence
        </span>,
        <span className="font-semibold text-white">
          {" "}Machine Learning
        </span>,
        and modern development practices to solve real business problems,
        deliver actionable insights, and build data-driven solutions.
      </p>
    </header>
  );
}