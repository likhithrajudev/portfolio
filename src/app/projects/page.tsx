import type { Metadata } from "next";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = { title: "Projects" };

// Placeholder page: replace the "Coming soon" text by passing children to PageShell
export default function ProjectsPage() {
    return <PageShell title="Projects" description="Things I've built." />;
}
