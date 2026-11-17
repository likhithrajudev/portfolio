import Image from "next/image";
import { ArrowUpRight, MapPin, Trophy } from "@phosphor-icons/react/dist/ssr";
import { siCodechef, siHackerrank, siLeetcode, siPaytm } from "simple-icons";
import type { Achievement } from "@/lib/data";
import { formatMonth } from "@/lib/format";
import { brandFill } from "@/lib/tech";
import { sectionHeading } from "@/lib/ui";

const logos = { leetcode: siLeetcode, codechef: siCodechef, hackerrank: siHackerrank, paytm: siPaytm };

// Logos drawn in the text color (black, or white in dark mode) instead of their brand color
const monochrome = new Set<Achievement["platform"]>(["hackerrank"]);

// Newest first. "2026-11" > "2026-10" > "2026" as text, so a plain string compare works.
// Entries without a date (ongoing profiles) keep their order and go last.
function byDateNewestFirst(items: Achievement[]) {
    return [...items].sort((a, b) => {
        if (a.date && b.date) return b.date.localeCompare(a.date);
        if (a.date) return -1;
        if (b.date) return 1;
        return 0;
    });
}

function PlatformIcon({ platform }: { platform: Achievement["platform"] }) {
    if (platform === "hackathon") {
        return <Trophy className="size-5 shrink-0 text-secondary" aria-hidden="true" />;
    }
    const logo = logos[platform];
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5 shrink-0 text-primary"
            fill={monochrome.has(platform) ? "currentColor" : brandFill(logo.hex)}
        >
            <path d={logo.path} />
        </svg>
    );
}

const cardClass =
    "group flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5 transition-colors";

export default function Achievements({ items }: { items: Achievement[] }) {
    return (
        <section className="space-y-2">
            <h2 className={sectionHeading}>Achievements</h2>

            <div className="flex flex-col gap-2">
                {byDateNewestFirst(items).map((item) => {
                    const content = (
                        <>
                            <PlatformIcon platform={item.platform} />

                            <div className="min-w-0 flex-1 space-y-0.5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-base font-semibold leading-tight text-primary">{item.title}</h3>
                                    {item.medal && (
                                        <span className="inline-flex items-center gap-1 rounded-md border border-amber-600/30 bg-amber-500/10 px-1.5 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-300">
                                            <Image
                                                src={item.medal.image}
                                                alt=""
                                                width={10}
                                                height={16}
                                                className="h-4 w-auto"
                                            />
                                            {item.medal.label}
                                        </span>
                                    )}
                                    {item.location && (
                                        <span className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/50 px-1.5 py-0.5 text-xs text-secondary">
                                            <MapPin className="size-3" aria-hidden="true" />
                                            {item.location}
                                        </span>
                                    )}
                                </div>
                                <p className="line-clamp-2 text-xs text-secondary sm:text-sm">{item.detail}</p>
                            </div>

                            <div className="flex shrink-0 flex-col items-end">
                                <span className="text-sm font-semibold tabular-nums text-primary">{item.stat}</span>
                                {item.date && (
                                    <time dateTime={item.date} className="text-xs text-secondary">
                                        {formatMonth(item.date)}
                                    </time>
                                )}
                            </div>

                            {/* Always takes space so the numbers line up; only visible on linked cards */}
                            <ArrowUpRight
                                aria-hidden="true"
                                className={`size-4 shrink-0 text-secondary opacity-0 transition-opacity ${
                                    item.href ? "group-hover:opacity-100" : ""
                                }`}
                            />
                        </>
                    );

                    return item.href ? (
                        <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${cardClass} hover:bg-muted/60`}
                        >
                            {content}
                        </a>
                    ) : (
                        <div key={item.title} className={cardClass}>
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
