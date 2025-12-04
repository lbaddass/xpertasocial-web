const missionPillars = [
  {
    name: "Engineering as a tool",
    description:
      "Treat engineering as a practical, measurable lever for real-world outcomes: revenue, operations, and social impact.",
  },
  {
    name: "Education as the outcome",
    description:
      "Channel profits and expertise into education initiatives for vulnerable communities.",
  },
  {
    name: "Validated field data",
    description:
      "Prioritize systems and frameworks proven in real-world campaigns and deployments.",
  },
];

const interests = [
  { name: "Applied AI", icon: "🧠", description: "LLM orchestration and creative automation using Flow/Veo, Runway, Grok, KlingAI/Sora, and local LLMs." },
  { name: "Meta Ads Engineering", icon: "📈", description: "Designing proprietary algorithmic systems (e.g., Andromeda) to scale paid social performance." },
  { name: "Automation Backbones", icon: "🤖", description: "Python, Node.js, Apps Script, and API pipelines that connect tools into revenue-focused workflows." },
  { name: "B2B/B2C Infra", icon: "🏗️", description: "Next.js, React, Vue, SEO tech, and scalable deployments for product and growth infrastructure." },
  { name: "Systems Architecture", icon: "🚀", description: "Reproducible, measurable, modular systems with an IaC mindset." },
  { name: "Documentation & Playbooks", icon: "📚", description: "Creator of EF-Élite and Growth Engineering playbooks to capture and share proven systems." },
];

const techStack = [
  {
    label: "Cloud, Web Platforms & Infrastructure",
    items: ["AWS", "Google Cloud Platform (GCP)", "WordPress", "Shopify", "Google Workspace"],
  },
  {
    label: "Containers, Automation & APIs",
    items: ["Kubernetes", "Docker", "REST & GraphQL APIs", "Zapier", "Make (Integromat)"],
  },
  {
    label: "Programming, Frameworks & Frontend",
    items: ["JavaScript", "TypeScript", "Python", "Node.js", "Next.js", "React", "Vue.js"],
  },
  {
    label: "AI, Creative Systems & Growth Engineering",
    items: [
      "Google AI Studio",
      "LLM Orchestration",
      "Local AI Models",
      "Flow/Veo",
      "Runway",
      "KlingAI / Sora-style tools",
      "Meta Ads",
      "Performance Analytics & Experimentation",
      "Marketing Automation Pipelines",
    ],
  },
  {
    label: "Databases & Data Layer",
    items: ["PostgreSQL", "MySQL", "SQLite", "Google Sheets as data layer"],
  },
  {
    label: "Creative & Media Tools",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Blender", "Video AI tools (e.g., Video AI, Runway, Flow/Veo)"],
  },
];

