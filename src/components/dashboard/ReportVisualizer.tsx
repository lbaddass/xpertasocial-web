"use client";

import { AgentReport } from "@/types/report"; // Asegúrate de tener este tipo definido (Fase 3)
import { 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Server,
  Download
} from "lucide-react";

export default function ReportVisualizer({ report }: { report: AgentReport }) {
  if (!report) return <div>No data available</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Header de Estado */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-slate-400">JOB ID: {report.meta.job_id}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
              report.meta.status === 'SUCCESS' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {report.meta.status}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
            Reporte de Ejecución: {report.meta.target_id.replace('_', ' ')}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Generado el: {new Date(report.meta.timestamp).toLocaleString()}
          </p>
        </div>
        <div className="hidden md:block">
           <Server className="w-10 h-10 text-slate-200" />
        </div>
      </div>

      {/* 2. Resumen Ejecutivo */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-indigo-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
          <h3 className="text-sm font-semibold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Insight Principal
          </h3>
          <p className="text-indigo-950 dark:text-indigo-100 text-lg leading-relaxed">
            "{report.visuals.summary_text}"
          </p>
        </div>

        {/* Acciones Rápidas */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Acciones Recomendadas</h3>
            {report.actions.map((action) => (
                <button 
                    key={action.action_id}
                    className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group"
                >
                    {action.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
            ))}
        </div>
      </div>

      {/* 3. Grid de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {report.visuals.kpi_cards.map((kpi, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 mb-1">{kpi.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</span>
              {kpi.trend && (
                <span className={`flex items-center text-xs font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  Trend
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
