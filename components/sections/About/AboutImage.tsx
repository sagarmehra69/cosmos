export default function AboutImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[420px] w-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mb-6 text-6xl">👨‍💻</div>

        <h3 className="text-xl font-semibold">
          Sagar Mehra
        </h3>

        <p className="mt-2 text-center text-slate-400">
          Data Analyst
        </p>

        <p className="mt-6 text-sm text-slate-500">
          Professional Photo
        </p>
      </div>
    </div>
  );
}