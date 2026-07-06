import Section from "@/components/ui/Section";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="space-y-16">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </Section>
  );
}