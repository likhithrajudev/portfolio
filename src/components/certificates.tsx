"use client";

import { ArrowUpRight, CaretLeft, CaretRight, Certificate as CertificateIcon, DownloadSimple, SealCheck, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { Certificate } from "@/lib/data";
import { formatDate, formatMonth } from "@/lib/format";
import { outlineButton, sectionHeading } from "@/lib/ui";

const viewerButton =
    "inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20";

// "2026-01-05" → "January 5, 2026"; "2026-03" → "Mar 2026"
function certDate(date: string) {
    return date.length === 7 ? formatMonth(date) : formatDate(date);
}

function meta(cert: Certificate) {
    return `${cert.issuer} · ${certDate(cert.date)}${cert.expires ? ` · Expires ${certDate(cert.expires)}` : ""}`;
}

type Props = {
    items: Certificate[];
    title?: string | null; // pass null to hide the heading (e.g. on the Certificates page)
    limit?: number;
    showAllHref?: string;
};

// Certificate cards; ones with an image open a full-screen viewer, others open their verification page
export default function Certificates({ items, title = "Certificates", limit, showAllHref }: Props) {
    const sorted = useMemo(() => [...items].sort((a, b) => b.date.localeCompare(a.date)), [items]);
    const shown = limit ? sorted.slice(0, limit) : sorted;
    const viewable = shown.filter((cert) => cert.image); // the viewer steps through these

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const current = openIndex === null ? null : viewable[openIndex];

    // Keyboard: Esc closes, ← / → move between certificates
    useEffect(() => {
        if (openIndex === null) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % viewable.length));
            if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + viewable.length) % viewable.length));
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [openIndex, viewable.length]);

    const cardClass =
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition-colors hover:bg-muted/60";

    return (
        <section className="space-y-2">
            {title && <h2 className={sectionHeading}>{title}</h2>}

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {shown.map((cert) => {
                    const body = (
                        <>
                            {/* Preview, or a placeholder panel when there's no image */}
                            <div className="relative aspect-[800/566] overflow-hidden border-b border-border bg-muted/50">
                                {cert.thumb ? (
                                    <Image
                                        src={cert.thumb}
                                        alt=""
                                        fill
                                        sizes="(min-width: 640px) 320px, 100vw"
                                        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                ) : (
                                    <div className="flex size-full flex-col items-center justify-center gap-2 text-secondary">
                                        <SealCheck className="size-10" weight="duotone" aria-hidden="true" />
                                        <span className="text-sm font-medium">Verified credential</span>
                                        <span className="inline-flex items-center gap-1 text-xs">
                                            View on {new URL(cert.verifyUrl ?? "https://example.com").hostname}
                                            <ArrowUpRight className="size-3" aria-hidden="true" />
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-start gap-3 px-3 py-2.5">
                                {cert.badge ? (
                                    <Image src={cert.badge} alt="" width={32} height={32} className="size-8 shrink-0 object-contain" />
                                ) : (
                                    <CertificateIcon className="size-8 shrink-0 text-secondary" weight="duotone" aria-hidden="true" />
                                )}
                                <div className="min-w-0 space-y-0.5">
                                    <h3 className="text-base font-semibold leading-tight text-primary">{cert.title}</h3>
                                    <p className="text-xs text-secondary sm:text-sm">{meta(cert)}</p>
                                </div>
                            </div>
                        </>
                    );

                    return cert.image ? (
                        <button
                            key={cert.title}
                            type="button"
                            onClick={() => setOpenIndex(viewable.indexOf(cert))}
                            aria-label={`View certificate: ${cert.title}`}
                            className={cardClass}
                        >
                            {body}
                        </button>
                    ) : (
                        <a
                            key={cert.title}
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify certificate: ${cert.title}`}
                            className={cardClass}
                        >
                            {body}
                        </a>
                    );
                })}
            </div>

            {showAllHref && limit && sorted.length > limit && (
                <div className="flex justify-center pt-2">
                    <Link href={showAllHref} className={outlineButton}>
                        Show all certificates
                    </Link>
                </div>
            )}

            {/* Full-screen viewer, rendered into <body> so nothing on the page can clip it */}
            {current &&
                createPortal(
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={current.title}
                        data-lenis-prevent
                        className="fixed inset-0 z-[95] flex flex-col bg-black/80 backdrop-blur-sm"
                        onMouseDown={(e) => e.target === e.currentTarget && setOpenIndex(null)}
                    >
                        {/* Top bar */}
                        <div className="flex flex-wrap items-center gap-2 px-4 py-3 text-white">
                            <div className="mr-auto min-w-0">
                                <p className="truncate text-sm font-semibold">{current.title}</p>
                                <p className="text-xs text-white/70">{meta(current)}</p>
                            </div>
                            {current.verifyUrl && (
                                <a href={current.verifyUrl} target="_blank" rel="noopener noreferrer" className={viewerButton}>
                                    <SealCheck className="size-4" aria-hidden="true" />
                                    Verify
                                </a>
                            )}
                            <a href={current.pdf ?? current.image} target="_blank" rel="noopener noreferrer" className={viewerButton}>
                                <ArrowUpRight className="size-4" aria-hidden="true" />
                                {current.pdf ? "Open PDF" : "Open image"}
                            </a>
                            <a href={current.pdf ?? current.image} download className={viewerButton}>
                                <DownloadSimple className="size-4" aria-hidden="true" />
                                Download
                            </a>
                            <button
                                type="button"
                                onClick={() => setOpenIndex(null)}
                                aria-label="Close"
                                className={`${viewerButton} px-2`}
                                autoFocus
                            >
                                <X className="size-4" aria-hidden="true" />
                            </button>
                        </div>

                        {/* The certificate, as large as fits */}
                        <div
                            className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6"
                            onMouseDown={(e) => e.target === e.currentTarget && setOpenIndex(null)}
                        >
                            {viewable.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex((openIndex! - 1 + viewable.length) % viewable.length)}
                                    aria-label="Previous certificate"
                                    className="absolute left-3 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                                >
                                    <CaretLeft className="size-5" aria-hidden="true" />
                                </button>
                            )}
                            <Image
                                key={current.image}
                                src={current.image!}
                                alt={`${current.title}, awarded to Likhith Raju P by ${current.issuer}`}
                                width={current.width ?? 1600}
                                height={current.height ?? 1200}
                                className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain shadow-2xl"
                            />
                            {viewable.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex((openIndex! + 1) % viewable.length)}
                                    aria-label="Next certificate"
                                    className="absolute right-3 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                                >
                                    <CaretRight className="size-5" aria-hidden="true" />
                                </button>
                            )}
                        </div>
                    </div>,
                    document.body
                )}
        </section>
    );
}
