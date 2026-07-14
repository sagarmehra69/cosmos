import FadeUp from "@/components/ui/FadeUp";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroTitle from "./HeroTitle";
import HeroTyping from "./HeroTyping";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate

        flex
        min-h-screen

        overflow-hidden

        px-6
      "
    >
      <HeroBackground />

      <div
        className="
          relative
          z-10

          mx-auto

          flex
          w-full
          max-w-7xl
          flex-col
          justify-between
        "
      >
        {/* ============================
            Main Hero
        ============================ */}

        <div
          className="
            flex-1

            grid
            items-center

            gap-16

            pt-24

            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* Left */}

          <div>
            <FadeUp>
              <HeroTitle />
            </FadeUp>

            <FadeUp delay={0.08}>
              <HeroTyping />
            </FadeUp>

            <FadeUp delay={0.16}>
              <HeroButtons />
            </FadeUp>

            <FadeUp delay={0.24}>
              <HeroStats />
            </FadeUp>
          </div>

          {/* Right */}

          <div
            className="
              flex
              items-center
              justify-center
            "
          >
            <FadeUp delay={0.15}>
              <HeroImage />
            </FadeUp>
          </div>
        </div>

        {/* ============================
            Scroll Indicator
        ============================ */}

        <div
          className="
            flex
            justify-center

            pb-8
          "
        >
          <FadeUp delay={0.5}>
            <ScrollIndicator />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}