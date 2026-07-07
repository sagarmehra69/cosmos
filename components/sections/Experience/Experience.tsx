import Section from "@/components/ui/Section";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-16">
        <ExperienceHeader />
        <ExperienceTimeline />
      </div>
    </Section>
  );
}