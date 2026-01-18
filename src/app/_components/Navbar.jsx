// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { signOut, useSession } from "next-auth/react";
// import ThemeToggle from "./ThemeToggle";

// export default function Navbar() {
//   const pathname = usePathname();
//   const { data: session, status } = useSession();
//   const loggedIn = status === "authenticated";

//   const displayName = session?.user?.name || session?.user?.email || "DE";
//   const initials = displayName.trim().slice(0, 2).toUpperCase();

//   const [open, setOpen] = useState(false);

//   useEffect(() => setOpen(false), [pathname]);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "All Products" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
//       <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="font-extrabold text-xl tracking-tight">Mania</Link>

//         <nav className="hidden md:flex items-center gap-2">
//           {links.map((l) => (
//             <Link key={l.href} href={l.href}
//               className="px-3 py-2 rounded-xl text-sm border"
//               style={{ borderColor: "var(--border)" }}
//             >
//               {l.label}
//             </Link>
//           ))}

//           {loggedIn && (
//             <Link href="/add-product"
//               className="px-3 py-2 rounded-xl text-sm border"
//               style={{ borderColor: "var(--border)", background: "var(--primary-soft)" }}
//             >
//               Add Product
//             </Link>
//           )}

//           <ThemeToggle />

//           {loggedIn ? (
//             <div className="flex items-center gap-2">
//               <span className="px-3 py-2 rounded-xl text-sm border" style={{ borderColor: "var(--border)" }}>
//                 {initials}
//               </span>
//               <button className="mania-btn-ghost text-sm" onClick={() => signOut({ callbackUrl: "/" })}>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link href="/login" className="mania-btn text-sm">Login</Link>
//           )}
//         </nav>

//         <button className="md:hidden mania-btn-ghost" onClick={() => setOpen((p) => !p)} aria-label="Menu">
//           ☰
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
//           <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
//             {links.map((l) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 className="px-3 py-2 rounded-xl border"
//                 style={{ borderColor: "var(--border)" }}
//                 onClick={() => setOpen(false)}
//               >
//                 {l.label}
//               </Link>
//             ))}

//             {loggedIn && (
//               <Link
//                 href="/add-product"
//                 className="px-3 py-2 rounded-xl border"
//                 style={{ borderColor: "var(--border)", background: "var(--primary-soft)" }}
//                 onClick={() => setOpen(false)}
//               >
//                 Add Product
//               </Link>
//             )}

//             <ThemeToggle />

//             {loggedIn ? (
//               <button className="mania-btn-ghost" onClick={() => signOut({ callbackUrl: "/" })}>
//                 Logout ({initials})
//               </button>
//             ) : (
//               <Link href="/login" className="mania-btn" onClick={() => setOpen(false)}>
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

/////

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated";

  const displayName = session?.user?.name || session?.user?.email || "DE";
  const initials = displayName.trim().slice(0, 2).toUpperCase();

  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "All Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const linkClass = (href) =>
    `px-3 py-2 rounded-xl text-sm border transition ${
      isActive(href)
        ? "bg-[color:var(--primary-soft)] text-[color:var(--primary)]"
        : "hover:bg-[color:var(--primary-soft)]/60"
    }`;

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          Mania
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass(l.href)}
              style={{ borderColor: "var(--border)" }}
            >
              {l.label}
            </Link>
          ))}

          {loggedIn && (
            <Link
              href="/add-product"
              className="px-3 py-2 rounded-xl text-sm border transition hover:opacity-95"
              style={{
                borderColor: "var(--border)",
                background: "var(--primary-soft)",
                color: "var(--primary)",
              }}
            >
              Add Product
            </Link>
          )}

          <ThemeToggle />

          {loggedIn ? (
            <div className="flex items-center gap-2">
              <span
                className="px-3 py-2 rounded-xl text-sm border"
                style={{ borderColor: "var(--border)" }}
                title={displayName}
              >
                {initials}
              </span>
              <button
                className="mania-btn-ghost text-sm"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="mania-btn-ghost text-sm">
                Login
              </Link>
              <Link href="/register" className="mania-btn text-sm">
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden mania-btn-ghost"
          onClick={() => setOpen((p) => !p)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg)" }}
        >
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={linkClass(l.href)}
                style={{ borderColor: "var(--border)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {loggedIn && (
              <Link
                href="/add-product"
                className="px-3 py-2 rounded-xl border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--primary-soft)",
                  color: "var(--primary)",
                }}
                onClick={() => setOpen(false)}
              >
                Add Product
              </Link>
            )}

            <div className="pt-2">
              <ThemeToggle />
            </div>

            {loggedIn ? (
              <button
                className="mania-btn-ghost"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout ({initials})
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href="/login" className="mania-btn-ghost" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link href="/register" className="mania-btn" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
