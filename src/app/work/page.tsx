import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import WorkList from "@/components/work-list";
import { jobs } from "@/lib/data";

export const metadata: Metadata = { title: "Work Experience" };

// The Bhagavad Gita quote is added to every page by the layout
export default function WorkPage() {
    return (
        <PageShell title="Work Experience" description="Where I've worked and what I built there.">
            <WorkList jobs={jobs} />
        </PageShell>
    );
}
