import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Project } from "@/data/projects";

import ProjectLinks from "./ProjectLinks";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">

      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-6">

        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        <ProjectLinks
          github={project.github}
          demo={project.demo}
        />

      </div>

    </Card>
  );
}