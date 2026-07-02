import { about } from "@/data/about";

export default function AboutContent() {
  return (
    <div className="space-y-6">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
        {about.eyebrow}
      </p>

      <h2 className="text-5xl font-bold">
        {about.title}
      </h2>

      <p className="text-slate-400 leading-8">
        {about.description}
      </p>

      <h3 className="text-2xl font-semibold">
        Current Mission
      </h3>

      <p className="text-slate-400">
        {about.currentMission}
      </p>

      <h3 className="text-2xl font-semibold">
        Future Mission
      </h3>

      <p className="text-slate-400">
        {about.futureMission}
      </p>
    </div>
  );
}