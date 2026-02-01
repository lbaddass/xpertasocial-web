import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { ThemeProvider } from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XpertaSocial | Growth Engineering Systems",
  description: "Automated revenue infrastructure. Not an agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5PCNSH54');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script id="ga-src" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-Y4VM4XNER6"></Script>
        <Script id="ga-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y4VM4XNER6');
          `}
        </Script>
        {/* End Google Analytics */}
      </head>
      <body
        className={`${grotesk.variable} ${plexMono.variable} antialiased bg-white dark:bg-carbon text-black dark:text-techWhite selection:bg-neonBlue selection:text-black min-h-dvh flex flex-col`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PCNSH54"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Analytics />
          <AuthProvider>
            {/* MAIN with container */}
            <main className="flex-grow">
              <div className="fixed inset-0 z-[-1] opacity-20 bg-grid-pattern pointer-events-none" />
              {children}
            </main>

            {/* FULL WIDTH FOOTER */}
            <footer className="w-full border-t border-white/10">
              <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <Footer />
              </div>
            </footer>

            <BackToTop />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
