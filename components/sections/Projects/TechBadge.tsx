interface TechBadgeProps {
  technology: string;
}

export default function TechBadge({
  technology,
}: TechBadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center

        rounded-full

        border
        border-white/10

        bg-white/[0.04]

        px-3
        py-1.5

        text-xs
        font-medium
        tracking-wide

        text-slate-300

        backdrop-blur-sm

        transition-all
        duration-300

        hover:border-violet-400/30
        hover:bg-violet-500/10
        hover:text-white
      "
    >
      {technology}
    </span>
  );
}