import React from 'react';
import { motion } from 'motion/react';
import { Code, ExternalLink, Users, ShieldCheck, UserCheck } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap = {
  'Secretary: ELAN Department Forum': UserCheck,
  'Coordinator: National Service Scheme (NSS)': ShieldCheck,
  'Member: Institution of Engineers India (IEI) Student Chapter': Users,
};

const Projects: React.FC = () => {
  const { projects, leadership } = resumeData;

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Technical Projects</h2>
        <p className="text-white/40 max-w-xl mx-auto">Innovative solutions developed at the intersection of IoT and healthcare.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-all" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-white/70 leading-relaxed text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Leadership & Community</h2>
        <p className="text-white/40 max-w-xl mx-auto">Active involvement in student forums and social service initiatives.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadership.map((role, index) => {
          const Icon = iconMap[role as keyof typeof iconMap] || Users;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Icon size={20} />
              </div>
              <span className="text-sm font-medium text-white/80 leading-snug">
                {role}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
