/**
 * Respuesta 410 Gone para URLs retiradas sin equivalente en el sitio nuevo
 * (mapa aprobado en docs/audit/initial-audit.md §7). Le dice a Google que la página
 * se eliminó a propósito, y al visitante, adónde ir.
 */
const html = `<!doctype html>
<html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Esta página ya no existe | XpertaSocial</title>
<style>body{margin:0;font-family:system-ui,sans-serif;background:#0E1726;color:#fff;display:grid;place-items:center;min-height:100vh;padding:24px}
main{max-width:32rem}a{color:#3DD9A4}h1{font-size:2rem;margin:0 0 12px}</style></head>
<body><main><h1>Esta página ya no existe.</h1>
<p>La retiramos al renovar el sitio. Revisa nuestros servicios y precios actualizados.</p>
<p><a href="/">Ir al inicio</a> · <a href="/diagnostico">Solicitar diagnóstico</a></p></main></body></html>`;

function gone(): Response {
  return new Response(html, {
    status: 410,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
  });
}

export function GET(): Response {
  return gone();
}

export function HEAD(): Response {
  return gone();
}
