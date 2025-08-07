"use client";

import { useRef } from 'react';
import { CelestialBackground } from '@/components/ui/celestial-background';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { Building2, Wrench, DraftingCompass, ClipboardCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: Building2,
    title: 'General Construction',
    description: 'Delivering high-quality construction services for residential, commercial, and industrial projects with precision and care.'
  },
  {
    icon: DraftingCompass,
    title: 'Architectural Design',
    description: 'Innovative and sustainable design solutions that blend functionality with aesthetic appeal, tailored to each client\'s vision.'
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management',
    description: 'Comprehensive project management to ensure your project is completed on time, within budget, and to the highest standards.'
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with modern solutions, improving functionality and adding value to your property.'
  }
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-divine overflow-hidden relative" ref={ref}>
      <CelestialBackground />
      <FloatingParticles />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase text-primary mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hero">
            Let's Build the Future
          </h3>
          <p className="text-muted-foreground">
            We offer a comprehensive range of services to meet the diverse needs of our clients, from initial design to final construction.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="text-center h-full glassmorphic-card neumorphic-card group hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 relative divine-glow-hover">
                 <div className="absolute top-0 left-0 w-full h-full border-2 border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                   animation: 'border-pan 4s linear infinite',
                   background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                   backgroundSize: '200% 100%',
                   mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                   maskComposite: 'exclude',
                   WebkitMaskComposite: 'xor',
                 }}></div>
                <CardHeader className="items-center p-6 md:p-8">
                  <motion.div
                    className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 border border-primary/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:to-accent/40 divine-glow"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px hsl(var(--primary) / 0.3)",
                        "0 0 40px hsl(var(--primary) / 0.5)",
                        "0 0 20px hsl(var(--primary) / 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3
                    }}
                    whileHover={{
                      rotate: 180,
                      scale: 1.3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <service.icon className="h-8 w-8 text-primary icon-glow transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_15px_hsl(var(--primary))]" />
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="pt-2 text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
