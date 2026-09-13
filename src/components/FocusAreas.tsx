import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const FocusAreas: React.FC = () => {
  const { focusAreas } = resumeData as { focusAreas?: string[] };

  if (!focusAreas || focusAreas.length === 0) return null;

  return (
    <section id="focus-areas" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 flex items-center gap-3">
          <Target className="text-sky-400" size={40} />
          Focus Areas
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-sky-500/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-[50px] -z-10 group-hover:bg-sky-500/20 transition-all duration-500" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Zap size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {area}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;
