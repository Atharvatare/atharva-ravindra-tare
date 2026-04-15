import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Award, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap = {
  wins: Trophy,
  metrics: Star,
  leadership: Award,
};

const Achievements: React.FC = () => {
  const { achievements } = resumeData;

  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Key Achievements</h2>
          <p className="text-white/40 max-w-xl mx-auto">Milestones and recognition earned through dedication and technical excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.type as keyof typeof iconMap] || Zap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-white transition-colors">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
                    <div className="w-4 h-[1px] bg-white/20" />
                    {achievement.type}
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-1 rounded-2xl bg-gradient-to-r from-white/5 via-white/20 to-white/5"
        >
          <div className="bg-black rounded-[15px] p-6 flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">9.27</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Highest CGPA</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1st</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Dept Rank</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2026</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Speaker Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
