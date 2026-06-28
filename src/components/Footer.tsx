import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp, Zap, Heart } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer: React.FC = () => {
  const { basics } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons: Record<string, any> = {
    linkedin: Linkedin,
    github: Github,
  };

  return (
    <footer className="relative py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -mr-48 -mt-48" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Let's Connect CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs uppercase tracking-widest font-mono mb-6">
            <Zap size={14} /> Open to opportunities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Let's Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-8">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${basics.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-amber-500/20 border border-sky-500/30 text-lg font-bold text-white">
                AT
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">
                Atharva Tare
              </span>
            </div>
            <p className="text-white/30 max-w-sm mb-8 leading-relaxed text-sm">
              Final Year Electrical Engineering Student at SBJ Institute of Technology, Nagpur. Bridging the gap between engineering precision and creative innovation.
            </p>
            <div className="flex items-center gap-3">
              {basics.links.map((link, i) => {
                const Icon = socialIcons[link.icon] || Linkedin;
                return (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${basics.email}`}
                  className="flex items-center gap-3 text-white/30 hover:text-sky-400 transition-colors text-sm"
                >
                  <Mail size={16} />
                  {basics.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${basics.phone}`}
                  className="flex items-center gap-3 text-white/30 hover:text-sky-400 transition-colors text-sm"
                >
                  <Phone size={16} />
                  {basics.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/30 text-sm">
                <MapPin size={16} />
                <span>{basics.location}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between">
            <div className="mb-6">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/30 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-sky-500/20"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs uppercase tracking-widest flex items-center gap-1">
            © {new Date().getFullYear()} Atharva Tare. Built with <Zap size={12} className="text-sky-500/50" /> by Atharva
          </p>
          <p className="text-white/15 text-xs uppercase tracking-widest flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500/50" /> in Nagpur, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
