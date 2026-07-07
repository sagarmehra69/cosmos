export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: "Internship" | "Full Time" | "Freelance" | "Training";
  description: string;
  technologies: string[];
  current: boolean;
}

export const experience: Experience[] = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "Unified Mentor",
    duration: "Feb (2026) - May (2026)",
    location: "Remote",
    type: "Internship",
    description:
      "Worked on real-world data analytics projects involving data cleaning, exploratory data analysis, dashboard creation, and business insight generation using Python, SQL, and Power BI. Collaborated on practical datasets to strengthen analytical thinking and problem-solving skills.",

    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "NumPy",
      "Excel"
    ],

    current: true
  }

];
