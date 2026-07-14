interface SkillChipProps {
  label: string;
}

export default function SkillChip({
  label,
}: SkillChipProps) {
  return (
    <span
      className="
        group
        relative
        overflow-hidden

        inline-flex
        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white/[0.04]

        px-4
        py-2.5

        text-sm
        font-medium

        tracking-wide

        text-slate-300

        backdrop-blur-md

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-violet-500/30
        hover:bg-violet-500/10
        hover:text-white
      "
    >
      {/* Hover Glow */}

      <span
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-violet-500/0
          via-violet-500/10
          to-cyan-400/0

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      {/* Text */}

      <span className="relative z-10">
        {label}
      </span>
    </span>
  );
}