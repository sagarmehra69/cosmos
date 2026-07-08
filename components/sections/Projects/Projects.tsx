"use client";

import { useState } from "react";

import { projects } from "@/data/projects";

import ProjectsHeader from "./ProjectsHeader";
import ProjectTabs from "./ProjectTab";
import ProjectViewer from "./ProjectViewer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        <ProjectsHeader />

        <div className="mt-16">

          <ProjectTabs
            projects={projects}
            selectedProject={selectedProject}
            onSelect={setSelectedProject}
          />

          <ProjectViewer
            project={selectedProject}
          />

        </div>

      </div>

    </section>
  );
}