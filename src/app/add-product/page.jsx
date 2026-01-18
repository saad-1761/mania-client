"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    shortDescription: "",
    longDescription: "",
    image: "",
  });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, price: Number(form.price) }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to add product");
      }

      toast.success("Product added!");
      router.push("/products");
      router.refresh();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mania-card p-6 md:p-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">Add a New Product</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          This product will be stored in your Express server and appear instantly in All Products.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-bold">Product Name *</label>
              <input className="mania-input mt-1" name="name" value={form.name} onChange={onChange} required />
            </div>

            <div>
              <label className="text-sm font-bold">Price (BDT) *</label>
              <input className="mania-input mt-1" name="price" value={form.price} onChange={onChange} required type="number" min="0" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold">Short Description *</label>
            <input className="mania-input mt-1" name="shortDescription" value={form.shortDescription} onChange={onChange} required />
          </div>

          <div>
            <label className="text-sm font-bold">Long Description *</label>
            <textarea className="mania-input mt-1" name="longDescription" value={form.longDescription} onChange={onChange} required rows={6} />
          </div>

          <div>
            <label className="text-sm font-bold">Image URL (optional)</label>
            <input className="mania-input mt-1" name="image" value={form.image} onChange={onChange} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button disabled={loading} className="mania-btn w-full sm:w-auto disabled:opacity-60">
              {loading ? "Adding..." : "Add Product"}
            </button>
            <button type="button" className="mania-btn-ghost w-full sm:w-auto" onClick={() => router.push("/products")}>
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
