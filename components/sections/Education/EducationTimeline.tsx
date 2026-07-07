import { education } from "@/data/education";
import EducationCard from "./EducationCard";

export default function EducationTimeline() {
  return (
    <div className="space-y-8">
      {education.map((item) => (
        <EducationCard
          key={item.id}
          education={item}
        />
      ))}
    </div>
  );
}