const projects = [
  {
    slug: "xperta-social",
    name: "Xperta Social",
    role: "Founder / Growth Engineer",
    tagline: "Growth engineering systems & automation frameworks.",
    focus: ["Growth systems architecture", "AI-assisted campaign management", "Automation for B2B/B2C brands"],
    links: [
      { label: "Website", href: "https://www.xperta.social" },
      { label: "GitHub", href: "https://github.com/lbaddass/xpertasocial-web" },
    ],
  },
  {
    slug: "growth-playbook",
    name: "Growth Playbook",
    role: "Author & Systems Architect",
    tagline: "Public documentation for EF-Élite, Andromeda, and AI pipelines.",
    focus: ["EF-Élite frameworks", "Andromeda algorithmic system", "AI pipelines for acquisition & retention"],
    links: [
      { label: "Docs", href: "https://www.xperta.social" },
      { label: "GitHub", href: "https://github.com/lbaddass/growth-playbook" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/lbaddass" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jlgarciaorobio/" },
  { label: "Twitter", href: "https://twitter.com/lbaddassl" },
  { label: "Instagram", href: "https://instagram.com/jlgarciaorobio" },
  { label: "Facebook", href: "https://facebook.com/jlgarciaorobio" },
  { label: "ORCID", href: "https://orcid.org/0009-0009-0606-9539" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05060b] text-techWhite">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(230,57,70,0.12),_transparent_32%),radial-gradient(circle_at_20%_40%,_rgba(6,182,212,0.08),_transparent_22%),radial-gradient(circle_at_80%_30%,_rgba(76,175,80,0.08),_transparent_22%)]" aria-hidden />
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24 space-y-24">
        <header id="hero" className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start pt-6">
          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.3em] text-techCyan">GROWTH ENGINEER • AI SYSTEMS ARCHITECT</p>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                José Luis García Orobio – Growth Engineer
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Growth Engineer, Full-Stack Automation & AI Systems Architect. I design, build, and deploy systems that automate revenue,
                scale operations, and turn AI into real product infrastructure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-signalRed text-techWhite px-7 py-3 font-semibold rounded-md shadow-glow-red hover:-translate-y-0.5 transition-all"
              >
                Collaborate or build a system
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 border border-white/15 text-techCyan px-7 py-3 font-mono text-xs rounded-md hover:border-techCyan hover:text-techWhite transition-colors"
              >
                View systems & IP
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-mono text-white/70">
              <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                <p className="text-[11px] text-techCyan mb-1">Handle</p>
                <p className="font-semibold text-techWhite">lbaddass</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                <p className="text-[11px] text-techCyan mb-1">Location</p>
                <p className="font-semibold text-techWhite">Mexico City (America/Mexico_City)</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                <p className="text-[11px] text-techCyan mb-1">Pronouns</p>
                <p className="font-semibold text-techWhite">they/them</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4 shadow-glow-money">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-techCyan">CURRENT FOCUS</p>
              <span className="text-[11px] bg-white/10 px-3 py-1 rounded-full font-mono text-white/70">2026 build</span>
            </div>
            <p className="text-base text-white/70 leading-relaxed">
              I design, build, and deploy systems that automate revenue, scale operations, and turn AI into real product infrastructure. Engineering is the
              tool. Education is the outcome.
            </p>
            <blockquote className="border-l-2 border-signalRed/70 pl-4 text-sm text-white/80 leading-relaxed">
              My long-term mission: fund social-tech programs that teach science & engineering to vulnerable communities in Mexico.
            </blockquote>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono bg-white/10 px-3 py-1 rounded-full text-white/70">
                Growth Engineering
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono bg-white/10 px-3 py-1 rounded-full text-white/70">
                AI Systems
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono bg-white/10 px-3 py-1 rounded-full text-white/70">
                Automation
              </span>
            </div>
          </div>
        </header>

        <section id="about" className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs text-techCyan tracking-[0.2em]">ABOUT</p>
            <h2 className="text-3xl font-bold">Architecting revenue-grade systems</h2>
            <p className="text-white/70 leading-relaxed">
              I design, build, and deploy systems that automate revenue, scale operations, and turn AI into real product infrastructure. From paid social to
              B2B automation backbones, I work end-to-end: strategy, code, creative automation, and instrumentation.
            </p>
            <p className="text-white/70 leading-relaxed">
              The work is grounded in field-tested playbooks like EF-Élite and Andromeda— frameworks focused on measurable returns, not vanity metrics.
            </p>
          </div>
          <div className="space-y-4 border border-white/10 bg-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-techCyan">MISSION</p>
              <span className="text-[11px] text-white/60 font-mono">Social-tech funded by growth</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Use growth engineering and AI-driven systems to fund social-tech programs that teach science and engineering to vulnerable communities in Mexico.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {missionPillars.map((pillar) => (
                <div key={pillar.name} className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold">{pillar.name}</p>
                  <p className="text-xs text-white/60 leading-relaxed mt-2">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-techCyan tracking-[0.2em]">INTERESTS & FOCUS</p>
              <h2 className="text-3xl font-bold">Where I operate</h2>
            </div>
            <span className="text-[11px] font-mono text-white/60">Validated with field data</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((item) => (
              <div key={item.name} className="border border-white/10 bg-white/5 rounded-2xl p-5 hover:border-techCyan/60 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <p className="font-semibold">{item.name}</p>
                </div>
                <p className="text-sm text-white/65 leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tech-stack" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-techCyan tracking-[0.2em]">TECH STACK</p>
              <h2 className="text-3xl font-bold">Infrastructure & tools</h2>
            </div>
            <span className="text-[11px] font-mono text-white/60">Full-stack execution</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {techStack.map((group) => (
              <div key={group.label} className="border border-white/10 bg-black/40 rounded-2xl p-6 space-y-3">
                <p className="text-sm font-semibold text-techWhite">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-[11px] font-mono bg-white/10 text-white/80 px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-techCyan tracking-[0.2em]">SYSTEMS & PROJECTS</p>
              <h2 className="text-3xl font-bold">IP and deployments</h2>
            </div>
            <span className="text-[11px] font-mono text-white/60">Shipping real infrastructure</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.slug} className="border border-white/10 bg-white/5 rounded-2xl p-6 space-y-3 hover:border-techCyan/60 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-mono text-techCyan uppercase tracking-[0.2em]">{project.role}</p>
                    <h3 className="text-xl font-bold mt-1">{project.name}</h3>
                  </div>
                  <div className="flex flex-col gap-1 text-[11px] font-mono text-white/60 items-end">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} className="hover:text-techCyan transition-colors">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{project.tagline}</p>
                <ul className="space-y-1 text-sm text-white/80">
                  {project.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-signalRed mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="playbook" className="space-y-4 border border-white/10 bg-gradient-to-br from-black/60 via-[#0c1325] to-black/60 rounded-3xl p-8 md:p-10 shadow-glow-money">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-techCyan tracking-[0.2em]">GROWTH PLAYBOOK</p>
              <h2 className="text-3xl font-bold mt-2">EF-Élite, Andromeda, and AI pipelines</h2>
            </div>
            <a
              href="https://www.xperta.social"
              className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-md font-semibold hover:border-techCyan hover:text-techCyan transition-colors"
            >
              View playbook
            </a>
          </div>
          <p className="text-white/75 leading-relaxed max-w-3xl">
            Documentation and operating procedures that capture repeatable systems: EF-Élite financial measurement, Andromeda creative algorithmics, and AI
            pipelines for acquisition and retention. Built to be reproducible, measurable, and modular.
          </p>
        </section>

        <section id="contact" className="space-y-6 pb-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-techCyan tracking-[0.2em]">CONTACT</p>
              <h2 className="text-3xl font-bold">Collaborate or build a system</h2>
            </div>
            <span className="text-[11px] font-mono text-white/60">Response timezone: America/Mexico_City</span>
          </div>
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6 space-y-3">
              <p className="text-sm text-white/70 leading-relaxed">
                Interested in growth engineering systems, AI automation, or social-impact collaborations in Mexico? Reach out and let’s design something
                reproducible, measurable, and meaningful together.
              </p>
              <a
                href="mailto:xpertasocial@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-semibold text-techCyan hover:text-techWhite transition-colors"
              >
                xpertasocial@gmail.com
              </a>
              <p className="font-mono text-[11px] text-white/60">Email + social are open; prefers async collaboration.</p>
            </div>
            <div className="border border-white/10 bg-black/40 rounded-2xl p-6">
              <p className="font-mono text-xs text-techCyan tracking-[0.2em] mb-3">SOCIAL</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} className="border border-white/10 rounded-lg px-3 py-3 bg-white/5 hover:border-techCyan/60 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
