import FadeUp from "@/components/ui/FadeUp";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
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
      className="relative overflow-hidden px-6 py-24"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Left */}

        <div className="order-2 text-center lg:order-1 lg:text-left">

          <FadeUp>
            <HeroBadge />
          </FadeUp>

          <FadeUp delay={0.15}>
            <HeroTitle />
          </FadeUp>

          <FadeUp delay={0.30}>
            <HeroTyping />
          </FadeUp>

          <FadeUp delay={0.45}>
            <HeroButtons />
          </FadeUp>

          <FadeUp delay={0.60}>
            <HeroStats />
          </FadeUp>

        </div>

        {/* Right */}

        <div className="order-1 flex justify-center lg:order-2">

          <FadeUp delay={0.25}>
            <HeroImage />
          </FadeUp>

        </div>

      </div>

      <div className="relative z-10 mt-10 flex justify-center">
        <ScrollIndicator />
      </div>

    </section>
  );
}