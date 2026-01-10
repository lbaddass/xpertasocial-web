import {
  ArrowRight,
  Check,
  Zap,
  Image as ImageIcon,
  Layers,
} from "lucide-react";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

export default function CreativeLabPage() {
  const services = [
    {
      title: "Product Starter",
      price: "$1,450 MXN",
      value: "Catálogo Profesional",
      features: [
        "15 Fotos IA (Fondo blanco/color)",
        "Calidad 4K",
        "Entrega en 48 horas",
      ],
      icon: <ImageIcon className="text-neonPink" size={32} />,
      id: "product",
    },
    {
      title: "Lifestyle Pro",
      price: "$2,950 MXN",
      value: "Producto en Uso",
      features: [
        "25 Fotos en Escenario",
        "Modelos IA (Sin derechos de imagen)",
        "Ambientes realistas",
      ],
      icon: <Layers className="text-neonPink" size={32} />,
      id: "lifestyle",
    },
    {
      title: "Viral Testing",
      price: "$4,950 MXN",
      value: "Anti-Fatiga Creativa",
      features: [
        "50 Variaciones Creativas",
        "Mix de estilos artísticos",
        "Formato Vertical para Ads",
      ],
      icon: <Zap className="text-neonPink" size={32} />,
      id: "viral",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <PageNav />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-neonPink/10 border border-neonPink/20 rounded-full">
              <span className="text-xs font-mono text-neonPink tracking-widest uppercase">
                PISO 2: CREATIVE LAB
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              COMBUSTIBLE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-purple-500">
                VISUAL
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              El atajo para verse como marca millonaria. Probamos en 2 días lo
              que a tu competencia le toma 3 meses.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-sm font-mono text-white/40 mb-1">
              VELOCIDAD DE GENERACIÓN
            </div>
            <div className="text-2xl font-mono text-neonPink">100X FASTER</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative bg-carbon/50 border border-white/10 p-8 hover:border-neonPink/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>

              <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neonPink transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-sm font-mono text-white/50">
                    {service.value}
                  </div>
                </div>

                <div className="text-3xl font-mono font-bold text-white">
                  {service.price}
                </div>

                <ul className="space-y-3 flex-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        size={16}
                        className="text-neonPink mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-auto">
                  <Link
                    href="/diagnostico"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-neonPink/50 pb-1 hover:text-neonPink hover:border-neonPink transition-all"
                  >
                    SOLICITAR PACK <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Demo Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              ¿Por qué usar IA Generativa?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Zap size={24} className="text-neonPink" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Velocidad Extrema
                  </h4>
                  <p className="text-white/60 text-sm">
                    Olvídate de coordinar fotógrafos, estudios y modelos.
                    Tenemos tus activos listos en 48 horas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Layers size={24} className="text-neonPink" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Variaciones Infinitas
                  </h4>
                  <p className="text-white/60 text-sm">
                    Probamos 50 ángulos diferentes para encontrar el que
                    realmente vende.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-video bg-carbon border border-white/10 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-neonPink/20 to-transparent opacity-50" />
            <div className="text-center z-10">
              <p className="font-mono text-neonPink text-sm mb-2">
                [ GENERATING ASSETS... ]
              </p>
              <div className="flex gap-2 justify-center">
                <div
                  className="w-2 h-2 bg-neonPink rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="w-2 h-2 bg-neonPink rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="w-2 h-2 bg-neonPink rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
