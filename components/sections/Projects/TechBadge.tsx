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
        border-violet-500/20
        bg-gradient-to-r
        from-violet-500/10
        to-violet-400/5
        px-4
        py-2
        text-sm
        font-medium
        text-violet-300
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:border-violet-400
        hover:bg-violet-500/20
      "
    >
      {technology}
    </span>
  );
}