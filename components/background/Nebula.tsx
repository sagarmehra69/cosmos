export default function Nebula() {
  return (
    <>
      <div
        className="
          absolute
          left-[-10%]
          top-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-600/15
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          right-[-10%]
          top-[40%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[220px]
        "
      />

      <div
        className="
          absolute
          bottom-[-10%]
          left-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-fuchsia-500/10
          blur-[200px]
        "
      />
    </>
  );
}