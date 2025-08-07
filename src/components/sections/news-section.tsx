"use client";

import { useRef } from 'react';
import { StarsBackground } from '@/components/ui/stars-background';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const newsItems = [
  {
    title: 'Kawachi Wins "Innovator of the Year" Award',
    date: 'July 10, 2024',
    category: 'Award',
    image: { src: 'https://images.unsplash.com/photo-1573496130141-209d200ce714?q=80&w=600&h=400&fit=crop', hint: 'business award trophy' },
  },
  {
    title: 'Smart City Project Phase 2 Commences',
    date: 'June 28, 2024',
    category: 'Project Update',
    image: { src: 'https://images.unsplash.com/photo-1616004653761-443714975d45?q=80&w=600&h=400&fit=crop', hint: 'smart city skyline' },
  },
  {
    title: 'New Partnership to Advance Sustainable Building',
    date: 'June 15, 2024',
    category: 'Partnership',
    image: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop', hint: 'business handshake' },
  },
];

export function NewsSection() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="news" className="py-20 md:py-32 bg-divine relative overflow-hidden" ref={ref}>
      <StarsBackground />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase text-primary mb-2">News & Updates</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hero">
            Latest Happenings
          </h3>
          <p className="text-muted-foreground">
            Stay informed with the latest developments, project milestones, and industry news from Kawachi Infratech.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="overflow-hidden group h-full flex flex-col glassmorphic-card neumorphic-card divine-glow-hover relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-700" />
                <CardContent className="p-0 relative z-10">
                  <motion.div className="overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.title}
                      data-ai-hint={item.image.hint}
                      width={600}
                      height={400}
                      className="object-cover w-full h-56 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    />
                  </motion.div>
                  <Badge
                    variant="default"
                    className="absolute top-4 right-4 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg"
                  >
                    {item.category}
                  </Badge>
                </CardContent>
                <CardFooter className="p-6 flex-grow flex-col items-start bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-xl relative z-10">
                  <motion.p
                    className="text-sm text-muted-foreground mb-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  >
                    {item.date}
                  </motion.p>
                  <h4 className="text-lg font-bold mb-4 flex-grow group-hover:text-gradient-hero transition-all duration-300">{item.title}</h4>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto"
                  >
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-accent transition-all duration-300">
                      <Link href="#news">
                        Read More
                        <motion.div
                          className="ml-2 inline-block"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
