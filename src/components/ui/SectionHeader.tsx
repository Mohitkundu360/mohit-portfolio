"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className="mb-16"
    >
      <span className="section-label">{label}</span>
      <h2 className="font-display text-4xl md:text-5xl font-700 text-bright mt-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-subtle mt-3 text-base max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
