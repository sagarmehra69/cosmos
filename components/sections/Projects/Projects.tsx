import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  return (
    <section
      id="projects"
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

          left-1/2
          top-24

          h-[520px]
          w-[520px]

          -translate-x-1/2

          rounded-full

          bg-violet-600/8

          blur-[190px]
        "
      />

      {/* ===================================
          Content
      ==================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <ProjectsHeader />

        {/* Featured Projects */}

        <div className="mt-20">
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}