"use client";

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: number;
  opacity: number;
  color: string;
  constellation?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
}

export function CelestialBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  const stars = useMemo(() => {
    if (!isMounted) return [];
    
    const isMobile = dimensions.width < 768;
    const numStars = isMobile ? 150 : 300;
    const colors = [
      'rgba(255, 255, 255, 0.9)',
      'rgba(0, 255, 255, 0.8)',
      'rgba(255, 0, 255, 0.7)',
      'rgba(0, 255, 127, 0.8)',
      'rgba(255, 215, 0, 0.9)',
      'rgba(135, 206, 235, 0.7)',
      'rgba(255, 182, 193, 0.6)',
    ];
    
    return Array.from({ length: numStars }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      twinkleDelay: Math.random() * 5,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      constellation: Math.random() > 0.95,
    }));
  }, [isMounted, dimensions]);

  const particles = useMemo(() => {
    if (!isMounted) return [];
    
    const numParticles = dimensions.width < 768 ? 20 : 40;
    const particleColors = [
      'rgba(0, 255, 255, 0.6)',
      'rgba(255, 0, 255, 0.5)',
      'rgba(0, 255, 127, 0.4)',
      'rgba(255, 215, 0, 0.3)',
    ];
    
    return Array.from({ length: numParticles }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      },
      life: 1,
      maxLife: Math.random() * 200 + 100,
    }));
  }, [isMounted, dimensions]);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      onMouseMove={handleMouseMove}
    >
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 via-blue-900/20 to-slate-900" />
      
      {/* Parallax nebula clouds */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`nebula-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${20 + i * 25}%`,
              top: `${15 + i * 20}%`,
              background: `radial-gradient(circle, ${
                ['rgba(0, 255, 255, 0.3)', 'rgba(255, 0, 255, 0.25)', 'rgba(0, 255, 127, 0.2)'][i]
              } 0%, transparent 70%)`,
              filter: `blur(${40 + i * 20}px)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
      
      {/* Stars with constellation lines */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 ${star.size * 3}px ${star.color}, 0 0 ${star.size * 6}px ${star.color}`,
            }}
            animate={{
              opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.twinkleDelay,
            }}
          />
        ))}
      </motion.div>
      
      {/* Floating particles */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          x: mousePosition.x * 0.005,
          y: mousePosition.y * 0.005,
        }}
        transition={{ type: "spring", stiffness: 20, damping: 15 }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [0, particle.velocity.x * 50, 0],
              y: [0, particle.velocity.y * 50, 0],
              opacity: [0.6, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
      
      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(dimensions.width < 768 ? 1 : 2)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)',
            }}
            animate={{
              x: [0, 300],
              y: [0, 150],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 8 + Math.random() * 15,
              ease: "easeOut",
              delay: i * 5,
            }}
          />
        ))}
      </div>

      {/* Cosmic dust overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(0, 255, 127, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
        }}
      />
    </div>
  );
}
