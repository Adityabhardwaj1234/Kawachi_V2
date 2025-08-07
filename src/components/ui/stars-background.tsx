"use client";

import React, { useMemo, useState, useEffect } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: number;
  opacity: number;
  color: string;
}

export function StarsBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stars = useMemo(() => {
    if (!isMounted) return [];

    // Reduce stars on mobile for better performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const numStars = isMobile ? 100 : 200;
    const colors = [
      'rgba(255, 255, 255, 0.9)',
      'rgba(0, 255, 255, 0.8)',
      'rgba(255, 0, 255, 0.8)',
      'rgba(0, 255, 127, 0.8)',
      'rgba(255, 215, 0, 0.9)',
      'rgba(255, 255, 255, 0.7)',
    ];
    
    return Array.from({ length: numStars }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      twinkleDelay: Math.random() * 5,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}, 0 0 ${star.size * 4}px ${star.color}`,
            animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}
      
      {/* Shooting stars - reduced on mobile */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `shootingStars ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${i * 3}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)',
            }}
          />
        ))}
      </div>
      
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, rgba(255, 0, 255, 0.2) 50%, transparent 70%)',
            left: '20%',
            top: '30%',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, rgba(0, 255, 127, 0.2) 50%, transparent 70%)',
            right: '10%',
            top: '10%',
            filter: 'blur(50px)',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full opacity-10 animate-float-fast"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 127, 0.3) 0%, rgba(0, 255, 255, 0.2) 50%, transparent 70%)',
            left: '60%',
            bottom: '20%',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shootingStars {
          0% {
            transform: translateX(-100px) translateY(0px) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(1000px) translateY(500px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
