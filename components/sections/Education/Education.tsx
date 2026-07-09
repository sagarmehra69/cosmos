import EducationHeader from "./EducationHeader";
import EducationGrid from "./EducationGrid";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">

        <EducationHeader />

        <div className="mt-20">

          <EducationGrid />

        </div>

      </div>

    </section>
  );
}