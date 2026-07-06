import Button from "@/components/ui/Button";
import { hero } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <Button href={hero.buttons.primary.href}>
        {hero.buttons.primary.text}
      </Button>

      <Button
        href={hero.buttons.secondary.href}
        variant="secondary"
      >
        {hero.buttons.secondary.text}
      </Button>
    </div>
  );
}