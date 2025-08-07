"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
  opacity: number;
}

export function FloatingParticles() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!isMounted) return [];
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const numParticles = isMobile ? 15 : 25;
    const colors = [
      'rgba(0, 255, 255, 0.4)',
      'rgba(255, 0, 255, 0.3)',
      'rgba(0, 255, 127, 0.4)',
      'rgba(255, 215, 0, 0.3)',
      'rgba(135, 206, 235, 0.3)',
    ];
    
    return Array.from({ length: numParticles }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * 360,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, [isMounted]);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + Math.sin(particle.direction) * 20}%`,
              `${particle.x}%`,
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + Math.cos(particle.direction) * 15}%`,
              `${particle.y}%`,
            ],
            opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Interactive glow particles that follow mouse */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, rgba(255, 0, 255, 0.3) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: `${mousePosition.x - 6}%`,
          y: `${mousePosition.y - 6}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
        }}
      />
    </div>
  );
}
