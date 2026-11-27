export function Wordmark() {
  return (
    <span className="flex flex-col justify-center">
      <span className="font-mono text-sm font-bold tracking-[0.25em] text-white transition-colors group-hover:text-neonBlue md:text-base">
        XPERTA<span className="text-neonBlue">SOCIAL</span>
      </span>
      <span className="mt-1 hidden items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-white/50 sm:flex">
        GROWTH SYSTEMS
        <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-neonBlue">
          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-neonBlue" aria-hidden="true" />
          LIVE
        </span>
      </span>
    </span>
  );
}
