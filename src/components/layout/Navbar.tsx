"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "SYSTEMS", href: "/systems" },
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "METHOD", href: "/method" },
  { label: "PLAYBOOKS", href: "/playbooks" },
  { label: "PRICING", href: "/pricing" },
  { label: "RESOURCES", href: "/resources" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-carbon/80 backdrop-blur-xl h-16">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-mono text-xs md:text-sm tracking-[0.2em] font-semibold text-white hover:text-neonBlue transition-colors">
          XPERTA<span className="text-neonBlue">SOCIAL</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-mono tracking-widest transition-all hover:text-neonBlue relative group ${
                  isActive ? "text-neonBlue" : "text-white/60"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-6 left-0 w-full h-[2px] bg-neonBlue/50 scale-x-0 group-hover:scale-x-100 transition-transform ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-xs font-mono border border-neonBlue/30 bg-neonBlue/5 px-4 py-2 rounded-sm text-neonBlue hover:bg-neonBlue hover:text-black transition-all"
          >
            START DIAGNOSTIC <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white/80 hover:text-neonBlue">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-carbon/95 backdrop-blur-xl z-40 flex flex-col p-8 space-y-6 lg:hidden border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black tracking-tight text-white hover:text-neonBlue hover:pl-4 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 w-full bg-neonLime text-black font-bold py-4 rounded-sm"
          >
            START DIAGNOSTIC <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </nav>
  );
}
