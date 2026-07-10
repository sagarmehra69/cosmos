import { cn } from "@/lib/utils";
import { GlassButtonProps } from "./types";

export default function GlassButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        `
        relative
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl
        font-medium

        transition-all
        duration-300

        active:scale-95
        disabled:opacity-50
        disabled:pointer-events-none

        overflow-hidden
        cursor-pointer
        `,

        // Sizes
        size === "sm" && "px-4 py-2 text-sm",

        size === "md" && "px-6 py-3 text-sm",

        size === "lg" && "px-8 py-4 text-base",

        // Variants
        variant === "primary" &&
          `
          bg-violet-600
          text-white

          hover:bg-violet-500
          hover:shadow-[0_0_30px_rgba(139,92,246,.45)]
        `,

        variant === "secondary" &&
          `
          bg-white/5
          border
          border-white/10

          backdrop-blur-xl

          hover:bg-white/10
          hover:border-violet-400/30
        `,

        variant === "ghost" &&
          `
          bg-transparent

          hover:bg-white/5
        `,

        className
      )}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>

      {variant === "primary" && (
        <span
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-violet-500
            via-fuchsia-500
            to-indigo-500

            opacity-0
            transition-opacity
            duration-300

            hover:opacity-100
          "
        />
      )}
    </button>
  );
}