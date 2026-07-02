export default function Background() {
  return (
    <>
      {/* Main Space Background */}
      <div className="fixed inset-0 -z-50 bg-[#030014]" />

      {/* Purple Glow */}
      <div className="fixed left-1/2 top-20 -z-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-700/20 blur-3xl" />

      {/* Blue Glow */}
      <div className="fixed bottom-20 right-20 -z-40 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
    </>
  );
}