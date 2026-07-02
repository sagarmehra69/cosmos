type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-violet-600 hover:bg-violet-500 text-white"
      : "border border-white/20 hover:bg-white/10 text-white";

  return (
    <button
      className={`rounded-2xl px-8 py-4 font-semibold transition ${styles}`}
    >
      {children}
    </button>
  );
}