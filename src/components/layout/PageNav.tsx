import Navbar from "./Navbar";

export default function PageNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-carbon/90 backdrop-blur-xl supports-[backdrop-filter]:bg-carbon/80">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
    </header>
  );
}
