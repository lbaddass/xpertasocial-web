import Link from "next/link";
import { formatPrice, taxNote, type Plan, type Price } from "@/config/catalog";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-content px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  id,
  tone = "light",
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  tone?: "light" | "muted" | "dark";
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  const tones = {
    light: "bg-paper text-body",
    muted: "bg-surface text-body",
    dark: "bg-ink text-white",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-20 py-16 sm:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone === "dark" ? "text-mint" : "text-mint-700"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-prose">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className={`mt-4 text-lg leading-relaxed ${tone === "dark" ? "text-white/75" : "text-muted"}`}>{intro}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondaryDark";
  className?: string;
}) {
  const styles = {
    primary: "bg-mint text-ink hover:bg-white",
    secondary: "border border-ink/20 text-ink hover:border-ink",
    secondaryDark: "border border-white/30 text-white hover:border-white",
  };
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PriceTag({ price, size = "lg" }: { price: Price; size?: "lg" | "sm" }) {
  const note = taxNote(price);
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className={size === "lg" ? "text-3xl font-bold tracking-tight" : "font-semibold"}>{formatPrice(price)}</span>
      {note ? <span className="text-xs text-muted">{note}</span> : null}
    </p>
  );
}

export function Check() {
  return (
    <svg className="mt-1 h-4 w-4 flex-none text-mint-700" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2 text-sm">
      {items.map((f) => (
        <li key={f} className="flex gap-2">
          <Check />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex flex-col rounded-card border bg-paper p-6 shadow-card ${
        plan.recommended ? "border-mint-600 ring-1 ring-mint-600" : "border-line"
      }`}
    >
      {plan.recommended || plan.badge ? (
        <span className="absolute -top-3 left-6 rounded-full bg-mint-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          {plan.recommended ? "Recomendado" : plan.badge}
        </span>
      ) : null}
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">{plan.name}</h3>
      <div className="mt-3">
        <PriceTag price={plan.price} />
      </div>
      {plan.note ? <p className="mt-1 text-sm text-muted">{plan.note}</p> : null}
      {plan.idealFor ? <p className="mt-1 text-sm text-muted">{plan.idealFor}</p> : null}
      {plan.features ? <FeatureList items={plan.features} /> : null}
    </article>
  );
}

export function PriceTable({ plans, caption }: { plans: Plan[]; caption: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-paper">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-surface text-xs uppercase tracking-[0.15em] text-muted">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">Servicio</th>
            <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Ideal para</th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">Inversión</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {plans.map((p) => (
            <tr key={p.id} className={p.recommended ? "bg-mint-50" : undefined}>
              <th scope="row" className="px-4 py-3 align-top font-semibold">
                {p.name}
                {p.idealFor ? <span className="mt-1 block font-normal text-muted sm:hidden">{p.idealFor}</span> : null}
              </th>
              <td className="hidden px-4 py-3 align-top text-muted sm:table-cell">{p.idealFor}</td>
              <td className="whitespace-nowrap px-4 py-3 text-right align-top font-semibold">{formatPrice(p.price)}</td>
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
    <div className="divide-y divide-line rounded-card border border-line bg-paper">
      {items.map((item) => (
        <details key={item.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span aria-hidden="true" className="mt-0.5 text-mint-700 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
