export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <p className="text-violet-400">
          Welcome to my universe 👋
        </p>

        <h1 className="mt-4 text-6xl font-bold">
          Hi, I'm Sagar
        </h1>

        <h2 className="mt-3 text-2xl text-gray-400">
          AI Engineer • Data Scientist • ML Engineer
        </h2>

        <p className="mt-6 max-w-xl text-gray-400">
          Building intelligent software that solves real-world problems using
          Artificial Intelligence, Machine Learning, and Data Science.
        </p>
        <div className="mt-8 flex justify-center gap-4">

           <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500 transition">
               Explore Universe
           </button>

           <button className="rounded-xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">
               Download Resume
           </button>

        </div>
        </div>
     </section>
  );
}