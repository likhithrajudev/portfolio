"use client";

import { useEffect, useRef, useState } from "react";
import { playClick } from "@/lib/sound";

/*
 * A pixel-art head that looks toward your cursor and reacts when clicked ("booped").
 *
 * It needs two square sprite sheets, each a 3×3 grid of frames (any size, e.g. 1080×1080):
 *
 *   directions sheet          reactions sheet
 *   up-left   up    up-right  blink    heart   sparkle
 *   left      center right    surprised wink   bashful
 *   down-left down  down-right sleepy   dizzy   delighted
 */

const DIRECTIONS = ["up-left", "up", "up-right", "left", "center", "right", "down-left", "down", "down-right"] as const;
const REACTIONS = ["blink", "heart", "sparkle", "surprised", "wink", "bashful", "sleepy", "dizzy", "delighted"] as const;
type Direction = (typeof DIRECTIONS)[number];
type Reaction = (typeof REACTIONS)[number];

// The 8 compass directions, starting at "right" and going clockwise (screen y points down)
const SECTORS: Direction[] = ["right", "down-right", "down", "down-left", "left", "up-left", "up", "up-right"];
const SECTOR_SIZE = (2 * Math.PI) / SECTORS.length;
const LOOK_AHEAD_RADIUS = 70; // closer than this (px from the center) and it looks straight ahead
const STICKINESS = 0.12; // extra angle (radians) needed to switch direction, so it doesn't flicker on a boundary

const BOOP_FACES: Reaction[] = ["heart", "sparkle", "delighted"];
const DIZZY_AFTER = 4; // boops in a row before it gets dizzy
const BOOP_STREAK_MS = 1600; // boops closer together than this count as a streak
const SLEEPY_AFTER_MS = 20000; // no mouse or keyboard activity for this long → sleepy face

// Squash and stretch, like a ball landing
const SQUASH: Keyframe[] = [
    { transform: "scale(1, 1)", easing: "ease-in" },
    { transform: "scale(1.10, 0.86)", offset: 0.18, easing: "ease-out" },
    { transform: "scale(0.95, 1.08)", offset: 0.45, easing: "ease-in-out" },
    { transform: "scale(1.03, 0.97)", offset: 0.72, easing: "ease-in-out" },
    { transform: "scale(1, 1)" },
];

