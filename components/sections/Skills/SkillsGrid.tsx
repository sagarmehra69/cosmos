import {
  BrainCircuit,
  ChartColumn,
  Code2,
  Database,
} from "lucide-react";

import SkillCard from "./SkillCard";

const skillCategories = [
  {
    icon: ChartColumn,
    title: "Data Analytics",
    description:
      "Transforming raw datasets into meaningful insights through analysis, visualization, and business intelligence.",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Building predictive models and intelligent systems using modern machine learning libraries and workflows.",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Model Evaluation",
      "Feature Engineering",
      "Data Preprocessing",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    description:
      "Designing, querying, and managing structured data for efficient analytics and scalable applications.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "DBMS",
      "SQL Optimization",
    ],
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Creating modern web applications and data solutions with clean architecture and best development practices.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Git",
      "GitHub",
      "Streamlit",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <div
      className="
        grid
        gap-8

        lg:grid-cols-2
      "
    >
      {skillCategories.map((category) => (
        <SkillCard
          key={category.title}
          {...category}
        />
      ))}
    </div>
  );
}