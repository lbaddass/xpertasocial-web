import Link from "next/link";
import { ArrowRight, Check as CheckIcon } from "lucide-react";
import { formatPrice, taxNote, type Plan, type Price } from "@/config/catalog";

/**
 * Sistema visual del sitio comercial: identidad original de XpertaSocial (carbón, retícula cian,
 * Space Grotesk + IBM Plex Mono, acentos neón), modernizada y orientada a conversión.
 */

export type Accent = "cyan" | "pink" | "lime" | "amber";

/** Clases literales por acento (Tailwind necesita verlas completas). */
export const accent: Record<Accent, { text: string; hoverText: string; border: string; hoverBorder: string; bg: string; dot: string; ring: string }> = {
  cyan: { text: "text-neonBlue", hoverText: "hover:text-neonBlue", border: "border-neonBlue/50", hoverBorder: "hover:border-neonBlue/50", bg: "bg-neonBlue/10", dot: "bg-neonBlue", ring: "ring-neonBlue/40" },
  pink: { text: "text-neonPink", hoverText: "hover:text-neonPink", border: "border-neonPink/50", hoverBorder: "hover:border-neonPink/50", bg: "bg-neonPink/10", dot: "bg-neonPink", ring: "ring-neonPink/40" },
  lime: { text: "text-neonLime", hoverText: "hover:text-neonLime", border: "border-neonLime/50", hoverBorder: "hover:border-neonLime/50", bg: "bg-neonLime/10", dot: "bg-neonLime", ring: "ring-neonLime/40" },
  amber: { text: "text-neonAmber", hoverText: "hover:text-neonAmber", border: "border-neonAmber/50", hoverBorder: "hover:border-neonAmber/50", bg: "bg-neonAmber/10", dot: "bg-neonAmber", ring: "ring-neonAmber/40" },
};

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-content px-5 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  id,
  tone = "base",
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  tone?: "base" | "raised";
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  const tones = {
    base: "",
    raised: "border-y border-white/5 bg-carbon/60",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative scroll-mt-20 py-20 sm:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Etiqueta técnica: "> TEXTO" en mono, mayúsculas y espaciado amplio. */
export function Eyebrow({ children, tone = "cyan", prompt = true }: { children: React.ReactNode; tone?: Accent; prompt?: boolean }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.3em] ${accent[tone].text}`}>
      {prompt ? <span aria-hidden="true">&gt; </span> : null}
      {children}
    </p>
  );
}

/** Píldora mono (como "INGENIERÍA DE TRÁFICO & PLATAFORMAS" en el sitio original). */
export function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  intro,
  tone = "cyan",
  center = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  /** Segunda línea en color de acento. */
  highlight?: string;
  intro?: string;
  tone?: Accent;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className={accent[tone].text}>{highlight}</span>
          </>
        ) : null}
      </h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-white/65">{intro}</p> : null}
    </div>
  );
}

const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 text-base transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neonBlue";

export const buttonStyles = {
  primary: `${buttonBase} bg-neonBlue font-bold text-black hover:shadow-glow`,
  ghost: `${buttonBase} border border-white/20 font-mono text-sm uppercase tracking-wider text-white hover:border-neonBlue hover:text-neonBlue`,
  whatsapp: `${buttonBase} border border-neonLime/40 bg-neonLime/10 font-semibold text-neonLime hover:bg-neonLime hover:text-black`,
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`${buttonStyles[variant]} ${className}`}>
      {children}
      {arrow ? <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" /> : null}
    </Link>
  );
}

export function PriceTag({ price, size = "lg", tone = "cyan" }: { price: Price; size?: "lg" | "sm"; tone?: Accent }) {
  const note = taxNote(price);
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className={size === "lg" ? "text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]" : `font-semibold ${accent[tone].text}`}>
        {formatPrice(price)}
      </span>
      {note ? <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">{note}</span> : null}
    </p>
  );
}

export function Check({ tone = "cyan" }: { tone?: Accent }) {
  return <CheckIcon aria-hidden="true" size={16} strokeWidth={2.5} className={`mt-1 flex-none ${accent[tone].text}`} />;
}

export function FeatureList({ items, tone = "cyan" }: { items: string[]; tone?: Accent }) {
  return (
    <ul className="mt-5 space-y-2.5 text-sm text-white/75">
      {items.map((f) => (
        <li key={f} className="flex gap-2.5">
          <Check tone={tone} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

export function Card({
  children,
  className = "",
  tone = "cyan",
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Accent;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-lg border bg-panel p-6 transition-colors ${
        highlight ? `${accent[tone].border} ring-1 ${accent[tone].ring}` : `border-white/10 ${accent[tone].hoverBorder}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function PlanCard({ plan, tone = "cyan", cta }: { plan: Plan; tone?: Accent; cta?: { href: string; label: string } }) {
  const flag = plan.recommended ? "Recomendado" : plan.badge;
  return (
    <Card tone={tone} highlight={plan.recommended} className="flex flex-col">
      {flag ? (
        <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${plan.recommended ? `${accent[tone].dot} text-black` : "border border-white/15 bg-void text-white/80"}`}>
          {flag}
        </span>
      ) : null}
      <h3 className={`font-mono text-xs uppercase tracking-[0.25em] ${accent[tone].text}`}>{plan.name}</h3>
      <div className="mt-3">
        <PriceTag price={plan.price} tone={tone} />
      </div>
      {plan.note ? <p className="mt-1.5 text-sm text-white/55">{plan.note}</p> : null}
      {plan.idealFor ? <p className="mt-1.5 text-sm text-white/55">{plan.idealFor}</p> : null}
      {plan.features ? <FeatureList items={plan.features} tone={tone} /> : null}
      {cta ? (
        <div className="mt-auto pt-6">
          <Link
            href={cta.href}
            className={`group inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 font-mono text-xs uppercase tracking-wider transition ${
              plan.recommended ? `${accent[tone].dot} border-transparent font-bold text-black hover:shadow-glow` : `border-white/15 text-white ${accent[tone].hoverText}`
            }`}
          >
            {cta.label}
            <ArrowRight aria-hidden="true" size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ) : null}
    </Card>
  );
}

export function PriceTable({ plans, caption, tone = "cyan" }: { plans: Plan[]; caption: string; tone?: Accent }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-panel">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">Servicio</th>
            <th scope="col" className="hidden px-5 py-3 font-medium sm:table-cell">Ideal para</th>
            <th scope="col" className="px-5 py-3 text-right font-medium">Inversión</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {plans.map((p) => (
            <tr key={p.id} className={`transition-colors hover:bg-white/[0.03] ${p.recommended ? accent[tone].bg : ""}`}>
              <th scope="row" className="px-5 py-4 align-top font-semibold text-white">
                {p.name}
                {p.recommended ? <span className={`ml-2 font-mono text-[10px] uppercase tracking-wider ${accent[tone].text}`}>· más elegido</span> : null}
                {p.idealFor ? <span className="mt-1 block font-normal text-white/55 sm:hidden">{p.idealFor}</span> : null}
              </th>
              <td className="hidden px-5 py-4 align-top text-white/60 sm:table-cell">{p.idealFor}</td>
              <td className={`whitespace-nowrap px-5 py-4 text-right align-top font-semibold ${accent[tone].text}`}>{formatPrice(p.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-panel">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-1 font-semibold text-white [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span aria-hidden="true" className="mt-0.5 font-mono text-neonBlue transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-white/65">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Halos de luz del hero original (cian arriba a la izquierda, rosa abajo a la derecha). */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-[10%] -top-[20%] h-[500px] w-[500px] rounded-full bg-neonBlue/10 blur-[120px]" />
      <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-neonPink/10 blur-[120px]" />
    </div>
  );
}
