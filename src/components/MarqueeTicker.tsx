const TICKER_ITEMS = [
  "Firefox & Android",
  "Microsoft Edge",
  "Chrome MV3",
  "Zero Telemetry",
  "8-Signal Self-Healing",
  "30+ Languages",
  "Double-Ad Mastery",
  "MIT Open Source",
  "< 22 KB Footprint",
];

export default function MarqueeTicker() {
  return (
    <div className="relative border-y border-zinc-800/80 bg-surface py-4 overflow-hidden marquee-wrap select-none">
      {/* Subtle left & right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent z-10" />

      <div className="animate-marquee">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6 text-xs sm:text-sm font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0" />
            <span className="whitespace-nowrap tracking-wide uppercase font-medium text-zinc-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
