import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
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
    <html lang="en" className="scroll-smooth">
      <body className={`${grotesk.variable} ${plexMono.variable} antialiased bg-carbon text-techWhite selection:bg-neonBlue selection:text-black min-h-dvh flex flex-col`}>
        
        {/* FULL WIDTH HEADER */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-carbon/90 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Navbar />
          </div>
        </header>

        {/* MAIN with container */}
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex-grow">
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
      </body>
    </html>
  );
}
