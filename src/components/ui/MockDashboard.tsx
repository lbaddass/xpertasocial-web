import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

export default function MockDashboard() {
  return (
    <div className="w-full bg-carbon border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="text-[10px] font-mono text-white/40">ANDROMEDA_V2.0 // DASHBOARD</div>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-black/40 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/40 font-mono">TOTAL REVENUE</span>
            <DollarSign size={14} className="text-neonBlue" />
          </div>
          <div className="text-2xl font-bold text-white">$124,500</div>
          <div className="text-xs text-neonGreen mt-1 flex items-center gap-1">
            <TrendingUp size={10} /> +24.5% vs last month
          </div>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-black/40 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/40 font-mono">ROAS (AVG)</span>
            <BarChart3 size={14} className="text-neonPink" />
          </div>
          <div className="text-2xl font-bold text-white">4.8x</div>
          <div className="text-xs text-neonGreen mt-1 flex items-center gap-1">
            <TrendingUp size={10} /> +1.2x vs target
          </div>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-black/40 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/40 font-mono">ACTIVE LEADS</span>
            <Users size={14} className="text-neonLime" />
          </div>
          <div className="text-2xl font-bold text-white">842</div>
          <div className="text-xs text-white/40 mt-1">
            Quality Score: 92/100
          </div>
        </div>

        {/* Chart Area (Visual Only) */}
        <div className="col-span-1 md:col-span-3 bg-black/40 p-4 rounded border border-white/5 h-32 flex items-end justify-between gap-2 px-2 pb-2">
           {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
             <div key={i} className="w-full bg-white/5 hover:bg-neonBlue/50 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
