"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionTitle from "../_components/SectionTitle";

const metadata = { title: "Contact" };


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    toast.success("Message sent! (demo)");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <SectionTitle eyebrow="" title="Contact"
        desc="Have a question? Send us a message and we’ll get back to you."
      />

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="mania-card mx-auto p-6 md:p-8 max-w-2xl"
      >
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm font-bold">Name</label>
            <input className="mania-input mt-1" name="name" value={form.name} onChange={onChange} required />
          </div>
          <div>
            <label className="text-sm font-bold">Email</label>
            <input className="mania-input mt-1" name="email" value={form.email} onChange={onChange} type="email" required />
          </div>
          <div>
            <label className="text-sm font-bold">Message</label>
            <textarea className="mania-input mt-1" name="message" value={form.message} onChange={onChange} rows={5} required />
          </div>
          <button className="mania-btn w-full">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
}
