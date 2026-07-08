import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        <SkillsHeader />

        <div className="mt-24">
          <SkillsGrid />
        </div>

      </div>
    </section>
  );
}