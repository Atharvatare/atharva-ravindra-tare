import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Briefcase, Award, Code, User, GraduationCap, Github, BookOpen, Send } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Achievements', href: '#achievements', icon: Award },
  { label: 'Projects', href: '#projects', icon: Code },
  { label: 'Skills', href: '#skills', icon: User },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Blog', href: '#blog', icon: BookOpen },
  { label: 'Contact', href: '#contact', icon: Send },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-amber-500/20 border border-sky-500/30 text-sm font-bold text-white group-hover:border-sky-400/60 transition-all">
              AT
            </div>
            <span className="text-white font-semibold tracking-tight hidden sm:block group-hover:text-sky-400 transition-colors">
              Atharva Tare
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`relative px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-lg transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-sky-400'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-sky-500/10 border border-sky-500/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Atharvatare"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-sky-500/40 transition-all"
            >
              <Github size={18} />
            </a>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`flex items-center gap-4 text-2xl font-bold uppercase tracking-tighter transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-sky-400'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <item.icon size={28} className="text-white/30" />
                {item.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="https://github.com/Atharvatare"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-white/40 hover:text-sky-400 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm uppercase tracking-widest">GitHub</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
