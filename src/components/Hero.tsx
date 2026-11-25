import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-dots">
      {/* Ambient studio glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[360px] bg-accent/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-card/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm hover:border-accent/50 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
          <span className="font-mono text-white font-semibold">v1.0.0</span>
          <span className="text-zinc-600">/</span>
          <span className="text-accent">100% Free & Open Source</span>
        </div>

        {/* Main Studio Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-white leading-[1.06]">
          Skip YouTube Ads With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-hover to-white">
            A Single Keypress.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The ultra-lightweight browser extension that clicks YouTube&apos;s native Skip Ad button the millisecond it appears. No network blocking, no broken players, zero tracking.
        </p>

        {/* Animated Hover-Swap CTAs */}
        <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://addons.mozilla.org/en-GB/firefox/addon/ski-extension/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-swap w-full sm:w-auto px-7 py-4 rounded-xl bg-accent text-black font-bold text-sm hover:bg-accent-hover transition-colors glow-accent active:scale-95"
          >
            <span className="btn-swap-inner">
              <span>🦊 Get for Firefox (AMO)</span>
              <span className="btn-swap-clone" aria-hidden="true">
                <span>Add to Firefox ↗</span>
              </span>
            </span>
          </a>

          <a
            href="https://github.com/WinterJackson/ski/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-swap w-full sm:w-auto px-7 py-4 rounded-xl bg-surface-card border border-zinc-800 hover:border-accent text-white font-semibold text-sm transition-colors hover:bg-surface-hover active:scale-95 shadow-md"
          >
            <span className="btn-swap-inner">
              <span className="inline-flex items-center gap-2.5">
                <Image src="/icon/32.png" alt="Ski Icon" width={18} height={18} className="rounded" />
                <span>Chrome, Edge & Source (.zip)</span>
              </span>
              <span className="btn-swap-clone text-accent" aria-hidden="true">
                <span>Download v1.0.0 Release ↗</span>
              </span>
            </span>
          </a>
        </div>

        {/* Micro Trust Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="text-success">●</span> Firefox & Android
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-success">●</span> Edge & Chrome MV3
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-success">●</span> Zero Telemetry
          </span>
        </div>
      </div>
    </section>
  );
}
