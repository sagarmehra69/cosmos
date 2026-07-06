export default function GradientGlow() {
  return (
    <>
      <div
        className="
          absolute
          left-[-150px]
          top-[-150px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-violet-600/20
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-200px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-600/10
          blur-[220px]
        "
      />
    </>
  );
}