import Reveal from "./Reveal";

const SIGNALS = [
  { label: "Multilingual Skip Text (30+ langs)", pct: "30%", w: "w-[85%]" },
  { label: "Player Quadrant Geometry", pct: "15%", w: "w-[55%]" },
  { label: "Ad Overlay Ancestor", pct: "13%", w: "w-[48%]" },
  { label: "Semantic Class & ARIA Hints", pct: "17%", w: "w-[62%]" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-zinc-800/80 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
              ⚡ Core Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineered to Never Break
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              Built like a surgical instrument, not a bloated filter list. Every piece is lightweight, self-healing, and private.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric Oxnod Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Wide (2 cols) — 8-Signal Self-Healing Engine */}
          <Reveal delay={50} className="md:col-span-2">
            <div className="bento-card h-full p-7 rounded-2xl bg-surface-card border border-zinc-800/90 hover:border-accent/40 flex flex-col justify-between gap-6">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    01 / Self-Healing Engine
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    8-Signal Scorer
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Survives YouTube Redesigns Automatically
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                  When YouTube scrambles CSS class names, Ski scores every interactive element inside the player using 8 weighted signals and caches the newly learned selector locally.
                </p>
              </div>

              {/* Mini Visual Telemetry Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SIGNALS.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-background/70 border border-zinc-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-300 font-medium truncate pr-2">{s.label}</span>
                      <span className="font-mono text-accent font-semibold tabular-nums">{s.pct}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className={`h-full rounded-full bg-accent ${s.w}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2: 1 col — One-Key Capture */}
          <Reveal delay={120}>
            <div className="bento-card h-full p-7 rounded-2xl bg-surface-card border border-zinc-800/90 hover:border-accent/40 flex flex-col justify-between gap-6 group">
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  02 / Capture Phase
                </span>
                <h3 className="text-xl font-bold text-white">
                  One-Key Precision
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Intercepts <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 text-xs">Tab</kbd> before YouTube&apos;s handlers can swallow it. Zero conflict with K, J, L, or Space.
                </p>
              </div>

              {/* Tactile Keycap Visual */}
              <div className="p-5 rounded-xl bg-background/80 border border-zinc-800 flex items-center justify-center">
                <div className="px-6 py-3 rounded-xl bg-zinc-900 border-2 border-zinc-700 border-b-4 group-hover:border-accent group-hover:translate-y-0.5 transition-all shadow-lg flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-white">Tab ⇥</span>
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: 1 col — Zero Telemetry */}
          <Reveal delay={180}>
            <div className="bento-card h-full p-7 rounded-2xl bg-surface-card border border-zinc-800/90 hover:border-success/40 flex flex-col justify-between gap-6">
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-success">
                  03 / Privacy First
                </span>
                <h3 className="text-xl font-bold text-white">
                  100% Local Execution
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  No analytics, no accounts, and zero external network requests. Settings & stats never leave your device.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-background/80 border border-zinc-800 text-center">
                  <div className="font-display text-2xl font-extrabold text-success tabular-nums">0 KB</div>
                  <div className="font-mono text-[11px] text-zinc-500">Data Sent</div>
                </div>
                <div className="p-3 rounded-xl bg-background/80 border border-zinc-800 text-center">
                  <div className="font-display text-2xl font-extrabold text-white tabular-nums">&lt; 22 KB</div>
                  <div className="font-mono text-[11px] text-zinc-500">Script Size</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Wide (2 cols) — Consecutive Double Ads & Mobile */}
          <Reveal delay={240} className="md:col-span-2">
            <div className="bento-card h-full p-7 rounded-2xl bg-surface-card border border-zinc-800/90 hover:border-accent/40 flex flex-col justify-between gap-6">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    04 / Hands-Free & Mobile Ready
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Desktop + Android
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Consecutive Double-Ad Mastery & Auto-Skip
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                  Automatically chains through double ads without blinking toasts or double-counting. On touch devices (Firefox for Android & Kiwi Browser), hands-free Auto-Skip activates automatically.
                </p>
              </div>

              {/* Clean Timeline Pill */}
              <div className="p-4 rounded-xl bg-background/70 border border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300">
                  Ad 1 of 2 → <span className="text-accent">Skipping</span>
                </span>
                <span className="text-zinc-600">•••</span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300">
                  Ad 2 of 2 → <span className="text-accent">Skipping</span>
                </span>
                <span className="text-zinc-600">•••</span>
                <span className="px-3 py-1.5 rounded-lg bg-success/10 border border-success/30 text-success font-semibold">
                  ✓ Ad skipped ⏭
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
