"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label, [tabindex]:not([tabindex='-1'])";

// A dot that follows the mouse exactly, plus a ring that trails it.
// The ring grows over links and buttons and shrinks while the mouse is pressed.
export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only for mouse/trackpad users; touch screens keep their normal behavior
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const root = document.documentElement;
        root.classList.add("custom-cursor"); // hides the normal cursor (see globals.css)

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let frame = 0;

        // Moves the ring a bit closer to the mouse each frame, and stops once it arrives
        const follow = () => {
            const ease = reduceMotion ? 1 : 0.2;
            ringX += (mouseX - ringX) * ease;
            ringY += (mouseY - ringY) * ease;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

            const settled = Math.abs(mouseX - ringX) < 0.1 && Math.abs(mouseY - ringY) < 0.1;
            frame = settled ? 0 : requestAnimationFrame(follow);
        };

        const onMove = (e: MouseEvent) => {
            const firstMove = dot.style.opacity !== "1";
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (firstMove) {
                ringX = mouseX;
                ringY = mouseY;
            }

            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            dot.style.opacity = "1";
            ring.style.opacity = "1";

            const target = e.target instanceof Element ? e.target : null;
            ring.dataset.hover = target?.closest(INTERACTIVE) ? "true" : "false";

            if (!frame) frame = requestAnimationFrame(follow);
        };

        const hide = () => {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        };
        const press = () => (ring.dataset.pressed = "true");
        const release = () => (ring.dataset.pressed = "false");

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", press);
        window.addEventListener("mouseup", release);
        document.documentElement.addEventListener("mouseleave", hide);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", press);
            window.removeEventListener("mouseup", release);
            document.documentElement.removeEventListener("mouseleave", hide);
            root.classList.remove("custom-cursor");
        };
    }, []);

    return (
        <>
            {/* Trailing ring */}
            <div
                ref={ringRef}
                aria-hidden="true"
                className="group pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-200"
            >
                <div className="size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 transition-[width,height,background-color,border-color,scale] duration-200 ease-out group-data-[hover=true]:size-11 group-data-[hover=true]:border-primary/20 group-data-[hover=true]:bg-primary/10 group-data-[pressed=true]:scale-75" />
            </div>

            {/* Dot that sits exactly on the mouse */}
            <div
                ref={dotRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-200"
            >
                <div className="size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            </div>
        </>
    );
}
