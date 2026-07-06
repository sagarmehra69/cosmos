import Section from "@/components/ui/Section";

import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-16">
        <SkillsHeader />

        <SkillsGrid />
      </div>
    </Section>
  );
}