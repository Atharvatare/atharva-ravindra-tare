import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap: Record<string, any> = {
  wins: Trophy,
  leadership: Award,
};

const colorMap: Record<string, string> = {
  wins: 'from-amber-500/20 to-amber-600/5 border-amber-500/30',
  leadership: 'from-purple-500/20 to-purple-600/5 border-purple-500/30',
};

const iconColorMap: Record<string, string> = {
  wins: 'text-amber-400',
  leadership: 'text-purple-400',
};

const Achievements: React.FC = () => {
  const { achievements } = resumeData;

  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Professional Achievements
          </h2>
          <p className="text-white/40 max-w-xl">
            Recognition and milestones earned through technical excellence and dedication.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-purple-500 rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.type] || Zap;
            const colorClass = colorMap[achievement.type] || colorMap.wins;
            const iconColor = iconColorMap[achievement.type] || 'text-white';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative group p-8 rounded-2xl border bg-gradient-to-br ${colorClass} backdrop-blur-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${iconColor} mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug mb-3">
                    {achievement.title}
                  </h3>
                  {'description' in achievement && (
                    <p className="text-sm text-white/50 leading-relaxed">
                      {(achievement as any).description}
                    </p>
                  )}
                </div>

                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
