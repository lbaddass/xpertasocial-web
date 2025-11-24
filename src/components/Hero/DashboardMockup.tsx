import { Play } from "lucide-react";
import Card from "@/components/ui/Card";

const stats = [
  { label: "Leads", value: "312", hint: "+18% semanal" },
  { label: "Conversión", value: "12.4%", hint: "+2.1pp" },
  { label: "Revenue", value: "$47k", hint: "ARPU $1.3k" },
  { label: "ROI", value: "4.7x", hint: "n8n + paid" },
];

const DashboardMockup = () => {
  return (
    <div className="relative">
      <Card className="bg-gradient-to-br from-white/5 to-transparent border border-moneyGreen/20 rounded-2xl p-8 hover:border-moneyGreen/50 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-techWhite/70">Revenue Dashboard</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-moneyGreen rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-white/20 rounded-full" />
            <div className="w-3 h-3 bg-white/20 rounded-full" />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-end gap-2 h-32">
            {[30, 45, 40, 60, 55, 75, 70, 90, 85, 95].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-moneyGreen to-moneyCyan rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-mono text-techWhite/60">{stat.label}</p>
              <p className="text-xl font-black text-techWhite">{stat.value}</p>
              <p className="text-[11px] font-mono text-techWhite/50">{stat.hint}</p>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-grafito/0 group-hover:bg-grafito/80 transition-all duration-300 flex items-center justify-center rounded-2xl pointer-events-none">
          <Play className="text-moneyGreen opacity-0 group-hover:opacity-100 transition-all w-14 h-14" />
        </div>
      </Card>
    </div>
  );
};

export default DashboardMockup;
