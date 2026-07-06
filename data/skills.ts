export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "💻",
    description: "Building efficient and scalable software.",
    skills: ["Python", "SQL", "Java", "C"],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    description: "Transforming raw data into meaningful insights.",
    skills: ["Excel", "Power BI", "Pandas", "NumPy"],
  },
  {
    title: "Machine Learning",
    icon: "🤖",
    description: "Learning intelligent systems and predictive models.",
    skills: ["Scikit-learn", "TensorFlow", "Statistics", "EDA"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    description: "Modern development workflow and collaboration.",
    skills: ["Git", "GitHub", "VS Code", "Linux"],
  },
];