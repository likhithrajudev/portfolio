"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Next.js (with Cache Components) blocks reading the clock while it prerenders pages,
// so the server renders nothing and the browser fills in the year.
export default function CurrentYear() {
    const year = useSyncExternalStore(
        subscribe,
        () => new Date().getFullYear(), // in the browser
        () => null // during prerender
    );
    return <span>{year}</span>;
}
