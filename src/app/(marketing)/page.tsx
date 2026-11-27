import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Clock,
  FileText,
  Gauge,
  KeyRound,
  Layers,
  MousePointerClick,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
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
import { divisionUi, quoteHref } from "@/content/divisionUi";
import { WhatsAppLink } from "@/components/site/ContactLinks";
import {
  accent,
  ButtonLink,
  buttonStyles,
  Card,
  Container,
  Eyebrow,
  Faq,
  FeatureList,
  Glow,
  Pill,
  PlanCard,
  PriceTable,
  Section,
  SectionHeading,
  type Accent,
} from "@/components/site/ui";

export const metadata: Metadata = {
  title: { absolute: "XpertaSocial | Publicidad, sitios web y posicionamiento conectados" },
  description:
    "Amazon Ads, Google Ads, sitios web, tiendas en línea y SEO, GEO y AEO integrados en un solo sistema de ventas medible. Precios publicados. Ciudad de México.",
  alternates: { canonical: "/" },
};

const divisionIcon: Record<Division["id"], LucideIcon> = {
  "amazon-ads": ShoppingCart,
  "google-ads": MousePointerClick,
  web: Layers,
  "seo-geo-aeo": Sparkles,
};

const stageIcons: LucideIcon[] = [Search, Layers, Zap, TrendingUp];
const stageAccents: Accent[] = ["cyan", "pink", "lime", "amber"];
const commitmentIcons: LucideIcon[] = [KeyRound, Wallet, FileText, Gauge, BarChart3, ShieldCheck, RefreshCw, BadgePercent, Clock];

/** Precio "desde" más bajo de cada división, para el selector del hero. */
function entryPrice(d: Division): string {
  const first = d.plans[0];
  const label = formatPrice(first.price);
  return label.startsWith("Desde") ? label : `Desde ${label}`;
}

