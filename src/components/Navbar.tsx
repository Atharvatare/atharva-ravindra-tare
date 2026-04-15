import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, User, Briefcase, Award, GraduationCap, Code } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Achievements', href: '#achievements', icon: Award },
  { label: 'Projects', href: '#projects', icon: Code },
  { label: 'Skills', href: '#skills', icon: User },
  { label: 'Education', href: '#education', icon: GraduationCap },
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-lg text-sm font-bold text-white">
              AT
            </div>
            <span className="text-white font-medium tracking-tight hidden sm:block">Atharva Tare</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-white ${
                  activeSection === item.href.substring(1) ? 'text-white' : 'text-white/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="flex items-center gap-4 text-2xl font-bold text-white uppercase tracking-tighter"
              >
                <item.icon size={28} className="text-white/40" />
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
