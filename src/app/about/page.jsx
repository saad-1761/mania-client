"use client";
import { motion } from "framer-motion";
import SectionTitle from "../_components/SectionTitle";
const metadata = { title: "About" };


export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <SectionTitle eyebrow="Our story" title="About Mania"
        desc="Mania is a modern watch brand focused on clean aesthetics, comfort, and confidence."
      />

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="mania-card p-8 space-y-3"
      >
        <p style={{ color: "var(--muted)" }}>
          A watch is more than time — it’s your daily signature. Mania brings premium feel, modern design, and comfort.
        </p>
        <p style={{ color: "var(--muted)" }}>
          Built with Next.js App Router, NextAuth (Google + Credentials), and Express API with JSON persistence.
        </p>
      </motion.div>
    </div>
  );
}
