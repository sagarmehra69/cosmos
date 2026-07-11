import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import AboutCard from "./AboutCard";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "Bachelor of Computer Applications",
    description:
      "Strong foundation in programming, databases, software engineering, and analytics.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experience",
    value: "2 Data Analytics Internships",
    description:
      "Hands-on experience solving real business problems using modern analytics tools.",
  },
  {
    icon: BrainCircuit,
    title: "Specialization",
    value: "Data Analytics & AI",
    description:
      "Focused on Python, SQL, Power BI, Machine Learning, and Business Intelligence.",
  },
  {
    icon: Award,
    title: "Approach",
    value: "Continuous Learning",
    description:
      "Committed to building production-ready solutions while improving every day.",
  },
];

export default function AboutCards() {
  return (
    <div
      className="
        grid
        gap-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >
      {cards.map((card) => (
        <AboutCard key={card.title} {...card} />
      ))}
    </div>
  );
}