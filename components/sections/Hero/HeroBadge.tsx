export default function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-violet-500/20
        bg-white/5
        px-5
        py-2
        backdrop-blur-xl
      "
    >
      <span className="relative flex h-3 w-3">

        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

      </span>

      <span className="text-sm font-medium text-slate-300">
        Open to Data Analyst Opportunities
      </span>
    </div>
  );
}