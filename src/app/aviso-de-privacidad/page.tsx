import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "@/components/layout/PageNav";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | XpertaSocial",
  description:
    "Información sobre el tratamiento de datos personales recabados a través de xpertasocial.com.",
  robots: { index: false, follow: false },
};

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-20">
      <PageNav />
      <main className="mx-auto max-w-3xl px-6 py-12 text-white/80">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-neon">
          DOCUMENTO LEGAL
        </p>
        <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Aviso de Privacidad
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-white/70">
          <section>
            <h2 className="mb-2 font-heading text-lg font-semibold text-white">
              1. Datos personales que recabamos
            </h2>
            <p>
              Al enviar el formulario de diagnóstico en xpertasocial.com
              recabamos los siguientes datos: nombre, nombre de tu empresa o
              negocio, correo electrónico, número de teléfono o WhatsApp, sitio
              web actual (opcional) e información general sobre tu proyecto y
              presupuesto, así como parámetros de atribución de campaña (UTM,
              gclid, fbclid) cuando aplican.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-semibold text-white">
              2. Finalidad del tratamiento
            </h2>
            <p>
              Utilizamos estos datos exclusivamente para preparar tu diagnóstico,
              contactarte por el canal que elegiste (WhatsApp, llamada o correo),
              dar seguimiento comercial a tu solicitud y medir el rendimiento de
              nuestras campañas publicitarias.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-semibold text-white">
              3. Terceros encargados del almacenamiento y procesamiento
            </h2>
            <p>
              Para operar nuestro sistema de atención y medición, tus datos
              pueden almacenarse o procesarse a través de los siguientes
              proveedores bajo sus respectivas políticas de seguridad:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-white">HubSpot (CRM):</strong> registro
                y seguimiento de tu solicitud y notas del proyecto.
              </li>
              <li>
                <strong className="text-white">Resend:</strong> envío de
                confirmaciones y notificaciones por correo electrónico.
              </li>
              <li>
                <strong className="text-white">Meta (Conversions API):</strong>{" "}
                medición y deduplicación de eventos publicitarios.
              </li>
              <li>
                <strong className="text-white">Cloudflare Turnstile:</strong>{" "}
                protección contra envíos automatizados (spam).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-lg font-semibold text-white">
              4. Derechos ARCO y contacto
            </h2>
            <p>
              Puedes solicitar el acceso, rectificación, cancelación u oposición
              al tratamiento de tus datos enviando un correo a{" "}
              <a
                href="mailto:hola@xpertasocial.com"
                className="text-neon underline underline-offset-2"
              >
                hola@xpertasocial.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <Link
            href="/diagnostico"
            className="text-sm text-neon underline underline-offset-4 hover:text-white"
          >
            ← Volver al formulario de diagnóstico
          </Link>
        </div>
      </main>
    </div>
  );
}
