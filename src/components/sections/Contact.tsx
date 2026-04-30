"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { personal } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "#4DFFB4",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Mohitkundu360",
    href: personal.github,
    color: "#8892A4",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mohit-kundu-23071827a",
    href: personal.linkedin,
    color: "#4D9FFF",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    // Opens mailto with prefilled content
    const subject = encodeURIComponent(`Message from ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\n— ${formState.name}\n${formState.email}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-surface border border-border rounded-lg text-text text-sm placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 font-body";

  return (
    <SectionWrapper id="contact">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <span className="section-label">05 / Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-bright mt-3 leading-tight">
            Let's work together
          </h2>
          <p className="text-subtle mt-3 text-base max-w-xl">
            Open to full-time roles, freelance projects, and interesting problems worth solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Social links */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-text font-body mb-6">
              The fastest way to reach me is email. I typically respond within 24 hours.
            </p>

            {SOCIAL_LINKS.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-opacity-50 card-glow transition-all duration-300"
                style={{ ["--hover-color" as string]: color }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted uppercase tracking-widest">{label}</div>
                  <div className="text-text text-sm mt-0.5 group-hover:text-bright transition-colors font-body">
                    {value}
                  </div>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center gap-3 pt-4 px-1">
              <MapPin size={14} className="text-muted" />
              <span className="text-muted text-sm font-body">{personal.location}</span>
              <span className="text-muted text-xs">· Open to remote</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeUp}
            className="p-8 rounded-2xl bg-surface border border-border relative overflow-hidden"
          >
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px accent-line" />

            <h3 className="font-display text-lg font-600 text-bright mb-6">Send a message</h3>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-muted uppercase tracking-widest block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs font-mono text-muted uppercase tracking-widest block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs font-mono text-muted uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-display font-600 text-sm rounded-lg hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
              >
                {submitted ? (
                  "Opening mail client ✓"
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
