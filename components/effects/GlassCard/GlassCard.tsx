import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl

        border
        border-white/10

        bg-white/[0.04]
        backdrop-blur-2xl

        shadow-[0_20px_80px_rgba(0,0,0,.35)]

        transition-all
        duration-500

        hover:border-violet-500/30
        hover:bg-white/[0.06]
        hover:shadow-[0_25px_100px_rgba(124,58,237,.18)]
      `,
        className
      )}
    >
      {/* Top Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* Soft Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}