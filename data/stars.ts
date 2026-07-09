export interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export const stars: Star[] = [
  { id: 1, top: "8%", left: "12%", size: 2, opacity: 0.8, duration: 3, delay: 0.2 },
  { id: 2, top: "18%", left: "80%", size: 3, opacity: 1, duration: 5, delay: 0.8 },
  { id: 3, top: "28%", left: "45%", size: 2, opacity: 0.7, duration: 4, delay: 1.1 },
  { id: 4, top: "42%", left: "70%", size: 1, opacity: 0.9, duration: 6, delay: 1.7 },
  { id: 5, top: "65%", left: "18%", size: 2, opacity: 0.8, duration: 5, delay: 2.3 },
  { id: 6, top: "76%", left: "82%", size: 3, opacity: 1, duration: 4, delay: 2.8 },
  { id: 7, top: "55%", left: "52%", size: 2, opacity: 0.7, duration: 6, delay: 3.2 },
  { id: 8, top: "12%", left: "58%", size: 1, opacity: 0.9, duration: 5, delay: 3.6 },
  { id: 9, top: "85%", left: "36%", size: 2, opacity: 0.8, duration: 3, delay: 4.1 },
  { id: 10, top: "33%", left: "22%", size: 3, opacity: 1, duration: 4, delay: 4.8 },
];