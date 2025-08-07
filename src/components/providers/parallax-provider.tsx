"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ParallaxContextType {
  scrollY: number;
  scrollProgress: number;
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  scrollProgress: 0,
});

export const useParallax = () => useContext(ParallaxContext);

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / maxScroll, 1);
      
      setScrollY(currentScrollY);
      setScrollProgress(progress);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial values

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContext.Provider value={{ scrollY, scrollProgress }}>
      {children}
    </ParallaxContext.Provider>
  );
}
