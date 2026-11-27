export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const base = tone === "dark" ? "text-white" : "text-ink";
  const accent = tone === "dark" ? "text-mint" : "text-mint-700";
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-brand text-[15px] font-bold tracking-[0.22em] ${base}`}>
        XPERTA<span className={accent}>SOCIAL</span>
      </span>
      <span className={`mt-1 hidden font-brand text-[9px] tracking-[0.28em] sm:block ${tone === "dark" ? "text-white/55" : "text-muted"}`}>
        GROWTH ENGINEERING SYSTEMS
      </span>
    </span>
  );
}
