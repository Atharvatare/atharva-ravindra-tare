import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer: React.FC = () => {
  const { basics } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-xl text-lg font-bold text-white">
                AT
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">Atharva Tare</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Electrical Engineering Student & Graphic Designer. Bridging the gap between technical precision and creative expression.
            </p>
            <div className="flex items-center gap-4">
              {basics.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                <Mail size={18} />
                <a href={`mailto:${basics.email}`}>{basics.email}</a>
              </li>
              <li className="flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                <Phone size={18} />
                <a href={`tel:${basics.phone}`}>{basics.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <MapPin size={18} />
                <span>{basics.location}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-end justify-end">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Atharva Tare. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/20 text-xs uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-xs uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
