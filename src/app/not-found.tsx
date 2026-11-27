import MarketingLayout from "./(marketing)/layout";
import { ButtonLink, Container } from "@/components/site/ui";

export default function NotFound() {
  return (
    <MarketingLayout>
    <Container className="relative py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neonPink">&gt; Error 404 · ruta no encontrada</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">No encontramos esta página.</h1>
      <p className="mt-4 max-w-prose text-lg text-white/65">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Ir al inicio</ButtonLink>
        <ButtonLink href="/diagnostico" variant="ghost">
          Solicitar diagnóstico
        </ButtonLink>
      </div>
    </Container>
    </MarketingLayout>
  );
}
