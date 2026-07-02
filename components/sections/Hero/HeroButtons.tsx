export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <button className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500">
        Explore Universe
      </button>

      <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">
        Download Resume
      </button>
    </div>
  );
}