# Auditoría inicial — XpertaSocial OS v1.1, Sesión 1

Fecha: 26 de noviembre de 2026. Sesión de solo lectura: este archivo es el único que se creó. No se modificó código, no se cambió de rama y no se ejecutó ningún comando de git que escriba.

---

## 0. Resumen

1. **Hay que resolver tres cosas antes de la Sesión 2:** la tabla de la Parte B está vacía, ya existe un rediseño a medias (bilingüe) en `redesign/v2` que contradice la v1.1, y el repositorio es **público**.
2. **Hay un hallazgo de seguridad crítico, ajeno al rediseño:** tres rutas `/api/*` no tienen autenticación y pueden disparar trabajos de Cloud Run y escribir en R2.
3. **El formulario actual no entrega leads:** solo los registra en la consola.
4. **Las 10 afirmaciones de la lista están publicadas en producción.** La tabla de la sección 3 indica el archivo y la URL de cada una.
5. **Recomendación:** mantener Next.js 16. No hay datos que justifiquen migrar.

---

## 1. Repositorio

| Elemento | Hallazgo |
|---|---|
| Ruta | `/Users/one/xsw/xpertasocial-web` (es el único repositorio en `/Users/one/xsw`) |
| Remoto | `origin` → GitHub, cuenta personal `lbaddass` (no es una organización) |
| Visibilidad | **PÚBLICO** (verificado con `gh repo view`) |
| Rama actual | `redesign/v2` (1 commit por delante de `main`: `958b91e docs: record the pre-redesign audit`) |
| Cambios sin commit | `package.json`, `package-lock.json`, `src/app/globals.css`, `src/app/layout.tsx`, `src/middleware.ts`, `tailwind.config.ts` (529 líneas añadidas y 210 eliminadas) |
| Ramas remotas | `main` y 5 ramas `codex/*` |
| Framework | Next.js 16 (instalado 16.1.4) con App Router, React 19.2.0, TypeScript estricto y React Compiler |
| Estilos | Tailwind CSS 3.4 y `globals.css`; tema claro/oscuro con `next-themes` |
| Gestor de paquetes | npm (`package-lock.json`) |
| Tests | **No hay** (ni Playwright ni unitarios) |
| CI/CD | No hay `.github/`. El despliegue lo hace Vercel desde Git (inferido de `@vercel/analytics` y de la auditoría anterior; no hay `vercel.json`) |
| Otros | `deploy-agents.sh` y `docker/agent_*` para Cloud Run ("Persona Engine"); `settings.yaml` es una configuración de MkDocs que no se usa en el sitio |

### Verificaciones técnicas

| Verificación | Resultado |
|---|---|
| `tsc --noEmit` | Sin errores |
| `eslint src` | **12 errores y 6 advertencias** (sobre todo `no-explicit-any` en `src/lib/*`) |
| `npm audit` | **32 vulnerabilidades: 4 críticas** (`next`, `next-auth`, `protobufjs`, `fast-xml-parser`), **17 altas**, 9 moderadas y 2 bajas |
| `next` | 16.1.4 instalado; hay 16.4.6 disponible dentro del rango (corrige las vulnerabilidades críticas) |
| `next-auth` | 4.24.13 → 4.24.15 |
| Build | No se ejecutó: escribe en `.next/` y esta sesión es de solo lectura |
| Lighthouse | No se ejecutó en esta sesión. No hay línea base medida |

### Variables de entorno usadas en el código (solo nombres)

`NEXTAUTH_SECRET`, `GCP_SERVICE_ACCOUNT_KEY_BASE64`, `GCP_PROJECT_ID`, `GCP_REGION`, `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME` y `NEXT_PUBLIC_SITE_URL` (esta última solo aparece en los cambios sin commit). No hay `.env*` versionados. Una búsqueda en el historial de git no encontró claves AWS, llaves privadas ni secretos escritos en el código.

### SEO, analítica, formularios y WhatsApp

