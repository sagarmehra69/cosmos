import Link from "next/link";

import { Download, FolderOpen, Mail } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col gap-8">
      {/* Primary Buttons */}

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            bg-violet-600

            px-6
            py-3.5

            font-medium
            text-white

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-violet-500
            hover:shadow-[0_15px_45px_rgba(139,92,246,.35)]
          "
        >
          <Download size={18} />

          Download Resume
        </Link>

        <Link
          href="#projects"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-white/10

            bg-white/[0.04]

            px-6
            py-3.5

            font-medium

            text-slate-200

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-violet-400/30
            hover:bg-white/[0.06]
          "
        >
          <FolderOpen size={18} />

          View Projects
        </Link>
      </div>

      {/* Social Links */}

      <div className="flex flex-wrap items-center gap-6">
        <Link
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2

            text-slate-400

            transition-all
            duration-300

            hover:text-white
            hover:-translate-y-0.5
          "
        >
          <FaGithub className="text-xl" />

          <span>GitHub</span>
        </Link>

        <Link
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2

            text-slate-400

            transition-all
            duration-300

            hover:text-[#0A66C2]
            hover:-translate-y-0.5
          "
        >
          <FaLinkedin className="text-xl" />

          <span>LinkedIn</span>
        </Link>

        <Link
          href="mailto:YOUR_EMAIL@gmail.com"
          className="
            inline-flex
            items-center
            gap-2

            text-slate-400

            transition-all
            duration-300

            hover:text-violet-300
            hover:-translate-y-0.5
          "
        >
          <Mail size={20} />

          <span>Email</span>
        </Link>
      </div>
    </div>
  );
}