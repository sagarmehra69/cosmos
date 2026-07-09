import { education } from "@/data/education";
import EducationCard from "./EducationCard";

export default function EducationGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {education.map((item) => (
        <EducationCard
          key={item.degree}
          education={item}
        />
      ))}
    </div>
  );
}