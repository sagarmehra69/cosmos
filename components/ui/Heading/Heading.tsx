interface HeadingProps {
  eyebrow: string;
  title: string;
}

export default function Heading({
  eyebrow,
  title,
}: HeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold md:text-6xl">
        {title}
      </h2>
    </div>
  );
}