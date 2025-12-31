'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const RotateScreen = () => {
  const [visible, setVisible] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Start countdown only on component mount
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          // Start fade out process
          setTimeout(() => setVisible(false), 500);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm landscape:hidden md:hidden"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -90 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <Smartphone className="h-20 w-20 text-foreground" />
          </motion.div>
          <p className="mt-8 text-lg font-semibold text-center text-foreground">
            Para una mejor experiencia, <br /> por favor, rota tu pantalla.
          </p>
          <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-2xl font-bold text-primary">
            {countdown}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RotateScreen;
