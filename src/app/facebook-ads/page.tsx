import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { Activity, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import PageNav from "@/components/layout/PageNav";

interface CaseStudy {
  title: string;
  subtitle: string;
  sections: { label: string; body: string }[];
  results: { highlight: string; description: string }[];
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
}

const highlightCards = [
  {
    title: "Lectura Diaria",
    description: "Interpretamos los cambios del algoritmo a diario antes de ajustar presupuestos.",
    Icon: Activity,
  },
  {
    title: "Creatividad Asistida",
    description: "Testing continuo con IA para mantener vigente a la audiencia y al CTR.",
    Icon: Sparkles,
  },
  {
    title: "Control de Escala",
    description: "Protocolos para invertir más sin perder eficiencia ni elevar el CPA.",
    Icon: TrendingUp,
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: 'CASO 1: TENDENCIA "HIGH TICKET"',
    subtitle: "Sector Salud / Servicios",
    sections: [
      {
        label: "El Contexto Actual",
        body: "Los datos actuales del sector salud muestran una saturación publicitaria. El paciente moderno ya no busca información; busca soluciones inmediatas. Las webs tradicionales dejaron de convertir.",
      },
      {
        label: "La Adaptación (Conversion Engine)",
        body: "Migramos de sitios informativos a ecosistemas de captura. Implementamos embudos de alta velocidad diseñados para la inmediatez que exige el usuario hoy.",
      },
    ],
    results: [
      { highlight: "345 citas potenciales", description: "capturadas en flujo continuo." },
      { highlight: "Costo estabilizado en $171 MXN", description: "validando que la fricción técnica era el problema real." },
    ],
    image: "/Sector-salud-anuncios-facebook-ads-xpertasocial-marketing Large.png",
    imageAlt: "Sector Salud",
  },
  {
    title: 'CASO 2: TENDENCIA "MASS VOLUME"',
    subtitle: "Sector Retail / Moda",
    sections: [
      {
        label: "El Contexto Actual",
        body: "El e-commerce evoluciona hacia la hiper-personalización. Vender con anuncios genéricos es insostenible debido a la fatiga de audiencia.",
      },
      {
        label: "La Adaptación (Scale Protocol)",
        body: "Desplegamos catálogos dinámicos para que el algoritmo decida qué producto mostrar a cada usuario y eliminamos el error humano.",
      },
    ],
    results: [
      { highlight: "+1,300 transacciones", description: "procesadas automáticamente." },
      { highlight: "CPA de $34 MXN", description: "estable gracias a la rotación inteligente de inventario." },
    ],
    image: "/retail-scaling-anuncios-facebook-ads-xpertasocial-marketing Large.png",
    imageAlt: "Retail Scaling",
    imageFirst: true,
  },
  {
    title: 'CASO 3: TENDENCIA "BIG SPENDER"',
    subtitle: "Sector Inmobiliario / Desarrollo",
    sections: [
      {
        label: "El Contexto Actual",
        body: "La inyección agresiva de capital rompe la eficiencia si no existe estructura de datos sólida. El mercado castiga la escala sin fundamentos.",
      },
      {
        label: "La Adaptación (Market Leader)",
        body: "Implementamos segmentación inversa. Filtramos por capacidad de inversión desde el primer clic para proteger el presupuesto.",
      },
    ],
    results: [
      { highlight: "$120,000+ MXN mensuales", description: "gestionados sin disparar el costo." },
      { highlight: "1,080 prospectos calificados", description: "demostrando que la estructura soporta la escala." },
    ],
    image: "/real-state-anuncios-facebook-ads-xpertasocial-marketing Large.png",
    imageAlt: "Real State",
  },
  {
    title: 'CASO 4: TENDENCIA "CREATIVE AI"',
    subtitle: "Prueba de Eficiencia A/B",
    sections: [
      {
        label: "El Contexto Actual",
        body: "La vida útil de un anuncio se mide en horas. La producción manual ya no acompasa el ritmo de consumo del usuario.",
      },
      {
        label: "La Adaptación (Andromeda)",
        body: "Implementamos generación procedural. Enfrentamos diseño tradicional vs. variaciones de IA para medir la respuesta biológica del usuario (clic).",
      },
    ],
    results: [
      { highlight: "Diseño tradicional: $116 MXN", description: "(rechazo del mercado)." },
      { highlight: "Variante IA: $32 MXN", description: "(aceptación del mercado)." },
      { highlight: "Conclusión", description: "No se trata de buen gusto, sino de velocidad de adaptación." },
    ],
    image: "/diversidad-creativa-anuncios-facebook-ads-xpertasocial-marketing Large.png",
    imageAlt: "Creative Diversity",
    imageFirst: true,
  },
];

const FacebookAdsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-carbon text-white pt-24 pb-24">
      <PageNav />
      <div className="max-w-6xl mx-auto px-6">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-1 text-xs font-mono uppercase tracking-[0.4em] text-white/70">
            Facebook Ads
            <span className="text-amber-300">Bitácora</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            BITÁCORA DE <span className="text-amber-400">EVOLUCIÓN</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Adaptación sobre opinión. Datos sobre promesas. Este tablero muestra cómo los sistemas responden al mercado real y ajustan creatividad, budget y funnels en tiempo récord.
          </p>
          <p className="text-sm text-white/50 max-w-3xl mx-auto">
            “El mercado digital no es estático; está en <span className="text-white">constante evolución</span>. Analizamos hacia dónde se mueve el algoritmo y adaptamos la infraestructura para mantener la rentabilidad.”
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-white"
            >
              Diseñar mi Estrategia <ArrowRight size={16} />
            </Link>
            <Link
              href="/diagnostico#audit"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:text-white hover:border-white"
            >
              Solicitar Auditoría
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {highlightCards.map(({ title, description, Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30">
                <Icon size={18} className="text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 space-y-12">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-10 lg:grid-cols-2 lg:items-center"
            >
              {study.imageFirst && (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    width={640}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="space-y-4 text-left">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">Respuesta del Sistema</div>
                <h2 className="text-3xl font-bold text-amber-400">{study.title}</h2>
                <p className="text-sm text-white/60">{study.subtitle}</p>
                <div className="space-y-4 text-white/70">
                  {study.sections.map((section) => (
                    <p key={section.label}>
                      <span className="font-semibold text-white">{section.label}:</span> {section.body}
                    </p>
                  ))}
                  <div>
                    <p className="font-semibold text-white">Resultado del sistema:</p>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {study.results.map((result) => (
                        <li key={`${study.title}-${result.highlight}`} className="text-sm">
                          <span className="text-white font-semibold">{result.highlight}</span> {result.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {!study.imageFirst && (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    width={640}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-amber-900/10 p-10 text-center">
          <p className="text-2xl font-semibold text-white">
            “El algoritmo cambia. Tu infraestructura debería hacer lo mismo.”
          </p>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Operar con tecnología de ayer es la forma más rápida de perder presupuesto hoy. Alinea tu negocio a las métricas que realmente importan con una planeación basada en datos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
            >
              Actualizar mi Infraestructura <ArrowRight size={16} />
            </Link>
            <Link
              href="/diagnostico#audit"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:text-white hover:border-white"
            >
              Ver Auditoría Gratuita
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FacebookAdsPage;
