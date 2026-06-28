import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import resumeData from '../data/resume.json';

const Blog: React.FC = () => {
  const { blog } = resumeData;

  if (!blog || blog.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Tech Blog
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {blog.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl group hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-sky-500/10 rounded-full blur-[40px] group-hover:bg-sky-500/20 transition-colors" />
            
            <div className="flex items-center gap-4 text-xs font-mono text-sky-400 uppercase tracking-wider mb-4">
              <span className="flex items-center gap-1.5"><BookOpen size={14} /> Article</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-white/40">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5 text-white/40"><Clock size={14} /> {post.readTime}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
              {post.title}
            </h3>
            
            <p className="text-white/60 mb-8 leading-relaxed flex-grow">
              {post.excerpt}
            </p>
            
            <a 
              href={post.link}
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-white transition-colors mt-auto"
            >
              Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
