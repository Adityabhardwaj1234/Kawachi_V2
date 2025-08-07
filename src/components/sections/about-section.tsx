"use client";

import { useRef } from 'react';
import { StarsBackground } from '@/components/ui/stars-background';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { motion } from 'framer-motion';

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.2 });

  const keyPoints = [
    "Commitment to Quality",
    "Sustainable Practices",
    "Client-Centric Approach"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-divine relative overflow-hidden" ref={ref}>
      <StarsBackground />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-50" />
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&h=700&fit=crop"
              alt="Construction team meeting"
              data-ai-hint="construction team"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-cover w-full h-full glassmorphic-card relative z-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-sm font-bold uppercase text-primary mb-2">About Kawachi</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-hero">
                Pioneering the Future of Construction
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For over two decades, Kawachi Infratech has been a leader in the civil engineering and construction industry. Our mission is to deliver high-quality, innovative, and sustainable infrastructure projects that stand the test of time and contribute to a better future.
              </p>
              <ul className="space-y-4 mb-8">
                {keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 20px hsl(var(--accent) / 0.6)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-6 w-6 text-accent icon-glow" />
                    </motion.div>
                    <span className="font-semibold">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="neumorphic-outline glassmorphic-card divine-glow-hover"
                >
                  <Link href="#projects">
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Learn More
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
