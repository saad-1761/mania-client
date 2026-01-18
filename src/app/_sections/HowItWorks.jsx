"use client";
import { motion } from "framer-motion";
import SectionTitle from "../_components/SectionTitle";

const steps = [
  { title: "Choose", desc: "Pick your style from curated collections.", icon: "🧭" },
  { title: "Order", desc: "Quick checkout with smooth experience.", icon: "🛒" },
  { title: "Deliver", desc: "Fast delivery with safe packaging.", icon: "🚚" },
  { title: "Style", desc: "Wear it confidently — every day.", icon: "✨" }
];

export default function HowItWorks() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Simple process" title="How it works"
        desc="A clean, fast experience designed for watch lovers."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="mania-card p-5 space-y-2"
          >
            <div className="text-2xl">{s.icon}</div>
            <h3 className="font-bold">{s.title}</h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