- **Metadatos:** un solo título y una sola descripción en inglés para todo el sitio ("XpertaSocial | Growth Engineering Systems"). No hay canonical, Open Graph ni JSON-LD.
- **Idioma:** `<html lang="en">` en producción, aunque el contenido está en español.
- **Sitemap:** `/sitemap.xml` devuelve 404. `robots.txt` lo sirve Cloudflare (content signals), no la aplicación.
- **Analítica:** GA4 `G-Y4VM4XNER6` y GTM `GTM-5PCNSH54` están escritos a mano en `src/app/layout.tsx` (rama `main`) y en `src/lib/gtag.ts`. Se cargan **sin consentimiento**. También se usa `@vercel/analytics`. *El propietario debe confirmar si estos son los IDs vigentes (Parte B).*
- **Formulario:** `src/components/DiagnosticForm.tsx` hace `console.info(...)` y muestra un mensaje de éxito. **El lead se pierde.** `/diagnostico` usa `mailto:auditoria@xpertasocial.com`.
- **Datos de contacto en el código (pendientes de verificar):**
  - Teléfono en el footer: `tel:+525516833133`.
  - WhatsApp en `FinalCTA.tsx`: `wa.me/525660213375`. Este componente no se importa en ninguna página.
  - Correos: `auditoria@xpertasocial.com`, `xpertasocial@gmail.com` y `one@xpertasocial`. Este último está **mal formado**: le falta el TLD.
  - Por la regla 4 de CLAUDE.md, ninguno de estos datos se reutiliza sin la confirmación del propietario.

---

## 2. Producción (https://xpertasocial.com)

Las URLs se obtuvieron el 26 de noviembre de 2026. No hay sitemap; el inventario sale de los enlaces internos de la Home y de la auditoría previa (`docs/url-inventory.csv`).

| URL | Estado |
|---|---|
| `/` | 200 |
| `/piso-1-infraestructura`, `/piso-2-contenido-ia`, `/piso-3-sistemas` | 200 |
| `/catalogo-ia`, `/facebook-ads`, `/identity-lab` | 200 |
| `/perfil-corporativo`, `/perfil/sobre-mi`, `/jluisgarciaor` | 200 |
| `/perfil` (enlazada desde el footer) | **404** |
| `/diagnostico`, `/demo` ("en construcción"), `/design-system` (interna) | 200 |
| `/login` | 200 |
| `/admin` | **500**: redirige a `/api/auth/error?error=Configuration`. NextAuth está mal configurado en producción |
| `/sitemap.xml` | 404 |

**¿Coincide producción con el repositorio?** Sí, con `main`. Los títulos, los H1, los IDs de GA4/GTM y los enlaces coinciden. Nada de `redesign/v2` está desplegado: `/es/` devuelve 404.

**Navegación:** la navegación pública enlaza a `/demo` (sin terminar) y a `/design-system` (una página interna), y el footer enlaza a `/perfil`, que da 404. Los CTA no son consistentes ("Simular Campaña", WhatsApp con urgencia artificial, `mailto:` y un formulario que no envía nada). El H1 de la Home ("EL MKT NO ES MAGIA. ES ARQUITECTURA.") no menciona ningún producto.

---

## 3. Verificación de afirmaciones

Todas estas afirmaciones están **presentes y publicadas**. Ninguna tiene una fuente verificable en el repositorio.

| Afirmación | Archivo | URL en producción |
|---|---|---|
| ROI de 3.8x a 12.5x | `src/app/page.tsx:348`, `:493` | `/` |
| Dashboard con $124,500 y 842 leads | `src/components/ui/MockDashboard.tsx:28`, `:54` (se usa en `page.tsx`) | `/` |
| "Riesgo Cero" / "Garantía de Resultados (Risk-Free)" | `src/app/page.tsx:506`, `src/app/diagnostico/page.tsx:112` | `/`, `/diagnostico` |
| "Sistema propietario Andromeda" | `page.tsx:247/283/327`, `facebook-ads/page.tsx:129`, `perfil-corporativo/page.tsx:101/370`, `FrameworkCards.tsx:20` ("Andromeda™"), `ValueGrid.tsx:10`, `MockDashboard.tsx:14` | `/`, `/facebook-ads`, `/perfil-corporativo` |
| 50 variaciones creativas | `page.tsx:283/335`, `piso-2-contenido-ia/page.tsx:42` | `/`, `/piso-2-contenido-ia` |
| Catálogo de microservicios de $45 a $3,000 | `src/app/catalogo-ia/page.tsx:39/178/227` | `/catalogo-ia` |
| Descuentos de 65 a 85% ("Capital Raise", "75-85% OFF") | `catalogo-ia/page.tsx:18/196/210/228/256/295` | `/catalogo-ia` |
| Reducción de inasistencias ("-85% inasistencias", "ROI en 30 días") | `catalogo-ia/page.tsx:89/197` | `/catalogo-ia` |
| "UPTIME GARANTIZADO" | `src/app/piso-3-sistemas/page.tsx:80` | `/piso-3-sistemas` |
| Urgencia artificial ("solo quedan 3 slots") | `src/components/FinalCTA.tsx:23` | No está publicado (el componente no se usa) |

