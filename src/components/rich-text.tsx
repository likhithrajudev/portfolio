import type { ReactNode } from "react";

// Matches **bold**, `inline code`, or [link text](https://...)
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

// Renders a string with **bold** parts, `inline code` and [markdown-style](https://links)
export default function RichText({ text }: { text: string }) {
    const parts: ReactNode[] = text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={i} className="font-semibold text-primary">
                    {part.slice(2, -2)}
                </strong>
            );
        }

        if (part.length > 2 && part.startsWith("`") && part.endsWith("`")) {
            return (
                <code key={i} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-primary">
                    {part.slice(1, -1)}
                </code>
            );
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
            const [, label, href] = link;
            const external = /^https?:\/\//.test(href);
            return (
                <a
                    key={i}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                >
                    {label}
                </a>
            );
        }

        return part;
    });

    return <>{parts}</>;
}
