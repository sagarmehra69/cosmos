import { hero } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <a
        href={hero.buttons.primary.href}
        className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500"
      >
        {hero.buttons.primary.text}
      </a>

      <a
        href={hero.buttons.secondary.href}
        className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
      >
        {hero.buttons.secondary.text}
      </a>
    </div>
  );
}