import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Universe from "@/components/effects/Universe";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sagar Mehra | Data Analyst",
    template: "%s | Sagar Mehra",
  },
  description:
    "Portfolio of Sagar Mehra, an aspiring Data Analyst specializing in SQL, Python, Power BI, Excel, Statistics, and Data Visualization while progressing toward Data Science and AI Engineering.",

  keywords: [
    "Sagar Mehra",
    "Data Analyst",
    "Portfolio",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Statistics",
    "Data Visualization",
    "Machine Learning",
    "Data Science",
    "Next.js",
    "React",
    "TypeScript",
  ],

  authors: [
    {
      name: "Sagar Mehra",
    },
  ],

  creator: "Sagar Mehra",

  // metadataBase: new URL("https://sagarmehra.dev"), // Change this after buying your domain

  openGraph: {
    title: "Sagar Mehra | Data Analyst",
    description:
      "Aspiring Data Analyst building real-world projects in SQL, Python, Power BI, Excel, and Statistics.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sagar Mehra | Data Analyst",
    description:
      "Portfolio showcasing projects in Data Analytics, SQL, Python, Power BI, and Data Science.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased">
        <Universe />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}