---

## 4. Hallazgos por severidad

| # | Severidad | Hallazgo | Impacto comercial | Solución propuesta |
|---|---|---|---|---|
| H1 | **Crítica** | `/api/trigger-job`, `/api/check-report` y `/api/debug/upload-test` no tienen autenticación. El middleware en `main` solo protege `/admin/:path*`. `upload-test` escribe en R2 con una petición GET. No se probó en vivo para evitar efectos secundarios. | Cualquiera puede generar costos en GCP/R2 o leer reportes. | Exigir sesión en las rutas API (con `getServerSession` o ampliando el matcher) y eliminar `debug/upload-test`. **Se recomienda corregirlo antes que el rediseño.** |
| H2 | **Crítica** | El formulario de diagnóstico es un stub (`console.info`) y aun así muestra un mensaje de éxito. | Se pierden todos los leads del formulario. | Implementar el backend del formulario como se describe en la Sesión 2 §5. |
| H3 | **Crítica** | Las afirmaciones de la sección 3 están en producción. | Riesgo legal (PROFECO y publicidad engañosa) y pérdida de credibilidad con clientes B2B. | Retirarlas y redirigir las páginas que las contienen (sección 6). |
| H4 | **Alta** | El `src/middleware.ts` sin commit **elimina `withAuth`**. El layout de `/admin` no comprueba la sesión. | Si se hace commit, `/admin` queda abierto. | Cualquier middleware nuevo debe conservar `withAuth` para `/admin` y para las APIs. |
| H5 | **Alta** | `npm audit` reporta 4 vulnerabilidades críticas (entre ellas `next` y `next-auth`). | Vulnerabilidades explotables en producción. | Actualizar `next` a 16.4.6 y `next-auth` a 4.24.15; revisar las demás. |
| H6 | **Alta** | El repositorio es público. | Las reglas de CLAUDE.md sobre información confidencial dependen de esto. `deploy-agents.sh` expone el ID del proyecto GCP y el nombre del bucket. | Decidir si se hace privado (Parte B). Los documentos del OS van a `xpertasocial-os`, que debe ser privado. |
| H7 | **Alta** | GA4 y GTM se cargan sin consentimiento. No hay un evento de conversión fiable. | No se puede optimizar Google Ads y hay riesgo frente a la LFPDPPP. | Implementar Consent Mode v2 y tomar los IDs de variables de entorno (Sesión 4). |
| H8 | **Alta** | `/admin` da 500 en producción (`error=Configuration`). | El panel interno no funciona. | Revisar `NEXTAUTH_URL` y `NEXTAUTH_SECRET` en Vercel. Requiere acceso del propietario. |
| H9 | Media | No hay sitemap, canonical, JSON-LD ni títulos únicos, y `lang="en"`. | Indexación pobre. | Resolverlo en la Sesión 3. |
| H10 | Media | La navegación enlaza a `/demo`, `/design-system` y `/perfil` (404). | Se percibe como un sitio sin terminar. | Redirigir esas URLs y simplificar la navegación (Sesión 2). |
| H11 | Media | Lint con 12 errores. No hay tests. | Incumple la "Calidad mínima" de CLAUDE.md. | Corregir el lint y añadir Playwright (Sesión 2). |
| H12 | Baja | Hay un correo mal formado (`one@xpertasocial`) y un WhatsApp sin usar con urgencia artificial. | — | Se eliminan con las páginas antiguas. |
| H13 | Baja | `settings.yaml` (MkDocs, con URLs de ejemplo) y `README.md` (que es un mensaje de commit) no tienen relación con el sitio. | Confusión. | Limpiarlos en la Sesión 2 o 3. |

---

## 5. Conflictos con la especificación v1.1

