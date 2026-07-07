export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  coursework: string[];
  current: boolean;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SSJ University",
    duration: "2023 - 2026",
    location: "Almora, Uttarakhand",

    description:
      "Focused on software development, data structures, databases, networking, cloud computing and machine learning while building practical projects.",

    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Cloud Computing",
      "Machine Learning",
      "Computer Networks"
    ],

    current: true
  }
];