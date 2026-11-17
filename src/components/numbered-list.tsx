import type { ReactNode } from "react";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";
import type { LinkItem } from "@/lib/data";

type Props = {
    title: string;
    icon: ReactNode; // shown in the box next to the heading
    items: LinkItem[];
    delay?: number; // seconds before the first row fades in
};

// Heading with an icon box, then a numbered list of links (used for Software on the Gears page)
export default function NumberedList({ title, icon, items, delay = 0 }: Props) {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="flex size-9 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground">
                    {icon}
                </div>
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>

            <ol className="mt-8 flex flex-col gap-4">
                {items.map((item, index) => (
                    <li
                        key={item.name}
                        className="animate-in-up flex items-center gap-2"
                        style={{ animationDelay: `${delay + index * 0.05}s` }}
                    >
                        <span
                            aria-hidden="true"
                            className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-sm text-secondary"
                        >
                            {index + 1}
                        </span>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group ml-4 flex items-center gap-1 text-sm text-secondary"
                        >
                            <span className="group-hover:underline">{item.name}</span>
                            <LinkSimple className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    );
}
