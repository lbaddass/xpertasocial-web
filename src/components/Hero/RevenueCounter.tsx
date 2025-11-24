"use client";

import { TrendingUp } from "lucide-react";
import useCountUp from "@/hooks/useCountUp";

interface RevenueCounterProps {
  target?: number;
  label?: string;
}

const RevenueCounter = ({ target = 2497, label = "INGRESOS POTENCIALES / MES" }: RevenueCounterProps) => {
  const count = useCountUp(target);

  return (
    <div className="bg-gradient-to-br from-techCyan/10 to-transparent border border-techCyan/25 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-techWhite/70 font-mono">{label}</span>
        <TrendingUp className="text-moneyGreen" size={20} aria-label="Crecimiento de ingresos" />
      </div>
      <div className="text-4xl font-black text-moneyGreen">
        ${count.toLocaleString()}
        <span className="text-lg text-techWhite/50 ml-2">USD</span>
      </div>
    </div>
  );
};

export default RevenueCounter;
