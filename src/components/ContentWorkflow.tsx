import type { ReactElement } from 'react';
import { CheckCircle2, Loader2, RadioTower, ServerCog, Video } from 'lucide-react';

interface Stage {
  title: string;
  description: string;
  status: 'running' | 'queued' | 'ready';
  icon: ReactElement;
}

const stages: Stage[] = [
  {
    title: 'Ingesta & scraping',
    description: 'Competitor_scraper detecta formatos ganadores en TikTok, IG y Shorts.',
    status: 'running',
    icon: <RadioTower size={18} />,
  },
  {
    title: 'AI content swapper',
    description: 'Aplica branding y copy master para clonar creatividades sin grabar.',
    status: 'queued',
    icon: <ServerCog size={18} />,
  },
  {
    title: 'Render batch 50 videos',
    description: 'Video_renderer produce variaciones optimizadas para cada plataforma.',
    status: 'queued',
    icon: <Video size={18} />,
  },
  {
    title: 'Landing + publisher',
    description: 'Landing_generator + auto_publisher despliegan y schedulean contenido.',
    status: 'ready',
    icon: <CheckCircle2 size={18} />,
  },
];

export default function ContentWorkflow() {
  return (
    <section className="py-20 bg-[#2B2D42] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[#E63946] font-mono text-xs tracking-[0.3em]">CONTENT FACTORY</p>
            <h2 className="text-3xl font-black tracking-tight">Pipeline orquestado de extremo a extremo.</h2>
          </div>
          <p className="text-white/60 font-mono text-xs">Hooks listos para MCP servers y n8n.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="group relative border border-white/10 rounded-xl p-4 bg-[#1f2234] hover:border-[#E63946]/60 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg border border-white/10 text-white/70 group-hover:text-[#E63946] transition-colors">
                  {stage.icon}
                </div>
                <StatusPill status={stage.status} />
              </div>
              <h3 className="text-lg font-bold mb-2">{stage.title}</h3>
              <p className="text-sm text-white/60 font-mono leading-relaxed">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: 'running' | 'queued' | 'ready' }) {
  const copy = {
    running: { label: 'Running', className: 'text-[#E63946] border-[#E63946]/60' },
    queued: { label: 'Queued', className: 'text-white/70 border-white/20' },
    ready: { label: 'Ready', className: 'text-green-400 border-green-500/40' },
  }[status];

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${copy.className}`}>
      {status === 'running' && <Loader2 className="h-3 w-3 animate-spin" />}
      {status === 'ready' && <CheckCircle2 className="h-3 w-3" />}
      {status === 'queued' && <RadioTower className="h-3 w-3" />}
      {copy.label}
    </span>
  );
}
