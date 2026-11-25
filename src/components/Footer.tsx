import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-16 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/icon/128.png"
                alt="Ski Logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white tracking-tight">Ski Extension</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Fast, privacy-first, keyboard-controlled browser extension that automates YouTube&apos;s native Skip Ad button.
            </p>
            <div className="text-xs text-zinc-400">
              Built by{" "}
              <a
                href="https://github.com/WinterJackson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#3ea6ff] font-medium underline underline-offset-2"
              >
                Winter Jackson
              </a>
              , under{" "}
              <a
                href="https://xinteck.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#3ea6ff] font-medium underline underline-offset-2"
              >
                Xinteck Digital Solutions
              </a>
              .
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#simulator" className="hover:text-white transition-colors">
                  Interactive Simulator
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a
                  href="https://addons.mozilla.org/en-GB/firefox/addon/ski-extension/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Firefox Add-ons (AMO)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/WinterJackson/ski/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Content */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/WinterJackson/ski/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/WinterJackson/ski/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Issue Tracker
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Community</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://buymeacoffee.com/winterjackson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff813f] hover:underline transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>☕</span>
                  <span>Buy Me a Coffee</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sponsors/WinterJackson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>♥</span>
                  <span>GitHub Sponsors</span>
                </a>
              </li>
              <li>
                <a
                  href="https://xinteck.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Xinteck Digital Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Ski Extension. All rights reserved. Open-source under MIT License.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/WinterJackson/ski" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              GitHub
            </a>
            <span>·</span>
            <Link href="/privacy" className="hover:text-zinc-300">
              Privacy
            </Link>
            <span>·</span>
            <a href="https://xinteck.co.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              Xinteck
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

