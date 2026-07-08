import AboutHeader from "./AboutHeader";
import AboutStory from "./AboutStory";
import JourneyTimeline from "./JourneyTimeline";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <AboutHeader />

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          <AboutStory />

          <JourneyTimeline />

        </div>

        <div className="mt-24">
          <AboutCards />
        </div>

      </div>
    </section>
  );
}