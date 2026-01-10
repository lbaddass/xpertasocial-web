import PageNav from "@/components/layout/PageNav";

const DemoPage = () => {
  return (
    <>
      <PageNav />
      <main className="min-h-screen bg-grafito text-techWhite flex items-center justify-center px-6">
        <div className="text-center space-y-4 border border-white/10 rounded-xl p-10 bg-white/5 max-w-xl">
          <p className="font-mono text-xs tracking-[0.3em] text-signalRed">
            DEMO
          </p>
          <h1 className="text-3xl font-black tracking-tight">
            Demo en construcción
          </h1>
          <p className="font-mono text-sm text-white/60">
            Preparamos una demo guiada de la automatización. Solicita acceso
            desde el diagnóstico para priorizar tu slot.
          </p>
        </div>
      </main>
    </>
  );
};

export default DemoPage;
