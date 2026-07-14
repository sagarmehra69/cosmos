import { cn } from "@/lib/utils";
import { GlassCardProps } from "./types";

export default function GlassCard({
  hover = true,
  glow = false,
  className,
  children,
  ...props
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

        bg-white/[0.05]

        backdrop-blur-2xl

        transition-all
        duration-500

        shadow-[0_8px_40px_rgba(0,0,0,.35)]
        `,

        hover &&
          `
          hover:-translate-y-2
          hover:border-violet-400/30
          hover:shadow-[0_20px_80px_rgba(139,92,246,.18)]
        `,

        glow &&
          `
          before:absolute
          before:inset-0
          before:bg-gradient-to-br
          before:from-violet-500/5
          before:to-cyan-500/5
          before:pointer-events-none
        `,

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}