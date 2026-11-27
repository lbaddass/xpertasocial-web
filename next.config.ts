import type { NextConfig } from "next";

/**
 * Redirecciones del sitio anterior (mapa en docs/audit/initial-audit.md §7).
 * - permanent: true  → 308 (Google lo trata igual que un 301).
 * - permanent: false → 307, solo mientras el destino definitivo se construye en la Sesión 3.
 *   Al crear esas páginas, cambia el destino y pásalas a permanent: true.
 * Las URLs sin equivalente responden 410 desde src/app/(gone)/*.
 */
const legacyRedirects = [
  { source: "/piso-1-infraestructura", destination: "/diseno-paginas-web", permanent: true },
  // Destino definitivo pendiente (Sesión 3): /seo-geo-aeo
  { source: "/piso-2-contenido-ia", destination: "/#seo-geo-aeo", permanent: false },
  // Destino definitivo pendiente (Sesión 3): página de sistemas integrados / crecimiento
  { source: "/piso-3-sistemas", destination: "/#sistemas", permanent: false },
  // Destino definitivo pendiente (Sesión 3): /catalogo
  { source: "/catalogo-ia", destination: "/#soluciones", permanent: false },
  // Destino definitivo pendiente (Sesión 3): /nosotros
  { source: "/perfil-corporativo", destination: "/", permanent: false },
  { source: "/perfil/sobre-mi", destination: "/", permanent: false },
  { source: "/perfil", destination: "/", permanent: false },
  { source: "/jluisgarciaor", destination: "/", permanent: false },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
