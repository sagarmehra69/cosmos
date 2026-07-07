export default function HeroTitle() {
  return (
    <div className="mt-6">

      <p className="text-lg font-medium tracking-wide text-violet-400">
        Hi, I'm
      </p>

      <h1
        className="
          mt-4
          bg-gradient-to-r
          from-white
          via-violet-200
          to-violet-500
          bg-clip-text
          text-transparent
          font-black
          tracking-tight
          leading-none
          text-6xl
          sm:text-7xl
          md:text-8xl
          lg:text-9xl
        "
      >
        <span className="block">SAGAR</span>
        <span className="block">MEHRA</span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        I transform raw data into actionable insights using
        <span className="font-semibold text-white"> SQL</span>,
        <span className="font-semibold text-white"> Python</span>,
        <span className="font-semibold text-white"> Excel</span> and
        <span className="font-semibold text-white"> Power BI</span> to solve
        real-world business problems.
      </p>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
        Currently building advanced expertise in
        <span className="font-semibold text-violet-400">
          {" "}Data Science
        </span>,
        <span className="font-semibold text-violet-300">
          {" "}Machine Learning
        </span>
        {" "}and
        <span className="font-semibold text-violet-200">
          {" "}Artificial Intelligence
        </span>
        {" "}to create intelligent systems with measurable business impact.
      </p>

    </div>
  );
}