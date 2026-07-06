import { hero } from "@/data/hero";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
          {hero.greeting}
        </p>

        <p className="mt-8 text-2xl text-slate-300">
          {hero.intro}
        </p>

        <h1 className="mt-3 text-7xl font-black tracking-tight md:text-9xl">
          {hero.name}
        </h1>

        <h2 className="mt-6 text-3xl font-semibold text-slate-200 md:text-5xl">
          {hero.role}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-400">
          {hero.description}
        </p>

        <HeroButtons />

        <HeroStats />

        <ScrollIndicator />

      </div>
    </section>
  );
}