import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Globe,
  ChevronDown,
  Cpu,
  Code2,
  Wifi,
  UserCheck,
  ShieldCheck,
  Users,
  Layers,
  Wrench,
} from 'lucide-react';
import resumeData from '../data/resume.json';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SoftwareProject {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  live?: string;
  bullets: string[];
}

interface HardwareProject {
  title: string;
  description: string;
  tech: string[];
  category: string;
  complexity: string;
  bullets: string[];
  components: string[];
}

type Project = (SoftwareProject | HardwareProject) & { _source: 'software' | 'hardware' };

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

type FilterKey = 'all' | 'software' | 'hardware' | 'iot';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'software', label: 'Software' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'iot', label: 'IoT' },
];

const categoryColor: Record<string, string> = {
  software: '#0ea5e9',
  hardware: '#f59e0b',
  iot: '#22c55e',
};

const categoryIcon: Record<string, React.ElementType> = {
  software: Code2,
  hardware: Cpu,
  iot: Wifi,
};

const complexityStyle: Record<string, { label: string; color: string }> = {
  beginner: { label: 'Beginner', color: 'text-green-400 border-green-400/30 bg-green-400/10' },
  intermediate: { label: 'Intermediate', color: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
  advanced: { label: 'Advanced', color: 'text-rose-400 border-rose-400/30 bg-rose-400/10' },
};

const leadershipIcons: Record<string, React.ElementType> = {
  Secretary: UserCheck,
  Coordinator: ShieldCheck,
  Member: Users,
};

function getLeadershipIcon(role: string): React.ElementType {
  for (const [key, Icon] of Object.entries(leadershipIcons)) {
    if (role.includes(key)) return Icon;
  }
  return Users;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Merge both arrays, tagging the source
  const allProjects: Project[] = [
    ...resumeData.projects.software.map((p) => ({ ...p, _source: 'software' as const })),
    ...resumeData.projects.hardware.map((p) => ({ ...p, _source: 'hardware' as const })),
  ];

  const filtered =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* ── Section Header ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Technical Projects
        </h2>
        <p className="text-white/40 max-w-xl mx-auto">
          A curated collection of software products, hardware prototypes, and IoT innovations.
        </p>
      </motion.div>

      {/* ── Filter Tabs ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-14"
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => {
                setActiveFilter(f.key);
                setExpandedId(null);
              }}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-white shadow-lg shadow-sky-500/25'
                  : 'text-white/50 hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-full bg-[#0ea5e9]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* ── Project Cards Grid ─────────────────────────────────────── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const id = `${project._source}-${project.title}`;
            const isExpanded = expandedId === id;
            const color = categoryColor[project.category] || '#0ea5e9';
            const CatIcon = categoryIcon[project.category] || Layers;
            const isHardware = project._source === 'hardware';
            const hw = isHardware ? (project as HardwareProject) : null;

            return (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1"
                style={{
                  boxShadow: `0 0 0 0 ${color}00`,
                  transition: 'box-shadow 0.3s, transform 0.3s, background 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px -8px ${color}40`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${color}00`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {/* Card inner */}
                <div className="p-6 md:p-8">
                  {/* Top row: category + complexity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[11px] uppercase tracking-widest font-mono text-white/40">
                        {project.category}
                      </span>
                    </div>

                    {hw && hw.complexity && complexityStyle[hw.complexity] && (
                      <span
                        className={`px-3 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${complexityStyle[hw.complexity].color}`}
                      >
                        {complexityStyle[hw.complexity].label}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-[11px] font-medium border transition-colors duration-200"
                        style={{
                          color: `${color}cc`,
                          borderColor: `${color}30`,
                          backgroundColor: `${color}10`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action row: links + expand */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {(project as SoftwareProject).github && (
                        <a
                          href={(project as SoftwareProject).github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                        >
                          <ExternalLink size={14} />
                          GitHub
                        </a>
                      )}
                      {(project as SoftwareProject).live && (
                        <a
                          href={(project as SoftwareProject).live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all"
                          style={{
                            color: '#fff',
                            backgroundColor: `${color}20`,
                            borderWidth: 1,
                            borderColor: `${color}40`,
                          }}
                        >
                          <Globe size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>

                    {/* Expand / Collapse toggle */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : id)}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                    >
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                  </div>
                </div>

                {/* Expandable bullets */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-white/5 pt-6 space-y-6">
                        {/* Key highlights */}
                        <ul className="space-y-3">
                          {project.bullets.map((b, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className="flex gap-3 text-white/70 text-sm leading-relaxed"
                            >
                              <span
                                className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: color }}
                              />
                              {b}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Hardware components list */}
                        {hw && hw.components && hw.components.length > 0 && (
                          <div className="bg-white/[0.03] rounded-xl p-5 border border-white/10">
                            <div className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
                              <Wrench size={16} className="text-amber-400" />
                              Components Used
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {hw.components.map((c, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-[11px] text-amber-300/80"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ── Leadership & Community ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-24"
      >
        <div className="relative p-10 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Users size={24} className="text-white/60" />
              Leadership &amp; Community
            </h3>
            <p className="text-white/40 text-sm mb-10">
              Positions of responsibility that shaped my collaborative and organizational skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resumeData.leadership.map((role, i) => {
                const Icon = getLeadershipIcon(role);
                const label = role.split(':')[0]?.trim();
                const body = role.split(':').slice(1).join(':').trim();

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/15 transition-all mb-4">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">{label}</h4>
                    {body && (
                      <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
