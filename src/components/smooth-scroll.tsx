"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Eases mouse-wheel and trackpad scrolling so the page glides instead of jumping.
// Turned off for people who ask their system for reduced motion.
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            autoRaf: true, // Lenis runs its own animation loop
            anchors: true, // in-page "#section" links scroll smoothly too
            lerp: 0.1, // lower = smoother and slower to settle
        });

        return () => lenis.destroy();
    }, []);

    return null;
}
