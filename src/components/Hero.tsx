import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid">
      {/* Background glow radial */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-medium text-zinc-300 shadow-sm hover:border-accent/50 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
          <span className="text-white font-semibold">Ski v1.0.0 is Live</span>
          <span className="text-zinc-500">|</span>
          <span className="text-accent">100% Free & Open Source</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Skip YouTube Ads With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
            A Single Keypress.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The honest, ultra-fast browser extension that clicks YouTube&apos;s native Skip button the millisecond it appears. No blocking, no broken players, zero tracking.
        </p>

        {/* Call to Actions */}
        <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://addons.mozilla.org/en-GB/firefox/addon/ski-extension/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-accent text-black font-bold text-sm hover:bg-accent-hover transition-all shadow-[0_0_25px_rgba(62,166,255,0.4)] active:scale-95"
          >
            <span>🦊 Get for Firefox</span>
            <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono font-medium">AMO</span>
          </a>

          <a
            href="https://github.com/WinterJackson/ski/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-accent text-white font-semibold text-sm transition-all hover:bg-zinc-800/80 active:scale-95 shadow-md"
          >
            <Image src="/icon/32.png" alt="Ski Icon" width={20} height={20} className="rounded" />
            <span>Download Chrome & Sources</span>
            <span className="text-xs text-zinc-400 font-mono">v1.0.0</span>
          </a>
        </div>

        {/* Platform compatibility badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Firefox & Firefox Android
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Chrome & Kiwi Browser
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Zero Telemetry / No Account
          </span>
        </div>
      </div>
    </section>
  );
}

