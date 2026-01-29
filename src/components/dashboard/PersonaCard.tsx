"use client";

import { PersonaTarget } from "@/lib/manifest-parser";
import { Play, Cpu, Activity } from "lucide-react";

interface PersonaCardProps {
  target: PersonaTarget;
  onSelect: (id: string) => void;
}

export default function PersonaCard({ target, onSelect }: PersonaCardProps) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Indicador visual superior */}
      <div className={`absolute top-0 left-0 w-full h-1 ${target.avatar_color}`} />

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            {target.name}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {target.role}
          </span>
        </div>
        <div className={`p-2 rounded-lg ${target.avatar_color} bg-opacity-10`}>
          <Cpu className={`w-6 h-6 ${target.avatar_color.replace('bg-', 'text-')}`} />
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 h-10 line-clamp-2">
        {target.description}
      </p>

      {/* Capabilities Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {target.capabilities.slice(0, 3).map((cap) => (
          <span key={cap} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">
            {cap}
          </span>
        ))}
      </div>

      <button
        onClick={() => onSelect(target.id)}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity"
      >
        <Play className="w-4 h-4" />
        Activar Agente
      </button>

      {/* Stats footer (Dummy data for UI visualization) */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Activity className="w-3 h-3" /> Ready
        </span>
        <span>v2.0</span>
      </div>
    </div>
  );
}
