import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}