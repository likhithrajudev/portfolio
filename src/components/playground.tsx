"use client";

import { ArrowCounterClockwise, Eraser, Play, Stop } from "@phosphor-icons/react";
import { javascript } from "@codemirror/lang-javascript";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { EditorState, Prec } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";
import { basicSetup } from "codemirror";
import { useEffect, useRef, useState } from "react";
import { playgroundExamples } from "@/lib/playground-examples";

const TIME_LIMIT_MS = 5000; // stop any run after this long (catches infinite loops)
const MAX_LINES = 500; // stop collecting output after this many lines
const STORAGE_KEY = "playground-code"; // remembers your code between visits

type Line = { level: "log" | "info" | "warn" | "error" | "system"; text: string };

/*
 * The code runs inside a Web Worker: a separate background thread with no access to the page.
 * A runaway loop only blocks the worker, which we can terminate, so the page never freezes.
 * console.* calls are forwarded to the page as messages.
 */
const WORKER_SOURCE = `
const format = (value) => {
    if (typeof value === "string") return value;
    // Errors (checked by shape too, since errors from other realms fail instanceof)
    if (value instanceof Error || (value && typeof value === "object" && typeof value.message === "string" && typeof value.stack === "string")) {
        return (value.name || "Error") + ": " + value.message;
    }
    if (typeof value === "function") return "[Function " + (value.name || "anonymous") + "]";
    if (value === undefined) return "undefined";
    if (typeof value === "bigint") return value + "n";
    if (value instanceof Map) return "Map(" + value.size + ") " + format(Object.fromEntries(value));
    if (value instanceof Set) return "Set(" + value.size + ") " + format([...value]);
    try {
        const seen = new WeakSet();
        return JSON.stringify(value, (key, item) => {
            if (typeof item === "object" && item !== null) {
                if (seen.has(item)) return "[Circular]";
                seen.add(item);
            }
            if (typeof item === "bigint") return item + "n";
            if (typeof item === "function") return "[Function]";
            if (item === undefined) return "undefined";
            return item;
        }, 2);
    } catch {
        return String(value);
    }
};

const send = (type, text) => postMessage({ type, text });
const timers = new Map();

for (const level of ["log", "info", "warn", "error", "debug"]) {
    console[level] = (...args) => send(level === "debug" ? "log" : level, args.map(format).join(" "));
}
console.time = (label = "default") => timers.set(label, performance.now());
console.timeEnd = (label = "default") => {
    if (!timers.has(label)) return;
    send("info", label + ": " + (performance.now() - timers.get(label)).toFixed(1) + " ms");
    timers.delete(label);
};

self.addEventListener("unhandledrejection", (event) => {
    event.preventDefault();
    send("error", format(event.reason));
});

self.onmessage = async (event) => {
    // An async function body, so top-level await works
    const AsyncFunction = (async () => {}).constructor;
    try {
        await new AsyncFunction(event.data.code)();
    } catch (error) {
        send("error", format(error));
    }
    send("done", "");
};
`;

// Editor colors use the site's theme variables, so it follows light and dark mode
const siteTheme = EditorView.theme({
    "&": { color: "var(--foreground)", backgroundColor: "transparent", fontSize: "13px", height: "100%" },
    ".cm-scroller": { fontFamily: "var(--font-geist-mono), ui-monospace, monospace", lineHeight: "1.6" },
    ".cm-content": { caretColor: "var(--foreground)", padding: "12px 0" },
    ".cm-gutters": { backgroundColor: "transparent", color: "var(--muted-foreground)", border: "none" },
    ".cm-activeLine": { backgroundColor: "color-mix(in oklab, var(--muted) 70%, transparent)" },
    ".cm-activeLineGutter": { backgroundColor: "transparent", color: "var(--foreground)" },
    ".cm-cursor": { borderLeftColor: "var(--foreground)" },
    "&.cm-focused": { outline: "none" },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection": {
        backgroundColor: "color-mix(in oklab, var(--secondary) 30%, transparent) !important",
    },
    ".cm-tooltip": { backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px" },
});

