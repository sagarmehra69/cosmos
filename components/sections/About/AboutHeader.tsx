export default function AboutHeader() {
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
        About Me
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
        Building Solutions Through
        <span className="block text-violet-400">
          Data & Intelligence
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
        I'm passionate about transforming raw data into meaningful insights
        that drive smarter decisions. My goal is to build scalable analytics
        and AI-powered solutions that create measurable business impact while
        continuously growing as a Data Analyst and future AI Engineer.
      </p>
    </header>
  );
}