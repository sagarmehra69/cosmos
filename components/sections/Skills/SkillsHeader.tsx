export default function SkillsHeader() {
  return (
    <div className="text-center">

      {/* Section Label */}

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
        Skills
      </p>

      {/* Heading */}

      <h2 className="mt-4 text-5xl font-black tracking-tight text-white">
        Technical Skills & Expertise
      </h2>

      {/* Description */}

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        A strong technical foundation built through internships,
        real-world projects and continuous learning in
        <span className="font-medium text-white">
          {" "}Data Analytics
        </span>,
        <span className="font-medium text-white">
          {" "}Machine Learning
        </span>,
        and
        <span className="font-medium text-white">
          {" "}Software Development
        </span>.
      </p>

      {/* Stats */}

      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-violet-400">35+</h3>
          <p className="mt-2 text-sm text-slate-400">
            Technologies
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-violet-400">2</h3>
          <p className="mt-2 text-sm text-slate-400">
            Remote Internships
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-violet-400">5+</h3>
          <p className="mt-2 text-sm text-slate-400">
            Major Projects
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-violet-400">∞</h3>
          <p className="mt-2 text-sm text-slate-400">
            Continuous Learning
          </p>
        </div>

      </div>

    </div>
  );
}