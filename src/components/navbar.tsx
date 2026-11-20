"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useSyncExternalStore } from "react";
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
    const navRef = useRef<HTMLElement>(null);

    // On a phone the links can be wider than the screen, so keep the current page's link in view
    useEffect(() => {
        const nav = navRef.current;
        const active = nav?.querySelector<HTMLElement>("[aria-current='page']");
        if (!nav || !active) return;
        nav.scrollLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
    }, [pathname]);
    // The server always renders "Ctrl"; the browser switches it to "⌘" on Apple devices
    const modKey = useSyncExternalStore(
        noopSubscribe,
        () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl"),
        () => "Ctrl"
    );

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between gap-2 px-4">
                {/* Below 640px the links scroll sideways (scrollbar hidden) with a soft fade on the right edge */}
                <nav
                    ref={navRef}
                    aria-label="Main"
                    className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto whitespace-nowrap pr-5 text-sm font-medium [-ms-overflow-style:none] [mask-image:linear-gradient(to_right,black_calc(100%_-_20px),transparent)] [scrollbar-width:none] sm:flex-none sm:gap-6 sm:overflow-visible sm:pr-0 sm:[mask-image:none] [&::-webkit-scrollbar]:hidden"
                >
                    {navLinks.map((link) => {
                        const active = isActive(pathname, link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={playClick}
                                aria-current={active ? "page" : undefined}
                                className={`shrink-0 py-2 transition-colors hover:text-primary ${
                                    active ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex shrink-0 items-center gap-1">
                    {/* Global search: click it, or press ⌘K / Ctrl+K or "/" anywhere */}
                    <Search items={searchItems} modKey={modKey} />
                    {/* Theme toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
