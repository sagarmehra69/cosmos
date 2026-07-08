import ProjectsHeader from "./ProjectsHeader";
import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">

        <ProjectsHeader />

        <div className="mt-16">

          <ProjectsCarousel />

        </div>

      </div>

    </section>
  );
}