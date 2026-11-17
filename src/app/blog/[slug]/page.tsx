import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import ContentBlocks from "@/components/content-blocks";
import { posts } from "@/lib/data";
import { formatDate } from "@/lib/format";

// Builds one static page per post at build time
export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        // If the post first appeared elsewhere (Medium), tell search engines that copy is the original
        ...(post.originalUrl ? { alternates: { canonical: post.originalUrl } } : {}),
    };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <main className="mx-auto w-full max-w-2xl px-4 pb-16 pt-8">
            <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
            >
                <ArrowLeft className="size-4" />
                Back to blog
            </Link>

            <article className="animate-in-up mt-6 space-y-8">
                <header className="space-y-3">
                    <h1 className="text-2xl font-bold leading-tight">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        {post.originalUrl && (
                            <>
                                <span aria-hidden="true">·</span>
                                <a
                                    href={post.originalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                                >
                                    Originally published on Medium
                                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                                </a>
                            </>
                        )}
                    </div>
                </header>

                {/* Next.js serves a smaller, compressed copy sized to the reader's screen */}
                {post.cover && (
                    <Image
                        src={post.cover.src}
                        alt={post.cover.alt}
                        width={post.cover.width}
                        height={post.cover.height}
                        sizes="(min-width: 672px) 640px, 100vw"
                        priority
                        className="h-auto w-full rounded-xl border border-border"
                    />
                )}

                <ContentBlocks blocks={post.body} />

                {post.tags && post.tags.length > 0 && (
                    <footer className="flex flex-wrap gap-2 border-t border-border pt-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-secondary"
                            >
                                {tag}
                            </span>
                        ))}
                    </footer>
                )}
            </article>
        </main>
    );
}
