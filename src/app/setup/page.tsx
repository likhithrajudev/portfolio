import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import ContentBlocks from "@/components/content-blocks";
import OnThisPage from "@/components/on-this-page";
import { setupGuide } from "@/lib/setup";

export const metadata: Metadata = {
    title: "Setup",
    description: "My VS Code and JetBrains setup: theme, font, settings and plugins, with the reasoning behind each choice.",
};

export default function SetupPage() {
    return (
        <PageShell
            title="Setup"
            description="My editor setup for VS Code, IntelliJ IDEA, PyCharm and WebStorm, with the reasoning behind each choice."
        >
            <OnThisPage blocks={setupGuide} />
            <div className="animate-in-up pt-4" style={{ animationDelay: "0.1s" }}>
                <ContentBlocks blocks={setupGuide} />
            </div>
        </PageShell>
    );
}
