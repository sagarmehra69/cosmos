"use client";

import { navigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10">
        {navigation.map((item) => {
          const isActive =
            activeSection === item.href.replace("#", "");

          return (
            <li
              key={item.name}
              className="group relative"
            >
              <a
                href={item.href}
                className={`
                  relative
                  py-2
                  text-sm
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* Active / Hover Underline */}

                <span
                  className={`
                    absolute
                    -bottom-1
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-violet-500
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}