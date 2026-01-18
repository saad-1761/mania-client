import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

async function getProduct(id) {
  const base = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${base}/api/products/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session;

  const p = await getProduct(id);

  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-extrabold">Product not found</h1>
        <Link href="/products" className="inline-block mt-4 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      {/* <Link href="/products" className="text-sm underline">
        ← Back to Products
      </Link> */}

      <div className="mania-card overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-[260px] md:h-[380px] object-cover"
        />
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <h1 className="text-3xl md:text-4xl font-extrabold">{p.name}</h1>
            <div className="text-2xl font-extrabold" style={{ color: "var(--primary)" }}>
              ৳{p.price}
            </div>
          </div>

          <p style={{ color: "var(--muted)" }}>{p.shortDescription}</p>

          <div className="pt-2">
            <h3 className="text-lg font-bold">Full description</h3>
            <p className="mt-2" style={{ color: "var(--muted)" }}>
              {p.longDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/products" className="mania-btn-ghost">
              Continue browsing
            </Link>

            {/* ✅ show based on login */}
            {!isLoggedIn ? (
              <Link href="/login" className="mania-btn">
                Join Community
              </Link>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
