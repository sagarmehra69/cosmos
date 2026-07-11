import AboutCards from "./AboutCards";
import AboutHeader from "./AboutHeader";
import AboutStory from "./AboutStory";
import AboutImage from "./ProfessionalSnapshot";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        px-6
        py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* ===============================
            Section Header
        =============================== */}

        <AboutHeader />

        {/* ===============================
            Main Content
        =============================== */}

        <div
          className="
            mt-20

            grid

            items-center

            gap-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-24
          "
        >
          {/* Left */}

          <AboutImage />

          {/* Right */}

          <AboutStory />
        </div>

        {/* ===============================
            About Cards
        =============================== */}

        <div className="mt-24">
          <AboutCards />
        </div>
      </div>
    </section>
  );
}