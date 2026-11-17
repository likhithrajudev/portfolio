"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

// Copies `text` to the clipboard and shows a checkmark for 2 seconds
export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(id);
    }, [copied]);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch {
            // Clipboard access was blocked; nothing to show
        }
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : label}
            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs text-secondary transition-colors hover:bg-muted hover:text-primary"
        >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : label}
        </button>
    );
}
