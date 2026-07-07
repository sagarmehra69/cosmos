import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
interface ContactLinksProps {
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export default function ContactLinks({
  email,
  location,
  linkedin,
  github,
}: ContactLinksProps) {
  return (
    <div className="space-y-5">

      <div className="flex items-center gap-3">
        <Mail className="text-violet-400" size={20} />
        <a href={`mailto:${email}`} className="hover:text-violet-400">
          {email}
        </a>
      </div>

      <div className="flex items-center gap-3">
        <MapPin className="text-violet-400" size={20} />
        <span>{location}</span>
      </div>

      <div className="flex items-center gap-3">
        <FaLinkedin className="text-violet-400" size={20} />
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex items-center gap-3">
        <FaGithub className="text-violet-400" size={20} />
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400"
        >
          GitHub
        </a>
      </div>

    </div>
  );
}