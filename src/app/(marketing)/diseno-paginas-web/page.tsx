import type { Metadata } from "next";
import Link from "next/link";
import {
  conditions,
  corporateSiteTimeline,
  formatPrice,
  getDivision,
  webIncludedInAllProjects,
} from "@/config/catalog";
import { WhatsAppLink } from "@/components/site/ContactLinks";
import { LeadForm } from "@/components/site/LeadForm";
import { Building2, Factory, HardHat, Scale, X } from "lucide-react";
import {
  ButtonLink,
  buttonStyles,
  Card,
  Container,
  Eyebrow,
  Faq,
  FeatureList,
  Glow,
  Pill,
  PriceTable,
  PriceTag,
  Section,
  SectionHeading,
  type FaqItem,
} from "@/components/site/ui";

const web = getDivision("web");
const corporate = web.plans.find((p) => p.id === "web-corporate")!;
const maintenance = web.extras!.find((p) => p.id === "web-maintenance")!;
const seoMonthly = getDivision("seo-geo-aeo").plans.find((p) => p.id === "seo-monthly")!;

export const metadata: Metadata = {
  title: "Diseño de páginas web para empresas",
  description: `Sitios corporativos, landing pages y tiendas para constructoras, contratistas y empresas B2B en México. Sitio corporativo ${formatPrice(
    corporate.price,
  ).toLowerCase()} MXN + IVA, conectado a WhatsApp, formularios y medición.`,
  alternates: { canonical: "/diseno-paginas-web" },
};

const audienceIcons = [Building2, HardHat, Factory, Scale];

const audiences = [
  { title: "Constructoras", text: "Portafolio de obra, capacidades y zonas de cobertura para licitaciones y clientes privados." },
  { title: "Contratistas especializados", text: "Instalaciones, acabados, estructuras o mantenimiento: servicios claros y una forma directa de cotizar." },
  { title: "Servicios industriales B2B", text: "Fichas de servicio, certificaciones propias del cliente y formularios que filtran solicitudes." },
  { title: "Despachos profesionales", text: "Áreas de práctica, equipo y contacto confiable para clientes que comparan antes de llamar." },
];

const problems = [
  "El sitio no explica en 5 segundos qué haces, para quién y en qué zona.",
  "Los contactos llegan por varios canales y nadie sabe cuál campaña los trajo.",
  "En celular tarda en cargar o el botón de contacto no se encuentra.",
  "El dominio o las cuentas están a nombre de un proveedor anterior.",
];

const included = [
  ...webIncludedInAllProjects,
  "Medición de formularios, WhatsApp y llamadas verificada antes de la entrega",
  "Dominio, analítica y cuentas a tu nombre desde el primer día",
  "Capacitación breve para que actualices textos e imágenes",
];

const notIncluded = [
  "Dominio, hosting y licencias (se cotizan aparte o los contratas tú)",
  "Apps de Shopify, fotografía y producción de video",
  "Inversión publicitaria en Google, Meta o Amazon",
  "Gestión de campañas y SEO continuo (servicios mensuales opcionales)",
];

const clientResponsibilities = [
  "Textos base, logotipo e imágenes de tus proyectos (te damos una guía de qué enviar)",
  "Acceso a tu dominio y cuentas existentes, como usuario",
  "Una persona de contacto que apruebe cada entrega",
  "Respuesta a las revisiones dentro de los plazos acordados",
];

const steps = [
  { title: "Diagnóstico", text: "Llamada de 30 minutos sin costo para entender tu oferta, tu zona y cómo llegan hoy tus clientes." },
  { title: "Propuesta y anticipo", text: `Alcance, precio y plazo por escrito. ${conditions.projectPayments}` },
  { title: "Construcción", text: `${conditions.timelineStart} Te mostramos avances y aplicamos ${conditions.revisions.toLowerCase()}` },
  { title: "Medición", text: "Probamos formularios, WhatsApp y llamadas, y verificamos que cada contacto quede registrado en Analytics." },
  { title: "Entrega y crecimiento", text: `Publicamos, te entregamos accesos y arranca la garantía. ${conditions.warranty}` },
];

