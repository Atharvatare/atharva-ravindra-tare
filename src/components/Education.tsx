import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const Education: React.FC = () => {
  const { education } = resumeData;
  const btechData = education[0];
  const cgpaData = btechData.cgpaData || [];

  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Academic Foundation
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/30 via-white/10 to-transparent" />
          
          <div className="grid gap-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pl-12 relative"
              >
                <div className="absolute left-[12px] top-2 w-4 h-4 rounded-full border-2 border-sky-500/50 bg-black z-10 group">
                  <div className="w-2 h-2 rounded-full bg-sky-500 absolute top-[2px] left-[2px] group-hover:scale-150 transition-transform" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                <p className="text-sky-400 font-medium mb-2">{item.institution}</p>
                <div className="flex items-center gap-4 text-sm text-white/50 mb-3">
                  <span>{item.dates}</span>
                </div>
                
                <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm">
                  {item.performance}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CGPA Chart Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-sky-400" size={24} />
              <h3 className="text-xl font-bold text-white">CGPA Progression</h3>
            </div>
            
            <div className="h-48 flex items-end justify-between gap-2 border-b border-white/10 pb-4 relative">
              {/* Y-axis guidelines */}
              <div className="absolute left-0 right-0 top-0 border-t border-white/5 flex items-start">
                <span className="text-[10px] text-white/20 -mt-2 -ml-6">10</span>
              </div>
              <div className="absolute left-0 right-0 top-1/2 border-t border-white/5 flex items-start">
                <span className="text-[10px] text-white/20 -mt-2 -ml-6">9</span>
              </div>
              <div className="absolute left-0 right-0 bottom-4 border-t border-white/5 flex items-start">
                <span className="text-[10px] text-white/20 -mt-2 -ml-6">8</span>
              </div>

              {cgpaData.map((cgpa, i) => {
                // Calculate height percentage (min 8.0 to 10.0 scale)
                const height = Math.max(10, ((cgpa - 8) / 2) * 100);
                return (
                  <div key={i} className="relative flex flex-col items-center flex-1 group z-10">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="w-full max-w-[40px] bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-sm relative group-hover:from-amber-600 group-hover:to-amber-400 transition-colors"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {cgpa}
                      </div>
                    </motion.div>
                    <span className="text-xs text-white/40 mt-2 font-mono">
                      S{i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 border-sky-500/30 bg-sky-500/5 relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 text-sky-500/10">
              <Award size={100} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                <Award size={18} />
                Consistent Department Topper
              </div>
              <p className="text-white/70 text-sm">
                Consistently ranked 1st in the Electrical Engineering department since the first academic year, maintaining a top-tier CGPA.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