// Background position that shows frame `index` (0–8) of a 3×3 sheet
function framePosition(index: number) {
    return `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;
}

// Smallest angle between two directions, in radians
function angleBetween(a: number, b: number) {
    return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
}

const layerStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundSize: "300% 300%",
    backgroundRepeat: "no-repeat",
};

type Props = {
    directions: string; // path to the directions sheet, e.g. "/mascot/directions.png"
    reactions?: string; // path to the reactions sheet (optional)
    size?: number; // width and height in px
    label: string; // e.g. "Likhith's mascot"
    followCursor?: boolean; // false = always face forward (only the centre frame of the sheet is used)
};

export default function Mascot({ directions, reactions, size = 96, label, followCursor = true }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const bodyRef = useRef<HTMLSpanElement>(null);
    const reactionRef = useRef<Reaction | null>(null);
    const boopTimers = useRef<number[]>([]);
    const boopStreak = useRef({ count: 0, last: 0 });

    const [direction, setDirection] = useState<Direction>("center");
    const [reaction, setReaction] = useState<Reaction | null>(null);

    // ── Look toward the cursor ──────────────────────────────────
    useEffect(() => {
        // Only on devices with a mouse or trackpad; on touch screens it simply looks ahead
        if (!followCursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

        let pointer: { x: number; y: number } | null = null;
        let sector = -1; // -1 = looking straight ahead
        let frame = 0;

        const update = () => {
            frame = 0;
            const el = buttonRef.current;
            if (!el || !pointer) return;

            const box = el.getBoundingClientRect();
            const dx = pointer.x - (box.left + box.width / 2);
            const dy = pointer.y - (box.top + box.height / 2);

            if (Math.hypot(dx, dy) < LOOK_AHEAD_RADIUS) {
                sector = -1;
                setDirection("center");
                return;
            }

            const angle = Math.atan2(dy, dx);
            // Stay put until the cursor is clearly past the edge of the current direction
            if (sector !== -1 && angleBetween(angle, sector * SECTOR_SIZE) < SECTOR_SIZE / 2 + STICKINESS) return;

            sector = (Math.round(angle / SECTOR_SIZE) + SECTORS.length) % SECTORS.length;
            setDirection(SECTORS[sector]);
        };

        // At most one update per animation frame
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        const onPointerMove = (e: PointerEvent) => {
            pointer = { x: e.clientX, y: e.clientY };
            schedule();
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("scroll", schedule, { passive: true }); // the head moves when the page scrolls
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("scroll", schedule);
        };
    }, [followCursor]);

    // ── Idle life: blink now and then, get sleepy when left alone ──
    useEffect(() => {
        if (!reactions || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const show = (next: Reaction | null) => {
            reactionRef.current = next;
            setReaction(next);
        };
        const timers: number[] = [];
        let sleepTimer = 0;

        const scheduleBlink = () => {
            timers.push(
                window.setTimeout(() => {
                    if (reactionRef.current === null) {
                        show("blink");
                        timers.push(window.setTimeout(() => reactionRef.current === "blink" && show(null), 140));
                    }
                    scheduleBlink();
                }, 3500 + Math.random() * 3500)
            );
        };

        const wakeUp = () => {
            window.clearTimeout(sleepTimer);
            if (reactionRef.current === "sleepy") show(null);
            sleepTimer = window.setTimeout(() => reactionRef.current === null && show("sleepy"), SLEEPY_AFTER_MS);
        };

        scheduleBlink();
        wakeUp();
        window.addEventListener("pointermove", wakeUp, { passive: true });
        window.addEventListener("keydown", wakeUp);
        window.addEventListener("scroll", wakeUp, { passive: true });
        return () => {
            timers.forEach(window.clearTimeout);
            window.clearTimeout(sleepTimer);
            window.removeEventListener("pointermove", wakeUp);
            window.removeEventListener("keydown", wakeUp);
            window.removeEventListener("scroll", wakeUp);
        };
    }, [reactions]);

    // Clear pending reaction timers when the mascot leaves the page
    useEffect(() => () => boopTimers.current.forEach(window.clearTimeout), []);

    // ── Boop ────────────────────────────────────────────────────
    function boop() {
        const show = (next: Reaction | null) => {
            reactionRef.current = next;
            setReaction(next);
        };
        const later = (ms: number, next: Reaction | null) => boopTimers.current.push(window.setTimeout(() => show(next), ms));

        boopTimers.current.forEach(window.clearTimeout);
        boopTimers.current = [];

        const now = Date.now();
        const streak = boopStreak.current;
        streak.count = now - streak.last < BOOP_STREAK_MS ? streak.count + 1 : 1;
        streak.last = now;

        if (reactions) {
            if (streak.count >= DIZZY_AFTER) {
                streak.count = 0;
                show("dizzy");
                later(1100, null);
            } else {
                // A quick blink, then a happy face, then back to normal
                show("blink");
                later(120, BOOP_FACES[(streak.count - 1) % BOOP_FACES.length]);
                later(560, null);
            }
        }

        playClick();
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            bodyRef.current?.animate(SQUASH, { duration: 420, easing: "linear" });
        }
    }

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={boop}
            aria-label={`Boop ${label}`}
            className="relative block shrink-0 select-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
            style={{ width: size, height: size }}
        >
            {/* Squash pivots near the chin, so it looks like it's sitting on something */}
            <span ref={bodyRef} className="relative block size-full" style={{ transformOrigin: "50% 78%" }}>
                <span
                    aria-hidden="true"
                    style={{
                        ...layerStyle,
                        backgroundImage: `url(${directions})`,
                        backgroundPosition: framePosition(DIRECTIONS.indexOf(direction)),
                        opacity: reaction ? 0 : 1,
                    }}
                />
                {reactions && (
                    <span
                        aria-hidden="true"
                        style={{
                            ...layerStyle,
                            backgroundImage: `url(${reactions})`,
                            backgroundPosition: framePosition(REACTIONS.indexOf(reaction ?? "blink")),
                            opacity: reaction ? 1 : 0,
                        }}
                    />
                )}
            </span>
        </button>
    );
}
