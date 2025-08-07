"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    // Check if we're on the home page or need to navigate
    if (window.location.pathname !== '/') {
      // Navigate to home page with hash
      window.location.href = `/${href}`;
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 96; // 24 * 4 = 96px (h-24)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
      } 
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-gradient-to-r from-background/80 via-background/90 to-background/80 backdrop-blur-2xl border-b border-gradient-to-r from-transparent via-primary/40 to-transparent shadow-2xl shadow-primary/20"
            : "bg-gradient-to-r from-background/20 via-background/30 to-background/20 backdrop-blur-xl"
        )}
        style={{
          background: isScrolled
            ? 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,20,40,0.9) 50%, rgba(0,0,0,0.85) 100%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,20,40,0.4) 50%, rgba(0,0,0,0.3) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: isScrolled
            ? '0 8px 32px rgba(0, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 4px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5, filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Logo />
              </motion.div>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary animated-underline cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
               <Button
                className="hidden md:inline-flex btn-gradient-contact rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(e as any, '#contact');
                }}
              >
                Contact
              </Button>
              <motion.button
                className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.span
                  className="block w-6 h-0.5 bg-foreground rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                    opacity: isMenuOpen ? 1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-foreground rounded-full"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    x: isMenuOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-foreground rounded-full"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                    opacity: isMenuOpen ? 1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 md:hidden overflow-y-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,20,40,0.98) 50%, rgba(20,0,40,0.95) 100%)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
              <motion.nav
                className="flex flex-col items-center gap-6"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={navItemVariants}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 20px hsl(var(--primary))",
                      filter: "drop-shadow(0 0 10px hsl(var(--primary)))"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-2xl md:text-3xl font-bold text-foreground transition-all duration-300 hover:text-gradient-hero glassmorphic px-6 py-3 rounded-xl border border-white/10 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </motion.nav>
              <motion.div variants={navItemVariants} className="mt-8">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="btn-gradient-contact rounded-xl shadow-lg shadow-cyan-500/30 px-8 py-3 text-lg"
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(e as any, '#contact');
                    }}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
