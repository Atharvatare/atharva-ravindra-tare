import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <AnimatedBackground />
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
