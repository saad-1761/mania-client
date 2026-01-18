"use client";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import SkeletonGrid from "../_components/SkeletonGrid";
import ProductCard from "../_components/ProductCard";

const metadata = { title: "All Products" };


export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const base = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${base}/api/products`, { cache: "no-store" });
        const data = await res.json();
        if (!alive) return;
        setProducts(Array.isArray(data) ? data : []);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter((p) =>
      (p.name || "").toLowerCase().includes(s) ||
      (p.shortDescription || "").toLowerCase().includes(s) ||
      (p.longDescription || "").toLowerCase().includes(s)
    );
  }, [products, q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <SectionTitle eyebrow="Catalog" title="All Products"
        desc="Browse all watches. Search by name or keywords."
      />

      <div className="mania-card p-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <input className="mania-input" placeholder="Search products..." value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="text-sm" style={{ color: "var(--muted)" }}>
          Showing <span className="font-bold">{filtered.length}</span> items
        </div>
      </div>

      {loading ? (
        <SkeletonGrid count={9} />
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
