"use client";

import { useState } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { playClick } from "@/lib/sound";
import { outlineButton } from "@/lib/ui";

// The site is a static export (no server), so the message is posted to Formspree,
// which emails it to the address registered for this form ID.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

const field =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-base outline-none sm:text-sm transition-colors placeholder:text-muted-foreground focus:border-primary disabled:opacity-60";

export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!formId || status === "sending") return;

        const form = event.currentTarget;
        setStatus("sending");
        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form),
                // Don't leave the button stuck on "Sending" if the network hangs
                signal: AbortSignal.timeout(10_000),
            });
            if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    if (!formId) {
        return (
            <p className="text-sm text-secondary">
                The contact form isn&apos;t set up yet. Email me at{" "}
                <a href={`mailto:${fallbackEmail}`} className="underline underline-offset-4 hover:text-primary">
                    {fallbackEmail}
                </a>
                .
            </p>
        );
    }

    if (status === "sent") {
        return (
            <p role="status" className="text-sm text-secondary">
                Thanks, your message is on its way. I&apos;ll get back to you soon.
            </p>
        );
    }

    const disabled = status === "sending";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                    Name
                </label>
                <input id="name" name="name" required maxLength={100} autoComplete="name" disabled={disabled} className={field} />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    disabled={disabled}
                    className={field}
                />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    disabled={disabled}
                    className={`${field} resize-y`}
                />
            </div>

            {/* Honeypot: hidden from people, but bots fill it in and Formspree drops those submissions */}
            <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="flex items-center gap-4">
                <button type="submit" disabled={disabled} onClick={playClick} className={`${outlineButton} h-9 gap-2 px-4`}>
                    {disabled ? "Sending…" : "Send message"}
                    <PaperPlaneRight className="size-4" />
                </button>
                {status === "error" && (
                    <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                        Couldn&apos;t send that. Try again, or email{" "}
                        <a href={`mailto:${fallbackEmail}`} className="underline underline-offset-4">
                            {fallbackEmail}
                        </a>
                        .
                    </p>
                )}
            </div>
        </form>
    );
}
