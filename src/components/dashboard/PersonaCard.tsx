"use client";

import { PersonaTarget } from "@/lib/manifest-parser";
import { Play, Cpu, Activity } from "lucide-react";

interface PersonaCardProps {
  target: PersonaTarget;
  onSelect: (id: string) => void;
}

export default function PersonaCard({ target, onSelect }: PersonaCardProps) {
  return (
    <div className="group relative bg-carbon border border-white/10 rounded-lg p-6 hover:border-neonBlue/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Indicador visual superior */}
      <div className={`absolute top-0 left-0 w-full h-1 ${target.avatar_color}`} />

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {target.name}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {target.role}
          </span>
        </div>
        <div className={`p-2 rounded-lg ${target.avatar_color} bg-opacity-10`}>
          <Cpu className={`w-6 h-6 ${target.avatar_color.replace('bg-', 'text-')}`} />
        </div>
      </div>

      <p className="text-sm text-white/80 mb-6 h-10 line-clamp-2">
        {target.description}
      </p>

      {/* Capabilities Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {target.capabilities.slice(0, 3).map((cap) => (
          <span key={cap} className="px-2 py-1 text-xs bg-white/5 rounded text-white/70">
            {cap}
          </span>
        ))}
      </div>

      <button
        onClick={() => onSelect(target.id)}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-neonBlue hover:text-black hover:border-neonBlue transition-all"
      >
        <Play className="w-4 h-4" />
        Activar Agente
      </button>

      {/* Stats footer */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
        <span className="flex items-center gap-1">
          <Activity className="w-3 h-3" /> Ready
        </span>
        <span>v2.0</span>
      </div>
    </div>
  );
}
