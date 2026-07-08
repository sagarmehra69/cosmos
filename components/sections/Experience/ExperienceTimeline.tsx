import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mt-20">

      {/* Timeline Line */}

      <div className="absolute left-5 top-0 hidden h-full w-px bg-violet-500/20 lg:block" />

      <div className="space-y-12">

        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            index={index}
          />
        ))}

      </div>

    </div>
  );
}