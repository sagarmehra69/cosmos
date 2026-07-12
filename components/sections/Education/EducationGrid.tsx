import { education } from "@/data/education";
import EducationCard from "./EducationCard";

export default function EducationGrid() {
  return (
    <div
      className="
        mx-auto
        max-w-6xl

        grid
        gap-6

        lg:grid-cols-2
      "
    >
      {education.map((item) => (
        <EducationCard
          key={`${item.degree}-${item.institution}`}
          education={item}
        />
      ))}
    </div>
  );
}