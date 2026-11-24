"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-zinc-700/50 group-hover:ring-[#3ea6ff]/60 transition-all">
            <Image
              src="/icon/128.png"
              alt="Ski Extension Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#3ea6ff] transition-colors">
              Ski
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
              by Xinteck
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="#features" className="hover:text-[#3ea6ff] transition-colors">
            Features
          </Link>
          <Link href="#simulator" className="hover:text-[#3ea6ff] transition-colors">
            Interactive Demo
          </Link>
          <Link href="#how-it-works" className="hover:text-[#3ea6ff] transition-colors">
            How It Works
          </Link>
          <Link href="/blog" className="hover:text-[#3ea6ff] transition-colors">
            Blog
          </Link>
          <Link href="#support" className="hover:text-[#3ea6ff] transition-colors">
            Support
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/WinterJackson/ski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-1.5"
          >
            ⭐ GitHub
          </a>
          <a
            href="https://buymeacoffee.com/winterjackson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-2 rounded-lg bg-[#ff813f] text-white hover:opacity-90 transition-all flex items-center gap-1.5"
          >
            ☕ Buy Coffee
          </a>
          <Link
            href="#download"
            className="text-xs font-bold px-4 py-2 rounded-lg bg-[#3ea6ff] text-black hover:bg-[#65b8ff] transition-all shadow-[0_0_15px_rgba(62,166,255,0.3)]"
          >
            Install Free
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#09090b] border-b border-zinc-800 space-y-3">
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-zinc-300 hover:text-[#3ea6ff]"
          >
            Features
          </Link>
          <Link
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-zinc-300 hover:text-[#3ea6ff]"
          >
            Interactive Demo
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-zinc-300 hover:text-[#3ea6ff]"
          >
            How It Works
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-zinc-300 hover:text-[#3ea6ff]"
          >
            Blog
          </Link>
          <Link
            href="#support"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-zinc-300 hover:text-[#3ea6ff]"
          >
            Support
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-bold py-2.5 rounded-lg bg-[#3ea6ff] text-black"
            >
              Install Free
            </Link>
            <a
              href="https://buymeacoffee.com/winterjackson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-semibold py-2.5 rounded-lg bg-[#ff813f] text-white"
            >
              ☕ Buy Me a Coffee
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
