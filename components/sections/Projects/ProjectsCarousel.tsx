"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 380;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-400">
            Swipe or use the arrows to explore projects
          </p>

          <p className="mt-1 text-sm font-medium text-violet-400">
            {projects.length} Projects
          </p>
        </div>

        {/* Navigation */}

        <div className="hidden gap-3 md:flex">

          <button
            onClick={() => scroll("left")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              hover:border-violet-500
              hover:bg-violet-600
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              hover:border-violet-500
              hover:bg-violet-600
            "
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

      {/* Projects */}

      <div
        ref={scrollRef}
        className="
          flex
          gap-8
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-4

          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>

    </div>
  );
}