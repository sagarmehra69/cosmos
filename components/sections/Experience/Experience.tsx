import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden

        px-6
        py-32
      "
    >
      {/* ===================================
          Background Glow
      ==================================== */}

      <div
        className="
          absolute

          left-0
          top-32

          h-[520px]
          w-[520px]

          rounded-full

          bg-violet-600/8

          blur-[190px]
        "
      />

      {/* ===================================
          Content
      ==================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}

        <ExperienceHeader />

        {/* Timeline */}

        <div className="mt-20">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}