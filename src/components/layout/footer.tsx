"use client";

import Link from "next/link";
import { CelestialBackground } from '@/components/ui/celestial-background';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/kawachiinfra", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/kawachiinfra", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/kawachi-infratech", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@kawachiinfratech.com", href: "mailto:info@kawachiinfratech.com" },
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, text: "Mumbai, Maharashtra, India", href: "#" },
  ];

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Projects", href: "#projects" },
      { label: "Careers", href: "#" },
      { label: "News & Updates", href: "#news" },
    ],
    services: [
      { label: "General Construction", href: "#services" },
      { label: "Architectural Design", href: "#services" },
      { label: "Project Management", href: "#services" },
      { label: "Renovation & Remodeling", href: "#services" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <footer className="bg-divine relative overflow-hidden" id="contact">
      <CelestialBackground />
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="#home" className="mb-6 inline-block">
              <motion.div whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 20px hsl(var(--primary)))" }}>
                <Logo />
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Engineering Infrastructure for the Future. We are committed to excellence, safety, and sustainability in every project we undertake.
            </p>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-sm"
                >
                  <contact.icon className="h-4 w-4 text-primary" />
                  <Link 
                    href={contact.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {contact.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6 text-lg text-gradient-hero">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 animated-underline">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6 text-lg text-gradient-hero">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 animated-underline">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6 text-lg text-gradient-hero">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.6)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    asChild 
                    className="glassmorphic-card border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    <Link href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                className="btn-gradient-contact rounded-lg w-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                <Link href="#contact">Get Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="pt-8 border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-sm text-muted-foreground"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              © 2025 Kawachi Infratech Pvt Ltd. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6 text-xs text-muted-foreground"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="#" className="hover:text-primary transition-colors animated-underline">Privacy Policy</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#" className="hover:text-primary transition-colors animated-underline">Terms of Service</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#" className="hover:text-primary transition-colors animated-underline">Cookie Policy</Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
