import Heading from "@/components/ui/Heading";

export default function ProjectsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Heading
        eyebrow="MISSION PROJECTS"
        title="Projects That Reflect My Learning"
      />

      <p className="mt-6 text-lg leading-8 text-slate-400">
        Every project represents a step in my journey from aspiring Data
        Analyst to future AI Engineer. Each one focuses on solving real-world
        problems using data, analytics, and modern technologies.
      </p>
    </div>
  );
}