"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isActive, setIsActive] = useState(true);
  const [autoSkip, setAutoSkip] = useState(false);
  const [skipCount, setSkipCount] = useState(42);

  const triggerPreviewSkip = () => {
    if (!isActive) return;
    setSkipCount((c) => c + 1);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-dots">
      {/* Ambient studio glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[520px] h-[340px] bg-accent/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2 Equal Horizontal Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Div (50%) — Copy & CTAs */}
          <div className="space-y-7 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm hover:border-accent/50 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="font-mono text-white font-semibold">v1.0.0</span>
              <span className="text-zinc-600">/</span>
              <span className="text-accent">Open Source</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.06]">
              Skip YouTube Ads With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-hover to-white">
                One Keypress.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              The ultra-lightweight browser extension that clicks YouTube&apos;s native Skip Ad button the millisecond it appears. No network blocking, no broken players, zero tracking.
            </p>

            {/* Concise CTAs (Strictly <= 2 words each) */}
            <div id="download" className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="https://addons.mozilla.org/en-GB/firefox/addon/ski-extension/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-black font-bold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all glow-accent active:scale-95"
              >
                <span>🦊</span>
                <span>Get Firefox</span>
              </a>

              <a
                href="https://github.com/WinterJackson/ski/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-card border border-zinc-800 hover:border-accent text-white font-semibold text-sm transition-all hover:bg-surface-hover hover:-translate-y-0.5 active:scale-95 shadow-md"
              >
                <Image src="/icon/32.png" alt="Ski Icon" width={18} height={18} className="rounded" />
                <span>Get Release</span>
              </a>
            </div>

            {/* Micro Trust Row */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="text-success">●</span> Firefox & Android
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-success">●</span> Edge & Chrome
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-success">●</span> Zero Telemetry
              </span>
            </div>
          </div>

          {/* Right Div (50%) — Interactive Extension Studio Preview */}
          <div className="w-full">
            <div className="bento-card relative rounded-2xl border border-zinc-800 bg-surface-card/90 p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <Image src="/icon/48.png" alt="Ski Logo" width={28} height={28} className="rounded-lg" />
                  <div>
                    <div className="font-display font-bold text-white text-sm">Ski Extension</div>
                    <div className="font-mono text-[11px] text-zinc-500">Toolbar Control</div>
                  </div>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-background border border-zinc-800 text-zinc-400">
                  v1.0.0
                </span>
              </div>

              {/* Power Card Simulation */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 mb-4 ${
                  isActive
                    ? "bg-background/80 border-accent/40 glow-accent"
                    : "bg-background/40 border-zinc-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        isActive ? "bg-accent animate-pulse" : "bg-zinc-600"
                      }`}
                    />
                    <div>
                      <div className="text-sm font-bold text-white">
                        {isActive ? "Ski is Active" : "Ski is Paused"}
                      </div>
                      <div className="text-xs text-zinc-400">
                        {autoSkip ? "Auto-skipping enabled" : "Press Tab during ads"}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                    aria-label="Toggle Ski preview"
                    className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer ${
                      isActive ? "bg-accent" : "bg-zinc-700"
                    }`}
                  >
                    <span
                      className={`block w-5 h-5 rounded-full bg-white transition-transform ${
                        isActive ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Auto-skip row */}
              <div className="p-3.5 rounded-xl bg-background/50 border border-zinc-800/80 flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs font-semibold text-zinc-200">Auto-Skip Ads</div>
                  <div className="text-[11px] text-zinc-500">Hands-free mode</div>
                </div>
                <button
                  type="button"
                  onClick={() => setAutoSkip(!autoSkip)}
                  aria-label="Toggle Auto-Skip preview"
                  className={`w-10 h-5 rounded-full transition-colors p-0.5 cursor-pointer ${
                    autoSkip ? "bg-accent" : "bg-zinc-700"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                      autoSkip ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Stats + Test Button */}
              <div className="grid grid-cols-3 gap-3 items-center">
                <div className="p-3 rounded-xl bg-background/60 border border-zinc-800 text-center">
                  <div className="font-display text-xl font-extrabold text-accent tabular-nums">
                    {skipCount}
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">Skipped</div>
                </div>
                <div className="p-3 rounded-xl bg-background/60 border border-zinc-800 text-center">
                  <div className="font-display text-xl font-extrabold text-success tabular-nums">
                    {Math.floor((skipCount * 15) / 60)}m {(skipCount * 15) % 60}s
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">Saved</div>
                </div>
                <button
                  type="button"
                  onClick={triggerPreviewSkip}
                  disabled={!isActive}
                  className="h-full min-h-[60px] rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-accent text-xs font-bold text-white transition-all cursor-pointer disabled:opacity-40 active:scale-95"
                >
                  Simulate Skip ⏭
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
