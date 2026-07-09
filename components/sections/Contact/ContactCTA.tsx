import Link from "next/link";
import { Download, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-violet-600/10
        via-white/5
        to-transparent
        p-10
        text-center
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10">

        <h3 className="text-3xl font-bold text-white">
          Ready to Build Something Amazing?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Whether it's a Data Analytics project, AI solution,
          Machine Learning application, or a full-time opportunity,
          I'd love to hear from you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

          {/* Resume */}

          <Link
            href="/Resume.pdf"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-violet-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-violet-500
              hover:shadow-[0_15px_35px_rgba(139,92,246,0.35)]
            "
          >
            <Download size={20} />

            Download Resume
          </Link>

          {/* Email */}

          <Link
            href="mailto:3568sagarmehra@gmail.com"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-500/40
              hover:bg-violet-500/10
            "
          >
            <Mail size={20} />

            Email Me
          </Link>

        </div>

      </div>

    </div>
  );
}