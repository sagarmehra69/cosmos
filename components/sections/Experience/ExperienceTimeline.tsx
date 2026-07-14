import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div
      className="
        mx-auto
        mt-20
        max-w-5xl

        space-y-8
      "
    >
      {experiences.map((experience) => (
        <ExperienceCard
          key={`${experience.company}-${experience.role}`}
          experience={experience}
        />
      ))}
    </div>
  );
}