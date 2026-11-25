export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-zinc-800/80 bg-[#0c0c0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-semibold">
            ⚙️ Architectural Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Clean Way vs. The Invasive Way
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Compare how traditional ad blockers behave versus Ski Extension&apos;s compliant native approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Way */}
          <div className="p-8 rounded-2xl bg-red-950/10 border border-red-900/30 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-red-500">✕</span>
              <h3 className="text-xl font-bold text-red-400">Traditional Ad Blockers</h3>
            </div>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>Inject heavy network filters that intercept and block YouTube video stream requests.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>Constantly trigger YouTube&apos;s <em>&ldquo;Ad blockers violate YouTube&apos;s Terms of Service&rdquo;</em> anti-adblock blackouts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>Break theater mode, subtitles, high-refresh rates, or cause 100% CPU lockups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>Require continuous filter list updates every few hours to keep working.</span>
              </li>
            </ul>
          </div>

          {/* Ski Extension Way */}
          <div className="p-8 rounded-2xl bg-[#3ea6ff]/5 border border-[#3ea6ff]/30 space-y-5 shadow-[0_0_30px_rgba(62,166,255,0.08)]">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-[#3ea6ff]">✓</span>
              <h3 className="text-xl font-bold text-white">Ski Extension Approach</h3>
            </div>
            <ul className="space-y-3.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#3ea6ff] font-bold mt-0.5">•</span>
                <span><strong>Zero network interception.</strong> Leaves all video stream buffers completely untouched.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#3ea6ff] font-bold mt-0.5">•</span>
                <span><strong>Never triggers anti-adblock popups.</strong> It simply executes YouTube&apos;s legitimate, intended Skip button.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#3ea6ff] font-bold mt-0.5">•</span>
                <span><strong>Lightweight footprint.</strong> The content script weighs under 18 KB with zero background overhead.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#3ea6ff] font-bold mt-0.5">•</span>
                <span><strong>Self-healing algorithm.</strong> Automatically adapts if YouTube renames button classes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

