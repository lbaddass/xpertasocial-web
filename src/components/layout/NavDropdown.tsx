"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownItem {
  label: string;
  link: string;
}

interface NavDropdownProps {
  label: string;
  concept: string;
  items: DropdownItem[];
}

export default function NavDropdown({ label, concept, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-[11px] font-mono tracking-widest text-white/60 hover:text-neonBlue transition-colors uppercase">
        {label}
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-64 bg-carbon/95 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-200 origin-top-left ${
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-4 border-b border-white/5">
          <span className="text-[10px] font-mono text-neonBlue/80 uppercase tracking-wider block mb-1">
            [ CONCEPT ]
          </span>
          <span className="text-sm font-bold text-white">{concept}</span>
        </div>
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="block px-4 py-3 text-xs font-mono text-white/70 hover:text-black hover:bg-neonBlue transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
