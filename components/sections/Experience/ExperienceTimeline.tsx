import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experience.map((item) => (
        <ExperienceCard
          key={item.id}
          experience={item}
        />
      ))}
    </div>
  );
}