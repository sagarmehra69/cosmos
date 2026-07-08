import { ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AboutCard({
  icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/40
      "
    >
      <div className="text-violet-400">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}