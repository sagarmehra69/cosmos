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
    <article
      className="
        group
        flex

       w-full

        flex-col

        overflow-hidden

        rounded-2xl

        border
        border-white/10

        bg-white/[0.03]

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-1.5
        hover:border-violet-500/25
        hover:shadow-[0_18px_45px_rgba(139,92,246,0.15)]
      "
    >
      {/* Image */}

      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />

        {project.featured && (
          <span
            className="
              absolute
              left-4
              top-4

              rounded-full

              bg-violet-600

              px-3
              py-1

              text-[11px]
              font-semibold

              text-white
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-5">
        <h3
          className="
            text-xl
            font-bold

            text-white

            transition-colors

            group-hover:text-violet-300
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-3

            line-clamp-2

            text-[15px]
            leading-6

            text-slate-400
          "
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies
            .slice(0, 4)
            .map((tech) => (
              <TechBadge
                key={tech}
                technology={tech}
              />
            ))}
        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-white/10" />

        {/* Footer */}

        <div className="flex items-center justify-between">
          <Link
            href={project.github}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2

              text-sm
              font-medium

              text-slate-300

              transition-colors

              hover:text-white
            "
          >
            <FaGithub size={17} />
            GitHub
          </Link>

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2

                text-sm
                font-medium

                text-violet-400

                transition-colors

                hover:text-violet-300
              "
            >
              Live Demo
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}