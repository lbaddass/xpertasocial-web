9import { ArrowRight, Palette, PenTool, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function IdentityLabPage() {
  const services = [
    {
      title: "Logo Motion",
      price: "$950 MXN",
      desc: "Animación de logotipo (Intro/Outro)",
      icon: <Palette className="text-white" size={24} />,
    },
    {
      title: "Social Kit",
      price: "$1,500 MXN",
      desc: "Portadas y Highlights",
      icon: <PenTool className="text-white" size={24} />,
    },
    {
      title: "Brand Refresh",
      price: "$2,900 MXN",
      desc: "Modernización ligera de logo + paleta de colores",
      icon: <RefreshCw className="text-white" size={24} />,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 border border-white/20 rounded-full">
            <span className="text-xs font-mono text-white tracking-widest uppercase">IDENTITY LAB</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            ENTRADA RÁPIDA <span className="text-white/50">VISUAL</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto font-light">
            Pequeños ajustes de alto impacto para marcas que necesitan verse profesionales hoy mismo.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-center justify-between p-6 bg-carbon/50 border border-white/10 hover:border-white/30 transition-all rounded-sm"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-white/50">{service.desc}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <span className="font-mono text-lg font-bold text-white">{service.price}</span>
                <Link
                  href="/diagnostico"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/diagnostico"
            className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all"
          >
            SOLICITAR SERVICIO EXPRESS <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
