"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/animations";
import clsx from "clsx";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
      className={clsx("py-24 px-6 max-w-6xl mx-auto", className)}
    >
      {children}
    </motion.section>
  );
}
