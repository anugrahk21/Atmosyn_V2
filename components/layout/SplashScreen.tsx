'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  duration?: number;
}

export default function SplashScreen({ duration = 1000 }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Start fade-out animation shortly before the end
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration - 500);
    
    // Remove loading screen completely after duration
    const loadingTimer = setTimeout(() => {
      setVisible(false);
    }, duration);

    // Clean up timers on component unmount
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, [duration]);

  if (!visible) return null;

  return (
    <div 
      id="preloader" 
      className={`black2-bg ${fadeOut ? 'fade-out' : ''}`} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        transition: 'opacity 0.5s ease-out',
        opacity: fadeOut ? 0 : 1
      }}
    >
      <div id="loader" className="loader">
        <div className="loader-container">
          <div className="loader-icon"><img src="/assets/img/logo/preloader.svg" alt="Preloader" /></div>
        </div>
      </div>
    </div>
  );
}