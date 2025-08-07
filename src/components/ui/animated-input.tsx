"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: 'default' | 'divine';
}

interface AnimatedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  variant?: 'default' | 'divine';
}

export function AnimatedInput({ 
  label, 
  className, 
  variant = 'divine',
  ...props 
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(inputRef.current?.value !== '');
  };

  const shouldFloat = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.input
        ref={inputRef}
        className={cn(
          "w-full px-4 pt-6 pb-2 text-foreground transition-all duration-300 outline-none peer",
          variant === 'divine' && "bg-gradient-to-r from-background/60 to-background/40 border-2 border-white/20 rounded-lg backdrop-blur-xl",
          "focus:border-primary hover:border-primary/60",
          className
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        whileFocus={{
          boxShadow: [
            "0 0 0 rgba(0, 255, 255, 0)",
            "0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)",
          ],
          borderColor: "hsl(var(--primary))",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.label
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-300 origin-left",
          shouldFloat 
            ? "top-2 text-xs font-semibold text-primary" 
            : "top-4 text-base text-muted-foreground"
        )}
        animate={{
          y: shouldFloat ? 0 : 0,
          scale: shouldFloat ? 0.85 : 1,
          color: shouldFloat 
            ? "hsl(var(--primary))" 
            : "hsl(var(--muted-foreground))",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isFocused ? 1 : 0,
          boxShadow: isFocused 
            ? "0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)"
            : "none"
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export function AnimatedTextarea({ 
  label, 
  className, 
  variant = 'divine',
  ...props 
}: AnimatedTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(textareaRef.current?.value !== '');
  };

  const shouldFloat = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.textarea
        ref={textareaRef}
        className={cn(
          "w-full px-4 pt-6 pb-2 text-foreground transition-all duration-300 outline-none resize-none",
          variant === 'divine' && "bg-gradient-to-r from-background/60 to-background/40 border-2 border-white/20 rounded-lg backdrop-blur-xl",
          "focus:border-primary hover:border-primary/60",
          className
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        whileFocus={{
          boxShadow: [
            "0 0 0 rgba(0, 255, 255, 0)",
            "0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)",
          ],
          borderColor: "hsl(var(--primary))",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.label
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-300 origin-left",
          shouldFloat 
            ? "top-2 text-xs font-semibold text-primary" 
            : "top-4 text-base text-muted-foreground"
        )}
        animate={{
          y: shouldFloat ? 0 : 0,
          scale: shouldFloat ? 0.85 : 1,
          color: shouldFloat 
            ? "hsl(var(--primary))" 
            : "hsl(var(--muted-foreground))",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isFocused ? 1 : 0,
          boxShadow: isFocused 
            ? "0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)"
            : "none"
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
