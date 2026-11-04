"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(newTheme: Theme) {
  const root = document.documentElement;
  if (newTheme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const savedTheme = window.localStorage.getItem("yann-theme") as Theme | null;
  return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Lazy-initialized from localStorage so the correct theme is known before
  // the first paint, instead of flashing "light" and then switching to the
  // saved theme once an effect runs on mount.
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Sync the <html> class with whatever theme we resolved on init.
    applyTheme(theme);
    // Only run once on mount — subsequent theme changes go through setTheme below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("yann-theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
