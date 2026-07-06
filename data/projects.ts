export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Retail Sales Analysis",
    category: "Data Analytics",
    description:
      "Analyzed retail sales data to uncover customer purchasing patterns and business insights using Python and Power BI.",

    image: "/images/projects/placeholder.jpg",

    technologies: [
      "Python",
      "Pandas",
      "Power BI",
      "SQL",
    ],

    github: "https://github.com",

    demo: "https://example.com",

    featured: true,
  },
];