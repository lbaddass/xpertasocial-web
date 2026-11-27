import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper font-brand text-body">
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
