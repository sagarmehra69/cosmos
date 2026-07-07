import Section from "@/components/ui/Section";

import EducationHeader from "./EducationHeader";
import EducationTimeline from "./EducationTimeline";

export default function Education() {
  return (
    <Section id="education">
      <div className="space-y-16">
        <EducationHeader />
        <EducationTimeline />
      </div>
    </Section>
  );
}