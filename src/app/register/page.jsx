"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const base = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${base}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 409) throw new Error("Email already exists");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Account created!");

      // auto login
      const login = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (login?.error) throw new Error("Login failed after register");
      window.location.href = "/products";
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="mania-card p-6 md:p-8 space-y-4"
      >
        <h1 className="text-3xl font-extrabold">Register</h1>
        <p style={{ color: "var(--muted)" }}>Create a credentials account (stored in your Express JSON DB).</p>

        <form onSubmit={onSubmit} className="space-y-3">
          <input className="mania-input" name="name" value={form.name} onChange={onChange} placeholder="Full name" required />
          <input className="mania-input" name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" required />
          <input className="mania-input" name="password" value={form.password} onChange={onChange} placeholder="Password" type="password" required minLength={6} />
          <button disabled={loading} className="mania-btn w-full disabled:opacity-60">
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Already have an account? <Link href="/login" className="underline">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
