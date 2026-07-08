const timeline = [
  {
    year: "2023",
    title: "Started BCA",
    description: "Began my Bachelor of Computer Applications journey and built a strong foundation in programming, databases and software engineering.",
  },
  {
    year: "2024",
    title: "Explored Data Analytics",
    description: "Learned Python, SQL, Excel, Power BI and data visualization.",
  },
  {
    year: "2025",
    title: "Built Real-World Projects",
    description: "Developed dashboards and machine learning applications.",
  },
  {
    year: "2026",
    title:  "Data Analyst Intern • Unified Mentor (Remote)",
    description: "Completed internship at Unified Mentor while developing real-world analytics projects.",
  },

   {
    year: "2026",
    title: "Data Analyst Intern • Ennoia SofTech Pvt. Ltd. (Remote)",
    description:
      "Joined Ennoia SofTech Pvt. Ltd. as a Remote Data Analyst Intern, working with real-world datasets, dashboards, exploratory data analysis, reporting and machine learning workflows.",
  },
];

export default function JourneyTimeline() {
  return (
    <div>

      <h3 className="text-3xl font-bold text-white">
        Career Timeline
      </h3>

      <div className="mt-10 space-y-10">

        {timeline.map((item) => (

          <div
            key={item.year}
            className="relative border-l border-violet-500/30 pl-8"
          >

            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-violet-500" />

            <p className="font-semibold text-violet-400">
              {item.year}
            </p>

            <h4 className="mt-2 text-xl font-semibold text-white">
              {item.title}
            </h4>

            <p className="mt-2 text-slate-400">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}