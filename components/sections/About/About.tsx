import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        <AboutImage />

        <AboutContent />

      </div>
    </section>
  );
}