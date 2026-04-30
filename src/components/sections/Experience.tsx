"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import { experience } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <span className="section-label">03 / Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-bright mt-3 leading-tight">
            Where I've built
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[220px] top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative md:grid md:grid-cols-[220px_1fr] md:gap-12"
              >
                {/* Left: Date + dot */}
                <div className="hidden md:flex flex-col items-end pr-10 pt-1">
                  <span className="font-mono text-xs text-muted text-right leading-relaxed">
                    {job.period.split(" – ").join("\n–\n")}
                  </span>
                  <span className="text-subtle text-xs mt-1">{job.location}</span>
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-[218px] top-2 w-[5px] h-[5px] rounded-full ring-4 ring-bg"
                    style={{ background: job.color }}
                  />
                </div>

                {/* Right: Content card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-6 md:p-8 rounded-xl bg-surface border border-border card-glow transition-all duration-300 group"
                >
                  {/* Mobile period */}
                  <div className="md:hidden flex items-center gap-2 mb-4">
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>

                  {/* Role & company */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-600 text-bright">{job.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-sm" style={{ color: job.color }}>
                          {job.company}
                        </span>
                        <span className="text-muted text-xs">· {job.type}</span>
                      </div>
                    </div>
                    <span
                      className="hidden md:block w-2 h-2 rounded-full mt-2 flex-shrink-0 opacity-80"
                      style={{ background: job.color, boxShadow: `0 0 10px ${job.color}` }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-subtle text-sm leading-relaxed mb-6">{job.description}</p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {job.achievements.map((a, j) => (
                      <div
                        key={j}
                        className="p-3 rounded-lg text-center"
                        style={{ background: `${job.color}08`, border: `1px solid ${job.color}18` }}
                      >
                        <div
                          className="font-display text-lg font-700"
                          style={{ color: job.color }}
                        >
                          {a.metric}
                        </div>
                        <div className="text-muted text-xs mt-1 leading-snug">{a.description}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
