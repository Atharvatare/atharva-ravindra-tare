import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Academic Foundation</h2>
        <div className="h-1 w-20 bg-white" />
      </motion.div>

      <div className="space-y-12">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l border-white/10 group"
          >
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {item.institution}
                </h3>
                <p className="text-white/60 font-medium">{item.degree}</p>
              </div>
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <span className="flex items-center gap-1"><Calendar size={14} /> {item.dates}</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
              <div className="flex items-start gap-3 text-white/70 leading-relaxed">
                <Award size={18} className="text-white/40 shrink-0 mt-1" />
                <p className="text-sm md:text-base">{item.performance}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
