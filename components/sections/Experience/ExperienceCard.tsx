import { Experience } from "@/types/experience";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface Props {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <div className="relative lg:pl-16">

      {/* Timeline Dot */}

      <div className="absolute left-0 top-8 hidden lg:flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-slate-950">

        <Briefcase
          size={18}
          className="text-violet-400"
        />

      </div>

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
          hover:shadow-xl
          hover:shadow-violet-900/20
        "
      >

        <div className="flex flex-wrap items-start justify-between gap-6">

          <div>

            <h3 className="text-3xl font-bold text-white">
              {experience.role}
            </h3>

            <p className="mt-2 text-xl font-semibold text-violet-400">
              {experience.company}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-slate-400">

              <div className="flex items-center gap-2">

                <CalendarDays size={18} />

                <span>{experience.duration}</span>

              </div>

              <div className="flex items-center gap-2">

                <MapPin size={18} />

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
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-400
              "
            >
              Current
            </span>
          )}

        </div>

        <p className="mt-8 leading-8 text-slate-400">
          {experience.description}
        </p>

        {/* Responsibilities */}

        <div className="mt-10">

          <h4 className="text-lg font-semibold text-white">
            Key Responsibilities
          </h4>

          <div className="mt-5 grid gap-4">

            {experience.achievements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >

                <CheckCircle2
                  size={18}
                  className="mt-1 text-violet-400"
                />

                <p className="text-slate-400">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Skills */}

        <div className="mt-10 flex flex-wrap gap-3">

          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-violet-300
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}