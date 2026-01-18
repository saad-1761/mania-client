"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SectionTitle from "../_components/SectionTitle";

const reasons = [
  { title: "Premium Finish", desc: "Clean design with strong build quality." },
  { title: "Comfort First", desc: "Straps designed for long wear." },
  { title: "Modern Minimal", desc: "Balanced dials that match every outfit." },
  { title: "Trusted Value", desc: "Premium look without premium pricing." }
];

const stats = [
  { label: "Happy Customers", value: 12500, suffix: "+" },
  { label: "Orders Delivered", value: 34000, suffix: "+" },
  { label: "Avg. Rating", value: 4.9, decimals: 1 },
  { label: "Community Members", value: 8000, suffix: "+" }
];

export default function WhyMania() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Why choose us" title="Why Mania"
        desc="Mania is built for people who care about detail, durability, and daily style."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((r, idx) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="mania-card p-5"
            >
              <h3 className="font-bold">{r.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((s, idx) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="mania-card p-5"
            >
              <div className="text-3xl font-extrabold" style={{ color: "var(--primary)" }}>
                <CountUp end={s.value} duration={1.6} decimals={s.decimals || 0} enableScrollSpy scrollSpyOnce />
                {s.suffix || ""}
              </div>
              <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
