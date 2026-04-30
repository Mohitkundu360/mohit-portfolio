"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { about, personal, certifications } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

const HIGHLIGHTS = [
  { value: "2+", label: "Years experience" },
  { value: "100+", label: "Concurrent users handled" },
  { value: "<100ms", label: "Message latency achieved" },
  { value: "40%", label: "Efficiency improvements shipped" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="section-label">
            01 / About
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-700 text-bright mt-3 mb-6 leading-tight"
          >
            Systems thinker.
            <br />
            <span className="gradient-text">Performance obsessed.</span>
          </motion.h2>

          {about.split("\n").filter(Boolean).map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-subtle text-base leading-relaxed mb-4 font-body"
            >
              {para.trim()}
            </motion.p>
          ))}

          {/* Certs */}
          <motion.div variants={fadeUp} className="mt-8 pt-8 border-t border-border">
            <p className="section-label mb-4">Certifications</p>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-start gap-2">
                  <span className="text-accent mt-1 text-xs">▸</span>
                  <div>
                    <span className="text-text text-sm">{cert.title}</span>
                    <span className="text-muted text-xs ml-2">{cert.issuer} · {cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {HIGHLIGHTS.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="p-6 rounded-xl bg-surface border border-border card-glow transition-all duration-300 group"
            >
              <div className="font-display text-3xl font-800 gradient-text mb-2">{value}</div>
              <div className="text-subtle text-sm leading-snug">{label}</div>
            </motion.div>
          ))}

          {/* Location / Education card */}
          <motion.div
            variants={fadeUp}
            className="col-span-2 p-6 rounded-xl bg-surface border border-border"
          >
            <p className="section-label mb-3">Education</p>
            <p className="font-display text-bright font-600 text-lg">
              B.Tech in Computer Science
            </p>
            <p className="text-subtle text-sm mt-1">KIIT University, Bhubaneswar · 2021–2025</p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
