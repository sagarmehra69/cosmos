import { LucideIcon } from "lucide-react";

import SkillChip from "./SkillChip";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  icon: Icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        p-8

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-violet-500/25
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-16
          -top-16

          h-52
          w-52

          rounded-full

          bg-violet-500/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Header */}

      <div className="relative flex items-start gap-5">
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center

            rounded-2xl

            bg-violet-500/10

            text-violet-400

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:bg-violet-500/20
          "
        >
          <Icon size={26} strokeWidth={2} />
        </div>

        <div>
          <h3
            className="
              text-2xl
              font-bold

              text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3

              leading-7

              text-slate-400
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Skills */}

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip
            key={skill}
            label={skill}
          />
        ))}
      </div>
    </article>
  );
}