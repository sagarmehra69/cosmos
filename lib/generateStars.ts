import SeededRandom from "./seedeRandom";

export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = [
  "#FFFFFF",
  "#F8FAFC",
  "#E2E8F0",
  "#DBEAFE",
  "#DDD6FE",
];

export function generateStars(
  count: number,
  seed: number,
  minSize: number,
  maxSize: number,
  opacityRange: [number, number]
): Star[] {
  const random = new SeededRandom(seed);

  return Array.from({ length: count }, (_, id) => ({
    id,

    x: random.next() * 100,

    y: random.next() * 100,

    size:
      minSize +
      random.next() * (maxSize - minSize),

    opacity:
      opacityRange[0] +
      random.next() *
        (opacityRange[1] - opacityRange[0]),

    duration: 4 + random.next() * 5,

    delay: random.next() * 6,

    color:
      COLORS[
        Math.floor(random.next() * COLORS.length)
      ],
  }));
}