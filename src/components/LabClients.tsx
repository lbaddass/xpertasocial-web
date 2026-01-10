const LabClients = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center bg-grafito/80 border-y border-white/10">
      <p className="font-mono text-xs tracking-widest text-techCyan mb-10">
        CLIENTES LAB ACTIVO // OPERATIONAL PARTNERS
      </p>

      <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white/10 rounded-sm group-hover:bg-signalRed/80 transition-colors" />
          <span className="font-bold text-xl tracking-tight group-hover:text-techCyan transition-colors">
            STEADFAST SECURITY INC.
          </span>
        </div>

        <div className="h-8 w-px bg-white/20 hidden md:block" />

        <div className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white/10 rounded-sm group-hover:bg-signalRed/80 transition-colors" />
          <span className="font-serif italic text-xl group-hover:text-techCyan transition-colors">
            Ceremonias Barcelona
          </span>
        </div>
      </div>
    </section>
  );
};

export default LabClients;