1. **Ya hay un rediseño en curso que contradice la v1.1.** `redesign/v2` contiene `docs/AUDIT.md`, `DECISIONS.md` (D1–D15) y cambios sin commit en el middleware, el layout, los estilos y las dependencias para un sitio **bilingüe** (`/es/`, `/en/`) con otra arquitectura (`/web-engineering/`, `/visibility-engineering/`, `/insights/`, `/about/`). La v1.1 pide **solo español**, URLs como `/diseno-paginas-web` y trabajar en la rama `feat/os-v1-website`. Hay que decidir qué hacer con esos cambios (ver la sección 9).
2. **Rama:** la v1.1 crea `feat/os-v1-website` "desde la rama principal" (`main`). Hacerlo con el árbol de trabajo sucio arrastraría los cambios sin commit.
3. **Dependencias sin commit:** `zod`, `react-hook-form`, `@hookform/resolvers` y `geist` se añadieron sin justificación en un commit (regla 6). `zod` sí es útil para la validación del servidor en la Sesión 2.
4. **`CLAUDE.md` no existe** en el repositorio. La Parte C indica crearlo, pero esta sesión es de solo lectura.
5. **Nicho:** el README y los textos antiguos apuntan a clínicas de cirugía plástica. La v1.1 apunta a construcción, contratistas e industria B2B. No queda nada del nicho anterior.
6. **Persona Engine y admin:** son infraestructura interna sin relación con la oferta productizada. La v1.1 no los menciona. Propuesta: dejarlos intactos, pero corregir su seguridad (H1, H4).

---

## 6. Arquitectura propuesta

**Mantener Next.js 16 con App Router, TypeScript, Tailwind 3 y Vercel.** No hay datos que justifiquen una migración: el stack sirve para generación estática, metadatos, `sitemap.ts` y rutas API para el formulario. El costo de migrar no se recupera en un sitio de unas 12 páginas.

- Grupo de rutas `src/app/(marketing)/` con su propio layout (header y footer), separado de `/admin` y `/login`.
- `src/config/catalog.ts` como única fuente de verdad para precios, nombres y alcances (los valores `PENDING` se muestran como "Cotizar").
- `src/app/api/leads/route.ts` con validación `zod`, honeypot, Turnstile opcional, CRM con respaldo y notificación.
- Las redirecciones van en `next.config.ts` (`redirects()`, `permanent: true`, que genera un **308**; Google trata 301 y 308 de la misma forma). Las URLs retiradas sin equivalente devuelven **410** desde el middleware o una ruta.
- Para Tailwind 4 no hay migración ahora; se queda en 3.4.

---

## 7. Mapa de redirecciones (propuesta para aprobar)

| URL actual | Destino | Código | Nota |
|---|---|---|---|
| `/piso-1-infraestructura` | `/diseno-paginas-web` | 301/308 | Sitio web y landing: el equivalente directo |
| `/piso-2-contenido-ia` | `/seo-geo-aeo` | 301/308 | Es el equivalente más cercano (contenido y visibilidad). **Dudoso**: la alternativa es 410 |
| `/piso-3-sistemas` | `/crecimiento` | 301/308 | Servicios recurrentes |
| `/catalogo-ia` | `/catalogo` | 301/308 | `/catalogo` se crea en la Sesión 3; hasta entonces, a `/` |
| `/facebook-ads` | — | **410** | Sin oferta equivalente; casos no verificables |
| `/identity-lab` | — | **410** | Sin equivalente |
| `/perfil-corporativo` | `/nosotros` | 301/308 | `/nosotros` llega en la Sesión 3; hasta entonces, a `/` |
| `/perfil/sobre-mi` | `/nosotros` | 301/308 | Ídem |
| `/perfil` | `/nosotros` | 301/308 | Hoy devuelve 404 y está enlazada |
| `/jluisgarciaor` | `/nosotros` | 301/308 | Ídem |
| `/diagnostico` | `/diagnostico` | se mantiene | La misma URL, reconstruida |
| `/demo` | — | **410** | Página sin terminar |
| `/design-system` | — | **410** | Página interna |
| `/login`, `/admin/*`, `/api/auth/*` | se mantienen | — | Infraestructura interna |
| `/api/trigger-job`, `/api/check-report` | se mantienen, **con autenticación** | — | H1 |
| `/api/debug/upload-test` | eliminar | 404 | H1 |

