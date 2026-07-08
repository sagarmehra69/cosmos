"use client";

import { Project } from "@/types/project";

interface ProjectTabsProps {
  projects: Project[];
  selectedProject: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectTabs({
  projects,
  selectedProject,
  onSelect,
}: ProjectTabsProps) {
  return (
    <div className="mb-14 overflow-x-auto">
      <div className="flex min-w-max justify-center gap-4 pb-2">
        {projects.map((project) => {
          const active =
            project.title === selectedProject.title;

          return (
            <button
              key={project.title}
              onClick={() => onSelect(project)}
              className={`
                whitespace-nowrap
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  active
                    ? "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
                }
              `}
            >
              {project.shortTitle}
            </button>
          );
        })}
      </div>
    </div>
  );
}