import type { Block } from "@/lib/data";

// A row of jump links built from a guide's section headings (h2 blocks with an id)
export default function OnThisPage({ blocks }: { blocks: Block[] }) {
    const sections = blocks.flatMap((block) =>
        block.type === "h2" && block.id ? [{ id: block.id, title: block.text }] : []
    );

    return (
        <nav aria-label="On this page" className="animate-in-up space-y-2" style={{ animationDelay: "0.05s" }}>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
            <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-secondary transition-colors hover:bg-muted hover:text-primary"
                    >
                        {section.title}
                    </a>
                ))}
            </div>
        </nav>
    );
}
