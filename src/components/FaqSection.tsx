"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { FAQS } from "@/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 border-t border-zinc-800/80 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
              ❓ FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Common Questions About Ski
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Everything you need to know about privacy, compatibility, and how Ski skips YouTube ads cleanly.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-surface-card border-accent/40 shadow-md"
                    : "bg-surface-card/60 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white">
                    {item.q}
                  </span>
                  <span
                    className={`font-mono text-xl text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
