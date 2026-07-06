import Card from "@/components/ui/Card";
import { stats } from "@/data/stats";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-5xl font-black tracking-tight text-white">
            {stat.value}
          </h3>

          <p className="mt-4 text-base text-slate-400">
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
}