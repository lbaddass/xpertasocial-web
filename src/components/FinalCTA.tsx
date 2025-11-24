import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 text-center bg-black relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-signalRed via-transparent to-transparent" aria-hidden />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          CONSTRUIMOS INFRAESTRUCTURA. <br />
          <span className="text-signalRed">NO VENDEMOS CAMPAÑAS.</span>
        </h2>

        <p className="text-white/60 text-lg mb-10 font-mono">
          Desplegamos sistemas que corren mientras duermes.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="https://wa.me/525660213375?text=Vi%20que%20solo%20quedan%203%20slots.%20No%20quiero%20perder%20mi%20oportunidad." className="bg-signalRed text-techWhite px-10 py-4 font-bold rounded-md shadow-glow-red hover:-translate-y-0.5 transition-all">
            HABLAR POR WHATSAPP
          </Link>
          <Link href="/diagnostico" className="border border-techCyan/40 px-10 py-4 font-bold text-techCyan hover:text-techWhite hover:border-techCyan rounded-md transition-all">
            INICIAR DIAGNÓSTICO
          </Link>
        </div>

        <p className="mt-12 font-mono text-[10px] text-white/20">
          XPERTASOCIAL © 2025. TODOS LOS DERECHOS RESERVADOS. <br />
          INGENIERÍA POR JOSÉ LUIS GARCÍA OROBIO.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
