import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectLinksProps {
  github: string;
  demo: string;
}

export default function ProjectLinks({
  github,
  demo,
}: ProjectLinksProps) {
  return (
    <div className="mt-6 flex gap-6">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
      >
        <FaGithub size={18} />
        GitHub
      </a>

      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
      >
        <ExternalLink size={18} />
        Live Demo
      </a>
    </div>
  );
}