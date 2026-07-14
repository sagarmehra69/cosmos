import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Data Visualization",
];

export default function AboutStory() {
  return (
    <div className="flex h-full flex-col justify-center">
      {/* Heading */}

      <h3
        className="
          text-3xl
          font-bold
          leading-tight
          text-white

          lg:text-4xl
        "
      >
        Transforming Data into
        <span className="block text-violet-400">
          Business Insights
        </span>
      </h3>

      {/* Story */}

      <div
        className="
          mt-8
          space-y-6

          text-lg
          leading-8

          text-slate-400
        "
      >
        <p>
          I recently completed my <strong className="text-white">Bachelor of Computer Applications (BCA)</strong> and
          have been building practical experience through internships,
          analytics projects, and continuous upskilling in modern data
          technologies.
        </p>

        <p>
          My journey includes a <strong className="text-white">Data Analyst Internship at Unified Mentor</strong> and
          my current role as a <strong className="text-violet-300">Data Analyst Intern at Ennoia SofTech Pvt. Ltd.</strong>,
          where I work with real business datasets, perform exploratory data
          analysis, build dashboards, automate workflows, and generate insights
          that support data-driven decision-making.
        </p>

        <p>
          My goal is to build intelligent analytics solutions that solve
          real-world business problems while continuously progressing toward a
          career in <strong className="text-white">Data Science</strong> and
          <strong className="text-white"> Artificial Intelligence.</strong>
        </p>
      </div>

      {/* Tech Highlights */}

      <div className="mt-10 flex flex-wrap gap-3">
        {highlights.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-violet-500/20

              bg-violet-500/10

              px-4
              py-2

              text-sm
              font-medium

              text-violet-300
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTA */}

    </div>
  );
}