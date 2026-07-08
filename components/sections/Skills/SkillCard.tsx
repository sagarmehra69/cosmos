import { Brain, BarChart3, Code2, Sparkles, Wrench } from "lucide-react";
import type { SkillCategory } from "@/types/skill";

interface SkillCardProps {
  category: SkillCategory;
}

const iconMap = {
  Code2,
  BarChart3,
  Brain,
  Wrench,
} as const;

export default function SkillCard({ category }: SkillCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Sparkles;

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-900/20">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{category.description}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}