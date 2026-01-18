export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()} Mania — Premium Watch Store
      </div>
    </footer>
  );
}
