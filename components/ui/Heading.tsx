type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-3 text-violet-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}