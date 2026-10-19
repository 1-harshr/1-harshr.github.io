"use client";

import { useEffect } from "react";

const KEY = "theme";
const dark = "(prefers-color-scheme: dark)";

// Runs in <head> before paint so the stored or system theme never flashes.
export const themeScript = `try{var t=localStorage.getItem("${KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("${dark}").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export function ThemeToggle() {
  // Follow the system theme until the visitor picks one.
  useEffect(() => {
    const mq = matchMedia(dark);
    const sync = () => {
      try {
        if (localStorage.getItem(KEY)) return;
      } catch {}
      document.documentElement.dataset.theme = mq.matches ? "dark" : "light";
    };
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light and dark mode">
      <span className="to-dark">dark</span>
      <span className="to-light">light</span>
    </button>
  );
}
