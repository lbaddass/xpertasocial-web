"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-red-500/80 hover:bg-red-500/10 hover:text-red-500 transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span className="font-medium">Sign Out</span>
    </button>
  );
}
