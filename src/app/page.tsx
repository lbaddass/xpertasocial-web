import Hero from "../components/Hero";
import ValueGrid from "../components/ValueGrid";
import ComparisonTable from "../components/ComparisonTable";
import Methodology from "../components/Methodology";
import FrameworkCards from "../components/FrameworkCards";
import LabClients from "../components/LabClients";
import FinalCTA from "../components/FinalCTA";
import DiagnosticForm from "../components/DiagnosticForm";
import SpeedDemo from "../components/SpeedDemo";
import ContentWorkflow from "../components/ContentWorkflow";
import { ArrowRight, Database } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F8F9FA]">
      <TopStatusBar />
      <Hero />
      <SpeedDemo />
      <ValueGrid />
      <ComparisonTable />
      <ContentWorkflow />
      <Methodology />
      <FrameworkCards />
      <LabClients />
      <DiagnosticForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function TopStatusBar() {
  return (
    <div className="w-full bg-[#E63946]/15 border-b border-[#E63946]/25 py-2 text-center">
      <p className="text-xs md:text-sm text-[#E63946] font-mono tracking-wide">
        <span className="animate-pulse mr-2">●</span>
        STATUS: OPERANDO AL 90% CAPACIDAD. SOLO 3 SLOTS DISPONIBLES.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center text-white/60 text-sm bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-2 font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
          <Database size={14} className="text-[#E63946]" />
          <span>STACK: Next.js 14 • Vercel Edge • n8n • IA</span>
        </div>
        <p>© 2025 XpertaSocial. Growth Engineering Hub.</p>
        <p className="text-xs text-white/40">Operado por José Luis García Orobio · CDMX · MTY · REMOTO</p>
        <Link href="#diagnostic-form" className="inline-flex items-center gap-2 text-[#E63946] hover:text-white transition-colors">
          Ir al diagnóstico <ArrowRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
