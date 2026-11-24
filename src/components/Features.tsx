export default function Features() {
  const features = [
    {
      icon: "⌨️",
      title: "One-Key Precision (Tab)",
      description: "Press Tab the instant an ad appears. Executes in the capture phase so YouTube's internal keyboard handlers cannot swallow or delay it.",
    },
    {
      icon: "⚡",
      title: "Smart Auto-Skip Mode",
      description: "Prefer a completely hands-free experience? Turn on Auto-Skip and Ski will automatically click the skip button the millisecond it unlocks.",
    },
    {
      icon: "🛡️",
      title: "Adaptive Self-Healing Engine",
      description: "An 8-signal heuristic detector evaluates element geometry, text matches, and player hierarchy. It auto-learns new selectors when YouTube updates its layout.",
    },
    {
      icon: "⏭️",
      title: "Consecutive Ad Mastery",
      description: "Handles double ads seamlessly. When 'Ad 1 of 2' finishes, Ski automatically watches for and skips 'Ad 2 of 2' with zero double-counting.",
    },
    {
      icon: "🔒",
      title: "100% Privacy & Zero Tracking",
      description: "No analytics, no telemetry, no tracking cookies, and zero external network calls. Everything runs 100% locally on your machine.",
    },
    {
      icon: "📱",
      title: "Mobile & Tablet Ready",
      description: "Full touch support on Firefox for Android and Kiwi Browser on Android. Auto-detects touch devices and enables hands-free mode automatically.",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-semibold">
            🚀 Built for Reliability
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Ski is Fundamentally Better
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Designed to solve the core flaw of conventional ad blockers: constant breakage and YouTube counter-measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 hover:border-[#3ea6ff]/40 transition-all hover:bg-zinc-900/80 group space-y-3"
            >
              <div className="text-3xl w-12 h-12 rounded-xl bg-zinc-800/60 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#3ea6ff] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
