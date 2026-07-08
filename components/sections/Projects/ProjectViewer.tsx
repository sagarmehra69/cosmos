"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";
import TechBadge from "./TechBadge";

interface ProjectViewerProps {
  project: Project;
}

export default function ProjectViewer({
  project,
}: ProjectViewerProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.35 }}
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
        "
      >
        {/* Screenshot */}

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}

        <div className="p-10">

          <div className="flex flex-wrap items-center gap-3">

            {project.featured && (
              <span className="rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
                Featured Project
              </span>
            )}

            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-xs text-violet-300">
              Data Analytics
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-black text-white">
            {project.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Highlights */}

          <div className="mt-10">

            <h3 className="mb-5 text-xl font-semibold text-white">
              Key Highlights
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-violet-400"
                  />

                  <span className="text-slate-300">
                    {highlight}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Tech */}

          <div className="mt-10">

            <h3 className="mb-5 text-xl font-semibold text-white">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  technology={tech}
                />
              ))}

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                font-medium
                text-white
                transition-all
                hover:border-violet-500
                hover:bg-violet-500/10
              "
            >
              <FaGithub size={18} />

              GitHub
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-violet-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition-all
                  hover:bg-violet-500
                "
              >
                <ExternalLink size={18} />

                Live Demo
              </a>
            )}

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}