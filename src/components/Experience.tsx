import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Calendar, Briefcase, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const Experience: React.FC = () => {
  const { experience, internships } = resumeData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allExperience = [
    ...experience.map((e, i) => ({ ...e, id: `exp-${i}`, type: 'Experience' })),
    ...internships.map((e, i) => ({ ...e, id: `int-${i}`, type: 'Internship' })),
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Professional Journey</h2>
        <div className="h-1 w-20 bg-white" />
      </motion.div>

      <div className="grid gap-6">
        {allExperience.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative border border-white/10 rounded-2xl overflow-hidden transition-all ${
              expandedId === item.id ? 'bg-white/5 border-white/30' : 'hover:bg-white/[0.02] hover:border-white/20'
            }`}
          >
            <div
              className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] uppercase tracking-wider text-white/60 font-mono">
                    {item.type}
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {item.dates}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {item.role}
                </h3>
                <p className="text-white/60 font-medium flex items-center gap-2">
                  {item.company} {item.location && <span className="flex items-center gap-1 text-white/30 text-sm"><MapPin size={14} /> {item.location}</span>}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 md:px-8 pb-8 border-t border-white/5 pt-6">
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-4 mb-8">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-4 text-white/70 leading-relaxed">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {('impact_highlights' in item) && (item as any).impact_highlights && (
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-2 text-white font-bold mb-4">
                          <Zap size={18} className="text-yellow-400" />
                          Impact Highlights
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(item as any).impact_highlights.map((highlight: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-xs text-white/80 border border-white/10">
                              {highlight}
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
        ))}
      </div>
    </section>
  );
};

export default Experience;
