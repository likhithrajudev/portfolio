import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { LinkCard } from "@/lib/data";
import { sectionHeading } from "@/lib/ui";

export default function LinkCards({ title, links }: { title: string; links: LinkCard[] }) {
    return (
        <section className="space-y-2">
            <h2 className={sectionHeading}>{title}</h2>

            <div className="flex flex-col gap-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="group flex flex-row items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-2.5 transition-colors hover:bg-muted/60"
                    >
                        <div className="min-w-0 flex-1 space-y-0.5">
                            <h3 className="text-base font-semibold leading-tight text-primary">{link.title}</h3>
                            <p className="line-clamp-2 text-xs text-secondary sm:text-sm">{link.description}</p>
                        </div>
                        <ArrowUpRight className="size-4 shrink-0 text-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
