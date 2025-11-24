import { BarChart3, Cpu, PenTool } from "lucide-react";

const values = [
  {
    title: "Ingeniería Full-Stack",
    icon: <Cpu size={24} strokeWidth={1.5} />,
    desc: "Desarrollo de activos digitales propietarios. No usamos plantillas. Construimos infraestructura web (Next.js) optimizada para conversión de alta velocidad.",
  },
  {
    title: "Creative-First AI (Andromeda)",
    icon: <PenTool size={24} strokeWidth={1.5} />,
    desc: "Nuestro algoritmo Andromeda analiza patrones virales y genera variaciones creativas masivas sin intervención manual constante.",
  },
  {
    title: "Sistemas Métricos (EF-Élite)",
    icon: <BarChart3 size={24} strokeWidth={1.5} />,
    desc: "Adopción de modelos financieros de eficiencia. No medimos vanity metrics; medimos retorno sobre ad-spend y LTV real.",
  },
];

const ValueGrid = () => {
  return (
    <section className="py-24 border-y border-white/10 bg-grafitoMedium/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="font-mono text-xs text-techCyan mb-8 tracking-widest">[ PROPUESTA DE VALOR ÚNICA ]</div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {values.map((item) => (
            <div key={item.title} className="bg-grafito/90 p-8 md:p-12 hover:bg-black/60 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <div className="text-signalRed mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 font-sans text-techWhite">{item.title}</h3>
              <p className="font-mono text-xs text-techWhite/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
