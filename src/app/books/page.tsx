import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import BookCover from "@/components/book-cover";
import { bookShelves } from "@/lib/data";

export const metadata: Metadata = { title: "Books" };

export default function BooksPage() {
    return (
        <PageShell title="Books" description="Books that have shaped how I think about building software.">
            <hr className="animate-in-up border-border" style={{ animationDelay: "0.05s" }} />

            <div className="space-y-12 pt-4">
                {bookShelves.map((shelf, shelfIndex) => (
                    <section
                        key={shelf.title}
                        className="animate-in-up space-y-6"
                        style={{ animationDelay: `${0.1 + shelfIndex * 0.1}s` }}
                    >
                        <h2 className="text-2xl font-semibold">{shelf.title}</h2>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
                            {shelf.books.map((book) => (
                                <BookCover key={book.title} book={book} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </PageShell>
    );
}
