import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XpertaSocial — Growth Engineering Hub",
  description: "Infraestructura de crecimiento: ingeniería, automatización y sistemas creativos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased bg-grafito text-techWhite selection:bg-signalRed selection:text-white`}>
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg h-16 flex items-center justify-between px-6 md:px-12">
          <div className="font-mono text-sm tracking-widest font-bold text-techWhite drop-shadow-[0_0_14px_rgba(6,182,212,0.45)]">
            XPERTA<span className="text-signalRed">SOCIAL</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-techWhite/70">
            <a href="#hero" className="hover:text-techCyan transition-colors">Hero</a>
            <a href="#casos" className="hover:text-techCyan transition-colors hidden sm:inline">Casos</a>
            <a href="#diagnostico" className="hover:text-techCyan transition-colors">Diagnóstico</a>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
