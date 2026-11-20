"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    // Show "copied" for 2 seconds, then go back to the copy icon
    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(id);
    }, [copied]);

    async function handleCopy() {
        try {
            // Writes to the operating system clipboard, so Cmd/Ctrl+V works anywhere
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch {
            // The browser blocked clipboard access (for example, on an insecure page)
        }
    }

    return (
        <span className="inline-flex max-w-full items-center gap-2 break-all">
            {email}
            <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? "Email copied" : "Copy email"}
                className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary pointer-coarse:size-9"
            >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </button>
        </span>
    );
}
