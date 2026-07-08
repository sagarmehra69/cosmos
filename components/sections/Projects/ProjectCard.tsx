import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        flex
        h-125
        w-85
        shrink-0
        snap-center
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/5
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/40
        hover:shadow-[0_25px_70px_rgba(139,92,246,0.35)]
      "
    >
      <div className="relative h-52 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            z-10
            bg-linear-to-t
            from-black/70
            via-black/10
            to-transparent
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:brightness-110
          "
        />

        {project.featured && (
          <div
            className="
              absolute
              left-4
              top-4
              z-20
              rounded-full
              bg-violet-600/90
              px-3
              py-1
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
            "
          >
            ⭐ Featured
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-300">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} technology={tech} />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-8 transition-all duration-300 group-hover:-translate-y-1">
          <Link
            href={project.github}
            target="_blank"
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white
              transition
              hover:text-violet-400
            "
          >
            <FaGithub size={18} />
            GitHub
          </Link>

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-violet-400
                transition
                hover:text-violet-300
              "
            >
              Demo
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}