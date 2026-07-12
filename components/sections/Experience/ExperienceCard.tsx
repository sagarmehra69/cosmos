import { Experience } from "@/types/experience";
import {
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import TechBadge from "../Projects/TechBadge";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article
      className="
        group
        rounded-2xl

        border
        border-white/10

        bg-white/[0.03]

        p-6

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-violet-500/25
        hover:shadow-[0_18px_45px_rgba(139,92,246,0.12)]
      "
    >
      {/* Header */}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {experience.role}
          </h3>

          <p className="mt-1 text-lg font-semibold text-violet-400">
            {experience.company}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{experience.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {experience.current && (
          <span
            className="
              rounded-full

              border
              border-emerald-500/20

              bg-emerald-500/10

              px-3
              py-1

              text-xs
              font-semibold

              text-emerald-400
            "
          >
            Current
          </span>
        )}
      </div>

      {/* Description */}

      <p className="mt-5 text-[15px] leading-7 text-slate-400">
        {experience.description}
      </p>

      {/* Achievements */}

      <div className="mt-6 space-y-3">
        {experience.achievements.map((achievement) => (
          <div
            key={achievement}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={16}
              className="mt-1 shrink-0 text-violet-400"
            />

            <p className="text-sm leading-7 text-slate-300">
              {achievement}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}

      <div className="my-6 h-px bg-white/10" />

      {/* Technologies */}

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <TechBadge
            key={skill}
            technology={skill}
          />
        ))}
      </div>
    </article>
  );
}