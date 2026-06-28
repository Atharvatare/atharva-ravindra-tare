import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="relative w-full overflow-x-hidden selection:bg-sky-500 selection:text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 pt-16">
        <Hero />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
