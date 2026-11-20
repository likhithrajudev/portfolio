"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

// The saved theme is applied before the page paints by the small script in layout.tsx.
// This component reads the current theme from the <html> class and lets you flip it.

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function isDarkNow() {
    return document.documentElement.classList.contains("dark");
}

function setTheme(dark: boolean) {
    document.documentElement.classList.toggle("dark", dark);
    try {
        localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
        // Storage can be blocked (private mode); the toggle still works for this visit
    }
    listeners.forEach((listener) => listener());
}

export default function ThemeToggle() {
    const isDark = useSyncExternalStore(subscribe, isDarkNow, () => false);

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(!isDark)}
            className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground pointer-coarse:size-9"
        >
            {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
        </button>
    );
}
