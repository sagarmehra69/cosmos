const stars = Array.from({ length: 120 }, (_, index) => ({
  id: index,
  size: (index % 5) + 1,
  top: `${(index * 7) % 100}%`,
  left: `${(index * 11) % 100}%`,
  opacity: [0.3, 0.5, 0.7, 0.9, 1][index % 5],
  duration: 2 + (index % 4) * 1.2,
  delay: (index % 6) * 0.6,
}));

export default function Stars() {
  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
}