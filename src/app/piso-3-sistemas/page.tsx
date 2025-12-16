import { ArrowRight, Check, Activity, MessageCircle, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

export default function GrowthSystemsPage() {
  const plans = [
    {
      title: "Reconocimiento",
      price: "$2,900 MXN/mes",
      focus: "Mantener la marca viva",
      includes: ["12 Diseños (Feed + Story)", "Copywriting Persuasivo", "Programación automática", "Reporte Mensual Básico"],
      icon: <Activity className="text-neonLime" size={32} />,
      id: "reconocimiento",
    },
    {
      title: "Interacción",
      price: "$4,900 MXN/mes",
      focus: "Generar conversación",
      includes: ["8 Estáticos + 4 Reels", "Stories Interactivas", "Edición de video dinámica", "Gestión de Comentarios"],
      icon: <MessageCircle className="text-neonLime" size={32} />,
      id: "interaccion",
    },
    {
      title: "Ventas & Leads",
      price: "$7,900 MXN/mes",
      focus: "ROI y Cierre de negocios",
      includes: ["20 Piezas (8 Reels + 12 Estáticos)", "Funnel Express Incluido", "Gestión de campañas PPC", "Reporte de ROI Detallado"],
      icon: <TrendingUp className="text-neonLime" size={32} />,
      id: "ventas",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <PageNav />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-neonLime/10 border border-neonLime/20 rounded-full">
              <span className="text-xs font-mono text-neonLime tracking-widest uppercase">PISO 3: GROWTH SYSTEMS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              MARKETING <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonLime to-green-500">24/7</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Sin contratos forzosos. La consistencia genera confianza. Tu equipo de marketing externo.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-sm font-mono text-white/40 mb-1">UPTIME GARANTIZADO</div>
            <div className="text-2xl font-mono text-neonLime">99.9% ACTIVE</div>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={plan.id}
              className={`group relative bg-carbon/50 border p-8 transition-all duration-300 overflow-hidden flex flex-col ${
                plan.id === "ventas" ? "border-neonLime/50 shadow-[0_0_30px_-10px_rgba(132,204,22,0.2)]" : "border-white/10 hover:border-neonLime/30"
              }`}
            >
              {plan.id === "ventas" && (
                <div className="absolute top-0 left-0 w-full h-1 bg-neonLime" />
              )}
              
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {plan.icon}
              </div>
              
              <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neonLime transition-colors">
                    {plan.title}
                  </h3>
                  <div className="text-sm font-mono text-white/50 uppercase tracking-wider">{plan.focus}</div>
                </div>

                <div className="text-3xl font-mono font-bold text-white">
                  {plan.price}
                </div>

                <ul className="space-y-4 flex-1 py-4">
                  {plan.includes.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                      <Check size={16} className="text-neonLime mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-auto">
                  <Link
                    href="/diagnostico"
                    className={`flex items-center justify-center gap-2 w-full font-bold py-4 rounded-sm transition-all ${
                      plan.id === "ventas" 
                        ? "bg-neonLime text-black hover:bg-white" 
                        : "bg-white/5 text-white hover:bg-neonLime hover:text-black"
                    }`}
                  >
                    ACTIVAR SISTEMA <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-carbon border border-white/10 p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
             <div className="flex items-center gap-3 text-neonLime">
                <Users size={24} />
                <span className="font-mono text-sm tracking-widest">HUMAN + AI HYBRID TEAM</span>
             </div>
             <h2 className="text-3xl font-bold text-white">No somos un freelancer que desaparece.</h2>
             <p className="text-white/60 leading-relaxed">
               Al contratar un sistema, obtienes acceso a un equipo completo: Estratega, Copywriter, Diseñador y Media Buyer. 
               Todo coordinado por nuestros Project Managers para que tú solo apruebes y vendas.
             </p>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-white mb-1">24h</div>
                  <div className="text-xs text-white/40 font-mono">TIEMPO RESPUESTA</div>
               </div>
               <div className="bg-white/5 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-white mb-1">0%</div>
                  <div className="text-xs text-white/40 font-mono">CONTRATOS FORZOSOS</div>
               </div>
               <div className="bg-white/5 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-white/40 font-mono">DEDUCIBLE</div>
               </div>
               <div className="bg-white/5 p-4 rounded text-center">
                  <div className="text-2xl font-bold text-white mb-1">ROI</div>
                  <div className="text-xs text-white/40 font-mono">ENFOQUE TOTAL</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
