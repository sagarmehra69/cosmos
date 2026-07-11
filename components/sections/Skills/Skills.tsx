import SkillsGrid from "./SkillsGrid";
import SkillsHeader from "./SkillsHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden

        px-6
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-32

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-violet-500/5

          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <SkillsHeader />

        {/* Skills Grid */}

        <div className="mt-20">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}