"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #4DFFB4, transparent 70%)",
            top: "-15%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-8 blur-3xl"
          style={{
            background: "radial-gradient(circle, #4D9FFF, transparent 70%)",
            bottom: "-20%",
            left: "-10%",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(77,255,180,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(77,255,180,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full pt-24">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20 text-accent font-mono text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl md:text-8xl font-800 text-bright leading-none tracking-tight mb-6"
          >
            {personal.name.split(" ")[0]}
            <br />
            <span className="gradient-text">{personal.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm text-accent tracking-widest uppercase">
              {personal.role}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-subtle text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-body"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-display font-600 text-sm rounded-lg hover:bg-accent/90 transition-all duration-200 hover:gap-3"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text hover:border-accent/40 hover:text-bright font-body text-sm rounded-lg transition-all duration-200"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            {[
              { icon: Github, href: personal.github, label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
