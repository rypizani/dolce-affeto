import { createContext, useContext, useState, useCallback, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [appearance, setAppearanceState] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("dolce-affeto-theme") || "light";
  });

  useEffect(() => {
    try {
      localStorage.setItem("dolce-affeto-theme", appearance);
      document.documentElement.setAttribute("data-theme", appearance);
    } catch (_) {}
  }, [appearance]);

  const setAppearance = useCallback((value) => {
    setAppearanceState(value === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setAppearanceState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ appearance, setAppearance, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
