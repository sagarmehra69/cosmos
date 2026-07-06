import { stars } from "@/data/stars";

export default function StarField() {
  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </>
  );
}