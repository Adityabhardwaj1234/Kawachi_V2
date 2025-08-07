"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CelestialBackground } from '@/components/ui/celestial-background';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { motion } from 'framer-motion';

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      toast({
        title: "Subscription Successful!",
        description: `Thank you for subscribing, ${email}.`,
      });
      setEmail("");
    } else {
       toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-divine relative overflow-hidden">
      <CelestialBackground />
      <FloatingParticles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="relative glassmorphic-card neumorphic-card p-8 md:p-16 rounded-xl overflow-hidden divine-glow-hover"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background/5 backdrop-blur-2xl" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hero"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay Updated with Kawachi
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Subscribe to our newsletter to get the latest news on our projects, industry insights, and company updates.
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="flex-grow"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glassmorphic border-white/20 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50 bg-gradient-to-r from-background/60 to-background/40 placeholder:text-muted-foreground/70"
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="btn-gradient-contact shrink-0 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 divine-glow relative overflow-hidden"
                >
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Subscribe
                  </motion.span>
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
