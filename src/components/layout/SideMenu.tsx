import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const navSections = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Catálogo IA",
      link: "/catalogo-ia",
    },
    {
      label: "Piso 1: Infraestructura",
      link: "/piso-1-infraestructura",
    },
    {
      label: "Piso 2: Creative Lab",
      link: "/piso-2-contenido-ia",
    },
    {
      label: "Piso 3: Growth Systems",
      link: "/piso-3-sistemas",
    },
    {
      label: "Facebook Ads: Bitácora",
      link: "/facebook-ads",
    },
    {
      label: "Diagnóstico",
      link: "/diagnostico",
    },
    {
      label: "Perfil Corporativo",
      link: "/perfil-corporativo",
    },
    {
      label: "Identity Lab",
      link: "/identity-lab",
    },
  ];

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[1000] overflow-y-auto overscroll-contain transition-transform duration-300 ease-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-white/95 dark:bg-carbon/95 backdrop-blur-xl text-black dark:text-white`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.1),_transparent_55%)] opacity-70" />
      <div className="relative flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10">
        <h2 className="font-mono text-lg font-bold tracking-widest">MENÚ</h2>
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70"
        >
          <X size={24} />
        </button>
      </div>

      <div className="relative p-6 pb-24 sm:pb-28">
        <div className="space-y-4">
          {navSections.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={onClose}
              className="block text-2xl font-semibold tracking-tight hover:text-neonBlue transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-neonBlue group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 pb-[env(safe-area-inset-bottom)]">
        <Link
          href="/diagnostico"
          onClick={onClose}
          className="group flex items-center justify-center gap-2 rounded-md border border-neonBlue bg-neonBlue/10 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-neonBlue transition-all hover:bg-neonBlue/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonBlue/70"
        >
          Contactar
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
