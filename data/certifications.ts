// export interface Certification {
//   id: number;
//   title: string;
//   issuer: string;
//   issueDate: string;
//   credentialUrl: string;
//   skills: string[];
// }

// export const certifications: Certification[] = [];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  status: "Completed" | "In Progress";
  credentialUrl: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    issueDate: "In Progress",
    status: "In Progress",
    credentialUrl: "",
    skills: [
      "SQL",
      "Spreadsheets",
      "R",
      "Data Visualization",
      "Analytics"
    ]
  }
];