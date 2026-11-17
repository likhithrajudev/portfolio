import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import PageShell from "@/components/page-shell";
import { movies } from "@/lib/data";

export const metadata: Metadata = { title: "Movies" };

export default function MoviesPage() {
    return (
        <PageShell title="Movies" description="Films that have inspired me.">
            <hr className="animate-in-up border-border" style={{ animationDelay: "0.05s" }} />

            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
                {movies.map((movie, index) => (
                    <a
                        key={movie.title}
                        href={`https://www.imdb.com/title/${movie.imdb}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${movie.title} (${movie.year}) on IMDb`}
                        className="animate-in-up group flex gap-4 rounded-xl border border-border bg-background p-3 transition-colors hover:bg-muted/60"
                        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                    >
                        {/* Poster */}
                        <div className="relative aspect-[2/3] w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-muted shadow-sm sm:w-24">
                            <Image
                                src={movie.poster.src}
                                alt={`${movie.title} poster`}
                                fill
                                sizes="96px"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                style={{ objectPosition: movie.poster.position ?? "center" }}
                            />
                        </div>

                        {/* Details */}
                        <div className="flex min-w-0 flex-1 flex-col py-0.5">
                            <h2 className="text-base font-semibold leading-tight text-primary">{movie.title}</h2>
                            <p className="text-sm text-muted-foreground">{movie.year}</p>
                            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-secondary">{movie.blurb}</p>
                            <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-secondary transition-colors group-hover:text-primary">
                                IMDb
                                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </PageShell>
    );
}
