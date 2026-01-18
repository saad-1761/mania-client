"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Enter a valid email");
    toast.success("Subscribed! (demo)");
    setEmail("");
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mania-card p-8"
    >
      <h3 className="text-2xl font-extrabold">Newsletter</h3>
      <p className="mt-2" style={{ color: "var(--muted)" }}>
        Get updates on new drops, deals, and style tips.
      </p>

      <form onSubmit={submit} className="mt-5 flex flex-col sm:flex-row gap-3">
        <input className="mania-input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="mania-btn">Subscribe</button>
      </form>
    </motion.section>
  );
}
