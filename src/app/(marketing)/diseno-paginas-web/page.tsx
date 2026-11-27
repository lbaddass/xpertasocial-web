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
import {
  ButtonLink,
  Container,
  Eyebrow,
  Faq,
  FeatureList,
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
      <section className="bg-ink text-white" aria-labelledby="web-titulo">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow tone="dark">Diseño de páginas web para empresas</Eyebrow>
            <h1 id="web-titulo" className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              Páginas hechas para vender, no solo para verse bien.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Sitios rápidos, adaptados a celular y conectados desde el primer día con WhatsApp, formularios y medición. Para constructoras,
              contratistas, servicios industriales y despachos que necesitan cotizaciones, no solo visitas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#cotizar">Cotizar mi sitio</ButtonLink>
              <WhatsAppLink
                placement="web_hero"
                message="Hola, quiero cotizar un sitio web para mi empresa."
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 font-semibold text-white hover:border-white"
              >
                Escribir por WhatsApp
              </WhatsAppLink>
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-ink-800 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">{corporate.name}</p>
            <p className="mt-2 text-4xl font-bold">{formatPrice(corporate.price)}</p>
            <p className="mt-1 text-sm text-white/70">MXN + IVA · {corporate.idealFor}</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt className="text-white/70">Plazo</dt>
                <dd className="text-right font-semibold">{corporateSiteTimeline}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt className="text-white/70">Pago</dt>
                <dd className="text-right font-semibold">50 % anticipo · 50 % entrega</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt className="text-white/70">Revisiones</dt>
                <dd className="text-right font-semibold">2 rondas incluidas</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt className="text-white/70">Garantía</dt>
                <dd className="text-right font-semibold">30 días sobre defectos</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Para quién */}
      <Section labelledBy="para-quien">
        <SectionHeading id="para-quien" eyebrow="Para quién" title="Empresas que venden a otras empresas." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <li key={a.title} className="rounded-card border border-line p-6">
              <h3 className="font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Problema */}
      <Section tone="muted" labelledBy="problema">
        <SectionHeading
          id="problema"
          eyebrow="El problema"
          title="Un sitio bonito que no genera cotizaciones es un gasto."
          intro="Estas son las fallas que más vemos en sitios de empresas B2B en México:"
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <li key={p} className="rounded-card border border-line bg-paper p-5 leading-relaxed">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Qué incluye / qué no */}
      <Section labelledBy="incluye">
        <SectionHeading id="incluye" eyebrow="Alcance" title="Qué incluye y qué no." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-card border border-line p-6">
            <h3 className="font-bold">Incluido</h3>
            <FeatureList items={included} />
          </div>
          <div className="rounded-card border border-line bg-surface p-6">
            <h3 className="font-bold">No incluido</h3>
            <ul className="mt-5 space-y-2 text-sm">
              {notIncluded.map((n) => (
                <li key={n} className="flex gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-muted">—</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Precios */}
      <Section tone="muted" id="precios" labelledBy="precios-titulo">
        <SectionHeading
          id="precios-titulo"
          eyebrow="Inversión"
          title="Precios publicados, antes de IVA."
          intro={`${web.footnote} ${conditions.validity}`}
        />
        <div className="mt-10">
          <PriceTable plans={web.plans} caption="Precios de diseño web y e-commerce" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-card border border-line bg-paper p-6">
            <h3 className="font-bold">Hitos de pago y condiciones</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              <li>{conditions.projectPayments}</li>
              <li>{conditions.revisions}</li>
              <li>{conditions.timelineStart}</li>
              <li>{conditions.warranty}</li>
              <li>{conditions.exclusions}</li>
            </ul>
          </div>
          <div className="rounded-card border border-line bg-paper p-6">
            <h3 className="font-bold">Lo que necesitamos de ti</h3>
            <FeatureList items={clientResponsibilities} />
          </div>
        </div>
      </Section>

      {/* Proceso */}
      <Section labelledBy="proceso-web">
        <SectionHeading id="proceso-web" eyebrow="Proceso" title="De la llamada a la entrega, sin sorpresas." />
        <ol className="mt-10 grid gap-5 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-card border-t-4 border-mint-600 bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-700">Paso {i + 1}</p>
              <h3 className="mt-2 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Recurrentes */}
      <Section tone="muted" labelledBy="recurrentes">
        <SectionHeading
          id="recurrentes"
          eyebrow="Después de la entrega"
          title="Servicios mensuales opcionales."
          intro="Nada de esto es obligatorio para contratar tu sitio."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[maintenance, seoMonthly].map((p) => (
            <article key={p.id} className="rounded-card border border-line bg-paper p-6">
              <h3 className="font-bold">{p.name}</h3>
              <div className="mt-2">
                <PriceTag price={p.price} />
              </div>
              <p className="mt-1 text-sm text-muted">{p.idealFor}</p>
              {p.features ? <FeatureList items={p.features} /> : null}
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          ¿También necesitas campañas? Revisa <Link href="/#google-ads" className="font-semibold text-mint-700 underline underline-offset-2">Google Ads</Link> o
          un <Link href="/#sistemas" className="font-semibold text-mint-700 underline underline-offset-2">sistema integrado</Link>.
        </p>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-web">
        <SectionHeading id="faq-web" eyebrow="Preguntas frecuentes" title="Antes de cotizar tu sitio" />
        <div className="mt-10 max-w-3xl">
          <Faq items={faq} />
        </div>
      </Section>

      {/* Formulario */}
      <section id="cotizar" className="scroll-mt-20 bg-surface py-16 sm:py-20" aria-labelledby="cotizar-titulo">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>Cotizar</Eyebrow>
            <h2 id="cotizar-titulo" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Cuéntanos de tu empresa.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Te respondemos en un día hábil con una recomendación y, si tiene sentido, una propuesta por escrito con alcance, precio y
              plazo.
            </p>
            <WhatsAppLink
              placement="web_form_aside"
              message="Hola, quiero cotizar un sitio web para mi empresa."
              className="mt-6 inline-flex font-semibold text-mint-700 underline underline-offset-4"
            >
              ¿Prefieres WhatsApp? Escríbenos →
            </WhatsAppLink>
          </div>
          <LeadForm source="diseno_paginas_web" defaultSolution="Sitio web o landing page" />
        </Container>
      </section>
    </>
  );
}
