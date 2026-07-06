import { scale } from "framer-motion/dom";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10";
  const variants = {
    primary:
      "bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500 hover:shadow-violet-500/40",

    secondary:
      "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10",
  };
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </a>
    
  );
}