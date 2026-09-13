import React from 'react';
import { motion } from 'motion/react';
import { Users, Minus } from 'lucide-react';
import resumeData from '../data/resume.json';

const Leadership: React.FC = () => {
  const leadership = resumeData.leadership as {
    featured: { role: string; organization: string; bullets: string[] };
    others: string[];
  };

  return (
    <section id="leadership" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <p className="text-sky-400 text-xs font-mono uppercase tracking-widest mb-3">
          Beyond the Classroom
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 flex items-center gap-3">
          <Users className="text-white/60" size={40} />
          Leadership &amp; Community
        </h2>
        <p className="text-white/40 mb-4">
          Coordinating people, events, and opportunities beyond the classroom.
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full" />
      </motion.div>

      {/* Featured leadership card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-12 mb-8 relative border border-white/10 rounded-2xl p-8 bg-white/[0.02] overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] -z-0" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-1">
            {leadership.featured.role}
          </h3>
          <p className="text-sky-400 text-sm font-medium mb-6">
            {leadership.featured.organization}
          </p>
          <ul className="space-y-3">
            {leadership.featured.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
              >
                <Minus size={16} className="text-sky-400/60 mt-0.5 shrink-0" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Other roles as smaller cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {leadership.others.map((role, i) => {
          const label = role.split(':')[0]?.trim();
          const body = role.split(':').slice(1).join(':').trim();
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-sky-500/30 transition-all text-center"
            >
              <Users size={18} className="text-white/30 group-hover:text-sky-400 transition-colors mx-auto mb-2" />
              <p className="text-white font-semibold text-xs leading-tight">{label}</p>
              {body && <p className="text-white/40 text-[10px] mt-1 leading-tight">{body}</p>}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Leadership;
