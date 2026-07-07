export default function NavLogo() {
  return (
    <a
      href="#"
      aria-label="Home"
      className="group flex items-center"
    >
      <span
        className="
          h-3 w-3 rounded-full
          bg-violet-500
          shadow-[0_0_18px_rgba(139,92,246,0.8)]
          transition-all duration-300
          group-hover:scale-125
          group-hover:shadow-[0_0_28px_rgba(139,92,246,1)]
        "
      />
    </a>
  );
}