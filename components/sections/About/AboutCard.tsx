import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export default function AboutCard({
  icon: Icon,
  title,
  value,
  description,
}: AboutCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        p-7

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-violet-500/25
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-12
          -top-12

          h-40
          w-40

          rounded-full

          bg-violet-500/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
          relative

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-2xl

          bg-violet-500/10

          text-violet-400

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:bg-violet-500/15
        "
      >
        <Icon size={26} strokeWidth={2} />
      </div>

      {/* Content */}

      <div className="relative mt-8">
        <p
          className="
            text-sm
            font-medium

            uppercase

            tracking-[0.18em]

            text-slate-500
          "
        >
          {title}
        </p>

        <h3
          className="
            mt-3

            text-xl
            font-bold

            leading-snug

            text-white
          "
        >
          {value}
        </h3>

        <p
          className="
            mt-4

            text-[15px]
            leading-7

            text-slate-400
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom Accent */}

      <div
        className="
          relative

          mt-8

          h-[2px]
          w-0

          rounded-full

          bg-gradient-to-r
          from-violet-500
          via-fuchsia-400
          to-cyan-400

          transition-all
          duration-500

          group-hover:w-full
        "
      />
    </article>
  );
}