export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <p className="text-lg text-violet-400">
          Welcome to my universe 👋
        </p>

        <p className="mt-6 text-2xl text-gray-300">
          Hi, I'm 
        </p>

        <h1 className="mt-2 text-7xl font-black tracking-wide md:text-9xl">
          SAGAR
        </h1>

        <h2 className="mt-6 text-xl text-gray-400 md:text-3xl">
          AI Engineer • Data Scientist • ML Engineer
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Building intelligent software that solves real-world problems using
          Artificial Intelligence, Machine Learning and Data Science.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500">
            Explore Universe
          </button>

          <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">
            Download Resume
          </button>

        </div>

      </div>
    </section>
  );
}