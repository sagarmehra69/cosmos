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
      className="relative overflow-hidden px-6 py-28"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <FadeUp>
            <HeroBadge />
          </FadeUp>

          <FadeUp delay={0.2}>
            <HeroTitle />
          </FadeUp>

          <FadeUp delay={0.35}>
            <HeroTyping />
          </FadeUp>

          <FadeUp delay={0.5}>
            <HeroButtons />
          </FadeUp>

          <FadeUp delay={0.7}>
            <HeroStats />
          </FadeUp>

        </div>

        {/* Right Side */}
        <FadeUp delay={0.4}>
          <HeroImage />
        </FadeUp>

      </div>

      <div className="relative z-10 mt-10 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}