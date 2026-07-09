import { GraduationCap } from "lucide-react";

import { Education } from "@/types/education";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
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
        hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-violet-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-400">
        <GraduationCap size={30} />
      </div>

      {/* Degree */}
      <div className="relative z-10 mt-8">
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {education.degree}
        </h3>

        <p className="mt-3 text-lg text-slate-300">
          {education.institution}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {education.location}
        </p>
      </div>

      {/* Academic Details */}
      <div className="relative z-10 mt-8 grid grid-cols-3 gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Duration
          </p>

          <p className="mt-2 font-semibold text-white">
            {education.duration}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Percentage
          </p>

          <p className="mt-2 font-semibold text-violet-400">
            {education.score}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Status
          </p>

          <p className="mt-2 font-semibold text-white">
            {education.status}
          </p>
        </div>
      </div>

      {/* Middle Content */}
      <div className="relative z-10 mt-10 flex-1">
        {education.coursework ? (
          <>
            <h4 className="text-lg font-semibold text-white">
              Relevant Coursework
            </h4>

            <div className="mt-5 flex flex-wrap gap-3">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="
                    rounded-full
                    border
                    border-violet-500/20
                    bg-violet-500/10
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-violet-300
                    transition-all
                    duration-300
                    hover:border-violet-400
                    hover:bg-violet-500/20
                  "
                >
                  {course}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h4 className="text-lg font-semibold text-white">
              Academic Foundation
            </h4>

            <p className="mt-4 leading-7 text-slate-400">
              Completed Higher Secondary education under the Uttarakhand
              Board (NCERT), strengthening analytical thinking,
              mathematics, science fundamentals and problem-solving skills.
            </p>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
        <p className="text-sm text-slate-400">
          {education.coursework
            ? "Focused on Data Analytics, Artificial Intelligence and Machine Learning."
            : "Built a strong academic foundation for higher education in Computer Applications."}
        </p>
      </div>
    </div>
  );
}