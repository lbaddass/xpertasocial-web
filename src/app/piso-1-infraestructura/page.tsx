import {
  ArrowRight,
  Check,
  Server,
  Layout,
  ShoppingCart,
  Database,
} from "lucide-react";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

export default function InfrastructurePage() {
  const services = [
    {
      title: "Landing Express",
      price: "$1,900 MXN",
      target: "Emprendedores validando una idea",
      features: [
        "Sitio One-Page de alto impacto",
        "Estructura de conversión probada",
        "Entrega Flash 48 horas",
      ],
      icon: <Layout className="text-neonBlue" size={32} />,
      id: "landing",
    },
    {
      title: "Embudo de Campaña",
      price: "$2,900 MXN",
      target: "Inversores en publicidad (Ads)",
      features: [
        "Sistema 2 Pasos (Registro + Gracias)",
        "Pixel Tracking instalado",
        "Vital para no tirar dinero en Ads",
      ],
      icon: <Database className="text-neonBlue" size={32} />,
      id: "embudo",
    },
    {
      title: "Sitio Negocio",
      price: "$4,500+ MXN",
      target: "Clínicas, Despachos, PyMES",
      features: [
        "5 Secciones completas",
        "CRM Básico (Tabla de leads)",
        "Botón WhatsApp directo",
      ],
      icon: <Server className="text-neonBlue" size={32} />,
      id: "sitio",
    },
    {
      title: "E-Commerce",
      price: "$5,900+ MXN",
      target: "Venta de productos físicos",
      features: [
        "Tienda Online (20 productos)",
        "Pasarela de Pagos configurada",
        "Panel autogestionable",
      ],
      icon: <ShoppingCart className="text-neonBlue" size={32} />,
      id: "ecommerce",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <PageNav />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-neonBlue/10 border border-neonBlue/20 rounded-full">
              <span className="text-xs font-mono text-neonBlue tracking-widest uppercase">
                PISO 1: INFRAESTRUCTURA
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              ACTIVOS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                PROPIOS
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              El lugar donde conviertes visitantes en dinero. Pago único,
              propiedad 100% del cliente.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-sm font-mono text-white/40 mb-1">
              CAPACIDAD DE CARGA
            </div>
            <div className="text-2xl font-mono text-neonBlue">UNLIMITED</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative bg-carbon/50 border border-white/10 p-8 hover:border-neonBlue/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neonBlue transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-sm font-mono text-white/50">
                    {service.target}
                  </div>
                </div>

                <div className="text-3xl font-mono font-bold text-white">
                  {service.price}
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        size={16}
                        className="text-neonBlue mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link
                    href="/diagnostico"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-neonBlue/50 pb-1 hover:text-neonBlue hover:border-neonBlue transition-all"
                  >
                    COTIZAR PROYECTO <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-neonBlue text-black p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                ¿No sabes qué infraestructura necesitas?
              </h2>
              <p className="text-black/70 max-w-xl">
                Realiza nuestro diagnóstico gratuito y te diremos exactamente
                qué pieza te falta para escalar.
              </p>
            </div>
            <Link
              href="/diagnostico"
              className="bg-black text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-all shrink-0"
            >
              INICIAR DIAGNÓSTICO
            </Link>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>
    </div>
  );
}
