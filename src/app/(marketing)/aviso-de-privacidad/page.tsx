import type { Metadata } from "next";
import { site } from "@/config/site";
import { Container } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de XpertaSocial para los datos recibidos por formularios, WhatsApp y llamadas.",
  alternates: { canonical: "/aviso-de-privacidad" },
  // Borrador pendiente de revisión legal: no se indexa.
  robots: { index: false, follow: true },
};

export default function AvisoPrivacidadPage() {
  const responsable = site.legalName ?? "[TODO_OWNER: razón social o nombre del titular]";
  return (
    <Container className="max-w-prose py-14 sm:py-20">
      <p className="rounded-card border border-amber-300 bg-caution p-4 text-sm font-semibold" role="note">
        BORRADOR — pendiente de revisión legal. Este texto no ha sido validado por un abogado y puede cambiar.
      </p>
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Aviso de privacidad</h1>
      <div className="mt-8 space-y-6 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-body">
        <p>
          {responsable}, que opera la marca {site.name} con domicilio en {site.city}, es responsable del tratamiento de los datos
          personales que nos proporcionas, conforme a la legislación mexicana de protección de datos personales en posesión de
          particulares.
        </p>

        <h2>Datos que recabamos</h2>
        <p>
          Nombre, empresa, sector, sitio web, correo electrónico, teléfono o WhatsApp, la solución que te interesa, el rango de inversión
          y la fecha estimada de tu proyecto. También registramos de forma automática la página de entrada, el sitio de procedencia y
          parámetros de campaña (como UTM o identificadores de clic de Google Ads) para saber qué canal te trajo. No recabamos datos
          sensibles.
        </p>

        <h2>Para qué los usamos</h2>
        <p>
          Finalidades necesarias: responder tu solicitud, agendar la llamada de diagnóstico, preparar una propuesta y dar seguimiento
          comercial. Finalidad secundaria: medir qué campañas y páginas generan solicitudes, para mejorar nuestra publicidad. Puedes
          oponerte a la finalidad secundaria escribiéndonos por los medios indicados abajo.
        </p>

        <h2>Con quién los compartimos</h2>
        <p>
          Con proveedores que nos prestan servicios de alojamiento, almacenamiento, correo, CRM y medición (por ejemplo, servicios en la
          nube y herramientas de analítica), únicamente para las finalidades descritas. No vendemos tus datos.
        </p>

        <h2>Tus derechos (ARCO)</h2>
        <p>
          Puedes acceder, rectificar, cancelar u oponerte al tratamiento de tus datos, así como revocar tu consentimiento, enviando tu
          solicitud por WhatsApp al {site.phoneDisplay}
          {site.email ? ` o al correo ${site.email}` : ""}. Te responderemos en los plazos que marca la ley.
        </p>

        <h2>Cookies y tecnologías de rastreo</h2>
        <p>
          Este sitio usa herramientas de analítica y publicidad de Google para medir visitas y conversiones. Puedes desactivarlas desde la
          configuración de tu navegador.
        </p>

        <h2>Cambios a este aviso</h2>
        <p>Cualquier cambio se publicará en esta misma página.</p>
        <p className="text-sm">Última actualización: noviembre de 2026 (borrador).</p>
      </div>
    </Container>
  );
}
