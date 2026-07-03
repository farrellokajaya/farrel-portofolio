"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleThemeChange = () => {
    const isDarkMode =
      document.documentElement.classList.contains("dark");

    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        className="theme-icon-light"
        aria-hidden="true"
      >
        <Moon
          className="size-5"
          strokeWidth={1.8}
        />
      </span>

      <span
        className="theme-icon-dark"
        aria-hidden="true"
      >
        <Sun
          className="size-5"
          strokeWidth={1.8}
        />
      </span>
    </button>
  );
}