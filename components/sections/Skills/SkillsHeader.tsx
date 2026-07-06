import Heading from "@/components/ui/Heading";

export default function SkillsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Heading
        eyebrow="MISSION SKILLS"
        title="Technologies I Work With"
      />

      <p className="mt-6 text-lg leading-8 text-slate-400">
        I focus on building a strong foundation in data analytics,
        programming, machine learning, and modern development tools.
        My goal is to solve real-world problems with data while
        continuously expanding my technical expertise.
      </p>
    </div>
  );
}