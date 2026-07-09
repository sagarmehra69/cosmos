"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        className="
          lg:hidden
          rounded-xl
          border
          border-white/10
          bg-white/5
          p-2.5
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-violet-500/40
          hover:bg-violet-500/10
        "
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Backdrop */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Drawer */}

      <div
        className={`
          fixed
          top-20
          left-4
          right-4
          z-50
          rounded-3xl
          border
          border-white/10
          bg-slate-950/95
          backdrop-blur-2xl
          p-6
          transition-all
          duration-300
          lg:hidden

          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 pointer-events-none opacity-0"
          }
        `}
      >
        <nav>
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "");

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-medium
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-violet-500/20 text-violet-300"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Divider */}

          <div className="my-6 h-px bg-white/10" />

          {/* Resume */}

          <Link
            href="/Resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-violet-600
              px-5
              py-3
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-violet-500
            "
          >
            Download Resume
          </Link>
        </nav>
      </div>
    </>
  );
}