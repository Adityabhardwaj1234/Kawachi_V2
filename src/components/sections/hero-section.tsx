"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedBackground } from '../ui/animated-background';
import { RippleEffect } from '../ui/ripple-effect';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-divine">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

      {/* Enhanced floating cosmic elements */}
      <div className="absolute inset-0 z-15">
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, rgba(255, 0, 255, 0.3) 50%, transparent 70%)',
            left: '10%',
            top: '20%',
            filter: 'blur(20px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.8) 0%, rgba(0, 255, 127, 0.4) 50%, transparent 70%)',
            right: '15%',
            top: '30%',
            filter: 'blur(15px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 127, 0.5) 0%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)',
            left: '70%',
            bottom: '20%',
            filter: 'blur(25px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          {/* Background glowing text */}
          <motion.h1
            className="absolute font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-white/10 blur-sm"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Kawachi Infratech Private
          </motion.h1>
          <motion.h1
            className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-gradient-hero relative z-10"
            style={{
              textShadow: '0 0 30px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--gradient-via) / 0.4), 0 0 90px hsl(var(--accent) / 0.2)',
              filter: 'drop-shadow(0 0 20px hsl(var(--primary)))'
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: '0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--gradient-via) / 0.6), 0 0 120px hsl(var(--accent) / 0.3)',
            }}
          >
            Kawachi Infratech Private
          </motion.h1>
        </div>
        <div className="relative">
          {/* Background glowing text */}
          <motion.h1
            className="absolute font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-white/10 blur-sm"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Limited
          </motion.h1>
          <motion.h1
            className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-gradient-hero relative z-10"
            style={{
              textShadow: '0 0 30px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--gradient-via) / 0.4), 0 0 90px hsl(var(--accent) / 0.2)',
              filter: 'drop-shadow(0 0 20px hsl(var(--primary)))'
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: '0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--gradient-via) / 0.6), 0 0 120px hsl(var(--accent) / 0.3)',
            }}
          >
            Limited
          </motion.h1>
        </div>

        <motion.p 
          className="text-lg text-blue-300 mb-6"
          variants={itemVariants}
        >
          Engineering Infrastructure for the Future
        </motion.p>
        
        <motion.div 
          className="max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking infrastructure company delivering innovative, scalable, and sustainable engineering solutions across India's public and private sectors. Since our incorporation in 2021, we have been committed to transforming the infrastructure landscape with cutting-edge technology and engineering excellence.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 relative"
          variants={itemVariants}
        >
          {/* Floating particles around buttons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-60"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)",
                "0 0 50px hsl(var(--primary) / 0.9), 0 0 100px hsl(var(--primary) / 0.5)",
                "0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)"
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-lg relative"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 80px hsl(var(--primary)), 0 0 160px hsl(var(--primary) / 0.6)",
              y: -8,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <RippleEffect className="rounded-lg">
              <Button
                size="lg"
                className="btn-gradient rounded-lg shadow-2xl relative overflow-hidden px-8 py-4 text-lg font-bold"
                style={{
                  background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    const headerHeight = 96;
                    const elementPosition = aboutSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Company Profile
                </motion.span>
              </Button>
            </RippleEffect>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              y: -3,
              boxShadow: "0 0 30px hsl(var(--primary) / 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="neumorphic-outline glassmorphic-card text-foreground hover:text-primary hover:border-primary divine-glow-hover"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerHeight = 96;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Get In Touch
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
