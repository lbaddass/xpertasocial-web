import Script from "next/script";

/**
 * Meta Pixel. Usa NEXT_PUBLIC_META_PIXEL_ID si está definido, o el ID configurado del sitio.
 * Eventos estándar que envía el sitio (ver src/lib/analytics.ts):
 *  - PageView en cada carga
 *  - Contact al tocar cualquier botón de WhatsApp o teléfono
 *  - Lead al enviar el formulario que abre WhatsApp
 * El banner de consentimiento se agrega en la Sesión 4.
 */
const DEFAULT_META_PIXEL_ID = "2810640812666271";

export function MetaPixel() {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? DEFAULT_META_PIXEL_ID;
  if (!id || !/^\d{5,20}$/.test(id)) return null;
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
