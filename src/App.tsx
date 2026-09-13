import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import FocusAreas from './components/FocusAreas';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
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
        <FocusAreas />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
