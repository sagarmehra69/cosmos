import {
  BriefcaseBusiness,
  BrainCircuit,
  Database,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "12+",
    label: "Projects Built",
  },
  {
    icon: Database,
    value: "10+",
    label: "Technologies",
  },
  {
    icon: BrainCircuit,
    value: "3+",
    label: "Years Learning",
  },
  {
    icon: Trophy,
    value: "100%",
    label: "Commitment",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="
            group

            rounded-2xl

            border
            border-white/10

            bg-white/[0.04]

            p-5

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-violet-400/30
            hover:bg-white/[0.06]
            hover:shadow-[0_12px_35px_rgba(139,92,246,.12)]
          "
        >
          <Icon
            className="
              mb-4
              h-6
              w-6
              text-violet-400

              transition-transform
              duration-300

              group-hover:scale-110
            "
          />

          <h3
            className="
              text-3xl
              font-bold

              text-white
            "
          >
            {value}
          </h3>

          <p
            className="
              mt-2

              text-sm

              leading-6

              text-slate-400
            "
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}