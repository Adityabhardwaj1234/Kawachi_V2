"use client";

import { Button } from "@/components/ui/button";
import { CelestialBackground } from '@/components/ui/celestial-background';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { AnimatedInput, AnimatedTextarea } from "@/components/ui/animated-input";
import { RippleEffect } from '@/components/ui/ripple-effect';
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-divine relative overflow-hidden">
      <CelestialBackground />
      <FloatingParticles />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-primary mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hero">
            Get in Touch
          </h3>
          <p className="text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="p-8 rounded-lg glassmorphic-card neumorphic-card divine-glow-hover"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border border-primary/30 divine-glow"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 0 30px hsl(var(--primary) / 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="h-6 w-6 text-primary icon-glow" />
                </motion.div>
                <div>
                  <h5 className="font-semibold">Our Office</h5>
                  <p className="text-muted-foreground">123 Innovation Drive, Tech Park, Metropolis, 12345</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border border-primary/30 divine-glow"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 0 30px hsl(var(--primary) / 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="h-6 w-6 text-primary icon-glow" />
                </motion.div>
                <div>
                  <h5 className="font-semibold">Email Us</h5>
                  <p className="text-muted-foreground">contact@kawachiinfratech.com</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border border-primary/30 divine-glow"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 0 30px hsl(var(--primary) / 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="h-6 w-6 text-primary icon-glow" />
                </motion.div>
                <div>
                  <h5 className="font-semibold">Call Us</h5>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="p-8 rounded-lg glassmorphic-card neumorphic-inset divine-glow-hover"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedInput
                  label="Your Name"
                  type="text"
                  required
                  variant="divine"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AnimatedInput
                  label="Your Email"
                  type="email"
                  required
                  variant="divine"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AnimatedInput
                  label="Subject"
                  type="text"
                  required
                  variant="divine"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AnimatedTextarea
                  label="Your Message"
                  rows={5}
                  required
                  variant="divine"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RippleEffect className="w-full rounded-lg">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-gradient rounded-lg shadow-2xl relative overflow-hidden px-8 py-4 text-lg font-bold"
                    style={{
                      background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 3s ease infinite',
                      boxShadow: '0 0 40px hsl(var(--primary) / 0.4), 0 0 80px hsl(var(--primary) / 0.2)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Send Message
                    </motion.span>
                  </Button>
                </RippleEffect>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