Condición: no se activa ninguna redirección hacia una página que aún no exista. Las que apuntan a destinos de la Sesión 3 van temporalmente a `/` o se despliegan junto con la Sesión 3.

---

## 8. Archivos que probablemente cambiarán (Sesiones 2–4)

- **Nuevos:**
  - `CLAUDE.md`
  - `src/config/catalog.ts`, `src/config/site.ts` (contacto con `TODO_OWNER`)
  - `src/app/(marketing)/**` (layout, `/`, `/diseno-paginas-web`, `/diagnostico`, `/aviso-de-privacidad` y, en la Sesión 3, el resto de las páginas)
  - `src/app/api/leads/route.ts`, `src/lib/leads/*`
  - `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`
  - Tokens de diseño
  - `playwright.config.ts`, `tests/e2e/*`
- **Modificados:** `src/app/layout.tsx`, `src/middleware.ts` (conservando `withAuth`), `next.config.ts` (redirecciones), `tailwind.config.ts`, `globals.css`, `package.json`, rutas `src/app/api/*` (autenticación), `src/lib/gtag.ts`, `README.md`.
- **Eliminados:** `src/app/{piso-*,catalogo-ia,facebook-ads,identity-lab,perfil*,jluisgarciaor,demo,design-system}` y los componentes que solo usan ellas (`Hero/*`, `MockDashboard`, `FrameworkCards`, `ValueGrid`, `LabClients`, `FinalCTA`, `SpeedDemo`, `ComparisonTable`, `ContentWorkflow`, `DiagnosticForm`).

## 9. Dependencias externas y credenciales necesarias

| Necesidad | Para qué | Estado |
|---|---|---|
| CRM (recomendado HubSpot gratuito) con token privado | Persistir leads | Pendiente |
| Proveedor de correo (p. ej. Resend) y correo de notificación | Respaldo y aviso de leads | Pendiente |
| Almacenamiento de respaldo (puede reutilizarse R2, que ya está configurado) | Que ningún lead se pierda | Disponible si el propietario aprueba usar R2 |
| Cloudflare Turnstile (clave del sitio y secreta) | Antispam | Opcional |
| IDs de GA4, GTM y Google Ads | Medición | Hay GA4/GTM escritos en el código; confirmar. Google Ads: pendiente |
| Acceso a las variables de Vercel | Corregir H8 y cargar los secretos | Pendiente (lo hace el propietario) |
| Herramienta de agenda | `schedule_call` | Pendiente |

---

## 10. Decisiones que requieren aprobación del propietario

1. **Cambios sin commit en `redesign/v2`** (el plan bilingüe). Opciones:
   - (a) guardarlos con `git stash` y partir de `main` (recomendado: contradicen la v1.1);
   - (b) hacer commit de ellos en `redesign/v2` como archivo y partir de `main`;
   - (c) construir la v1.1 sobre ellos.
2. **¿Se corrige primero H1 (APIs sin autenticación)** en una rama `fix/api-auth`, antes del rediseño? Recomendado: sí.
3. **Visibilidad del repositorio:** ¿se hace privado?
4. **Tabla de la Parte B completa.** Precios de Landing y Website, E-commerce, IVA, contacto, razón social, CRM, agenda e IDs. Sin ella, la Sesión 2 muestra "Cotizar" en lugar de precios.
5. **Datos de contacto encontrados en el código:** ¿son válidos? Tel. +52 55 1683 3133; WhatsApp +52 56 6021 3375; `auditoria@xpertasocial.com`; `xpertasocial@gmail.com`.
6. **IDs de analítica encontrados:** ¿siguen vigentes `G-Y4VM4XNER6` y `GTM-5PCNSH54`?
7. **Mapa de redirecciones (sección 7):** en particular, `/piso-2-contenido-ia` (¿redirigir o 410?) y los 410.
8. **¿Se mantiene el admin y Persona Engine** en este repositorio y dominio?
9. **¿Se crea `CLAUDE.md`** (Parte C) como primer commit de la Sesión 2?
10. **¿Se actualizan `next` y `next-auth`** (H5) dentro de la Sesión 2?

---

**Fin de la Sesión 1. No se implementó nada. Queda en espera de aprobación.**