const siteHighlight = HighlightStyle.define([
    { tag: [t.keyword, t.controlKeyword, t.moduleKeyword], color: "#a855f7" },
    { tag: [t.string, t.special(t.string)], color: "#16a34a" },
    { tag: [t.number, t.bool, t.null], color: "#ea580c" },
    { tag: t.comment, color: "var(--muted-foreground)", fontStyle: "italic" },
    { tag: [t.function(t.variableName), t.function(t.propertyName)], color: "#2563eb" },
    { tag: t.propertyName, color: "#0891b2" },
    { tag: [t.className, t.typeName], color: "#d97706" },
    { tag: t.operator, color: "var(--secondary)" },
]);

const lineColors: Record<Line["level"], string> = {
    log: "text-primary",
    info: "text-sky-600 dark:text-sky-400",
    warn: "text-amber-600 dark:text-amber-400",
    error: "text-red-600 dark:text-red-400",
    system: "text-muted-foreground italic",
};

function loadSavedCode() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null; // storage can be blocked (private windows)
    }
}

export default function Playground() {
    const editorRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<EditorView | null>(null);
    const workerRef = useRef<Worker | null>(null);
    const workerUrlRef = useRef<string | null>(null);
    const limitTimerRef = useRef(0);
    const runRef = useRef<() => void>(() => {});

    const [lines, setLines] = useState<Line[]>([]);
    const [running, setRunning] = useState(false);
    const [example, setExample] = useState("");

    function append(line: Line) {
        setLines((previous) => {
            if (previous.length >= MAX_LINES) return previous;
            if (previous.length === MAX_LINES - 1) {
                return [...previous, { level: "system", text: `Output limit reached (${MAX_LINES} lines).` }];
            }
            return [...previous, line];
        });
    }

    function stop(message?: string) {
        window.clearTimeout(limitTimerRef.current);
        workerRef.current?.terminate();
        workerRef.current = null;
        if (workerUrlRef.current) URL.revokeObjectURL(workerUrlRef.current);
        workerUrlRef.current = null;
        setRunning(false);
        if (message) append({ level: "system", text: message });
    }

    function run() {
        stop();
        setLines([]);

        const code = viewRef.current?.state.doc.toString() ?? "";
        const url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "text/javascript" }));
        const worker = new Worker(url);
        workerRef.current = worker;
        workerUrlRef.current = url;

        const started = performance.now();
        let finished = false;

        worker.onmessage = (event: MessageEvent<{ type: Line["level"] | "done"; text: string }>) => {
            const { type, text } = event.data;
            if (type === "done") {
                finished = true;
                setRunning(false);
                append({ level: "system", text: `Finished in ${Math.round(performance.now() - started)} ms` });
            } else {
                append({ level: type, text });
            }
        };
        worker.onerror = (event) => {
            event.preventDefault();
            append({ level: "error", text: event.message });
        };

        worker.postMessage({ code });
        setRunning(true);

        // Hard limit: stop the worker after 5 seconds. If the code already finished, this only
        // ends leftover timers quietly; if it didn't, it was probably stuck in a loop.
        limitTimerRef.current = window.setTimeout(() => {
            stop(finished ? undefined : `Stopped after ${TIME_LIMIT_MS / 1000} seconds. Is there an infinite loop?`);
        }, TIME_LIMIT_MS);
    }

    // Keep the keyboard shortcut pointing at the latest run function
    useEffect(() => {
        runRef.current = run;
    });

    // Create the editor once
    useEffect(() => {
        if (!editorRef.current) return;
        let saveTimer = 0;

        const view = new EditorView({
            parent: editorRef.current,
            state: EditorState.create({
                doc: loadSavedCode() ?? playgroundExamples[0].code,
                extensions: [
                    basicSetup,
                    javascript(),
                    siteTheme,
                    syntaxHighlighting(siteHighlight),
                    // ⌘/Ctrl + Enter runs the code
                    Prec.highest(keymap.of([{ key: "Mod-Enter", run: () => (runRef.current(), true) }])),
                    // Save what you type (a moment after you stop typing)
                    EditorView.updateListener.of((update) => {
                        if (!update.docChanged) return;
                        window.clearTimeout(saveTimer);
                        saveTimer = window.setTimeout(() => {
                            try {
                                localStorage.setItem(STORAGE_KEY, update.state.doc.toString());
                            } catch {
                                // ignore
                            }
                        }, 400);
                    }),
                ],
            }),
        });
        viewRef.current = view;

        return () => {
            window.clearTimeout(saveTimer);
            view.destroy();
            viewRef.current = null;
        };
    }, []);

    // Stop any running code when leaving the page
    useEffect(
        () => () => {
            window.clearTimeout(limitTimerRef.current);
            workerRef.current?.terminate();
            if (workerUrlRef.current) URL.revokeObjectURL(workerUrlRef.current);
        },
        []
    );

    function loadExample(name: string) {
        const found = playgroundExamples.find((item) => item.name === name);
        const view = viewRef.current;
        if (!found || !view) return;
        setExample(name);
        view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: found.code } });
        setLines([]);
    }

    const buttonClass =
        "inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-50";

    return (
        <div className="space-y-3">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2">
                {running ? (
                    <button type="button" onClick={() => stop("Stopped.")} className={buttonClass}>
                        <Stop className="size-4 text-red-600" weight="fill" aria-hidden="true" />
                        Stop
                    </button>
                ) : (
                    <button type="button" onClick={run} className={buttonClass}>
                        <Play className="size-4 text-green-600" weight="fill" aria-hidden="true" />
                        Run
                    </button>
                )}
                <button type="button" onClick={() => setLines([])} className={buttonClass} disabled={lines.length === 0}>
                    <Eraser className="size-4" aria-hidden="true" />
                    Clear output
                </button>

                <label className="ml-auto flex items-center gap-2 text-sm text-secondary">
                    <ArrowCounterClockwise className="size-4" aria-hidden="true" />
                    <span className="sr-only sm:not-sr-only">Example</span>
                    <select
                        value={example}
                        onChange={(e) => loadExample(e.target.value)}
                        className="h-8 max-w-44 rounded-lg border border-border bg-background px-2 text-base text-primary sm:max-w-none sm:text-sm"
                    >
                        <option value="" disabled>
                            Load an example…
                        </option>
                        {playgroundExamples.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {/* Editor */}
            <div
                ref={editorRef}
                data-lenis-prevent
                aria-label="Code editor"
                className="h-72 overflow-hidden rounded-xl sm:h-96 border border-border bg-muted/30 [&_.cm-editor]:h-full"
            />
            <p className="text-xs text-muted-foreground">
                Press <kbd className="rounded-sm bg-muted px-1 font-sans">⌘ / Ctrl + Enter</kbd> to run. Your code is
                saved in this browser.
            </p>

            {/* Output */}
            <div className="overflow-hidden rounded-xl border border-border">
                <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3 py-1.5">
                    <span className="font-mono text-xs text-secondary">Console</span>
                    {running && <span className="animate-pulse text-xs text-secondary">Running…</span>}
                </div>
                <div
                    data-lenis-prevent
                    role="log"
                    aria-live="polite"
                    className="h-56 overflow-y-auto bg-background p-3 font-mono text-[13px] leading-relaxed"
                >
                    {lines.length === 0 ? (
                        <p className="text-muted-foreground">Output will appear here.</p>
                    ) : (
                        lines.map((line, i) => (
                            <pre key={i} className={`whitespace-pre-wrap break-words ${lineColors[line.level]}`}>
                                {line.text}
                            </pre>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
