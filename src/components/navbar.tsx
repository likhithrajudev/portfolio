"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, ViewTransition } from "react";
import { playClick } from "@/lib/sound";
import ThemeToggle from "@/components/theme-toggle";
import { navLinks } from "@/lib/data";

const noopSubscribe = () => () => {};

// "/" only matches exactly; other links also stay active on sub-pages (e.g. /blog/my-post)
function isActive(pathname: string, href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
    const pathname = usePathname();
    // The server always renders "Ctrl"; the browser switches it to "⌘" on Apple devices
    const modKey = useSyncExternalStore(
        noopSubscribe,
        () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl"),
        () => "Ctrl"
    );

    return (
        // The header keeps still while pages animate (see "site-header" in globals.css)
        <header
            className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
            style={{ viewTransitionName: "site-header" }}
        >
            <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-4">
                <nav className="flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => {
                        const active = isActive(pathname, link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={playClick}
                                className={`relative transition-colors hover:text-primary ${
                                    active ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {/* The highlight pill sits behind the active link. It has one shared name,
                                    so on navigation it glides from the old link to the new one. */}
                                {active && (
                                    <ViewTransition name="nav-indicator">
                                        <span
                                            aria-hidden="true"
                                            className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-md bg-muted"
                                        />
                                    </ViewTransition>
                                )}
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-1">
                    {/* Global Search */}
                    <button
                        type="button"
                        aria-label="Open blog search (Ctrl+K)"
                        className="inline-flex h-8 w-56 items-center justify-between gap-2 rounded-full border border-border bg-background px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
                            <path
                                d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="flex-1 text-left">Search...</span>
                        <kbd className="hidden items-center gap-1 sm:flex">
                            <kbd className="inline-flex h-5 items-center rounded-sm bg-black/5 px-1 font-sans text-sm font-normal text-muted-foreground dark:bg-white/10">{modKey}</kbd>
                            <kbd className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-black/5 font-sans text-sm font-normal text-muted-foreground dark:bg-white/10">K</kbd>
                        </kbd>
                    </button>
                    {/* Theme toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
