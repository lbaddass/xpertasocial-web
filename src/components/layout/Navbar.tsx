"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative py-4">
      <div className="pointer-events-none absolute -inset-x-6 -top-10 h-24 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.15),_transparent_45%)] blur-2xl" />

      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="group relative flex items-center gap-3">
          <div className="absolute -left-2 h-12 w-12 rounded-full bg-gradient-to-br from-neonBlue/20 via-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex flex-col justify-center">
            <div className="font-mono text-sm md:text-base tracking-[0.25em] font-bold text-white group-hover:text-neonBlue transition-colors">
              XPERTA<span className="text-neonBlue">SOCIAL</span>
            </div>
            <span className="text-[10px] font-mono text-white/50 tracking-[0.28em] flex items-center gap-2">
              GROWTH SYSTEMS
              <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[9px] text-neonBlue">
                <Sparkles size={12} /> LIVE
              </span>
            </span>
          </div>
        </Link>

        <Link
          href="/diagnostico"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-neonBlue/60 hover:text-neonBlue"
        >
          Contactar
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </nav>
  );
}
