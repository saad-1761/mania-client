"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      {eyebrow ? (
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border"
          style={{ borderColor: "var(--border)", background: "var(--primary-soft)" }}
        >
          <span>•</span><span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
      {desc ? <p style={{ color: "var(--muted)" }}>{desc}</p> : null}
    </motion.div>
  );
}
