import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { CANALES, SERVICIOS, labelOf } from "@/lib/contact/options";
import { attributionRows, formatFecha, leadSummaryRows } from "@/lib/contact/summary";
import type { LeadRecord } from "@/lib/contact/types";

export function LeadNotificationEmail({ lead }: { lead: LeadRecord }) {
  const waDigits = lead.telefonoE164.replace(/\D/g, "");
  const origen = attributionRows(lead);

  return (
    <Html lang="es">
      <Head />
      <Preview>{`${lead.nombre} (${lead.empresa}) pidió ${labelOf(SERVICIOS, lead.servicio)}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={h1}>Nuevo lead {lead.folio}</Heading>
          <Text style={muted}>
            {formatFecha(lead.createdAt)}. Prefiere contacto por{" "}
            {labelOf(CANALES, lead.canal).toLowerCase()}.
          </Text>

          <Section style={card}>
            {leadSummaryRows(lead).map(([k, v]) => (
              <Text key={k} style={row}>
                <strong>{k}:</strong> {v}
              </Text>
            ))}
          </Section>

          <Section style={{ marginTop: 24 }}>
            {waDigits ? (
              <Button href={`https://wa.me/${waDigits}`} style={button}>
                Responder por WhatsApp
              </Button>
            ) : null}
            <Text style={row}>
              <Link href={`mailto:${lead.email}`}>Responder por correo</Link>
              {waDigits ? (
                <>
                  {"  |  "}
                  <Link href={`tel:${lead.telefonoE164}`}>Llamar</Link>
                </>
              ) : null}
            </Text>
          </Section>

          {origen.length > 0 ? (
            <>
              <Hr style={hr} />
              <Text style={small}>
                <strong>Origen</strong>
                <br />
                {origen.map(([k, v]) => (
                  <span key={k}>
                    {k}: {v}
                    <br />
                  </span>
                ))}
              </Text>
            </>
          ) : null}
        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: "#f4f5f7", fontFamily: "Helvetica, Arial, sans-serif" };
const container = { margin: "0 auto", padding: "32px 24px", maxWidth: "560px" };
const h1 = { fontSize: "22px", color: "#111", margin: "0 0 4px" };
const muted = { color: "#555", fontSize: "14px", margin: "0 0 16px" };
const card = { backgroundColor: "#fff", borderRadius: "8px", padding: "16px 20px" };
const row = { fontSize: "14px", color: "#222", margin: "4px 0", lineHeight: "20px" };
const button = {
  backgroundColor: "#111",
  color: "#c6ff00",
  padding: "12px 18px",
  borderRadius: "6px",
  fontWeight: 600,
  fontSize: "14px",
};
const hr = { borderColor: "#ddd", margin: "24px 0 12px" };
const small = { fontSize: "12px", color: "#666", lineHeight: "18px" };

export default LeadNotificationEmail;
