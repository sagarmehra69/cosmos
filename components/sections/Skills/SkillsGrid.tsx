import { skillCategories } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skillCategories.map((category) => (
        <SkillCard
          key={category.title}
          title={category.title}
          icon={category.icon}
          description={category.description}
          skills={category.skills}
        />
      ))}
    </div>
  );
}