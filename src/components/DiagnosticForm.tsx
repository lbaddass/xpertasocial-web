"use client";

import { FormEvent, useState } from "react";
import { Send, TerminalSquare } from "lucide-react";

interface FormState {
  website: string;
  revenue: string;
  ads: string;
  contact: string;
}

const revenueOptions = ["<$10k", "$10k-$50k", "$50k+"];
const adsOptions = ["Sí", "No", "Lo intenté"];

export default function DiagnosticForm() {
  const [form, setForm] = useState<FormState>({
    website: "",
    revenue: revenueOptions[0],
    ads: adsOptions[0],
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    console.info("diagnostic:submit", form); // Stub for API integration
  };

  return (
    <section className="py-24 bg-black text-techWhite" id="diagnostic-form">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-techCyan/40 bg-white/5 text-techCyan">
            <TerminalSquare size={20} />
          </div>
          <div>
            <p className="text-signalRed font-mono text-xs tracking-[0.3em]">
              DIAGNÓSTICO
            </p>
            <h2 className="text-3xl font-black tracking-tight">
              ¿Tu sistema está listo para escalar?
            </h2>
          </div>
        </div>
        <p className="text-techWhite/70 font-mono text-sm mb-8">
          Completa la auditoría técnica. Sin compromiso. Análisis en 24 horas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-md"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2 text-sm font-mono">
              URL de sitio web actual
              <input
                required
                type="url"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                placeholder="https://tuclinicactual.com"
                className="px-4 py-3 rounded-lg bg-black border border-white/10 text-techWhite placeholder:text-techWhite/40 focus:outline-none focus:border-signalRed"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-mono">
              Facturación mensual
              <select
                value={form.revenue}
                onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                className="px-4 py-3 rounded-lg bg-black border border-white/10 text-techWhite focus:outline-none focus:border-signalRed"
              >
                {revenueOptions.map((option) => (
                  <option key={option} value={option} className="text-black">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <fieldset className="flex flex-col gap-3 text-sm font-mono">
              <legend className="text-sm">¿Inviertes en ads?</legend>
              <div className="flex flex-wrap gap-3">
                {adsOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-black cursor-pointer hover:border-signalRed/60"
                  >
                    <input
                      type="radio"
                      name="ads"
                      value={option}
                      checked={form.ads === option}
                      onChange={() => setForm({ ...form, ads: option })}
                      className="accent-signalRed"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-2 text-sm font-mono">
              WhatsApp o Email
              <input
                required
                type="text"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="+52 55 0000 0000 / ceo@tuclinica.mx"
                className="px-4 py-3 rounded-lg bg-black border border-white/10 text-techWhite placeholder:text-techWhite/40 focus:outline-none focus:border-signalRed"
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-xs text-techWhite/60 font-mono">
              Sin compromiso. Análisis en 24 horas.
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-signalRed text-techWhite font-bold uppercase tracking-wide shadow-glow-red hover:translate-y-[-1px] transition-transform"
              aria-label="Recibir auditoría gratuita"
            >
              RECIBIR AUDITORÍA GRATUITA <Send size={16} />
            </button>
          </div>

          {submitted && (
            <div className="text-xs text-green-400 font-mono">
              Recibido. Un ingeniero te contactará en 24h.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
