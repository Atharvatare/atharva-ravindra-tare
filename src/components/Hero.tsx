import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

const Hero: React.FC = () => {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/60 font-mono">
            Available for Freelance & Internships
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          {basics.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/60 font-light mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {basics.title}. {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2"
          >
            Download Resume <Download size={18} />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
