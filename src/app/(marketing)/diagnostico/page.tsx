import type { Metadata } from "next";
import { entryDiagnostics } from "@/config/catalog";
import { site } from "@/config/site";
import { PhoneLink, WhatsAppLink } from "@/components/site/ContactLinks";
import { LeadForm } from "@/components/site/LeadForm";
import { Container, Eyebrow, FeatureList, PriceTag } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Solicita un diagnóstico",
  description:
    "Cuéntanos qué necesitas: sitio web, tienda, Google Ads, Amazon Ads o SEO. Te respondemos en un día hábil con una recomendación de por dónde empezar.",
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <>
      <section className="bg-ink text-white" aria-labelledby="diag-titulo">
        <Container className="py-16 sm:py-20">
          <Eyebrow tone="dark">Diagnóstico</Eyebrow>
          <h1 id="diag-titulo" className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Empecemos por revisar lo que ya tienes.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Completa el formulario y te contactamos en un día hábil para agendar una llamada de diagnóstico sin costo de 30 minutos. Te
            decimos por dónde empezar, aunque decidas hacerlo por tu cuenta.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="sr-only">Formulario de diagnóstico</h2>
            <LeadForm source="diagnostico" />
          </div>
          <aside className="space-y-6" aria-label="Otras formas de contacto">
            <div className="rounded-card border border-line bg-paper p-6">
              <h2 className="font-bold">¿Prefieres hablar ya?</h2>
              <p className="mt-2 text-sm text-muted">
                {site.city} · {site.coverage}
              </p>
              <WhatsAppLink
                placement="diagnostico_aside"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-mint px-6 font-semibold text-ink hover:bg-mint-600"
              >
                Escríbenos por WhatsApp
              </WhatsAppLink>
              <p className="mt-3 text-center text-sm">
                o llama al <PhoneLink placement="diagnostico_aside" className="font-semibold underline underline-offset-2" />
              </p>
            </div>
            {entryDiagnostics.slice(0, 1).map((d) => (
              <div key={d.id} className="rounded-card border border-line bg-paper p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">{d.name}</h2>
                <div className="mt-2">
                  <PriceTag price={d.price} />
                </div>
                <p className="mt-1 text-sm text-muted">{d.note}</p>
                {d.features ? <FeatureList items={d.features} /> : null}
              </div>
            ))}
          </aside>
        </Container>
      </section>
    </>
  );
}
