"use client";

import { useState, useEffect } from "react";

export default function InteractiveSimulator() {
  const [adActive, setAdActive] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [skipsCount, setSkipsCount] = useState(1);
  const [autoSkipOn, setAutoSkipOn] = useState(false);

  const handleSkip = (method: "manual" | "auto") => {
    if (!adActive) return;
    setAdActive(false);
    setSkipsCount((prev) => prev + 1);
    setToastMessage(method === "auto" ? "Ad auto-skipped ⚡" : "Ad skipped ⏭");

    setTimeout(() => {
      setToastMessage(null);
    }, 2200);

    // Auto reset to ad after 4 seconds so visitors can test again
    setTimeout(() => {
      setAdActive(true);
    }, 4500);
  };

  // Listen for real Tab key presses inside this component
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && adActive) {
        e.preventDefault();
        handleSkip("manual");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [adActive]);

  // Handle Auto-skip simulation
  useEffect(() => {
    if (autoSkipOn && adActive) {
      const timer = setTimeout(() => {
        handleSkip("auto");
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [autoSkipOn, adActive]);

  return (
    <section id="simulator" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3ea6ff]/10 border border-[#3ea6ff]/20 text-[#3ea6ff] text-xs font-semibold">
            ✨ Interactive Testbed
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience the Millisecond Skip
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Test the live skip engine right in your browser. Press <kbd className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-bold">Tab</kbd> on your keyboard or click the button below.
          </p>
        </div>

        {/* Video Player Mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#000000] shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-video max-h-[460px] flex flex-col justify-between p-4 sm:p-6 group">
          {/* Top Bar Mockup */}
          <div className="flex items-center justify-between text-xs text-zinc-400 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-semibold text-zinc-200">
                {adActive ? "Ad (1 of 2) · 0:15" : "Official Video · Playing smoothly"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-700/60">
                <span className="text-[11px] text-zinc-300 font-medium">Auto-Skip</span>
                <input
                  type="checkbox"
                  checked={autoSkipOn}
                  onChange={(e) => setAutoSkipOn(e.target.checked)}
                  className="rounded text-[#3ea6ff] focus:ring-0 cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Center Stage Animation */}
          <div className="flex flex-col items-center justify-center space-y-4 my-auto z-10">
            {adActive ? (
              <div className="text-center space-y-3">
                <div className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold animate-pulse">
                  Unwanted Ad Interrupting
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  Hit <kbd className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-600 text-[#3ea6ff] font-mono shadow-md">Tab</kbd> to skip
                </div>
                <button
                  onClick={() => handleSkip("manual")}
                  className="sm:hidden px-4 py-2 rounded-lg bg-[#3ea6ff] text-black font-bold text-xs shadow-lg active:scale-95"
                >
                  Tap to Skip
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  ✓ Playing Video Content
                </div>
                <p className="text-zinc-400 text-xs">
                  Next ad simulation resets in a few seconds...
                </p>
              </div>
            )}
          </div>

          {/* Skip Button Simulation (Bottom Right) */}
          <div className="flex items-center justify-between z-10">
            <div className="text-[11px] text-zinc-500 font-mono">
              Total Skipped in Session: <span className="text-zinc-300 font-bold">{skipsCount}</span>
            </div>

            {adActive && (
              <button
                onClick={() => handleSkip("manual")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-semibold border border-white/20 hover:border-[#3ea6ff] transition-all cursor-pointer shadow-lg active:scale-95 group/btn"
              >
                <span>Skip Ad</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-[#3ea6ff] font-mono border border-zinc-700">
                  Tab
                </span>
                <span className="text-base leading-none text-[#3ea6ff]">⏭</span>
              </button>
            )}
          </div>

          {/* Toast Notification Simulation */}
          {toastMessage && (
            <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/95 border-l-4 border-l-[#3ea6ff] border border-zinc-700/80 text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
              <span className="text-sm font-semibold">{toastMessage}</span>
            </div>
          )}

          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
