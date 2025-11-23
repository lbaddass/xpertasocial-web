const clients = [
  {
    name: 'Steadfast Security Inc.',
    svg: (
      <svg viewBox="0 0 64 64" aria-hidden className="h-10 w-10">
        <path
          d="M32 6 12 14v16c0 9.4 7.2 18.2 20 24 12.8-5.8 20-14.6 20-24V14L32 6Z"
          className="fill-none stroke-current stroke-[1.5]" />
        <path d="M20 28h24M20 36h14" className="fill-none stroke-current stroke-[1.5]" />
      </svg>
    ),
  },
  {
    name: 'Ceremonias Barcelona',
    svg: (
      <svg viewBox="0 0 64 64" aria-hidden className="h-10 w-10">
        <circle cx="24" cy="32" r="12" className="fill-none stroke-current stroke-[1.5]" />
        <circle cx="40" cy="32" r="12" className="fill-none stroke-current stroke-[1.5]" />
        <path d="M28 24c2.5-4 9.5-4 12 0" className="fill-none stroke-current stroke-[1.5]" />
      </svg>
    ),
  },
  {
    name: 'Andromeda',
    svg: (
      <svg viewBox="0 0 64 64" aria-hidden className="h-10 w-10">
        <path d="M32 8 40 32 32 56 24 32 32 8Z" className="fill-none stroke-current stroke-[1.5]" />
        <path d="M16 32h32" className="fill-none stroke-current stroke-[1.5]" />
        <circle cx="32" cy="32" r="4" className="fill-current" />
      </svg>
    ),
  },
];

export default function LabClients() {
  return (
    <section className="py-20 bg-[#2B2D42] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">OPERAMOS PARA</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Clientes del laboratorio.</h2>
          </div>
          <p className="text-white/60 font-mono text-xs">CDMX · MTY · REMOTO</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center gap-4 border border-white/10 rounded-lg p-4 bg-[#1f2234] hover:border-[#E63946]/60 transition-all"
            >
              <div className="p-3 rounded-lg border border-white/10 text-white/60 group-hover:text-white group-hover:border-[#E63946]/60 transition-colors">
                {client.svg}
              </div>
              <div className="flex-1">
                <p className="font-bold text-white group-hover:text-[#E63946] transition-colors">{client.name}</p>
                <p className="text-xs text-white/50 font-mono">Blueprint engagement</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
