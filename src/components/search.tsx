"use client";

import { ArrowUpRight, MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { SearchItem } from "@/lib/search";

const MAX_RESULTS = 40;

// Is the user typing in a text field? (so "/" doesn't hijack their typing)
function isTyping(target: EventTarget | null) {
    return (
        target instanceof HTMLElement &&
        (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
    );
}

// Higher is better: title starts with the query > title contains it > other text contains it.
// Every word of the query has to match somewhere.
function score(item: SearchItem, words: string[]) {
    const title = item.title.toLowerCase();
    const rest = `${item.subtitle ?? ""} ${item.keywords ?? ""} ${item.group}`.toLowerCase();
    let total = 0;
    for (const word of words) {
        if (title.startsWith(word)) total += 3;
        else if (title.includes(word)) total += 2;
        else if (rest.includes(word)) total += 1;
        else return 0;
    }
    return total;
}

export default function Search({ items, modKey }: { items: SearchItem[]; modKey: string }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const listRef = useRef<HTMLUListElement>(null);

    function openPalette() {
        setQuery("");
        setActive(0);
        setOpen(true);
    }

    // ⌘K / Ctrl+K toggles the palette; "/" opens it when you're not typing somewhere
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                if (open) setOpen(false);
                else openPalette();
            } else if (e.key === "/" && !open && !isTyping(e.target)) {
                e.preventDefault();
                openPalette();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // With no query, show the site's pages; otherwise the best matches, grouped
    const results = useMemo(() => {
        const words = query.toLowerCase().split(/\s+/).filter(Boolean);
        if (words.length === 0) return items.filter((item) => item.group === "Pages");

        const groupOrder = [...new Set(items.map((item) => item.group))];
        return items
            .map((item, index) => ({ item, index, score: score(item, words) }))
            .filter((match) => match.score > 0)
            .sort(
                (a, b) =>
                    groupOrder.indexOf(a.item.group) - groupOrder.indexOf(b.item.group) ||
                    b.score - a.score ||
                    a.index - b.index
            )
            .slice(0, MAX_RESULTS)
            .map((match) => match.item);
    }, [items, query]);

    // Keep the highlighted result visible while moving with the arrow keys
    useEffect(() => {
        listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
    }, [active]);

    function select(item: SearchItem) {
        setOpen(false);
        if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
        else router.push(item.href);
    }

    function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => (results.length ? (i + 1) % results.length : 0));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
        } else if (e.key === "Enter" && results[active]) {
            e.preventDefault();
            select(results[active]);
        } else if (e.key === "Escape") {
            e.preventDefault();
            setOpen(false);
        }
    }

    return (
        <>
            {/* The search bar in the navbar */}
            <button
                type="button"
                onClick={openPalette}
                aria-label={`Search the site (${modKey === "⌘" ? "Command" : "Control"}+K)`}
                className="inline-flex size-8 items-center justify-center gap-2 rounded-full border border-border bg-background text-sm text-muted-foreground transition-colors hover:text-foreground pointer-coarse:size-9 sm:h-8 sm:w-56 sm:justify-between sm:px-3"
            >
                <MagnifyingGlass className="size-4" aria-hidden="true" />
                <span className="hidden flex-1 text-left sm:block">Search...</span>
                <kbd className="hidden items-center gap-1 sm:flex">
                    <kbd className="inline-flex h-5 items-center rounded-sm bg-black/5 px-1 font-sans text-sm font-normal text-muted-foreground dark:bg-white/10">
                        {modKey}
                    </kbd>
                    <kbd className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-black/5 font-sans text-sm font-normal text-muted-foreground dark:bg-white/10">
                        K
                    </kbd>
                </kbd>
            </button>

            {/* The palette. It's rendered into <body> (a "portal"): the navbar's backdrop blur would
                otherwise trap this fixed-position overlay inside the 56px header. */}
            {open &&
                createPortal(
                <div
                    className="fixed inset-0 z-[90] flex items-start justify-center bg-black/30 px-4 pt-[14vh] backdrop-blur-sm"
                    onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Search"
                        className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
                    >
                        <div className="flex items-center gap-2 border-b border-border px-3">
                            <MagnifyingGlass className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            <input
                                autoFocus
                                role="combobox"
                                aria-expanded="true"
                                aria-controls="search-results"
                                aria-activedescendant={results[active] ? `search-result-${active}` : undefined}
                                aria-label="Search pages, posts, books and more"
                                placeholder="Search pages, posts, books, gear..."
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setActive(0);
                                }}
                                onKeyDown={onInputKeyDown}
                                className="h-12 flex-1 bg-transparent text-base text-primary outline-none placeholder:text-muted-foreground sm:text-sm"
                            />
                            <kbd className="rounded-sm bg-black/5 px-1.5 py-0.5 text-[11px] text-muted-foreground dark:bg-white/10">
                                Esc
                            </kbd>
                        </div>

                        {results.length > 0 ? (
                            <ul
                                ref={listRef}
                                id="search-results"
                                role="listbox"
                                data-lenis-prevent
                                className="max-h-80 overflow-y-auto overscroll-contain p-2"
                            >
                                {results.map((item, index) => {
                                    const showGroup = index === 0 || results[index - 1].group !== item.group;
                                    return (
                                        <li key={`${item.group}-${item.href}-${item.title}`} role="presentation">
                                            {showGroup && (
                                                <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                                                    {item.group}
                                                </p>
                                            )}
                                            <div
                                                id={`search-result-${index}`}
                                                data-index={index}
                                                role="option"
                                                aria-selected={index === active}
                                                onMouseMove={() => setActive(index)}
                                                onClick={() => select(item)}
                                                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm ${
                                                    index === active ? "bg-muted text-primary" : "text-secondary"
                                                }`}
                                            >
                                                <span className="min-w-0">
                                                    <span className="block truncate">{item.title}</span>
                                                    {item.subtitle && (
                                                        <span className="block truncate text-xs text-muted-foreground">
                                                            {item.subtitle}
                                                        </span>
                                                    )}
                                                </span>
                                                {item.external && (
                                                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                                No results for “{query}”
                            </p>
                        )}

                        <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
                            <span>↑↓ to move</span>
                            <span>↵ to open</span>
                            <span>Esc to close</span>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
