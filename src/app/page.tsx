'use client';

import React, { useState } from 'react';
import { Zap, ShieldCheck, Database, ArrowRight, Activity, X } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-red-900 selection:text-white">
      
      {/* 1. TOP BAR URGENCIA */}
      <div className="w-full bg-red-900/20 border-b border-red-900/30 py-2 text-center">
        <p className="text-xs md:text-sm text-red-400 font-mono tracking-wide">
          <span className="animate-pulse mr-2">●</span>
          STATUS: OPERANDO AL 90% CAPACIDAD. SOLO 3 SLOTS DISPONIBLES EN NOVIEMBRE.
        </p>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 mb-8">
          <Database size={14} className="text-blue-500" />
          <span className="text-xs font-mono text-gray-400">GROWTH ENGINEERING HUB</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Construimos la infraestructura que convierte tráfico en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ingresos predecibles</span>.
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tu web actual es lenta y pierde ventas. Desplegamos sistemas de adquisición (Next.js + n8n) que cargan en 0.3s y clonan estrategias ganadoras automáticamente.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2">
            Diagnosticar Mi Sistema <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-900 transition-all">
            Ver Demo de Automatización
          </button>
        </div>
        
        <p className="mt-6 text-xs text-gray-600 font-mono">
          STACK: NEXT.JS 16 • VERCEL EDGE • N8N AUTOMATION
        </p>
      </section>

      {/* 3. SPEED TEST SIMULATOR (Interactivo) */}
      <SpeedTestSection />

      {/* 4. PRODUCT GRID */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Infrastructure-as-a-Product</h2>
          <p className="text-gray-400">No vendemos horas de diseño. Vendemos activos digitales listos para escalar.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* PRODUCTO 1: LAUNCH PAD */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/20 hover:border-gray-700 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Launch Pad™</h3>
                <p className="text-sm text-gray-500 mt-1">Validación Rápida</p>
              </div>
              <div className="px-3 py-1 bg-gray-800 rounded text-xs text-white font-mono">$297</div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-gray-400">
              <li className="flex gap-2"><Zap size={16} className="text-yellow-500" /> Deploy en 48 horas</li>
              <li className="flex gap-2"><Zap size={16} className="text-yellow-500" /> 3 Variaciones de Landing</li>
              <li className="flex gap-2"><Zap size={16} className="text-yellow-500" /> Configuración Pixel + API</li>
            </ul>
            <button className="w-full py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Iniciar Deploy ($297)
            </button>
          </div>

          {/* PRODUCTO 2: CONVERSION ENGINE (RECOMENDADO) */}
          <div className="relative p-8 border border-blue-500/30 rounded-2xl bg-blue-900/10 hover:border-blue-500/50 transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full tracking-wider">
              RECOMENDADO
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Conversion Engine™</h3>
                <p className="text-sm text-blue-200/60 mt-1">Sistema Completo</p>
              </div>
              <div className="px-3 py-1 bg-blue-900/50 border border-blue-500/30 rounded text-xs text-blue-300 font-mono">$1,997</div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              <li className="flex gap-2"><ShieldCheck size={16} className="text-blue-400" /> Arquitectura Next.js (0.3s)</li>
              <li className="flex gap-2"><ShieldCheck size={16} className="text-blue-400" /> Funnel de 3 Pasos</li>
              <li className="flex gap-2"><ShieldCheck size={16} className="text-blue-400" /> CRM + Email Automation</li>
              <li className="flex gap-2"><ShieldCheck size={16} className="text-blue-400" /> Clonación de Ads con IA</li>
            </ul>
            <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Aplicar para Diagnóstico
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="border-t border-gray-900 py-12 text-center text-gray-600 text-sm">
        <p>© 2025 XpertaSocial. Growth Engineering Hub.</p>
        <p className="mt-2 font-mono text-xs opacity-50">CDMX • MTY • REMOTE</p>
      </footer>
    </div>
  );
}

// COMPONENTE SPEED TEST (Visual Simulator)
function SpeedTestSection() {
  const [active, setActive] = useState(false);

  return (
    <div className="py-20 bg-gray-900/30 border-y border-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">The Reality Check</h2>
        <p className="text-gray-400 mb-10 text-sm">¿Cuánto dinero pierdes cada segundo?</p>

        <div className="grid md:grid-cols-2 gap-4">
          
          {/* OLD WEB */}
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-red-900/30 relative overflow-hidden group">
            <div className="absolute top-4 left-4 text-xs font-mono text-red-500 flex items-center gap-2">
              <X size={14} /> WEB TRADICIONAL (Wordpress)
            </div>
            <div className="mt-10 h-32 flex items-center justify-center">
              {active ? (
                 <div className="flex flex-col items-center gap-2 animate-pulse">
                   <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                   <span className="text-xs text-red-400 font-mono">Cargando... (3.8s)</span>
                 </div>
              ) : (
                <span className="text-gray-600 text-sm">Click en "Test" para simular</span>
              )}
            </div>
          </div>

          {/* NEW INFRASTRUCTURE */}
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-green-900/30 relative overflow-hidden">
             <div className="absolute top-4 left-4 text-xs font-mono text-green-500 flex items-center gap-2">
              <Zap size={14} /> XPERTA INFRASTRUCTURE
            </div>
            <div className="mt-10 h-32 flex items-center justify-center">
               {active ? (
                 <div className="flex flex-col items-center gap-2">
                   <h3 className="text-3xl font-bold text-white tracking-tighter">0.3s</h3>
                   <span className="text-xs text-green-400 font-mono">Instant Load</span>
                 </div>
              ) : (
                <span className="text-gray-600 text-sm">Click en "Test" para simular</span>
              )}
            </div>
          </div>

        </div>

        <button 
          onClick={() => {
            setActive(false);
            setTimeout(() => setActive(true), 100);
          }}
          className="mt-8 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-mono rounded border border-gray-600 transition-all"
        >
          {active ? 'REINICIAR SIMULACIÓN' : 'EJECUTAR SPEED TEST'}
        </button>
      </div>
    </div>
  );
}