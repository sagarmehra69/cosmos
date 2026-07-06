interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-violet-500/30
        hover:bg-white/[0.06]
        hover:shadow-2xl hover:shadow-violet-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}