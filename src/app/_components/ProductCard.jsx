"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mania-card overflow-hidden"
    >
      <div className="h-44 overflow-hidden">
        <motion.img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
        />
      </div>

      <div className="p-5 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold leading-snug">{p.name}</h3>
          <span className="font-extrabold whitespace-nowrap" style={{ color: "var(--primary)" }}>
            ৳{p.price}
          </span>
        </div>

        <p
          className="text-sm"
          style={{
            color: "var(--muted)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {p.shortDescription}
        </p>

        <div className="pt-2">
          <Link href={`/products/${p.id}`} className="mania-btn-ghost inline-flex text-sm">
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
