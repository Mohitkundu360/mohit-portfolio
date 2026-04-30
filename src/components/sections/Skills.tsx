"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";
import { skills } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

// Color map for skill group accents
const GROUP_COLORS: Record<string, { text: string; border: string; bg: string }> = {
  Backend:        { text: "#4DFFB4", border: "rgba(77,255,180,0.2)",  bg: "rgba(77,255,180,0.06)" },
  Frontend:       { text: "#4D9FFF", border: "rgba(77,159,255,0.2)",  bg: "rgba(77,159,255,0.06)" },
  Databases:      { text: "#FFB44D", border: "rgba(255,180,77,0.2)",   bg: "rgba(255,180,77,0.06)" },
  "Cloud & DevOps":{ text: "#B44DFF", border: "rgba(180,77,255,0.2)", bg: "rgba(180,77,255,0.06)" },
  Systems:        { text: "#FF4D9F", border: "rgba(255,77,159,0.2)",   bg: "rgba(255,77,159,0.06)" },
  Languages:      { text: "#4DFFB4", border: "rgba(77,255,180,0.15)", bg: "rgba(77,255,180,0.04)" },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.div
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <span className="section-label">02 / Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-bright mt-3 leading-tight">
            Tech I work with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => {
            const colors = GROUP_COLORS[group] ?? GROUP_COLORS.Backend;
            return (
              <motion.div
                key={group}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl bg-surface border transition-all duration-300"
                style={{ borderColor: colors.border }}
              >
                {/* Group header */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: colors.text }}
                  />
                  <span
                    className="font-mono text-xs tracking-widest uppercase font-500"
                    style={{ color: colors.text }}
                  >
                    {group}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-500 text-text transition-colors duration-150 hover:text-bright cursor-default"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
