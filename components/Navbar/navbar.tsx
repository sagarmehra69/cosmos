export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6">
      <nav className="w-[92%] max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            🪐 Cosmos
          </h1>

          <ul className="hidden md:flex gap-8 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>

          <button className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-medium hover:bg-violet-500 transition">
            Resume
          </button>

        </div>
      </nav>
    </header>
  );
}