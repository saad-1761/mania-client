"use client";
import { useTheme } from "./ThemeProvider";

const Sun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Moon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 13.2A7.5 7.5 0 0 1 10.8 3a6.5 6.5 0 1 0 10.2 10.2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className="relative inline-flex items-center w-[58px] h-[34px] rounded-full border"
      style={{ borderColor: "var(--border)", background: "var(--bg-elev)" }}
      aria-label="Toggle theme"
    >
      <span
        className="absolute left-1 top-1 w-[26px] h-[26px] rounded-full transition-transform"
        style={{
          background: "var(--primary)",
          transform: isDark ? "translateX(24px)" : "translateX(0px)"
        }}
      />
      <span className="relative w-full px-2 flex items-center justify-between" style={{ color: "var(--text)" }}>
        <Sun />
        <Moon />
      </span>
    </button>
  );
}
