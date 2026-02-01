"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, ShieldCheck } from 'lucide-react';
import SignOutButton from './SignOutButton';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  // Add more links as needed, e.g., for a reports list page
  // { href: '/admin/reports', label: 'Reports', icon: FileText },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-carbon border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-neonBlue" />
          <h1 className="text-xl font-bold text-white">
            Control Hub
          </h1>
        </Link>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-neonBlue/10 text-neonBlue'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4">
        <ul>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>

      <div className="p-4 border-t border-white/10 text-xs text-white/40 font-mono">
        XpertaSocial Growth Systems
      </div>
    </div>
  );
}
