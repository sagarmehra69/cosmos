export default function HeroBackground() {
  return (
    <>
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="absolute left-0 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
    </>
  );
}