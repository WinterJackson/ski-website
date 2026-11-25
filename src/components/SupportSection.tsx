export default function SupportSection() {
  return (
    <section id="support" className="py-24 border-t border-zinc-800/80 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          ☕ Independent & Community Supported
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Help Keep Ski Free & Open Source
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Ski Extension is built without ads, sponsors, or tracking. If Ski has saved you time and frustration, consider buying a coffee to support continued development and maintenance.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://paystack.shop/pay/ski-extension"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-support text-white font-bold text-sm hover:opacity-90 transition-all shadow-[0_0_25px_rgba(255,129,63,0.3)] active:scale-95"
          >
            <span className="text-lg">☕</span>
            <span>Support Ski</span>
          </a>

          <a
            href="https://github.com/sponsors/WinterJackson"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-surface-card border border-zinc-700 hover:border-pink-500/60 text-white font-semibold text-sm transition-all hover:bg-surface-hover active:scale-95 shadow-md"
          >
            <span className="text-pink-400">♥</span>
            <span>GitHub Sponsors</span>
          </a>
        </div>

        <div className="pt-8 border-t border-zinc-800/80 text-xs text-zinc-500">
          Backed by <a href="https://xinteck.co.ke/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-accent underline underline-offset-4">Xinteck Digital Solutions</a> · Crafted with precision in Nairobi, Kenya.
        </div>
      </div>
    </section>
  );
}

