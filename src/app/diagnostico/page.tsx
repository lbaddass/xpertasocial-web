import DiagnosticForm from "../../components/DiagnosticForm";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function DiagnosticPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12 pb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Regresar
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-white/60">
          <Shield size={14} className="text-[#E63946]" /> Auditoría técnica
        </div>
      </div>
      <DiagnosticForm />
    </main>
  );
}
