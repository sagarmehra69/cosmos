import {
  BrainCircuit,
  ChartColumnIncreasing,
  Lightbulb,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: BrainCircuit,
    title: "Analytical Thinking",
    description:
      "I enjoy breaking down complex problems into structured, data-driven solutions that create measurable impact.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Business Impact",
    description:
      "Every dashboard, analysis, and visualization should help stakeholders make smarter business decisions.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Technology evolves every day, and I believe learning should never stop. Every project is an opportunity to improve.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "I'm always exploring new tools, AI technologies, and modern analytics techniques to solve real-world challenges.",
  },
];

export default function CoreValues() {
  return (
    <section className="mt-32">
      {/* Heading */}

      <div className="max-w-3xl">
        <p
          className="
            text-sm
            font-semibold

            uppercase

            tracking-[0.35em]

            text-violet-400
          "
        >
          What Drives Me
        </p>

        <h3
          className="
            mt-4

            text-4xl
            font-bold

            text-white
          "
        >
          The principles behind every project I build.
        </h3>

        <p
          className="
            mt-6

            text-lg
            leading-8

            text-slate-400
          "
        >
          Beyond writing code, I focus on building meaningful solutions that
          combine analytical thinking, business understanding, and continuous
          learning.
        </p>
      </div>

      {/* Grid */}

      <div
        className="
          mt-14

          grid
          gap-6

          md:grid-cols-2
        "
      >
        {values.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="
              group

              rounded-3xl

              border
              border-white/10

              bg-white/[0.03]

              p-7

              backdrop-blur-xl

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-violet-500/25
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                bg-violet-500/10

                text-violet-400

                transition-transform
                duration-300

                group-hover:scale-110
              "
            >
              <Icon size={26} />
            </div>

            <h4
              className="
                mt-6

                text-xl
                font-semibold

                text-white
              "
            >
              {title}
            </h4>

            <p
              className="
                mt-4

                leading-7

                text-slate-400
              "
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}