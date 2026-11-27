import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowDown, Check, Clock, FileText, KeyRound, MessageCircle, ShieldCheck } from "lucide-react";
import { campaigns, getCampaign } from "@/content/campaigns";
import { planCtaLabel, planMessage } from "@/content/divisionUi";
import { WhatsAppLink } from "@/components/site/ContactLinks";
import { accent, Container, Eyebrow, Faq, FeatureList, Glow, PlanCard } from "@/components/site/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCampaign(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/lp/${c.slug}` },
    // Destino de campaña: no se indexa para no competir con las páginas de servicio.
    robots: { index: false, follow: true },
    openGraph: { title: c.metaTitle, description: c.metaDescription, type: "website", locale: "es_MX" },
  };
}

const trust = [
  { icon: KeyRound, title: "Cuentas a tu nombre", text: "Dominio, anuncios y analítica son tuyos desde el primer día." },
  { icon: FileText, title: "Todo por escrito", text: "Alcance, precio y plazo antes de pagar el anticipo." },
  { icon: ShieldCheck, title: "Sin promesas infladas", text: "No garantizamos ventas; garantizamos trabajo medible." },
  { icon: Clock, title: "Respuesta en 1 día hábil", text: "Un solo contacto por WhatsApp o llamada." },
];

const bigWhatsApp =
  "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-neonLime px-6 text-lg font-bold text-black transition hover:shadow-[0_0_28px_-6px_rgba(200,255,0,0.7)] sm:w-auto";

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCampaign(slug);
  if (!c) notFound();
  const a = accent[c.accent];

  return (
    <>
      {/* Hero: todo lo necesario para decidir, sin desplazarse */}
      <section className="relative overflow-hidden" aria-labelledby="lp-titulo">
        <Glow />
        <Container className="relative pb-12 pt-10 sm:pb-20 sm:pt-20">
          <Eyebrow tone={c.accent}>{c.eyebrow}</Eyebrow>
          <h1 id="lp-titulo" className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {c.headline} <span className={a.text}>{c.highlight}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{c.sub}</p>

          <p className={`mt-6 inline-flex rounded-full border px-4 py-1.5 font-mono text-sm font-semibold ${a.border} ${a.text}`}>
            {c.priceAnchor}
          </p>

          <ul className="mt-6 space-y-2">
            {c.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-white/85">
                <Check aria-hidden="true" size={18} className="flex-none text-neonLime" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink placement={`lp_${c.slug}_hero`} message={c.heroMessage} className={bigWhatsApp}>
              <MessageCircle aria-hidden="true" size={20} />
              Cotizar por WhatsApp
            </WhatsAppLink>
            <a href="#planes" className="inline-flex min-h-12 items-center justify-center gap-2 font-mono text-sm uppercase tracking-wider text-white/70 hover:text-white">
              Ver planes y precios <ArrowDown aria-hidden="true" size={16} />
            </a>
          </div>
        </Container>
      </section>

      {/* Planes */}
      <section id="planes" className="relative scroll-mt-16 border-y border-white/5 bg-carbon/60 py-14 sm:py-20" aria-labelledby="planes-titulo">
        <Container>
          <h2 id="planes-titulo" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Elige tu plan
          </h2>
          <p className="mt-2 text-white/65">Toca el botón y se abre WhatsApp con el plan ya escrito.</p>
          <div className="mt-8 space-y-12">
            {c.groups.map((g) => (
              <div key={g.title ?? g.division}>
                {g.title ? (
                  <h3 className={`mb-5 font-mono text-xs uppercase tracking-[0.25em] ${accent[g.accent].text}`}>{g.title}</h3>
                ) : null}
                <div className={`grid gap-5 ${g.plans.length > 1 ? "md:grid-cols-2" : ""} ${g.plans.length >= 3 ? "lg:grid-cols-3" : ""} ${g.plans.length >= 4 ? "xl:grid-cols-4" : ""}`}>
                  {g.plans.map((p) => (
                    <PlanCard
                      key={p.id}
                      plan={p}
                      tone={g.accent}
                      whatsapp={{ message: planMessage(g.division, p), label: planCtaLabel(p), placement: `lp_${c.slug}_${p.id}` }}
                    />
                  ))}
                </div>
                {g.note ? <p className="mt-4 text-xs leading-relaxed text-white/60">{g.note}</p> : null}
              </div>
            ))}
          </div>
          {c.included ? (
            <div className="mt-10 rounded-lg border border-white/10 bg-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neonBlue">{c.included.title}</h3>
              <FeatureList items={c.included.items} />
            </div>
          ) : null}
        </Container>
      </section>

      {/* Cómo funciona */}
      <section className="py-14 sm:py-20" aria-labelledby="pasos-titulo">
        <Container>
          <h2 id="pasos-titulo" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Así de simple
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <li key={s.title} className="rounded-lg border border-white/10 bg-panel p-6">
                <span className={`font-mono text-xs ${a.text}`}>{String(i + 1).padStart(2, "0")}.</span>
                <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <Icon aria-hidden="true" size={20} className="mt-0.5 flex-none text-neonBlue" />
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-white/60">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-carbon/60 py-14 sm:py-20" aria-labelledby="faq-titulo">
        <Container className="max-w-3xl">
          <h2 id="faq-titulo" className="text-3xl font-bold tracking-tight text-white">
            Preguntas frecuentes
          </h2>
          <div className="mt-8">
            <Faq items={c.faq} />
          </div>
        </Container>
      </section>

      {/* Cierre */}
      <section className="relative overflow-hidden py-16 sm:py-24" aria-labelledby="cierre-titulo">
        <Glow />
        <Container className="relative text-center">
          <h2 id="cierre-titulo" className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            ¿Listo? <span className={a.text}>Escríbenos y empezamos.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">Te respondemos en 1 día hábil con alcance, precio y plazo por escrito.</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppLink placement={`lp_${c.slug}_final`} message={c.heroMessage} className={bigWhatsApp}>
              <MessageCircle aria-hidden="true" size={20} />
              Cotizar por WhatsApp
            </WhatsAppLink>
          </div>
        </Container>
      </section>

      {/* Barra fija móvil: una sola acción */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-void/90 p-3 backdrop-blur-xl md:hidden">
        <WhatsAppLink
          placement={`lp_${c.slug}_sticky`}
          message={c.heroMessage}
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-md bg-neonLime text-lg font-bold text-black"
        >
          <MessageCircle aria-hidden="true" size={20} />
          Cotizar por WhatsApp
        </WhatsAppLink>
      </div>
    </>
  );
}
