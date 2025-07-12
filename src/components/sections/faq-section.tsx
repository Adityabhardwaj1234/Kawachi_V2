
"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
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
        "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:no-underline group",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("pb-4 pt-0", className)}
    >
      {children}
    </motion.div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
                 <h2 className="text-sm font-bold uppercase text-primary mb-2">FAQ</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground">
                    Find answers to common questions about our services, processes, and commitment to excellence. If you have other questions, feel free to contact us.
                </p>
            </div>
            <div>
                 <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="border-b">
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>
                            <AnimatePresence initial={false}>
                              <AccordionContent>
                                  {item.answer}
                              </AccordionContent>
                            </AnimatePresence>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </div>
    </section>
  );
}
