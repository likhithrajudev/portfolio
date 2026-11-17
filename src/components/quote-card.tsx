import { Quotes } from "@phosphor-icons/react/dist/ssr";

// A bordered card with a big faint quotation mark behind italic monospace text
export default function QuoteCard({ text, source }: { text: string; source: string }) {
    return (
        <figure className="relative overflow-hidden rounded-xl border border-border bg-background px-6 py-10 sm:px-8">
            <Quotes
                weight="fill"
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-3 size-24 text-muted-foreground/10"
            />

            <blockquote className="relative font-mono text-base italic leading-relaxed text-secondary sm:text-lg">
                &ldquo;{text}&rdquo;
            </blockquote>

            <figcaption className="relative mt-4 text-right font-mono text-sm italic text-muted-foreground">
                — {source}
            </figcaption>
        </figure>
    );
}
