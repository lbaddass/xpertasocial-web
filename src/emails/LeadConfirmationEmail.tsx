import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { CANALES, SERVICIOS, labelOf } from "@/lib/contact/options";
import type { LeadRecord } from "@/lib/contact/types";
import { leadWhatsappUrl } from "@/lib/contact/whatsapp";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xpertasocial.com";
const CAL = process.env.NEXT_PUBLIC_CAL_URL;

const canalTexto: Record<string, string> = {
  whatsapp: "por WhatsApp",
  llamada: "con una llamada",
  correo: "por correo",
};

export function LeadConfirmationEmail({ lead }: { lead: LeadRecord }) {
  const [nombre] = lead.nombre.split(/\s+/);
  const calUrl = CAL
    ? `${CAL}?${new URLSearchParams({ name: lead.nombre, email: lead.email }).toString()}`
    : null;

  return (
    <Html lang="es">
      <Head />
      <Preview>Te contactamos en máximo 1 día hábil. Folio {lead.folio}.</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={brand}>XpertaSocial</Text>
          <Heading style={h1}>Hola, {nombre}. Recibimos tu solicitud.</Heading>
          <Text style={p}>
            Revisaremos lo que nos compartiste sobre {lead.empresa} y te contactaremos{" "}
            {canalTexto[lead.canal] ?? ""} en máximo 1 día hábil para agendar tu llamada de
            diagnóstico sin costo.
          </Text>

          <Section style={card}>
            <Text style={row}>
              <strong>Folio:</strong> {lead.folio}
            </Text>
            <Text style={row}>
              <strong>Servicio:</strong> {labelOf(SERVICIOS, lead.servicio)}
            </Text>
            {lead.plan ? (
              <Text style={row}>
                <strong>Plan:</strong> {lead.plan}
              </Text>
            ) : null}
            <Text style={row}>
              <strong>Te contactamos por:</strong> {labelOf(CANALES, lead.canal)}
            </Text>
          </Section>

          <Text style={p}>Si prefieres adelantarte:</Text>
          <Section>
            {calUrl ? (
              <Button href={calUrl} style={button}>
                Agendar la llamada de 30 min
              </Button>
            ) : null}
            <Text style={p}>
              <Link href={leadWhatsappUrl(lead, lead.folio)}>Escribirnos por WhatsApp</Link>
            </Text>
          </Section>

          <Text style={small}>
            Recibiste este correo porque enviaste el formulario de diagnóstico en xpertasocial.com.
            Consulta nuestro <Link href={`${SITE}/aviso-de-privacidad`}>aviso de privacidad</Link>.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: "#0e1114", fontFamily: "Helvetica, Arial, sans-serif" };
const container = { margin: "0 auto", padding: "40px 24px", maxWidth: "560px" };
const brand = { color: "#c6ff00", fontWeight: 700, letterSpacing: "0.04em", fontSize: "14px" };
const h1 = { color: "#ffffff", fontSize: "24px", lineHeight: "32px", margin: "8px 0 16px" };
const p = { color: "#c9d1d9", fontSize: "15px", lineHeight: "24px" };
const card = {
  border: "1px solid #253038",
  borderRadius: "8px",
  padding: "12px 20px",
  margin: "16px 0 24px",
};
const row = { color: "#e6edf3", fontSize: "14px", margin: "6px 0" };
const button = {
  backgroundColor: "#c6ff00",
  color: "#0e1114",
  padding: "12px 20px",
  borderRadius: "6px",
  fontWeight: 700,
  fontSize: "15px",
};
const small = { color: "#7d8590", fontSize: "12px", lineHeight: "18px", marginTop: "32px" };

export default LeadConfirmationEmail;
