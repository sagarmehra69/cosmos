import { GraduationCap } from "lucide-react";

import { Education } from "@/types/education";
import TechBadge from "../Projects/TechBadge";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <article
      className="
        group

        flex
        h-full
        flex-col

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

      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-xl

            bg-violet-500/10

            text-violet-400
          "
        >
          <GraduationCap size={22} />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold text-white">
            {education.degree}
          </h3>

          <p className="mt-1 font-medium text-violet-400">
            {education.institution}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {education.location}
          </p>
        </div>
      </div>

      {/* Academic Details */}

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">
        <span>{education.duration}</span>

        <span className="text-white">
          {education.score}
        </span>

        <span className="text-emerald-400">
          {education.status}
        </span>
      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-white/10" />

      {/* Coursework */}

      {education.coursework ? (
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <TechBadge
              key={course}
              technology={course}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm leading-7 text-slate-400">
          Built a strong academic foundation in mathematics,
          science and analytical thinking before pursuing
          Computer Applications.
        </p>
      )}

      {/* Footer */}

      <p className="mt-6 text-sm leading-7 text-slate-400">
        {education.coursework
          ? "Focused on software engineering, data analytics, artificial intelligence and modern computing."
          : "Established the academic foundation for higher education in technology."}
      </p>
    </article>
  );
}