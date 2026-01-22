import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavDropdownProps {
  label: string;
  subLinks: {
    label: string;
    link: string;
  }[];
}

export default function NavDropdown({ label, subLinks }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="text-sm font-mono tracking-widest uppercase text-white/70 hover:text-white transition-colors relative flex items-center gap-1">
        {label}
        <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-neonBlue group-hover:w-full transition-all duration-300"></span>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-carbon border border-white/10 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
        {subLinks.map(subLink => (
            <Link key={subLink.link} href={subLink.link} className="block px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-neonBlue transition-colors">
                {subLink.label}
            </Link>
        ))}
      </div>
    </div>
  );
}