const faq: FaqItem[] = [
  {
    q: "¿Cuánto cuesta un sitio web para mi empresa?",
    a: `Un sitio corporativo para empresas de servicios empieza en ${formatPrice(corporate.price).replace("Desde ", "")} MXN + IVA. El precio final depende del número de páginas, el contenido y las funciones. Una landing page para campañas empieza en $2,000 y una tienda Shopify en $9,000.`,
  },
  {
    q: "¿En cuánto tiempo queda listo?",
    a: `Un sitio corporativo suele quedar en ${corporateSiteTimeline}, contados desde que recibimos todos los materiales. Proyectos más grandes se calendarizan en la propuesta.`,
  },
  { q: "¿Cómo se paga?", a: `${conditions.projectPayments} Los precios no incluyen IVA.` },
  {
    q: "¿Qué pasa si quiero cambios después de la entrega?",
    a: `${conditions.warranty} Los cambios de contenido posteriores se cubren con el plan de mantenimiento (${formatPrice(maintenance.price)} + IVA, sin permanencia) o se cotizan por separado.`,
  },
  { q: "¿Con qué tecnología lo construyen?", a: "Elegimos según tu operación: Next.js para sitios rápidos y a medida, Shopify para vender en línea y WordPress cuando tu equipo ya lo usa." },
  { q: "¿El sitio y el dominio son míos?", a: "Sí. El dominio y las cuentas quedan a tu nombre desde el primer día, y el sitio se entrega a tu nombre al liquidar el proyecto." },
  { q: "¿Garantizan que voy a recibir más clientes?", a: "No. Garantizamos un sitio rápido, claro y medido. Cuántos contactos recibes depende de tu tráfico, tu oferta y tu mercado; por eso medimos cada contacto desde el primer día." },
];

