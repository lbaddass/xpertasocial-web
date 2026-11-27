import type { Metadata } from "next";
import Link from "next/link";
import {
  conditions,
  divisions,
  entryDiagnostics,
  formatPrice,
  integratedSystems,
  type Division,
} from "@/config/catalog";
import {
  amazonExperience,
  commitments,
  generalFaq,
  method,
  reportIncludes,
  startHere,
  systemStages,
  weNeedFromYou,
} from "@/content/home";
import { WhatsAppLink } from "@/components/site/ContactLinks";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Faq,
  FeatureList,
  PlanCard,
  PriceTable,
  Section,
  SectionHeading,
} from "@/components/site/ui";

export const metadata: Metadata = {
  title: { absolute: "XpertaSocial | Publicidad, sitios web y posicionamiento conectados" },
  description:
    "Amazon Ads, Google Ads, sitios web, tiendas en línea y SEO, GEO y AEO integrados en un solo sistema de ventas medible. Precios publicados. Ciudad de México.",
  alternates: { canonical: "/" },
};

function HeroRings() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 hidden h-[34rem] w-[34rem] md:block">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[18%] rounded-full border border-white/10" />
      <div className="absolute left-[30%] top-[30%] h-24 w-24 rounded-full bg-mint-600" />
    </div>
  );
}

