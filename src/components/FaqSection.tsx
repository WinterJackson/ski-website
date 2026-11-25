export const FAQS = [
  {
    q: "Does Ski trigger YouTube's 'Ad blockers violate YouTube's Terms of Service' popup?",
    a: "No. Traditional ad blockers intercept network requests and block ad streams, which YouTube actively detects and blocks. Ski Extension never blocks network requests or alters video streams — it simply automates clicking YouTube's own official Skip Ad button.",
  },
  {
    q: "Is Ski Extension completely free and open source?",
    a: "Yes. Every feature — including the Tab hotkey, Auto-Skip mode, consecutive double-ad handling, and stats dashboard — is 100% free and open source under the MIT License on GitHub.",
  },
  {
    q: "Does Ski collect my browsing history or personal data?",
    a: "Zero data is collected or transmitted. Ski makes zero external network requests and contains no analytics or telemetry. Your preferences and skip counters stay exclusively inside your browser's local storage.",
  },
  {
    q: "Does Ski work on mobile phones and tablets?",
    a: "Yes! Ski works on Firefox for Android and Chromium mobile browsers that support extensions (such as Kiwi Browser). On touch devices, Ski automatically enables hands-free Auto-Skip on first run.",
  },
  {
    q: "Why does Ski use the Tab key by default?",
    a: "YouTube uses K, Space, J, L, M, F, and C for player controls. Tab has no YouTube playback conflict and sits right under your left hand, though you can customize it to any key combo in Settings.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 border-t border-zinc-800/80 bg-[#0c0c0e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-semibold">
            ❓ Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions About Ski
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Everything you need to know about privacy, compatibility, and how Ski skips YouTube ads cleanly.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#3ea6ff]/30 transition-colors space-y-2"
            >
              <h3 className="text-base sm:text-lg font-bold text-white">{item.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

