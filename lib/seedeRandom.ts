export default class SeededRandom {
  private seed: number;

  constructor(seed = 12345) {
    this.seed = seed;
  }

  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min: number, max: number) {
    return min + this.next() * (max - min);
  }

  int(min: number, max: number) {
    return Math.floor(this.range(min, max + 1));
  }
}