function DivisionBlock({ division }: { division: Division }) {
  const headingId = `${division.id}-titulo`;
  const usesTable = division.id === "web" || division.id === "seo-geo-aeo";
  return (
    <article id={division.id} aria-labelledby={headingId} className="scroll-mt-24 border-t border-line pt-12 first:border-t-0 first:pt-0">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-brand text-6xl font-bold leading-none text-mint-700/80" aria-hidden="true">
            {division.number}
          </p>
          <Eyebrow>{division.eyebrow}</Eyebrow>
          <h3 id={headingId} className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {division.headline}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{division.summary}</p>
          {division.href ? (
            <Link href={division.href} className="mt-5 inline-flex font-semibold text-mint-700 underline-offset-4 hover:underline">
              Ver detalle, plazos y qué incluye →
            </Link>
          ) : null}
        </div>

        <div>
          {usesTable ? (
            <PriceTable plans={division.plans} caption={`Precios de ${division.name}`} />
          ) : (
            <div className="grid gap-5 pt-3 md:grid-cols-3">
              {division.plans.map((p) => (
                <PlanCard key={p.id} plan={p} />
              ))}
            </div>
          )}

          {division.extras?.length ? (
            <div className="mt-6 rounded-card bg-surface p-5">
              <h4 className="font-semibold">{division.id === "web" ? "Servicio recurrente opcional" : "Complementos"}</h4>
              <ul className="mt-3 divide-y divide-line text-sm">
                {division.extras.map((e) => (
                  <li key={e.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2">
                    <span>
                      {e.name}
                      {e.badge ? <span className="ml-2 rounded-full bg-mint-50 px-2 py-0.5 text-xs font-semibold text-mint-700">{e.badge}</span> : null}
                      {e.idealFor ? <span className="block text-muted">{e.idealFor}</span> : null}
                    </span>
                    <span className="font-semibold">{formatPrice(e.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {division.id === "seo-geo-aeo" ? (
            <p className="mt-6 rounded-card bg-caution p-5 text-sm leading-relaxed">
              <strong>Lo que sí y lo que no.</strong> {division.footnote}
            </p>
          ) : (
            <p className="mt-4 text-xs leading-relaxed text-muted">{division.footnote}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="hero-titulo">
        <HeroRings />
        <Container className="relative py-20 sm:py-28">
          <Eyebrow tone="dark">Ingeniería de crecimiento</Eyebrow>
          <h1 id="hero-titulo" className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Que te encuentren, te elijan y <span className="text-mint">te compren.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Publicidad en Amazon y Google, sitios web, tiendas en línea y posicionamiento en buscadores e IA, integrados en un solo
            sistema de ventas que puedes medir.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/diagnostico">Cotizar mi proyecto</ButtonLink>
            <ButtonLink href="#soluciones" variant="secondaryDark">
              Ver soluciones
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-wrap gap-2 text-sm text-white/80" aria-label="Divisiones">
            {divisions.map((d) => (
              <li key={d.id}>
                <a href={`#${d.id}`} className="inline-flex rounded-full border border-white/20 px-4 py-1.5 hover:border-white">
                  {d.number} · {d.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Problema vs. sistema */}
      <Section labelledBy="sistema-titulo">
        <SectionHeading
          id="sistema-titulo"
          eyebrow="Por qué XpertaSocial"
          title="No vendemos campañas sueltas. Construimos sistemas de adquisición."
          intro="La mayoría de las empresas no tiene un problema de anuncios: tiene un sistema incompleto. Campañas que llevan tráfico a páginas que no convierten, prospectos que nadie mide y presupuestos que se gastan sin saber qué funcionó."
        />
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
          Trabajamos cada pieza —publicidad, sitio, medición y posicionamiento— para que se conecten entre sí y cada peso invertido se
          pueda rastrear.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systemStages.map((s) => (
            <li key={s.n} className="rounded-card border-t-4 border-mint-600 bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-700">
                {s.n} {s.title}
              </p>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Por dónde empezar */}
      <Section tone="muted" labelledBy="empezar-titulo">
        <SectionHeading
          id="empezar-titulo"
          eyebrow="Empieza aquí"
          title="¿Por dónde empezar?"
          intro="Elige según lo que más necesitas hoy. Cada división funciona sola y se integra con las demás cuando tu negocio crece."
        />
        <ul className="mt-10 divide-y divide-line rounded-card border border-line bg-paper">
          {startHere.map((row) => (
            <li key={row.solution}>
              <Link href={row.href} className="grid gap-2 p-5 transition hover:bg-mint-50 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center">
                <span>{row.situation}</span>
                <span>
                  <strong>{row.solution}</strong> <span className="text-muted">· {row.detail}</span>
                </span>
                <span aria-hidden="true" className="hidden font-semibold text-mint-700 sm:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-mint-700">Diagnósticos de entrada</h3>
        <p className="mt-3 max-w-prose text-muted">
          Antes de proponerte un plan, revisamos lo que ya tienes. Recibes un reporte con hallazgos y un plan de acción priorizado,
          contrates o no.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {entryDiagnostics.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
      </Section>

      {/* Soluciones */}
      <Section id="soluciones" labelledBy="soluciones-titulo">
        <SectionHeading
          id="soluciones-titulo"
          eyebrow="Soluciones"
          title="Cuatro divisiones, un solo sistema de ventas."
          intro={`${conditions.tax} ${conditions.validity}`}
        />
        <div className="mt-14 space-y-16">
          {divisions.map((d) => (
            <DivisionBlock key={d.id} division={d} />
          ))}
        </div>
      </Section>

      {/* Experiencia declarada */}
      <section className="bg-ink py-14 text-white" aria-labelledby="experiencia-titulo">
        <Container>
          <Eyebrow tone="dark">Experiencia</Eyebrow>
          <h2 id="experiencia-titulo" className="mt-3 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
            {amazonExperience.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/75">{amazonExperience.text}</p>
        </Container>
      </section>

      {/* Sistemas integrados */}
      <Section id="sistemas" tone="muted" labelledBy="sistemas-titulo">
        <SectionHeading
          id="sistemas-titulo"
          eyebrow="Sistemas integrados"
          title="Todo conectado, en un solo proyecto."
          intro="Paquetes de implementación que juntan lo que normalmente contratarías por separado, con un solo responsable. La gestión mensual se contrata aparte, según el canal."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integratedSystems.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
        <p className="mt-8 rounded-card bg-mint-50 p-5 leading-relaxed">
          <strong>Para vendedores en Amazon:</strong> combina un plan de Sponsored Ads con una landing externa y Google Ads para llevar
          tráfico propio a tus productos. Lo armamos como propuesta a la medida después de la auditoría.
        </p>
        <p className="mt-4 text-xs text-muted">
          {conditions.tax} {conditions.projectPayments}
        </p>
      </Section>

      {/* Proceso */}
      <Section id="proceso" labelledBy="proceso-titulo">
        <SectionHeading id="proceso-titulo" eyebrow="Cómo trabajamos" title="Un método simple, repetido cada mes." />
        <ol className="mt-10 space-y-6">
          {method.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className={`flex h-10 w-10 flex-none items-center justify-center rounded-full font-semibold text-white ${i < 3 ? "bg-ink" : "bg-mint-700"}`}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-1 max-w-prose leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-card bg-surface p-6">
            <h3 className="font-bold">Qué incluye tu reporte</h3>
            <FeatureList items={reportIncludes} />
          </div>
          <div className="rounded-card bg-surface p-6">
            <h3 className="font-bold">Qué necesitamos de ti</h3>
            <FeatureList items={weNeedFromYou} />
          </div>
        </div>
      </Section>

      {/* Compromisos */}
      <Section id="compromisos" tone="muted" labelledBy="compromisos-titulo">
        <SectionHeading id="compromisos-titulo" eyebrow="Nuestros compromisos" title="Lo que sí podemos garantizar." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c) => (
            <li key={c.title} className="rounded-card border border-line bg-paper p-6">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Preguntas */}
      <Section id="preguntas" labelledBy="preguntas-titulo">
        <SectionHeading id="preguntas-titulo" eyebrow="Preguntas frecuentes" title="Lo que nos preguntan antes de empezar" />
        <div className="mt-10 max-w-3xl">
          <Faq items={generalFaq} />
        </div>
        <div className="mt-10 max-w-3xl rounded-card bg-surface p-6 text-sm leading-relaxed text-muted">
          <h3 className="font-bold text-body">Condiciones generales</h3>
          <p className="mt-2">
            {conditions.tax} {conditions.validity} {conditions.monthlyPlans} {conditions.projectPayments} {conditions.exclusions}{" "}
            {conditions.auditsCredit}
          </p>
        </div>
      </Section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="cta-titulo">
        <HeroRings />
        <Container className="relative py-20 sm:py-24">
          <h2 id="cta-titulo" className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Empecemos por <span className="text-mint">revisar lo que ya tienes.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Agenda una llamada de diagnóstico sin costo. En 30 minutos te decimos por dónde empezar, aunque decidas hacerlo por tu cuenta.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/diagnostico">Cotizar mi proyecto</ButtonLink>
            <WhatsAppLink
              placement="home_final_cta"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 font-semibold text-white transition hover:border-white"
            >
              Escríbenos por WhatsApp →
            </WhatsAppLink>
          </div>
        </Container>
      </section>
    </>
  );
}