function DivisionBlock({ division }: { division: Division }) {
  const ui = divisionUi[division.id];
  const a = accent[ui.accent];
  const Icon = divisionIcon[division.id];
  const headingId = `${division.id}-titulo`;
  const usesTable = division.id === "web" || division.id === "seo-geo-aeo";
  return (
    <article id={division.id} aria-labelledby={headingId} className="scroll-mt-24">
      <div className="grid gap-10 xl:grid-cols-[1fr_1.9fr]">
        <div className="xl:sticky xl:top-24 xl:self-start">
          <div className="flex items-center gap-4">
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${a.bg}`}>
              <Icon aria-hidden="true" size={22} className={a.text} />
            </span>
            <span className={`font-mono text-5xl font-bold leading-none ${a.text} opacity-70`} aria-hidden="true">
              {division.number}
            </span>
          </div>
          <div className="mt-6">
            <Eyebrow tone={ui.accent}>{division.eyebrow}</Eyebrow>
          </div>
          <h3 id={headingId} className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {division.headline}
          </h3>
          <p className="mt-4 leading-relaxed text-white/65">{division.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={quoteHref(ui.solution)} className={buttonStyles.primary}>
              {ui.cta}
              <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            {division.href ? (
              <Link href={division.href} className={buttonStyles.ghost}>
                Ver detalle
              </Link>
            ) : null}
          </div>
        </div>

        <div>
          {usesTable ? (
            <PriceTable plans={division.plans} caption={`Precios de ${division.name}`} tone={ui.accent} />
          ) : (
            <div className="grid gap-5 pt-3 md:grid-cols-3">
              {division.plans.map((p) => (
                <PlanCard key={p.id} plan={p} tone={ui.accent} cta={{ href: quoteHref(ui.solution), label: `Quiero ${p.name}` }} />
              ))}
            </div>
          )}

          {division.extras?.length ? (
            <div className="mt-6 rounded-lg border border-white/10 bg-panel p-5">
              <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                {division.id === "web" ? "Servicio recurrente opcional" : "Complementos"}
              </h4>
              <ul className="mt-3 divide-y divide-white/5 text-sm">
                {division.extras.map((e) => (
                  <li key={e.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                    <span className="text-white">
                      {e.name}
                      {e.badge ? (
                        <span className={`ml-2 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${a.bg} ${a.text}`}>{e.badge}</span>
                      ) : null}
                      {e.idealFor ? <span className="mt-0.5 block text-white/55">{e.idealFor}</span> : null}
                    </span>
                    <span className={`font-semibold ${a.text}`}>{formatPrice(e.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {division.id === "seo-geo-aeo" ? (
            <p className="mt-6 rounded-lg border border-neonPink/30 bg-neonPink/5 p-5 text-sm leading-relaxed text-white/80">
              <strong className="text-white">Lo que sí y lo que no.</strong> {division.footnote}
            </p>
          ) : (
            <p className="mt-4 text-xs leading-relaxed text-white/60">{division.footnote}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden" aria-labelledby="hero-titulo">
        <Glow />
        <Container className="relative grid gap-12 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pb-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neonBlue">
              &gt; System status: online <span className="ml-1 inline-block h-2 w-2 animate-glow-pulse rounded-full bg-neonLime align-middle" aria-hidden="true" />
            </p>
            <h1 id="hero-titulo" className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Que te encuentren, te elijan{" "}
              <span className="bg-gradient-to-r from-neonBlue to-white bg-clip-text text-transparent">y te compren.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/75 sm:text-xl">
              Publicidad en Amazon y Google, sitios web, tiendas en línea y posicionamiento en buscadores e IA,{" "}
              <span className="font-mono text-neonBlue">integrados en un solo sistema de ventas</span> que puedes medir.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/diagnostico">Cotizar mi proyecto</ButtonLink>
              <WhatsAppLink placement="home_hero" className={buttonStyles.whatsapp}>
                Hablar por WhatsApp
              </WhatsAppLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-white/55">
              <li>✓ Precios publicados</li>
              <li>✓ Cuentas a tu nombre</li>
              <li>✓ Respuesta en 1 día hábil</li>
            </ul>
          </div>

          {/* Selector de necesidad: un clic al formulario con la solución preseleccionada */}
          <div className="relative rounded-xl border border-white/10 bg-panel/80 p-2 shadow-glow-sm backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-signalRed/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-neonAmber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-neonLime/70" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">¿Qué necesitas hoy?</span>
            </div>
            <ul className="p-2">
              {divisions.map((d) => {
                const ui = divisionUi[d.id];
                const Icon = divisionIcon[d.id];
                return (
                  <li key={d.id}>
                    <Link
                      href={quoteHref(ui.solution)}
                      className="group flex items-center gap-4 rounded-lg px-3 py-3.5 transition hover:bg-white/[0.04]"
                    >
                      <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${accent[ui.accent].bg}`}>
                        <Icon aria-hidden="true" size={18} className={accent[ui.accent].text} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-white">{ui.short}</span>
                        <span className="block font-mono text-[11px] uppercase tracking-wider text-white/50">
                          {d.name} · {entryPrice(d)}
                        </span>
                      </span>
                      <ArrowRight aria-hidden="true" size={18} className={`flex-none text-white/30 transition group-hover:translate-x-1 ${accent[ui.accent].hoverText} group-hover:text-white`} />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href={quoteHref("Sistema integrado (varias piezas)")} className="group mt-1 flex items-center justify-between rounded-lg border border-dashed border-white/15 px-4 py-3 font-mono text-xs uppercase tracking-wider text-white/60 transition hover:border-neonBlue hover:text-neonBlue">
                  Necesito varias piezas conectadas
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ───────────── Sistema ───────────── */}
      <Section tone="raised" labelledBy="sistema-titulo">
        <SectionHeading
          id="sistema-titulo"
          eyebrow="Por qué XpertaSocial"
          title="No vendemos campañas sueltas."
          highlight="Construimos sistemas de adquisición."
          intro="La mayoría de las empresas no tiene un problema de anuncios: tiene un sistema incompleto. Campañas que llevan tráfico a páginas que no convierten, prospectos que nadie mide y presupuestos que se gastan sin saber qué funcionó."
          center
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {systemStages.map((s, i) => {
            const Icon = stageIcons[i];
            const a = accent[stageAccents[i]];
            return (
              <li key={s.n}>
                <Card tone={stageAccents[i]} className="h-full p-7">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ${a.text}`}>
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <p className={`mt-6 font-mono text-xs uppercase tracking-[0.2em] ${a.text}`}>
                    {s.n} · {s.title}
                  </p>
                  <p className="mt-3 leading-relaxed text-white/70">{s.text}</p>
                </Card>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* ───────────── Por dónde empezar ───────────── */}
      <Section labelledBy="empezar-titulo">
        <SectionHeading
          id="empezar-titulo"
          eyebrow="Empieza aquí"
          title="¿Por dónde empezar?"
          intro="Elige según lo que más necesitas hoy. Cada división funciona sola y se integra con las demás cuando tu negocio crece."
        />
        <ul className="mt-12 space-y-3">
          {startHere.map((row) => (
            <li key={row.solution}>
              <Link
                href={row.href}
                className="group grid gap-3 rounded-lg border border-white/10 bg-panel p-5 transition hover:border-neonBlue/40 hover:bg-panel2 sm:grid-cols-[1.3fr_1fr_auto] sm:items-center sm:p-6"
              >
                <span className="font-semibold text-white">{row.situation}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-neonBlue">
                  Solución: {row.solution} <span className="text-white/60">· {row.detail}</span>
                </span>
                <ArrowRight aria-hidden="true" size={18} className="hidden text-white/60 transition group-hover:translate-x-1 group-hover:text-neonBlue sm:block" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Pill>Diagnósticos de entrada</Pill>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Primero revisamos lo que ya tienes.</h3>
            <p className="mt-3 max-w-2xl text-white/65">
              Recibes un reporte con hallazgos y un plan de acción priorizado, contrates o no. Las auditorías pagadas se descuentan de tu
              primer mes.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {entryDiagnostics.map((p, i) => (
            <PlanCard
              key={p.id}
              plan={p}
              tone={(["cyan", "amber", "lime", "pink"] as Accent[])[i]}
              cta={{ href: "/diagnostico", label: p.price.kind === "free" ? "Agendar llamada" : "Solicitar auditoría" }}
            />
          ))}
        </div>
      </Section>

      {/* ───────────── Soluciones ───────────── */}
      <Section id="soluciones" tone="raised" labelledBy="soluciones-titulo">
        <SectionHeading
          id="soluciones-titulo"
          eyebrow="Ingeniería de tráfico y plataformas"
          title="Cuatro divisiones."
          highlight="Un solo sistema de ventas."
          intro={`${conditions.tax} ${conditions.validity}`}
        />
        <div className="mt-16 space-y-24">
          {divisions.map((d) => (
            <DivisionBlock key={d.id} division={d} />
          ))}
        </div>
      </Section>

      {/* ───────────── Experiencia (terminal) ───────────── */}
      <Section labelledBy="experiencia-titulo">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-panel">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-signalRed/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neonAmber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neonLime/70" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">experiencia // amazon ads</span>
          </div>
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Eyebrow tone="amber">Experiencia</Eyebrow>
              <h2 id="experiencia-titulo" className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                {amazonExperience.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">{amazonExperience.text}</p>
            </div>
            <ul className="space-y-3 font-mono text-sm text-white/75">
              <li><span className="text-neonAmber">01</span> · Video en streaming, display y DSP</li>
              <li><span className="text-neonAmber">02</span> · Cuentas de Canadá y Estados Unidos</li>
              <li><span className="text-neonAmber">03</span> · Tecnología, bebidas y entretenimiento</li>
              <li><span className="text-neonAmber">04</span> · La misma disciplina de medición, para México y LATAM</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ───────────── Sistemas integrados ───────────── */}
      <Section id="sistemas" tone="raised" labelledBy="sistemas-titulo">
        <SectionHeading
          id="sistemas-titulo"
          eyebrow="Sistemas integrados"
          title="Todo conectado,"
          highlight="en un solo proyecto."
          intro="Paquetes de implementación que juntan lo que normalmente contratarías por separado, con un solo responsable. La gestión mensual se contrata aparte, según el canal."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integratedSystems.map((p) => (
            <PlanCard key={p.id} plan={p} cta={{ href: quoteHref("Sistema integrado (varias piezas)"), label: `Cotizar ${p.name}` }} />
          ))}
          <div className="flex flex-col justify-between rounded-lg border border-neonAmber/30 bg-neonAmber/5 p-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonAmber">Para vendedores en Amazon</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Combina un plan de Sponsored Ads con una landing externa y Google Ads para llevar tráfico propio a tus productos. Lo
                armamos como propuesta a la medida después de la auditoría.
              </p>
            </div>
            <Link href={quoteHref("Amazon Ads")} className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neonAmber hover:underline">
              Pedir auditoría de Amazon <ArrowRight aria-hidden="true" size={14} />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/60">
          {conditions.tax} {conditions.projectPayments}
        </p>
      </Section>

      {/* ───────────── Método ───────────── */}
      <Section id="proceso" labelledBy="proceso-titulo">
        <SectionHeading id="proceso-titulo" eyebrow="Cómo trabajamos" title="Un método simple," highlight="repetido cada mes." />
        <ol className="mt-12 grid gap-4 lg:grid-cols-5">
          {method.map((step, i) => (
            <li key={step.title} className="relative rounded-lg border border-white/10 bg-panel p-6">
              <span className="font-mono text-xs text-neonBlue">{String(i + 1).padStart(2, "0")}.</span>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonBlue">Qué incluye tu reporte</h3>
            <FeatureList items={reportIncludes} />
          </Card>
          <Card tone="pink">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonPink">Qué necesitamos de ti</h3>
            <FeatureList items={weNeedFromYou} tone="pink" />
          </Card>
        </div>
      </Section>

      {/* ───────────── Compromisos ───────────── */}
      <Section id="compromisos" tone="raised" labelledBy="compromisos-titulo">
        <SectionHeading
          id="compromisos-titulo"
          eyebrow="Nuestros compromisos"
          title="Sin promesas infladas."
          highlight="Esto sí lo garantizamos."
          center
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c, i) => {
            const Icon = commitmentIcons[i] ?? ShieldCheck;
            return (
              <li key={c.title}>
                <Card className="h-full">
                  <Icon aria-hidden="true" size={22} className="text-neonBlue" />
                  <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{c.text}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ───────────── FAQ ───────────── */}
      <Section id="preguntas" labelledBy="preguntas-titulo">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading id="preguntas-titulo" eyebrow="Preguntas frecuentes" title="Lo que nos preguntan antes de empezar." />
            <WhatsAppLink placement="faq" className={`${buttonStyles.whatsapp} mt-8`}>
              ¿Otra pregunta? WhatsApp
            </WhatsAppLink>
          </div>
          <div>
            <Faq items={generalFaq} />
            <div className="mt-6 rounded-lg border border-white/10 bg-panel p-6 text-sm leading-relaxed text-white/55">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">Condiciones generales</h3>
              <p className="mt-3">
                {conditions.tax} {conditions.validity} {conditions.monthlyPlans} {conditions.projectPayments} {conditions.exclusions}{" "}
                {conditions.auditsCredit}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ───────────── CTA final ───────────── */}
      <section className="relative overflow-hidden border-t border-white/10" aria-labelledby="cta-titulo">
        <Glow />
        <Container className="relative py-24 text-center sm:py-32">
          <Pill>Llamada de diagnóstico · sin costo · 30 min</Pill>
          <h2 id="cta-titulo" className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Empecemos por <span className="text-neonBlue">revisar lo que ya tienes.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            En 30 minutos te decimos por dónde empezar, aunque decidas hacerlo por tu cuenta.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/diagnostico">Cotizar mi proyecto</ButtonLink>
            <WhatsAppLink placement="home_final_cta" className={buttonStyles.whatsapp}>
              Escríbenos por WhatsApp
            </WhatsAppLink>
          </div>
        </Container>
      </section>
    </>
  );
}
