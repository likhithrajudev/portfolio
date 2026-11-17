import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import Playground from "@/components/playground";

export const metadata: Metadata = {
    title: "Playground",
    description: "Write JavaScript and run it right in your browser.",
};

export default function PlaygroundPage() {
    return (
        <PageShell title="Playground" description="Write JavaScript and run it right in your browser.">
            <div className="animate-in-up" style={{ animationDelay: "0.05s" }}>
                <Playground />
            </div>
        </PageShell>
    );
}
