const phases = [
  {
    step: "01",
    title: "DIAGNÓSTICO",
    subtitle: "(DATA LAYER)",
    desc: "Auditoría profunda de infraestructura actual y fugas de capital.",
  },
  {
    step: "02",
    title: "CONSTRUCCIÓN",
    subtitle: "(CODE/CREATIVE)",
    desc: "Despliegue de landing pages (Next.js) y configuración de pipelines AI.",
  },
  {
    step: "03",
    title: "DISTRIBUCIÓN",
    subtitle: "(SCALE LAYER)",
    desc: "Inyección de tráfico pagado y optimización algorítmica continua.",
  },
];

const Methodology = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            METODOLOGÍA OPERATIVA
          </h2>
          <p className="font-mono text-sm text-white/50 max-w-md">
            Arquitectura de sistema en 3 fases secuenciales. Sin atajos.
          </p>
        </div>
        <div className="font-mono text-xs text-techCyan hidden md:block">
          ENGINE PROTOCOL v1.0
        </div>
      </div>

      <div className="relative border-l border-white/20 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between md:items-center gap-8">
        <div
          className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/20 -z-10"
          aria-hidden
        />

        {phases.map((phase) => (
          <div
            key={phase.step}
            className="mb-12 md:mb-0 pl-8 md:pl-0 md:w-1/3 relative group"
          >
            <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 md:-top-[5px] top-0 w-[9px] h-[9px] bg-grafito border border-signalRed rounded-full z-10" />

            <div className="md:text-center md:pt-8 bg-grafito">
              <div className="font-mono text-4xl font-bold text-white/10 mb-2 group-hover:text-techCyan/25 transition-colors">
                {phase.step}
              </div>
              <h3 className="text-xl font-bold">{phase.title}</h3>
              <span className="font-mono text-xs text-techCyan block mb-3">
                {phase.subtitle}
              </span>
              <p className="font-mono text-xs text-techWhite/70 leading-relaxed">
                {phase.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
