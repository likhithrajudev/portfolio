import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import BlogList from "@/components/blog-list";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
    return (
        <PageShell title="Blog" description="Notes on things I've built and learned.">
            <BlogList posts={posts} title={null} />
        </PageShell>
    );
}
