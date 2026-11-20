"use client";

import { useEffect, useState } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { playClick } from "@/lib/sound";
import { outlineButton } from "@/lib/ui";

// The site is a static export, so entries live in Supabase and are read and written
// straight from the browser. The anon key is public by design; Postgres row-level
// security (supabase/guestbook.sql) decides what it may do.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type Entry = { name: string; message: string; created_at: string };
type Status = "idle" | "sending" | "sent" | "error";

const field =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary disabled:opacity-60";

const headers = { apikey: supabaseKey ?? "", Authorization: `Bearer ${supabaseKey}` };

export default function Guestbook() {
    const [entries, setEntries] = useState<Entry[] | null>(null);
    const [loadFailed, setLoadFailed] = useState(false);
    const [status, setStatus] = useState<Status>("idle");

    useEffect(() => {
        if (!supabaseUrl || !supabaseKey) return;
        const controller = new AbortController();

        fetch(`${supabaseUrl}/rest/v1/guestbook?select=name,message,created_at&order=created_at.desc&limit=50`, {
            headers,
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) throw new Error(`Supabase responded ${response.status}`);
                return response.json() as Promise<Entry[]>;
            })
            .then(setEntries)
            .catch((error) => {
                if (error.name !== "AbortError") setLoadFailed(true);
            });

        return () => controller.abort();
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "sending") return;

        const form = event.currentTarget;
        const data = new FormData(form);
        // Bots fill in hidden fields; pretend it worked and send nothing
        if (data.get("website")) {
            setStatus("sent");
            return;
        }

        setStatus("sending");
        try {
            const response = await fetch(`${supabaseUrl}/rest/v1/guestbook`, {
                method: "POST",
                headers: { ...headers, "Content-Type": "application/json", Prefer: "return=minimal" },
                body: JSON.stringify({
                    name: String(data.get("name")).trim(),
                    message: String(data.get("message")).trim(),
                }),
                signal: AbortSignal.timeout(10_000),
            });
            if (!response.ok) throw new Error(`Supabase responded ${response.status}`);
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    if (!supabaseUrl || !supabaseKey) {
        return <p className="text-sm text-secondary">The guestbook isn&apos;t set up yet. Check back soon.</p>;
    }

    const disabled = status === "sending";

    return (
        <div className="space-y-10">
            {status === "sent" ? (
                <p role="status" className="text-sm text-secondary">
                    Thanks for signing! Your note will show up here once I&apos;ve approved it.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="gb-name" className="text-sm font-medium">
                            Name
                        </label>
                        <input id="gb-name" name="name" required maxLength={60} autoComplete="name" disabled={disabled} className={field} />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="gb-message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="gb-message"
                            name="message"
                            required
                            minLength={2}
                            maxLength={500}
                            rows={4}
                            disabled={disabled}
                            className={`${field} resize-y`}
                        />
                    </div>

                    {/* Honeypot: hidden from people, filled in by bots */}
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    />

                    <div className="flex items-center gap-4">
                        <button type="submit" disabled={disabled} onClick={playClick} className={`${outlineButton} h-9 gap-2 px-4`}>
                            {disabled ? "Signing…" : "Sign the guestbook"}
                            <PaperPlaneRight className="size-4" />
                        </button>
                        {status === "error" && (
                            <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                                Couldn&apos;t save that. Please try again.
                            </p>
                        )}
                    </div>
                </form>
            )}

            <section aria-label="Guestbook entries" className="space-y-4">
                {loadFailed ? (
                    <p className="text-sm text-secondary">Couldn&apos;t load the entries right now.</p>
                ) : entries === null ? (
                    <p className="text-sm text-muted-foreground">Loading…</p>
                ) : entries.length === 0 ? (
                    <p className="text-sm text-secondary">No entries yet. Be the first to sign!</p>
                ) : (
                    <ul className="space-y-4">
                        {entries.map((entry) => (
                            <li key={`${entry.created_at}-${entry.name}`} className="rounded-xl border border-border px-4 py-3">
                                {/* React escapes the text, so visitors can't inject HTML */}
                                <p className="whitespace-pre-wrap wrap-break-word text-sm">{entry.message}</p>
                                <p className="mt-2 text-xs text-muted-foreground">
                                    {entry.name} · {new Date(entry.created_at).toLocaleDateString("en-IN", { dateStyle: "medium" })}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}
