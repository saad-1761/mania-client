"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import ProductCard from "../_components/ProductCard";
import SkeletonGrid from "../_components/SkeletonGrid";

export default function LatestProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const base = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${base}/api/products`, { cache: "no-store" });
        const data = await res.json();
        if (!alive) return;
        setProducts(Array.isArray(data) ? data.slice(0, 6) : []);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="New arrivals" title="Latest Products"
        desc="Fresh picks from the Mania collection — crafted for everyday luxury."
      />
      {loading ? (
        <SkeletonGrid count={6} />
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </section>
  );
}
