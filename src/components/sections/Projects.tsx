"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";
import { projects } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <span className="section-label">04 / Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-bright mt-3 leading-tight">
            Things I've shipped
          </h2>
          <p className="text-subtle mt-3 text-base max-w-xl">
            Production-minded projects with measurable outcomes.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative p-6 md:p-8 rounded-2xl bg-surface border border-border card-glow transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-70"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                </div>
                <div className="flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-bright transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Title + description */}
              <h3 className="font-display text-xl font-600 text-bright mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-subtle text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="px-3 py-2 rounded-lg"
                    style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}
                  >
                    <div className="font-mono text-sm font-600" style={{ color: project.color }}>
                      {m.value}
                    </div>
                    <div className="text-muted text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-border/60 text-muted text-xs font-mono hover:text-text transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {other.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl bg-surface border border-border card-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-600 text-bright group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors flex-shrink-0 ml-2"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="text-subtle text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              {/* Inline metrics */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                {project.metrics.slice(0, 3).map((m) => (
                  <span key={m.label} className="text-xs font-mono">
                    <span style={{ color: project.color }} className="font-600">{m.value}</span>
                    <span className="text-muted ml-1">{m.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-border/60 text-muted text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <a
            href="https://github.com/Mohitkundu360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-subtle hover:text-accent transition-colors font-mono text-sm"
          >
            <Github size={16} />
            View all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
