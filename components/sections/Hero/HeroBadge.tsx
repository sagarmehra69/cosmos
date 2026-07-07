export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 backdrop-blur-md">
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

      <span className="text-sm font-medium tracking-wide text-violet-200">
        OPEN TO DATA ANALYST OPPORTUNITIES
      </span>
    </div>
  );
}