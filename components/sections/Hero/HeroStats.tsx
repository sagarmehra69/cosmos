const stats = [
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "∞",
    label: "Continuous Learning",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 flex flex-wrap justify-center gap-12 lg:justify-start">

      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-4xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
}