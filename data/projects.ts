import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "NeuralRetail AI Sales Intelligence",
    shortTitle: "NeuralRetail",
    description:
      "An AI-powered retail analytics platform that combines sales forecasting, customer churn prediction and inventory intelligence into a single interactive dashboard for smarter business decisions.",

    image: "/images/projects/neural-retail.png",

    github: "https://github.com/sagarmehra69/neuralretail-ai-sales-intelligence",

    demo: "",

    featured: true,

    technologies: [
      "Python",
      "Streamlit",
      "XGBoost",
      "LSTM",
      "Prophet",
      "Pandas",
      "NumPy",
      "Plotly",
      "Scikit-learn",
    ],

    highlights: [
      "Sales Forecasting",
      "Customer Churn Prediction",
      "Inventory Intelligence",
      "Interactive Dashboard",
      "Business KPIs",
    ],
  },

  {
    title: "Student Performance Intelligence System",
    shortTitle: "SPIS",

    description:
      "A comprehensive analytics platform that monitors student performance, tracks KPIs and visualizes academic insights using interactive dashboards.",

    image: "/images/projects/spis.png",

    github: "https://github.com/sagarmehra69/student-performance-intelligence-system",

    demo: "",

    featured: false,

    technologies: [
      "Python",
      "Streamlit",
      "SQLite",
      "Pandas",
      "Plotly",
      "SQL",
    ],

    highlights: [
      "Student Analytics",
      "Performance Dashboard",
      "Interactive KPIs",
      "Reports",
    ],
  },

  {
    title: "Customer Shopping Behavior Analysis",

    shortTitle: "Shopping",
    description:
      "A retail analytics project focused on customer purchasing behaviour, exploratory data analysis and business intelligence for better retail decisions.",

    image: "/images/projects/customer-shopping.png",

    github: "https://github.com/sagarmehra69/Customer-shopping-behavior-analysis",

    demo: "",

    featured: false,

    technologies: [
      "Python",
      "Power BI",
      "Pandas",
      "Matplotlib",
      "SQL",
      "NumPy",
    ],

    highlights: [
      "Customer Segmentation",
      "EDA",
      "Business Insights",
      "Visualization",
    ],
  },

  {
    title: "UAC Care Transition Analytics",

    shortTitle: "UAC",
    description:
      "A healthcare analytics dashboard that tracks operational KPIs and visualizes care transition performance through interactive reports.",

    image: "/images/projects/uac-care.png",

    github: "https://github.com/sagarmehra69/uac-care-transition-analytics",

    demo: "",

    featured: false,

    technologies: [
      "Python",
      "Power BI",
      "Streamlit",
      "Pandas",
      "Healthcare Analytics",
    ],

    highlights: [
      "Healthcare KPIs",
      "Dashboard",
      "Interactive Reports",
      "Analytics",
    ],
  },
];