"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedBackground } from '../ui/animated-background';

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
      <div className="absolute inset-0 floating-particles z-5" />

      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-gradient-hero"
          style={{ textShadow: '0 0 25px hsl(var(--primary) / 0.5), 0 0 50px hsl(var(--gradient-via) / 0.3)' }}
          variants={itemVariants}
        >
          Kawachi Infratech Private
        </motion.h1>
        <motion.h1 
          className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-gradient-hero"
          style={{ textShadow: '0 0 25px hsl(var(--primary) / 0.5), 0 0 50px hsl(var(--gradient-via) / 0.3)' }}
          variants={itemVariants}
        >
          Limited
        </motion.h1>

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
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px hsl(var(--primary) / 0.5)",
                "0 0 40px hsl(var(--primary) / 0.8)",
                "0 0 20px hsl(var(--primary) / 0.5)"
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 50px hsl(var(--primary) / 0.9)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="btn-gradient rounded-lg shadow-lg divine-glow relative overflow-hidden">
              <Link href="#about">
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Company Profile
                </motion.span>
              </Link>
            </Button>
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
              <Link href="#contact">
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Get In Touch
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
