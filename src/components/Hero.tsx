import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Download, ArrowRight } from 'lucide-react';
import resumeData from '../data/resume.json';

const Hero: React.FC = () => {
  const { basics } = resumeData;
  const roles = basics.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, pauseBeforeType);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Freelance & Internships
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">{basics.name}</span>
          </h1>
          
          <div className="h-8 md:h-10 text-xl md:text-2xl font-medium text-sky-400 mb-6 flex items-center">
            <span>{displayText}</span>
            <span className="w-[2px] h-6 bg-sky-400 ml-1 animate-[typing-cursor_1s_infinite]" />
          </div>
          
          <p className="text-white/50 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            {basics.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-sky-50 transition-colors"
            >
              View My Work <ArrowRight size={18} />
            </button>
            <button
              onClick={() => window.print()}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
            >
              Download Resume <Download size={18} />
            </button>
          </div>
          
          <div className="flex items-center gap-4 mt-12">
            {basics.links.map((link, i) => {
              const Icon = link.icon === 'linkedin' ? Linkedin : Github;
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative w-full h-[500px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-amber-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-[4px] border-white/10 p-2 overflow-hidden bg-white/5 backdrop-blur-sm z-10">
            <img src="/profile.jpeg" alt="Atharva Tare" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 hidden md:block">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center p-2 mt-2"
        >
          <div className="w-1 h-2 bg-sky-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
