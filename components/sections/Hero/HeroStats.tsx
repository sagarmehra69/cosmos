import { stats } from "@/data/stats";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10"
        >
          <h3 className="text-3xl font-bold text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}