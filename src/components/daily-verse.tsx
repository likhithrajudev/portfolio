"use client";

import { useSyncExternalStore } from "react";
import QuoteCard from "@/components/quote-card";
import { verseForToday } from "@/lib/gita";

const subscribe = () => () => {};

// Next.js (with Cache Components) blocks reading the clock while it prerenders pages, so the
// server renders the fixed fallback quote and the browser swaps in today's verse.
// verseForToday returns the same object for a given day, so the snapshot is stable.
export default function DailyVerse({ fallback }: { fallback: { text: string; source: string } }) {
    const verse = useSyncExternalStore(
        subscribe,
        () => verseForToday(),
        () => null
    );

    return <QuoteCard text={verse?.text ?? fallback.text} source={verse ? `Bhagavad Gita ${verse.ref}` : fallback.source} />;
}
