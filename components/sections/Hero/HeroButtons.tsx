export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      {/* Explore Projects */}
      <a
        href="#projects"
        className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
      >
        Explore Projects
      </a>

      {/* Download Resume */}
      <a
        href="/resume/87j Resume.pdf"
        download
        className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-violet-400 hover:bg-white/10"
      >
        Download Resume
      </a>
    </div>
  );
}