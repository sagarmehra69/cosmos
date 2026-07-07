import { navigation } from "@/data/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-slate-300 transition hover:text-violet-400"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}