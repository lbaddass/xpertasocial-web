import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Ruler } from "lucide-react";
import TypewriterHeadline from "@/components/Hero/TypewriterHeadline";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neonBlue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neonPink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-10 z-10">
        <div className="space-y-2">
          <div className="font-mono text-neonBlue text-xs tracking-[0.3em] uppercase">
            &gt; SYSTEM STATUS: ONLINE 🟢
          </div>
          <TypewriterHeadline />
        </div>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
          Growth Engineering + AI Infrastructure for B2B/B2C Teams. <br />
          <span className="text-white">We don&apos;t sell campaigns. We deploy engines.</span>
        </p>

        <div className="w-full max-w-3xl aspect-video rounded-xl border border-white/10 bg-slateUI/50 backdrop-blur-sm flex items-center justify-center group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-60" />
          <span className="font-mono text-xs text-white/30 z-10">[ SYSTEM DEMO FEED :: 00:06s LOOP ]</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-neonBlue text-black px-8 py-4 font-bold rounded-sm hover:shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)] transition-all"
          >
            START DIAGNOSTIC <ArrowRight size={18} />
          </Link>
          <Link
            href="/systems"
            className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 font-mono text-sm rounded-sm hover:border-neonPink hover:text-neonPink transition-all"
          >
            VIEW SYSTEMS LIBRARY
          </Link>
        </div>

        <div className="pt-12 border-t border-white/5 w-full">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-mono text-neonBlue/80">
            <div className="flex items-center gap-2">
              <Cpu size={16} /> <span>[ AUTOMATION-FIRST ]</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler size={16} /> <span>[ MEASURABLE ]</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} /> <span>[ REPRODUCIBLE ]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
