import MarketingLayout from "./(marketing)/layout";
import { ButtonLink, Container } from "@/components/site/ui";

export default function NotFound() {
  return (
    <MarketingLayout>
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-700">Error 404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">No encontramos esta página.</h1>
      <p className="mt-4 max-w-prose text-lg text-muted">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Ir al inicio</ButtonLink>
        <ButtonLink href="/diagnostico" variant="secondary">
          Solicitar diagnóstico
        </ButtonLink>
      </div>
    </Container>
    </MarketingLayout>
  );
}
