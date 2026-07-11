"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <Link
      href="#about"
      aria-label="Scroll to About section"
      className="
        group
        inline-flex
        flex-col
        items-center
        gap-3

        text-slate-500

        transition-all
        duration-300

        hover:text-violet-400
      "
    >
      <span
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.35em]
        "
      >
        Scroll
      </span>

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-xl

          transition-all
          duration-300

          group-hover:border-violet-500/40
          group-hover:bg-violet-500/10
          group-hover:shadow-[0_0_30px_rgba(139,92,246,.2)]
        "
      >
        <ChevronDown
          size={22}
          className="
            animate-bounce
            transition-transform
            duration-300
            group-hover:translate-y-1
          "
        />
      </div>
    </Link>
  );
}