import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Cpu, Terminal, Layers, Globe, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap = {
  'Engineering & Tech': Cpu,
  'Design & Tools': Palette,
};

const Skills: React.FC = () => {
  const { skills, certifications } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Skill Arsenal</h2>
        <p className="text-white/40 max-w-xl mx-auto">A multi-disciplinary toolkit bridging engineering and design.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {Object.entries(skills).map(([category, items], index) => {
          const Icon = iconMap[category as keyof typeof iconMap] || Code2;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative p-12 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Award size={24} className="text-white/60" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 leading-relaxed hover:text-white hover:border-white/30 transition-all"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
