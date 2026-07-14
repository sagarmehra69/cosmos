"use client";

import Link from "next/link";

import { useScrolled } from "@/hooks/useScrolled";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        transition-all
        duration-300

        ${
          scrolled
            ? "border-white/15 bg-black/70 backdrop-blur-2xl shadow-lg shadow-black/20"
            : "border-white/10 bg-black/30 backdrop-blur-xl"
        }
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          transition-all
          duration-300

          ${scrolled ? "h-16" : "h-20"}
        `}
      >
        {/* Empty Left Space */}

        <div className="hidden w-40 lg:block" />

        {/* Center Navigation */}

        <NavLinks />

        {/* Right Side */}

        <div className="flex items-center gap-4">
          <Link
            href="/Resume.pdf"
            target="_blank"
            className="
              hidden
              lg:inline-flex
              items-center
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-violet-300
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-violet-400
              hover:bg-violet-500
              hover:text-white
              hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
            "
          >
            Resume ↗
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}