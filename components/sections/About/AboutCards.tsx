import {
  Brain,
  Briefcase,
  ChartColumn,
  Target,
} from "lucide-react";

import AboutCard from "./AboutCard";

const cards = [
  {
    icon: <Target size={34} />,
    title: "Career Goal",
    description:
      "Become an AI Engineer by mastering Data Analytics, Machine Learning and Artificial Intelligence.",
  },
  {
    icon: <ChartColumn size={34} />,
    title: "Data Analytics",
    description:
      "Skilled in SQL, Excel, Python and Power BI for transforming raw data into business insights.",
  },
  {
    icon: <Brain size={34} />,
    title: "AI & Machine Learning",
    description:
      "Building predictive models and continuously expanding expertise in Data Science and AI.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Current Focus",
    description:
      "Creating impactful portfolio projects while preparing for Data Analyst roles in top technology companies.",
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (
        <AboutCard
          key={card.title}
          {...card}
        />
      ))}

    </div>
  );
}