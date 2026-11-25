import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <Navbar />

      <section className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 mb-10 border-b border-zinc-800 pb-8">
          <Link href="/" className="text-xs text-[#3ea6ff] hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-400">
            Last updated: November 24, 2026 · Ski Extension v1.0.0
          </p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-[#3ea6ff]/10 border border-[#3ea6ff]/30 text-white">
            <strong>Summary:</strong> Ski Extension collects <strong>zero data</strong>. No personal info, no browsing history, no telemetry, no tracking cookies. Everything stays 100% on your device.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Data Collection & Analytics</h2>
            <p>
              Ski Extension does <strong>not</strong> collect, transmit, store, or sell any personal data, usage metrics, or browsing activities. We run zero background analytics, zero telemetry, and zero third-party tracking scripts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Local Storage Usage</h2>
            <p>
              The extension uses standard browser storage APIs (<code className="text-[#3ea6ff]">browser.storage.sync</code> and <code className="text-[#3ea6ff]">browser.storage.local</code>) exclusively to store your personal user preferences:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>Your chosen hotkey (default: <kbd className="text-zinc-200">Tab</kbd>)</li>
              <li>Toggle states (Master On/Off switch, Auto-skip mode, Toast notifications)</li>
              <li>Local counters for ads skipped and estimated time saved</li>
              <li>Optional local history of videos with ads (disabled by default; stays exclusively on your machine)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Network Requests</h2>
            <p>
              Ski Extension makes <strong>zero outbound network requests</strong>. It does not communicate with any external servers, APIs, CDNs, or remote trackers. The content script operates strictly in the client-side document context of YouTube.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Open Source Transparency</h2>
            <p>
              The full source code for Ski Extension is public and verified on GitHub under the MIT License. Anyone can inspect, build, and audit every line of code:
            </p>
            <p>
              <a
                href="https://github.com/WinterJackson/ski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3ea6ff] hover:underline"
              >
                https://github.com/WinterJackson/ski
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact</h2>
            <p>
              If you have any questions regarding privacy or data practices, you can contact the creator directly:
            </p>
            <p className="text-zinc-400">
              <strong>Winter Jackson</strong><br />
              Software Developer, Xinteck Digital Solutions<br />
              Email: <a href="mailto:winterjacksonwj@gmail.com" className="text-[#3ea6ff] hover:underline">winterjacksonwj@gmail.com</a><br />
              Website: <a href="https://xinteck.co.ke/" target="_blank" rel="noopener noreferrer" className="text-[#3ea6ff] hover:underline">https://xinteck.co.ke/</a>
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

