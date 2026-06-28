import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Award, Zap, TrendingUp } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap: Record<string, any> = {
  wins: Trophy,
  metrics: Star,
  leadership: Award,
};

const colorMap: Record<string, string> = {
  wins: 'from-amber-500/20 to-amber-600/5 border-amber-500/30',
  metrics: 'from-sky-500/20 to-sky-600/5 border-sky-500/30',
  leadership: 'from-purple-500/20 to-purple-600/5 border-purple-500/30',
};

const iconColorMap: Record<string, string> = {
  wins: 'text-amber-400',
  metrics: 'text-sky-400',
  leadership: 'text-purple-400',
};

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numTarget = parseFloat(target);
          const isFloat = target.includes('.');
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            if (isFloat) {
              setCount(parseFloat((eased * numTarget).toFixed(2)));
            } else {
              setCount(Math.floor(eased * numTarget));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-white mb-1">
      {target.includes('.') ? count.toFixed(2) : count}
      {suffix}
    </div>
  );
}

const Achievements: React.FC = () => {
  const { achievements, stats } = resumeData;

  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Key Achievements
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Milestones and recognition earned through dedication and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative group p-6 rounded-2xl border bg-gradient-to-br ${colorClass} backdrop-blur-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${iconColor} mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug mb-3">
                    {achievement.title}
                  </h3>
                  {'description' in achievement && (
                    <p className="text-xs text-white/40 leading-relaxed">
                      {(achievement as any).description}
                    </p>
                  )}
                </div>

                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-[1px] rounded-2xl bg-gradient-to-r from-sky-500/30 via-purple-500/30 to-amber-500/30"
        >
          <div className="bg-black/90 rounded-[15px] p-8 flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="text-center">
              <AnimatedCounter target={stats.cgpa} />
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                Current CGPA
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.deptRank}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                Class Rank
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.projects}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                Projects Built
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.githubRepos}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                GitHub Repos
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
