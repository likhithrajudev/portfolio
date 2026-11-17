import { Lightbulb } from "@phosphor-icons/react/dist/ssr";
import CopyButton from "@/components/copy-button";
import Diagram from "@/components/diagrams";
import RichText from "@/components/rich-text";
import type { Block } from "@/lib/data";

// Renders long-form content (blog posts, the Setup guide) from a list of blocks
function ContentBlock({ block }: { block: Block }) {
    switch (block.type) {
        case "h2":
            // scroll-mt keeps the heading clear of the sticky navbar when jumped to
            return (
                <h2 id={block.id} className="scroll-mt-20 pt-6 text-xl font-semibold text-primary">
                    <RichText text={block.text} />
                </h2>
            );
        case "h3":
            return (
                <h3 id={block.id} className="scroll-mt-20 pt-2 text-lg font-semibold text-primary">
                    <RichText text={block.text} />
                </h3>
            );
        case "quote":
            return (
                <blockquote className="border-l-2 border-border pl-4 italic text-secondary">
                    <RichText text={block.text} />
                </blockquote>
            );
        case "ul":
            return (
                <ul className="list-disc space-y-1.5 pl-5 marker:text-muted-foreground">
                    {block.items.map((item) => (
                        <li key={item}>
                            <RichText text={item} />
                        </li>
                    ))}
                </ul>
            );
        case "ol":
            return (
                <ol className="list-decimal space-y-2 pl-5 marker:text-muted-foreground">
                    {block.items.map((item) => (
                        <li key={item} className="pl-1">
                            <RichText text={item} />
                        </li>
                    ))}
                </ol>
            );
        case "code":
            return (
                <figure className="overflow-hidden rounded-xl border border-border bg-muted/40">
                    <figcaption className="flex items-center justify-between border-b border-border px-3 py-1.5">
                        <span className="font-mono text-xs text-secondary">{block.filename ?? "code"}</span>
                        <CopyButton text={block.code} />
                    </figcaption>
                    <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
                        <code className="font-mono text-primary">{block.code}</code>
                    </pre>
                </figure>
            );
        case "figure":
            return (
                <figure className="space-y-2 py-2">
                    <div className="rounded-xl border border-border bg-muted/30 p-3 sm:p-4">
                        <Diagram name={block.diagram} />
                    </div>
                    {block.caption && (
                        <figcaption className="text-center text-xs text-muted-foreground">{block.caption}</figcaption>
                    )}
                </figure>
            );
        case "note":
            return (
                <div className="flex gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-secondary">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <p>
                        <RichText text={block.text} />
                    </p>
                </div>
            );
        case "p":
            return (
                <p>
                    <RichText text={block.text} />
                </p>
            );
    }
}

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
    return (
        <div className="space-y-4 leading-relaxed text-foreground/90">
            {blocks.map((block, i) => (
                <ContentBlock key={i} block={block} />
            ))}
        </div>
    );
}
