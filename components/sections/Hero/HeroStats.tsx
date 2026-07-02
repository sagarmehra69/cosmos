export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
        <h3 className="text-3xl font-bold">5+</h3>
        <p className="mt-2 text-gray-400">Projects</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
        <h3 className="text-3xl font-bold">15+</h3>
        <p className="mt-2 text-gray-400">Technologies</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
        <h3 className="text-3xl font-bold">AI</h3>
        <p className="mt-2 text-gray-400">Focused Career</p>
      </div>

    </div>
  );
}