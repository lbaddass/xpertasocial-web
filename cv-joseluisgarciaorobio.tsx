"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal, Server, Cpu, Globe, Database,
  ShieldCheck, Code2, Zap, ArrowRight, Mail,
  ExternalLink, Layers, GitBranch, Lock
} from "lucide-react";

// --- Types & Interfaces ---
interface TechItem {
  name: string;
  icon: React.ReactNode;
  level: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string[];
  tech: string[];
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function GorkaPortfolio() {
  const [activeTab, setActiveTab] = useState("stack");

  // --- Data ---
  const stackData: Record<string, TechItem[]> = {
    "Automation": [
      { name: "n8n (Advanced)", icon: <GitBranch size={16} />, level: "Expert" },
      { name: "Python Scripting", icon: <Code2 size={16} />, level: "Advanced" },
      { name: "Bash / Shell", icon: <Terminal size={16} />, level: "Intermediate" },
    ],
    "Infrastructure": [
      { name: "Docker", icon: <Layers size={16} />, level: "Advanced" },
      { name: "Supabase", icon: <Database size={16} />, level: "Expert" },
      { name: "Self-Hosted", icon: <Server size={16} />, level: "Philosophy" },
    ],
    "AI & Logic": [
      { name: "Agentic Workflows", icon: <Cpu size={16} />, level: "Specialist" },
      { name: "RAG Systems", icon: <Database size={16} />, level: "Advanced" },
      { name: "Prompt Architecture", icon: <Terminal size={16} />, level: "Expert" },
    ]
  };

  const experiences: ExperienceItem[] = [
    {
      role: "Founder & Growth Architect",
      company: "Xperta Social",
      period: "2018 - Present",
      desc: [
        "Architecting end-to-end growth infrastructures.",
        "Reduced manual ops by 75% via n8n automation.",
        "Designing Local-First scalable systems."
      ],
      tech: ["n8n", "Docker", "Python"]
    },
    {
      role: "Technical Lead",
      company: "Ceremonias Barcelona",
      period: "Key Project",
      desc: [
        "Automated booking systems & CRM logic.",
        "Full funnel conversion optimization."
      ],
      tech: ["CRM Automation", "Webhooks"]
    },
    {
      role: "Security Marketing Lead",
      company: "Steadfast Security",
      period: "Key Project",
      desc: [
        "Secure data acquisition systems.",
        "Privacy-centric marketing architecture."
      ],
      tech: ["Security", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">

      {/* SECTION 1: HERO / TERMINAL HEADER */}
      <header className="bg-slate-900 text-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-full text-xs font-mono text-blue-400 mb-6 border border-slate-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>System Status: ONLINE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                GORKA<span className="text-blue-500">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl">
                Growth Architect & Systems Engineer. <br />
                <span className="text-slate-500 text-lg">Specialized in eliminating friction through automated engineering.</span>
              </p>
            </div>

            <div className="mt-8 md:mt-0 flex flex-col space-y-3 font-mono text-sm">
              <a href="https://xperta.social" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                <Globe size={16} /> <span>xperta.social</span>
              </a>
              <a href="mailto:one@xpertasocial" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                <Mail size={16} /> <span>one@xpertasocial</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-500">
                <Lock size={16} /> <span>Latam / Remote</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      </header>

      {/* SECTION 2: PHILOSOPHY CARDS */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Terminal className="text-blue-600" /> Core Protocols
          </h2>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "NO_VIBE_CODING",
              desc: "Prioritizing engineering logic and security over superficial aesthetics. Function over form.",
              color: "border-l-blue-600"
            },
            {
              title: "LOCAL_FIRST",
              desc: "Architecture that respects data sovereignty. Self-hosted solutions over SaaS dependency.",
              color: "border-l-emerald-600"
            },
            {
              title: "DIRECT_SOLUTIONS",
              desc: "Communication stripped of fillers. Rapid deployment of code and strategy.",
              color: "border-l-purple-600"
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`bg-white p-6 rounded-lg shadow-sm border ${card.color} border-l-4 hover:shadow-md transition-shadow`}
            >
              <h3 className="font-bold font-mono text-lg mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: TECH STACK INTERACTIVE */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Technical Arsenal</h2>
              <p className="text-slate-500 mt-2">Full-stack capabilities for Growth & Ops.</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              {Object.keys(stackData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {stackData[activeTab].map((tech, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-blue-500 transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-700 group-hover:text-blue-600 transition-colors">
                    {tech.icon}
                  </div>
                  <span className="font-semibold text-slate-800">{tech.name}</span>
                </div>
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">
                  {tech.level}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: AI & AGENTIC WORKFLOWS */}
      <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/50 rounded-full border border-purple-500/30">
                The Plus Factor
              </div>
              <h2 className="text-4xl font-bold mb-6">Autonomous <br/>Agentic Systems</h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Beyond standard marketing, I architect self-sufficient AI agents using <strong>RAG</strong> and <strong>LLMs</strong> to handle lead qualification, content distribution, and complex logic gating.
              </p>
              <ul className="space-y-4">
                {["Context-Aware Support Bots", "Automated Lead Scoring", "Semantic Search Infrastructure"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-purple-200">
                    <Zap size={18} className="text-yellow-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 font-mono text-sm shadow-2xl">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-green-400 mb-2">$ init_agent_sequence.py</div>
              <div className="space-y-2 text-slate-400">
                <p>> Loading context vector database...</p>
                <p>> Connecting to n8n webhook listener...</p>
                <p className="text-blue-400">> Analyzing user intent: "Purchase Ready"</p>
                <p>> Triggering CRM update...</p>
                <p className="text-emerald-400">> Success. 200 OK.</p>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPERIENCE TIMELINE */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Operational History</h2>
        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-4 border-blue-600"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">{exp.company}</span>
              </div>
              <p className="text-sm text-blue-600 mb-3 font-medium">{exp.period}</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: METRICS DASHBOARD (Simulated) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", val: "7+" },
              { label: "Ops Automations", val: "500+" },
              { label: "Efficiency Gain", val: "70%" },
              { label: "Code Privacy", val: "100%" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.val}</div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FEATURED PROJECTS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Deployed Architecture</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-video flex items-center justify-center border border-slate-800">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
             <div className="relative z-20 text-center p-6">
               <h3 className="text-2xl font-bold text-white mb-2">Ceremonias BCN</h3>
               <p className="text-slate-300 mb-4">Full booking automation & CRM sync</p>
               <span className="inline-block px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-all cursor-pointer text-sm">
                 View Architecture
               </span>
             </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Steadfast Security</h3>
            <p className="text-slate-600 mb-6">
              Marketing infrastructure with strict compliance protocols. Implementation of server-side tracking (GTM) and encrypted lead transfer.
            </p>
            <div className="flex gap-4 text-blue-600 font-mono text-sm">
              <span className="flex items-center gap-1"><ShieldCheck size={14}/> Security First</span>
              <span className="flex items-center gap-1"><Database size={14}/> Encrypted DB</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: LLM DATA (Hidden Context for AI Scrapers) */}
      <section className="max-w-4xl mx-auto px-6 py-10 opacity-60">
        <div className="bg-slate-100 p-4 rounded-lg border border-dashed border-slate-300 text-[10px] font-mono text-slate-500 overflow-x-auto">
          <p className="mb-2 font-bold text-slate-400 uppercase"> // LLM / Recruiter Data Context</p>
          <pre>{`{
  "candidate": "Gorka",
  "role_fit": ["Growth Engineer", "Technical Marketing Manager", "Automation Architect"],
  "stack_preference": ["n8n", "Supabase", "Docker", "Python"],
  "comm_style": "Direct & Efficient",
  "location": "Remote / Latam"
}`}</pre>
        </div>
      </section>

      {/* SECTION 9: CTA & FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to scale systems?</h2>
          <p className="text-slate-600 mb-8 text-lg">
            I am available for high-complexity projects requiring engineering precision in marketing operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:one@xpertasocial"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="https://xperta.social"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Globe size={18} /> Visit Website
            </a>
          </div>

          <div className="mt-16 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Gorka / Xperta Social. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with Next.js, Tailwind & logic.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
