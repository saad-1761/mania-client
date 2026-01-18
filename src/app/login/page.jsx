"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";

const metadata = { title: "Login" };


export default function LoginPage() {
  const [email, setEmail] = useState("demo@mania.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  async function loginCredentials(e) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (res?.error) return toast.error("Invalid credentials");
    toast.success("Logged in!");
    window.location.href = "/products";
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="mania-card p-6 md:p-8 space-y-4"
      >
        <h1 className="text-center text-3xl font-extrabold">Login</h1>
        <p style={{ color: "var(--muted)" }} className="text-center">Demo: demo@mania.com / 123456</p>

        <button className="mania-btn w-full" onClick={() => signIn("google", { callbackUrl: "/products" })}>
          Continue with Google
        </button>

        <div className="text-center text-sm" style={{ color: "var(--muted)" }}>or</div>

        <form onSubmit={loginCredentials} className="space-y-3">
          <input className="mania-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          <input className="mania-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <button disabled={loading} className="mania-btn w-full disabled:opacity-60">
            {loading ? "Logging in..." : "Login with Credentials"}
          </button>
        </form>

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          New here? <Link href="/register" className="underline">Create an account</Link>
        </p>
      </motion.div>
    </div>
  );
}
