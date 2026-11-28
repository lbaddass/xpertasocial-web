import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { entryDiagnostics } from "@/config/catalog";
import { site } from "@/config/site";
import { PhoneLink, WhatsAppLink } from "@/components/site/ContactLinks";
import { DiagnosticoForm } from "@/components/contact/DiagnosticoForm";
import { buttonStyles, Container, Eyebrow, FeatureList, Glow, PriceTag } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Solicita un diagnóstico",
  description:
    "Cuéntanos qué necesitas: sitio web, tienda, Google Ads, Amazon Ads o SEO. Te respondemos en un día hábil con una recomendación de por dónde empezar.",
  alternates: { canonical: "/diagnostico" },
};

const reassurance = [
  { icon: Clock, text: "Respuesta en 1 día hábil" },
  { icon: ShieldCheck, text: "Sin compromiso de contratación" },
  { icon: MessageCircle, text: "Un solo contacto que conoce tu cuenta" },
];

export default function DiagnosticoPage() {
  const call = entryDiagnostics[0];
  return (
    <section className="relative overflow-hidden" aria-labelledby="diag-titulo">
      <Glow />
      <Container className="relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.5fr] lg:items-start">
        <div>
          <Eyebrow>Diagnóstico</Eyebrow>
          <h1 id="diag-titulo" className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Empecemos por <span className="text-neonBlue">revisar lo que ya tienes.</span>
          </h1>
          <p className="mt-5 text-lg font-light leading-relaxed text-white/75">
            Completa el formulario y te contactamos para agendar una llamada de diagnóstico sin costo. Te decimos por dónde empezar, aunque
            decidas hacerlo por tu cuenta.
          </p>
          <ul className="mt-8 space-y-3">
            {reassurance.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-white/80">
                <Icon aria-hidden="true" size={18} className="text-neonBlue" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div id="formulario" className="scroll-mt-24 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div id="audit" className="scroll-mt-24" />
          <h2 className="sr-only">Formulario de diagnóstico</h2>
          <DiagnosticoForm />
        </div>

        <div>
          <div className="rounded-lg border border-white/10 bg-panel p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-neonBlue">{call.name}</h2>
            <div className="mt-3">
              <PriceTag price={call.price} />
            </div>
            <p className="mt-1 text-sm text-white/55">{call.note}</p>
            {call.features ? <FeatureList items={call.features} /> : null}
          </div>

          <div className="mt-6 rounded-lg border border-neonLime/25 bg-panel p-6">
            <h2 className="font-bold text-white">¿Prefieres hablar ya?</h2>
            <WhatsAppLink placement="diagnostico_aside" className={`${buttonStyles.whatsapp} mt-4 w-full`}>
              Escríbenos por WhatsApp
            </WhatsAppLink>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" size={15} className="text-neonBlue" />
                <PhoneLink placement="diagnostico_aside" className="hover:text-neonBlue" />
              </li>
              {site.email ? (
                <li className="flex items-center gap-2">
                  <Mail aria-hidden="true" size={15} className="text-neonBlue" />
                  <a href={`mailto:${site.email}`} className="hover:text-neonBlue">
                    {site.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
