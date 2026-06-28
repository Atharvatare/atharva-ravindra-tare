import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Palette, Wrench, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap: Record<string, any> = {
  'Programming & Web': Code2,
  'Electrical & Hardware': Cpu,
  'Design & Creative': Palette,
  'Tools & Platforms': Wrench,
};

const Skills: React.FC = () => {
  const { skills, certifications } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Skill Arsenal
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {Object.entries(skills).map(([category, items], index) => {
          const Icon = iconMap[category] || Code2;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-[40px] group-hover:bg-sky-500/10 transition-colors" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Award size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">Certifications & Training</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-start gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 mt-2 shrink-0" />
              <span className="text-white/80 font-medium text-sm">{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
