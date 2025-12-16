import PageNav from "@/components/layout/PageNav";

const PerfilProfesionalPage = () => {
  return (
    <>
      <PageNav />
      <main className="min-h-screen bg-grafito text-techWhite flex items-center justify-center px-6">
        <div className="text-center space-y-4 border border-white/10 rounded-xl p-10 bg-white/5 max-w-xl">
        <p className="font-mono text-xs tracking-[0.3em] text-signalRed uppercase">Capítulo 1: Identidad & Visión</p>
        <h1 className="text-3xl font-black tracking-tight">Perfil Profesional</h1>
        <p className="font-mono text-sm text-white/60">
          Esta sección está en construcción. Aquí se detallará el perfil profesional de José Luis García Orobio.
        </p>
        </div>
      </main>
    </>
  );
};

export default PerfilProfesionalPage;
