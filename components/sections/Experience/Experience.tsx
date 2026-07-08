import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <ExperienceHeader />

        <ExperienceTimeline />

      </div>
    </section>
  );
}