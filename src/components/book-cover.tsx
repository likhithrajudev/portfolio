import Image from "next/image";
import type { Book } from "@/lib/data";

// A 3D-looking book: the cover (image, or a colored panel with the title), a shaded spine
// and a sliver of pages on the right. It swings open slightly when you hover it.
export default function BookCover({ book }: { book: Book }) {
    const aspectRatio = book.cover ? `${book.cover.width} / ${book.cover.height}` : "2 / 3";

    return (
        <div className="group flex w-full flex-col items-start gap-3" title={`${book.title} by ${book.author}`}>
            <div className="w-full max-w-40 [perspective:900px]">
                <div
                    className="relative w-full rounded-l-sm rounded-r-md shadow-md transition-[transform,box-shadow] duration-500 ease-out [transform-origin:left_center] [transform-style:preserve-3d] group-hover:shadow-xl group-hover:[transform:rotateY(-22deg)]"
                    style={{ aspectRatio, backgroundColor: book.color }}
                >
                    {book.cover ? (
                        <Image
                            src={book.cover.src}
                            alt={`Cover of ${book.title}`}
                            fill
                            sizes="160px"
                            className="rounded-l-sm rounded-r-md object-cover"
                        />
                    ) : (
                        <div className="relative flex h-full flex-col justify-between p-3 pl-5 text-white">
                            <p className="text-sm font-bold leading-snug">{book.title}</p>
                            <p className="text-[11px] leading-tight opacity-80">{book.author}</p>
                        </div>
                    )}

                    {/* Spine: a darker strip with a soft crease */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-3 rounded-l-sm bg-gradient-to-r from-black/40 via-black/10 to-white/10"
                    />
                    {/* Edge of the pages */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-1 -right-1 w-1 rounded-r-sm bg-[repeating-linear-gradient(to_bottom,#f5f1e8_0px,#f5f1e8_1px,#e4ddd0_1px,#e4ddd0_2px)]"
                    />
                </div>
            </div>

            <div>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">{book.title}</p>
                <p className="text-xs text-muted-foreground/80">{book.author}</p>
            </div>
        </div>
    );
}
