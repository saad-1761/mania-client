"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mania-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>
        <h3 className="text-2xl font-extrabold">Ready to upgrade your daily style?</h3>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Join the Mania community and get early access to new drops and offers.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="/login" className="mania-btn">Join Community</a>
        <a href="/products" className="mania-btn-ghost">Browse Watches</a>
      </div>
    </motion.section>
  );
}
