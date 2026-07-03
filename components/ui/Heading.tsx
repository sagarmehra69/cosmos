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
      <p className="uppercase tracking-[0.35em] text-violet-400 text-sm">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}