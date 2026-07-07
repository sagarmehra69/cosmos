import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10">

      <div className="flex flex-wrap justify-center gap-5 lg:justify-start">

        <Link
          href="#projects"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-violet-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-violet-600/30
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-violet-500
            hover:shadow-violet-500/40
          "
        >
          View Projects

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-500
            hover:bg-white/10
          "
        >
          Download Resume

          <Download
            size={18}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </Link>

      </div>

      <p className="mt-6 text-sm text-slate-500">
        Available for internships, freelance projects and full-time opportunities.
      </p>

    </div>
  );
}