import Heading from "@/components/ui/Heading";
import { about } from "@/data/about";

export default function AboutContent() {
  return (
    <div className="space-y-8">
      <Heading
        eyebrow={about.eyebrow}
        title={about.title}
      />

      <p className="leading-8 text-slate-400">
        {about.description}
      </p>

      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Current Mission
          </h3>

          <p className="leading-7 text-slate-400">
            {about.currentMission}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Future Mission
          </h3>

          <p className="leading-7 text-slate-400">
            {about.futureMission}
          </p>
        </div>
      </div>
    </div>
  );
}