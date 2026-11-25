"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-[10px] left-[10px] right-[10px] z-50">
      <nav className="mx-auto max-w-7xl rounded-[10px] border border-zinc-800/80 bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between transition-all">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-zinc-700/50 group-hover:ring-accent/60 transition-all duration-300 group-hover:scale-105">
            <Image
              src="/icon/128.png"
              alt="Ski Extension Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors">
              Ski
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-surface-card text-zinc-400 border border-zinc-800">
              by Xinteck
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-300">
          <Link href="/#features" className="hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="/#simulator" className="hover:text-accent transition-colors">
            Demo
          </Link>
          <Link href="/#how-it-works" className="hover:text-accent transition-colors">
            Architecture
          </Link>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/#faq" className="hover:text-accent transition-colors">
            FAQ
          </Link>
        </div>

        {/* Desktop Actions (Strictly <= 3 words per button) */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/WinterJackson/ski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-2 rounded-lg border border-zinc-800 bg-surface-card text-zinc-300 hover:text-white hover:border-zinc-700 transition-all whitespace-nowrap"
          >
            ⭐ GitHub
          </a>
          <a
            href="https://paystack.shop/pay/ski-extension"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-2 rounded-lg bg-support text-white hover:opacity-90 transition-all whitespace-nowrap"
          >
            ☕ Support
          </a>
          <Link
            href="/#download"
            className="btn-swap text-xs font-bold px-4 py-2 rounded-lg bg-accent text-black hover:bg-accent-hover transition-colors glow-accent whitespace-nowrap"
          >
            <span className="btn-swap-inner" data-hover="Get Ski ↗">
              Install Free ↗
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Floating Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-[10px] border border-zinc-800/80 bg-background/95 backdrop-blur-xl shadow-2xl px-4 py-4 space-y-2.5">
          <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-zinc-300 hover:text-accent">
            Features
          </Link>
          <Link href="/#simulator" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-zinc-300 hover:text-accent">
            Demo
          </Link>
          <Link href="/#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-zinc-300 hover:text-accent">
            Architecture
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-zinc-300 hover:text-accent">
            Blog
          </Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-zinc-300 hover:text-accent">
            FAQ
          </Link>
          <div className="pt-2 grid grid-cols-2 gap-2">
            <Link href="/#download" onClick={() => setMobileMenuOpen(false)} className="text-center text-xs font-bold py-2.5 rounded-lg bg-accent text-black">
              Install Free
            </Link>
            <a
              href="https://paystack.shop/pay/ski-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-semibold py-2.5 rounded-lg bg-support text-white"
            >
              ☕ Support Ski
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
