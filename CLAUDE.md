# XpertaSocial — Reglas del proyecto

## Contexto
XpertaSocial vende servicios digitales en cuatro divisiones: Amazon Ads, Google Ads y Performance,
Web/E-commerce/Conversión y SEO/GEO/AEO, más paquetes de Sistemas integrados. Opera una sola persona
desde Ciudad de México. Mercado: México y LATAM; marcas que venden en Amazon EE. UU.
Prioridad: flujo de caja, leads calificados y clientes recurrentes. No complejidad técnica.

## Fuente de verdad comercial
- Precios, alcances, nombres de producto y condiciones viven SOLO en `src/config/catalog.ts`.
  Origen: "XpertaSocial — Catálogo de servicios 2026" (PDF, noviembre de 2026).
- Datos de contacto y datos fiscales viven SOLO en `src/config/site.ts` (WhatsApp de conversión +52 1 56 6021 3375 y xpertasocial@gmail.com, confirmados por el propietario).
- Identidad visual: la original de XpertaSocial (carbón, retícula cian, Space Grotesk + IBM Plex Mono, acentos neón). Se moderniza; no se reemplaza.
- Ningún componente contiene precios escritos a mano.
- Un precio marcado `PENDING` se muestra como "Cotizar".
- Precios en MXN antes de IVA, salvo Amazon Ads (USD). Siempre visible "+ IVA" o "antes de IVA".

## Idioma
- Todo el copy público está en español de México, profesional y directo.
- La arquitectura admite i18n, pero no se crean páginas en inglés en esta etapa.
- No se traduce automáticamente ningún contenido.

## Reglas no negociables
1. No inventar testimonios, clientes, cifras, resultados, certificaciones ni tecnología propietaria.
2. Cualquier dato de demostración lleva la etiqueta visible "Ejemplo ilustrativo".
3. No prometer posiciones, leads, ROI ni apariciones en motores de IA.
4. No inventar IDs de medición, números de teléfono, correos ni datos fiscales. Usar variables de
   entorno o configuración marcada `TODO_OWNER`.
5. No exponer secretos, tokens ni URLs de repositorios privados. Este repositorio es PÚBLICO.
6. No agregar dependencias sin justificar el motivo en el commit.
7. No cambiar remotos, no hacer push, no desplegar y no tocar `main` sin autorización explícita.
8. No activar campañas, gastar presupuesto ni modificar facturación o configuración de cuenta en Google Ads.
9. Secciones sin datos verificados (testimonios, casos, logos de clientes) no se renderizan.
10. No crear páginas SEO masivas ni contenido delgado.
11. Antes de modificar archivos: `git status`. No descartar cambios ajenos sin confirmar.
12. Al terminar cada sesión, detenerse y reportar. No continuar con la siguiente sesión por iniciativa propia.
13. XpertaSocial no es agencia oficial ni socio de Amazon. No usar logotipos ni nombres de marcas de
    clientes o de terceros como prueba social.

## Información confidencial
Costos, márgenes, valor hora, guiones de venta, propuestas y borradores legales NO van a este
repositorio. Pertenecen al repositorio privado `xpertasocial-os`.

## Infraestructura interna
`/admin`, `/login`, `/api/auth`, `/api/trigger-job` y `/api/check-report` son herramientas internas.
Toda ruta API interna exige sesión (`requireAdmin` en `src/lib/auth.ts`).

## Calidad mínima
- TypeScript y lint sin errores en los archivos tocados; build exitoso.
- Lighthouse móvil ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO en las páginas comerciales.
- LCP < 2.5 s, CLS < 0.1, INP < 200 ms (medición de laboratorio como referencia).
- Navegación por teclado y contraste AA.

## Comandos
- `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`
- `npm run test:e2e` (Playwright; levanta `next start` con `LEAD_DESTINATION=log`)
