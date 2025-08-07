"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { StarsBackground } from '@/components/ui/stars-background';
import * as React from "react";

const faqItems = [
  {
    question: "What types of projects does Kawachi Infratech handle?",
    answer: "We specialize in a wide range of projects including commercial and residential buildings, public infrastructure like bridges and roads, and large-scale industrial facilities. Our team is equipped to handle projects of various sizes and complexities."
  },
  {
    question: "How do you ensure project quality and safety?",
    answer: "Quality and safety are our top priorities. We adhere to stringent international standards, employ experienced professionals, use high-quality materials, and conduct regular site inspections and safety audits throughout the project lifecycle."
  },
  {
    question: "Can you work with existing architectural plans?",
    answer: "Absolutely. We frequently collaborate with external architects and designers. Our team can seamlessly integrate with your existing plans to bring your vision to life, ensuring structural integrity and efficient execution."
  },
  {
    question: "What is your approach to sustainability?",
    answer: "We are committed to sustainable construction. We incorporate green building materials, energy-efficient designs, and waste reduction strategies in our projects to minimize environmental impact and create sustainable infrastructure for the future."
  }
];

const Accordion = AccordionPrimitive.Root;
const AccordionItem = AccordionPrimitive.Item;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:no-underline group glassmorphic-card px-6 rounded-lg hover:bg-white/5",
        className
      )}
      {...props}
    >
      {children}
      <motion.div
        className="transform"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-primary" />
      </motion.div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm"
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={cn("pb-4 pt-0 px-6 glassmorphic rounded-lg mx-6 bg-gradient-to-r from-background/40 to-background/20 border border-white/10", className)}
    >
      {children}
    </motion.div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-divine relative overflow-hidden">
      <StarsBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold uppercase text-primary mb-2">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-hero">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">
              Find answers to common questions about our services, processes, and commitment to excellence. If you have other questions, feel free to contact us.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border-none glassmorphic-card neumorphic-outline rounded-lg divine-glow-hover overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AnimatePresence initial={false}>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AnimatePresence>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
