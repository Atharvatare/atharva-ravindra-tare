import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-sky-500 blur-[80px] opacity-20 rounded-full" />
        <div className="relative text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-amber-400 tracking-tighter">
          AT
        </div>
      </motion.div>

      <div className="w-64 max-w-[80vw] mb-8 relative">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-500 to-amber-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-white text-xl md:text-2xl font-semibold tracking-widest uppercase mb-2">
          Atharva Tare
        </h1>
        <p className="text-sky-400/80 text-xs md:text-sm tracking-[0.2em] uppercase font-mono text-center px-4">
          Electrical Engineer &bull; Developer &bull; Designer
        </p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
