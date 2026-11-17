import Link from "next/link";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import type { Post } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { outlineButton, sectionHeading } from "@/lib/ui";

type Props = {
    posts: Post[];
    title?: string | null; // pass null to hide the heading (e.g. on the Blog page)
    showAllHref?: string;
};

export default function BlogList({ posts, title = "Blog", showAllHref }: Props) {
    return (
        <section className="space-y-2">
            {title && <h2 className={sectionHeading}>{title}</h2>}

            <div className="flex flex-col">
                {posts.map((post) => (
                    <article key={post.slug} className="group py-4">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                        >
                            <div className="min-w-0 flex-1 space-y-1">
                                <h3 className="text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
                                    {post.title}
                                </h3>
                                <p className="line-clamp-2 text-sm text-secondary">{post.description}</p>
                                <time
                                    dateTime={post.date}
                                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                                >
                                    <CalendarBlank className="size-3.5" />
                                    {formatDate(post.date)}
                                </time>
                            </div>
                            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-secondary transition-colors group-hover:text-primary">
                                Read more
                                <ArrowRight className="size-4" />
                            </span>
                        </Link>
                    </article>
                ))}
            </div>

            {showAllHref && (
                <div className="flex justify-center pt-2">
                    <Link href={showAllHref} className={outlineButton}>
                        Show all blogs
                    </Link>
                </div>
            )}
        </section>
    );
}
