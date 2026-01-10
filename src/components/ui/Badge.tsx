import type { ReactNode } from "react";

type Tone = "success" | "alert" | "neutral";

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  pulse?: boolean;
}

const toneClasses: Record<Tone, string> = {
  success: "border-moneyGreen/40 text-moneyGreen bg-moneyGreen/10",
  alert: "border-signalRed/50 text-signalRed bg-signalRed/10",
  neutral: "border-white/20 text-techWhite/80 bg-white/5",
};

export const Badge = ({
  tone = "neutral",
  children,
  pulse = false,
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-wide ${toneClasses[tone]} ${
        pulse ? "animate-pulse" : ""
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;
