"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { playClick } from "@/lib/sound";
import ThemeToggle from "@/components/theme-toggle";
import Search from "@/components/search";
import { navLinks } from "@/lib/data";
import type { SearchItem } from "@/lib/search";

const noopSubscribe = () => () => {};

// "/" only matches exactly; other links also stay active on sub-pages (e.g. /blog/my-post)
function isActive(pathname: string, href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

// searchItems is built on the server (lib/search.ts) so the full site data isn't sent to the browser
export default function Navbar({ searchItems }: { searchItems: SearchItem[] }) {
    const pathname = usePathname();
    // The server always renders "Ctrl"; the browser switches it to "⌘" on Apple devices
    const modKey = useSyncExternalStore(
        noopSubscribe,
        () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl"),
        () => "Ctrl"
    );

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-4">
                <nav className="flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => {
                        const active = isActive(pathname, link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={playClick}
                                aria-current={active ? "page" : undefined}
                                className={`transition-colors hover:text-primary ${
                                    active ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-1">
                    {/* Global search: click it, or press ⌘K / Ctrl+K or "/" anywhere */}
                    <Search items={searchItems} modKey={modKey} />
                    {/* Theme toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
