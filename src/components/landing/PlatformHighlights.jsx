
export default function PlatformHighlights() {
  const metrics = [
    {
      value: "Live",
      label: "COLLABORATIVE WORKSPACE",
      highlight: true,
    },
    {
      value: "Multi-language",
      label: "CODE EDITING",
    },
    {
      value: "Built-in",
      label: "PEER LEARNING",
    },
    {
      value: "One place",
      label: "CODE & CONVERSATION",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#080d1b] px-4 py-10 sm:px-6 md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div
              className={`break-words text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl ${
                metric.highlight ? "text-emerald-400" : "text-white"
              }`}
            >
              {metric.value}
            </div>

            <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[10px]">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
