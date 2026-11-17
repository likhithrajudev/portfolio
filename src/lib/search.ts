import { achievements, bookShelves, certificates, footerLinks, gears, jobs, movies, posts, software } from "@/lib/data";
import { setupGuide } from "@/lib/setup";
import { terminalGuide } from "@/lib/terminal";
import { tech } from "@/lib/tech";
import type { Block } from "@/lib/data";

// One searchable thing on the site, shown as a row in the ⌘K search palette
export type SearchItem = {
    group: string; // heading the result is listed under
    title: string;
    subtitle?: string;
    href: string;
    external?: boolean; // opens in a new tab
    keywords?: string; // extra words that should match but aren't shown
};

// Section headings of a guide page, as jump links
function guideSections(blocks: Block[], page: string, href: string): SearchItem[] {
    return blocks.flatMap((block) =>
        block.type === "h2" && block.id
            ? [{ group: "Guides", title: block.text, subtitle: page, href: `${href}#${block.id}` }]
            : []
    );
}

// Built on the server from the site's data, then handed to the search palette
export function buildSearchIndex(): SearchItem[] {
    return [
        ...footerLinks.map((link) => ({ group: "Pages", title: link.label, href: link.href })),

        ...posts.map((post) => ({
            group: "Blog",
            title: post.title,
            subtitle: post.description,
            href: `/blog/${post.slug}`,
            keywords: post.tags?.join(" "),
        })),

        ...guideSections(setupGuide, "Setup", "/setup"),
        ...guideSections(terminalGuide, "Terminal", "/terminal"),

        ...jobs.map((job) => ({
            group: "Work",
            title: job.company,
            subtitle: job.role,
            href: "/work",
            keywords: (job.tech ?? []).map((key) => tech[key].title).join(" "),
        })),

        ...achievements.map((item) => ({
            group: "Achievements",
            title: item.title,
            subtitle: item.stat,
            href: item.href ?? "/",
            external: Boolean(item.href),
        })),

        ...certificates.map((cert) => ({
            group: "Certificates",
            title: cert.title,
            subtitle: cert.issuer,
            // Opens the PDF or verification page when there is one, otherwise the Certificates page
            href: cert.pdf ?? cert.verifyUrl ?? "/certificates",
            external: Boolean(cert.pdf ?? cert.verifyUrl),
        })),

        ...bookShelves.flatMap((shelf) =>
            shelf.books.map((book) => ({ group: "Books", title: book.title, subtitle: book.author, href: "/books" }))
        ),

        ...movies.map((movie) => ({
            group: "Movies",
            title: movie.title,
            subtitle: String(movie.year),
            href: `https://www.imdb.com/title/${movie.imdb}/`,
            external: true,
        })),

        ...gears.map((gear) => ({ group: "Gear", title: gear.name, href: gear.href, external: true })),
        ...software.map((app) => ({ group: "Software", title: app.name, href: app.href, external: true })),
    ];
}
