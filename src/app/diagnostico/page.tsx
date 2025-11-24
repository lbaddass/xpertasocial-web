import DiagnosticForm from "../../components/DiagnosticForm";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function DiagnosticPage() {
  return (
    <main id="diagnostico" className="min-h-screen bg-black text-techWhite">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-16 pb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-techWhite/70 hover:text-techCyan transition-colors">
          <ArrowLeft size={16} /> Regresar
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-techCyan/40 bg-white/5 font-mono text-xs text-techCyan">
          <Shield size={14} className="text-techCyan" /> Auditoría técnica
        </div>
      </div>
      <DiagnosticForm />
    </main>
  );
}
