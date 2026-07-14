import { cn } from "@/lib/utils";
import { SectionHeadingProps } from "./types";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-1

            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]

            text-violet-300
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          text-4xl
          font-bold
          leading-tight
          tracking-tight

          text-white

          md:text-5xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            max-w-2xl
            text-base
            leading-8
            text-slate-400

            md:text-lg

            mx-auto
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}