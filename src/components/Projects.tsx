import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Globe,
  ChevronDown,
  Cpu,
  Code2,
  Users,
  Layers,
  Wrench,
  Award,
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

type Project = (SoftwareProject | HardwareProject) & { _source: 'software' | 'hardware' | 'finalYear' };

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const categoryColor: Record<string, string> = {
  software: '#0ea5e9',
  hardware: '#f59e0b',
  iot: '#22c55e',
  finalYear: '#8b5cf6',
};

const complexityStyle: Record<string, { label: string; color: string }> = {
  beginner: { label: 'Beginner', color: 'text-green-400 border-green-400/30 bg-green-400/10' },
  intermediate: { label: 'Intermediate', color: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
  advanced: { label: 'Advanced', color: 'text-rose-400 border-rose-400/30 bg-rose-400/10' },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const ProjectCard: React.FC<{ project: Project; expandedId: string | null; setExpandedId: (id: string | null) => void; forceColor?: string }> = ({ project, expandedId, setExpandedId, forceColor }) => {
  const id = `${project._source}-${project.title}`;
  const isExpanded = expandedId === id;
  const color = forceColor || categoryColor[project.category] || '#0ea5e9';
  const isHardware = project._source === 'hardware' || project._source === 'finalYear';
  const hw = isHardware ? (project as HardwareProject) : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 h-full flex flex-col justify-between"
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
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-[11px] uppercase tracking-widest font-mono text-white/40">
              {project._source === 'finalYear' ? 'Final Year' : project.category}
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

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
          {project.title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

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

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
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
};

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const finalYearProjects: Project[] = ((resumeData.projects as any).finalYear || []).map((p: any) => ({ ...p, _source: 'finalYear' as const }));
  const softwareProjects: Project[] = resumeData.projects.software.map((p) => ({ ...p, _source: 'software' as const }));
  const hardwareProjects: Project[] = resumeData.projects.hardware.map((p) => ({ ...p, _source: 'hardware' as const }));

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto space-y-24">
      {/* ── Section Header ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Technical Projects
        </h2>
        <p className="text-white/40 max-w-xl mx-auto">
          A curated collection of my final year project, software products, and hardware innovations.
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full mx-auto mt-6" />
      </motion.div>

      {/* ── Final Year Project ─────────────────────────────────────── */}
      {finalYearProjects.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <Award className="text-purple-400" size={32} />
            Final Year Project
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {finalYearProjects.map((project) => (
              <ProjectCard key={`finalYear-${project.title}`} project={project} expandedId={expandedId} setExpandedId={setExpandedId} forceColor="#a855f7" />
            ))}
          </div>
        </div>
      )}

      {/* ── Hardware Projects ─────────────────────────────────────── */}
      {hardwareProjects.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <Cpu className="text-amber-400" size={32} />
            Hardware & IoT Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hardwareProjects.map((project) => (
              <ProjectCard key={`hardware-${project.title}`} project={project} expandedId={expandedId} setExpandedId={setExpandedId} />
            ))}
          </div>
        </div>
      )}

      {/* ── Software Projects ─────────────────────────────────────── */}
      {softwareProjects.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <Code2 className="text-sky-400" size={32} />
            Software Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softwareProjects.map((project) => (
              <ProjectCard key={`software-${project.title}`} project={project} expandedId={expandedId} setExpandedId={setExpandedId} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
