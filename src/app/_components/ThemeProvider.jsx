"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeCtx = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("mania-theme");
    const initial =
      saved === "light" || saved === "dark"
        ? saved
        : (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const value = useMemo(() => {
    const toggle = () => {
      const next = theme === "dark" ? "light" : "dark";
      setTheme(next);
      localStorage.setItem("mania-theme", next);
      document.documentElement.setAttribute("data-theme", next);
    };
    return { theme, toggle };
  }, [theme]);

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
