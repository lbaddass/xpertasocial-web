import Link from "next/link";
import { Github, Linkedin, Phone, Twitter, ExternalLink } from "lucide-react";

const sitemap = [
  {
    title: "Pisos de ejecución",
    links: [
      { label: "Piso 1: Infraestructura", href: "/piso-1-infraestructura" },
      { label: "Piso 2: Creative Lab", href: "/piso-2-contenido-ia" },
      { label: "Piso 3: Growth Systems", href: "/piso-3-sistemas" },
      { label: "Catálogo IA", href: "/catalogo-ia" },
    ],
  },
  {
    title: "Recursos y bitácoras",
    links: [
      { label: "Facebook Ads", href: "/facebook-ads" },
      { label: "Identity Lab", href: "/identity-lab" },
      { label: "Perfil Corporativo", href: "/perfil-corporativo" },
    ],
  },
  {
    title: "Extras",
    links: [
      { label: "Diagnóstico", href: "/diagnostico" },
      { label: "Demo interactivo", href: "/demo" },
      { label: "Design System", href: "/design-system" },
    ],
  },
];

const socials = [
  {
    label: "Llamar",
    detail: "55 1683 3133",
    href: "tel:+525516833133",
    icon: Phone,
  },
  {
    label: "GitHub",
    detail: "lbaddass",
    href: "https://github.com/lbaddass",
    icon: Github,
  },
  {
    label: "X (Twitter)",
    detail: "@lbaddassl",
    href: "https://x.com/lbaddassl",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    detail: "luisgarcia_or",
    href: "https://www.linkedin.com/in/luisgarcia_or/",
    icon: Linkedin,
  },
];

const Footer = () => {
  return (
    <div className="relative py-12 text-sm">
      <div className="absolute inset-x-0 -top-10 h-24 bg-[radial-gradient(circle_at_center,_rgba(79,209,197,0.15),_transparent_50%)] blur-3xl" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neonBlue">
            <span className="inline-block h-2 w-2 rounded-full bg-neonBlue animate-pulse" />
            Growth Engineering Hub
          </div>
          <p className="text-lg font-semibold text-white">
            Arquitecturas de adquisición, diseño creativo con IA y sistemas de venta 24/7.
          </p>
          <Link
            href="/diagnostico"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:border-neonBlue/60 hover:text-neonBlue transition-colors"
          >
            Agenda un diagnóstico
            <ExternalLink size={14} />
          </Link>
        </div>

        {sitemap.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/60">{section.title}</h3>
            <div className="flex flex-col gap-2 text-white/70">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="h-1 w-6 rounded-full bg-neonBlue/40" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-lg lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col gap-1 rounded-xl border border-white/5 bg-white/5 px-3 py-3 text-white hover:border-neonBlue/60 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                <item.icon size={16} className="text-neonBlue" />
                {item.label}
              </div>
              <span className="text-sm text-white/70 group-hover:text-white">{item.detail}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-xl border border-neonBlue/20 bg-gradient-to-r from-neonBlue/10 via-white/5 to-transparent p-4 text-white shadow-glow-money">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-neonBlue">☎</span>
            <div>
              <p className="text-sm font-semibold">Atención inmediata</p>
              <p className="text-xs text-white/60">Llamadas, mensajes y agenda en un solo lugar</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="tel:+525516833133" className="rounded-full bg-white px-4 py-2 font-semibold text-black hover:bg-neonBlue transition-colors">
              55 1683 3133
            </Link>
            <Link href="/facebook-ads" className="rounded-full border border-white/20 px-4 py-2 text-white hover:border-neonBlue/60">
              Bitácora de resultados
            </Link>
            <Link href="/diagnostico" className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-4 py-2 text-neonBlue hover:bg-neonBlue/20">
              Diseñar estrategia
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-4 text-xs text-white/50 sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} XpertaSocial. Growth Engineering Systems.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/perfil" className="hover:text-white">Perfil</Link>
          <span className="hidden sm:block text-white/20">•</span>
          <Link href="/perfil-corporativo" className="hover:text-white">Engineering Profile</Link>
          <span className="hidden sm:block text-white/20">•</span>
          <Link href="/diagnostico" className="hover:text-white">Diagnóstico</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
