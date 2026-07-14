import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Contact } from "@/types/contact";

interface ContactCardProps {
  contact: Contact;
}

const icons = {
  Mail,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  MapPin,
};

export default function ContactCard({
  contact,
}: ContactCardProps) {
  const Icon =
    icons[contact.icon as keyof typeof icons];

  return (
    <Link
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={
        contact.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="
        group
        relative
        flex
        h-full
        items-center
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/40
        hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center gap-5">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-500/15
            text-violet-400
            transition-all
            duration-300
            group-hover:bg-violet-500
            group-hover:text-white
          "
        >
          <Icon size={24} />
        </div>

        <div>

          <p className="text-sm text-slate-400">
            {contact.title}
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white break-all">
            {contact.value}
          </h3>

        </div>

      </div>

      {contact.href !== "#" && (
        <ArrowUpRight
          size={22}
          className="
            relative
            z-10
            text-slate-500
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-violet-400
          "
        />
      )}
    </Link>
  );
}