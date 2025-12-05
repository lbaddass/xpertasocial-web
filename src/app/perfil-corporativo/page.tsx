import { Code, Terminal, Globe, ArrowRight, Cpu, Database, Cloud, Layers, Brain, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CorporateProfilePage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-xs font-mono text-white tracking-widest uppercase">GROWTH ENGINEERING PROFILE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            José Luis García Orobio
          </h1>
          <p className="text-xl text-neonBlue font-mono tracking-widest uppercase">
            Growth Engineer • Full-Stack Automation • AI Systems Architect
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-carbon border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Terminal size={120} />
          </div>
          
          <div className="relative z-10 space-y-6 text-white/80 leading-relaxed text-lg">
            <p>
              I design, build, and deploy systems that automate revenue, scale operations, and turn AI into real product infrastructure. 
              Unlike traditional marketers, I approach growth as an engineering problem. I bridge the gap between Engineering and Marketing to build fast, auditable web infrastructures optimized for Technical SEO and scalable paid traffic.
            </p>
            <p>
              My long-term mission: <strong>Social-tech funded by growth.</strong> I use these commercial systems to fund programs that teach science & engineering to vulnerable communities in Mexico.
            </p>
            <div className="pl-4 border-l-2 border-neonBlue text-white/60 italic">
              &quot;Engineering is the tool. Education is the outcome.&quot;
            </div>
          </div>
        </div>
      </div>

      {/* Interests & Focus Areas */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
          <Brain size={20} className="text-neonBlue" /> INTERESTS & FOCUS AREAS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-white font-bold">🧠 Applied AI</h4>
            <p className="text-sm text-white/60">LLM orchestration and creative automation using Flow/Veo, Runway, Grok, and Local LLMs to solve &quot;creative fatigue&quot;.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold">📈 Meta Ads Engineering</h4>
            <p className="text-sm text-white/60">Developer of <strong>Andromeda</strong>, a proprietary algorithmic system designed to scale paid social performance through massive variance testing.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold">🤖 Automation Backbones</h4>
            <p className="text-sm text-white/60">Building marketing pipelines using Python, Node.js, and Google Apps Script to eliminate manual operational drag.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold">🏗️ B2B/B2C Infra</h4>
            <p className="text-sm text-white/60">Architecting conversion-focused sites using Next.js, React, and Vue.js. Expert in Technical SEO.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
          <Layers size={20} className="text-neonBlue" /> TECH STACK
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 rounded-sm border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-neonBlue">
              <Cloud size={18} /> <span className="font-mono text-xs uppercase">Cloud & Infra</span>
            </div>
            <p className="text-sm text-white/70">AWS, GCP, WordPress, Shopify, Kubernetes, Docker.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-sm border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-neonBlue">
              <Code size={18} /> <span className="font-mono text-xs uppercase">Dev & Frontend</span>
            </div>
            <p className="text-sm text-white/70">JavaScript, TypeScript, Python, Node.js, Next.js, React, Vue.js 3, Tailwind CSS.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-sm border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-neonBlue">
              <Database size={18} /> <span className="font-mono text-xs uppercase">Data & Analytics</span>
            </div>
            <p className="text-sm text-white/70">Python (Pandas), Looker Studio, GA4 / GTM, Screaming Frog.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-sm border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-neonBlue">
              <Cpu size={18} /> <span className="font-mono text-xs uppercase">AI & Automation</span>
            </div>
            <p className="text-sm text-white/70">Google AI Studio, LLM Orchestration, Zapier, Make, Runway/Veo.</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
          <Globe size={20} className="text-neonBlue" /> LINKS & PLAYBOOK
        </h3>
        <div className="bg-carbon border border-white/10 rounded-sm overflow-hidden">
          <div className="divide-y divide-white/10">
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
              <div>
                <div className="font-bold text-white">Website / Xperta Social</div>
                <div className="text-sm text-white/50">Growth engineering systems & automation frameworks.</div>
              </div>
              <Link href="https://www.xperta.social" target="_blank" className="text-neonBlue flex items-center gap-1 text-sm font-mono hover:underline">
                www.xperta.social <ExternalLink size={12} />
              </Link>
            </div>
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
              <div>
                <div className="font-bold text-white">LinkedIn</div>
                <div className="text-sm text-white/50">Professional network + technical discussions.</div>
              </div>
              <Link href="https://www.linkedin.com/in/jlgarciaorobio/" target="_blank" className="text-neonBlue flex items-center gap-1 text-sm font-mono hover:underline">
                linkedin.com/in/jlgarciaorobio <ExternalLink size={12} />
              </Link>
            </div>
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
              <div>
                <div className="font-bold text-white">Growth Playbook (MkDocs)</div>
                <div className="text-sm text-white/50">Public documentation for EF-Élite, Andromeda, and AI pipelines.</div>
              </div>
              <span className="text-white/30 text-sm font-mono">[ ACCESS REQUEST REQUIRED ]</span>
            </div>
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
              <div>
                <div className="font-bold text-white">Email</div>
                <div className="text-sm text-white/50">Collaboration inquiries & social-impact initiatives.</div>
              </div>
              <Link href="mailto:xpertasocial@gmail.com" className="text-neonBlue flex items-center gap-1 text-sm font-mono hover:underline">
                xpertasocial@gmail.com <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <div className="bg-white/5 border border-white/10 p-8 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Social-tech funded by growth</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Nuestra misión final no es solo el lucro. Utilizamos el éxito comercial de nuestros clientes para financiar programas de enseñanza de ciencia, ingeniería y matemáticas en comunidades vulnerables.
          </p>
          <div className="pt-4">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 text-sm font-bold text-black bg-white px-6 py-3 rounded-sm hover:bg-neonBlue transition-colors"
            >
              TRABAJAR CON NOSOTROS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