export default function DisenoPaginasWebPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="web-titulo">
        <Glow />
        <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Diseño de páginas web para empresas</Eyebrow>
            <h1 id="web-titulo" className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Páginas hechas para vender,{" "}
              <span className="bg-gradient-to-r from-neonBlue to-white bg-clip-text text-transparent">no solo para verse bien.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/75">
              Sitios rápidos, adaptados a celular y conectados desde el primer día con WhatsApp, formularios y medición. Para constructoras,
              contratistas, servicios industriales y despachos que necesitan <span className="font-mono text-neonBlue">cotizaciones, no solo visitas</span>.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#cotizar">Cotizar mi sitio</ButtonLink>
              <WhatsAppLink placement="web_hero" message="Hola, quiero cotizar un sitio web para mi empresa." className={buttonStyles.whatsapp}>
                Hablar por WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div className="rounded-xl border border-neonBlue/30 bg-panel/90 p-7 shadow-glow-sm backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neonBlue">{corporate.name} · más elegido</p>
            <p className="mt-3 text-5xl font-bold tracking-tight text-white">{formatPrice(corporate.price)}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-white/50">MXN + IVA · {corporate.idealFor}</p>
            <dl className="mt-6 divide-y divide-white/10 text-sm">
              {[
                ["Plazo", corporateSiteTimeline],
                ["Pago", "50 % anticipo · 50 % entrega"],
                ["Revisiones", "2 rondas incluidas"],
                ["Garantía", "30 días sobre defectos"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3">
                  <dt className="font-mono text-xs uppercase tracking-wider text-white/50">{k}</dt>
                  <dd className="text-right font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="#cotizar" className={`${buttonStyles.primary} mt-6 w-full`}>
              Quiero mi cotización
            </Link>
          </div>
        </Container>
      </section>

      {/* Para quién */}
      <Section tone="raised" labelledBy="para-quien">
        <SectionHeading id="para-quien" eyebrow="Para quién" title="Empresas que venden" highlight="a otras empresas." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => {
            const Icon = audienceIcons[i];
            return (
              <li key={a.title}>
                <Card className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neonBlue/10">
                    <Icon aria-hidden="true" size={22} className="text-neonBlue" />
                  </span>
                  <h3 className="mt-5 font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{a.text}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Problema */}
      <Section labelledBy="problema">
        <SectionHeading
          id="problema"
          eyebrow="El problema"
          tone="pink"
          title="Un sitio bonito que no genera cotizaciones"
          highlight="es un gasto."
          intro="Estas son las fallas que más vemos en sitios de empresas B2B en México:"
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((p, i) => (
            <li key={p} className="flex gap-4 rounded-lg border border-white/10 bg-panel p-5 leading-relaxed text-white/80">
              <span className="font-mono text-sm text-neonPink">{String(i + 1).padStart(2, "0")}</span>
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Qué incluye / qué no */}
      <Section tone="raised" labelledBy="incluye">
        <SectionHeading id="incluye" eyebrow="Alcance" title="Qué incluye" highlight="y qué no." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card highlight>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonBlue">Incluido</h3>
            <FeatureList items={included} />
          </Card>
          <Card>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">No incluido</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/60">
              {notIncluded.map((n) => (
                <li key={n} className="flex gap-2.5">
                  <X aria-hidden="true" size={16} className="mt-0.5 flex-none text-white/35" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Precios */}
      <Section id="precios" labelledBy="precios-titulo">
        <SectionHeading
          id="precios-titulo"
          eyebrow="Inversión"
          title="Precios publicados,"
          highlight="antes de IVA."
          intro={`${web.footnote} ${conditions.validity}`}
        />
        <div className="mt-12">
          <PriceTable plans={web.plans} caption="Precios de diseño web y e-commerce" />
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonBlue">Hitos de pago y condiciones</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/65">
              <li>{conditions.projectPayments}</li>
              <li>{conditions.revisions}</li>
              <li>{conditions.timelineStart}</li>
              <li>{conditions.warranty}</li>
              <li>{conditions.exclusions}</li>
            </ul>
          </Card>
          <Card tone="pink">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonPink">Lo que necesitamos de ti</h3>
            <FeatureList items={clientResponsibilities} tone="pink" />
          </Card>
        </div>
      </Section>

      {/* Proceso */}
      <Section tone="raised" labelledBy="proceso-web">
        <SectionHeading id="proceso-web" eyebrow="Proceso" title="De la llamada a la entrega," highlight="sin sorpresas." />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-white/10 bg-panel p-6">
              <span className="font-mono text-xs text-neonBlue">{String(i + 1).padStart(2, "0")}.</span>
              <h3 className="mt-2 font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Recurrentes */}
      <Section labelledBy="recurrentes">
        <SectionHeading
          id="recurrentes"
          eyebrow="Después de la entrega"
          tone="lime"
          title="Servicios mensuales opcionales."
          intro="Nada de esto es obligatorio para contratar tu sitio."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[maintenance, seoMonthly].map((p) => (
            <Card key={p.id} tone="lime">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonLime">{p.name}</h3>
              <div className="mt-3">
                <PriceTag price={p.price} />
              </div>
              <p className="mt-1.5 text-sm text-white/55">{p.idealFor}</p>
              {p.features ? <FeatureList items={p.features} tone="lime" /> : null}
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/60">
          ¿También necesitas campañas? Revisa{" "}
          <Link href="/#google-ads" className="font-semibold text-neonBlue underline-offset-4 hover:underline">Google Ads</Link> o un{" "}
          <Link href="/#sistemas" className="font-semibold text-neonBlue underline-offset-4 hover:underline">sistema integrado</Link>.
        </p>
      </Section>

      {/* FAQ */}
      <Section tone="raised" labelledBy="faq-web">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading id="faq-web" eyebrow="Preguntas frecuentes" title="Antes de cotizar tu sitio." />
          <Faq items={faq} />
        </div>
      </Section>

      {/* Formulario */}
      <section id="cotizar" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24" aria-labelledby="cotizar-titulo">
        <Glow />
        <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Pill>Respuesta en 1 día hábil</Pill>
            <h2 id="cotizar-titulo" className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Cuéntanos de <span className="text-neonBlue">tu empresa.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">
              Te respondemos con una recomendación y, si tiene sentido, una propuesta por escrito con alcance, precio y plazo.
            </p>
            <WhatsAppLink placement="web_form_aside" message="Hola, quiero cotizar un sitio web para mi empresa." className={`${buttonStyles.whatsapp} mt-8`}>
              ¿Prefieres WhatsApp?
            </WhatsAppLink>
          </div>
          <LeadForm source="diseno_paginas_web" defaultSolution="Sitio web o landing page" />
        </Container>
      </section>
    </>
  );
}
