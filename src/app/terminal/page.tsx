import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import ContentBlocks from "@/components/content-blocks";
import OnThisPage from "@/components/on-this-page";
import { terminalGuide } from "@/lib/terminal";

export const metadata: Metadata = {
    title: "Terminal",
    description: "A modern macOS terminal setup: Ghostty, Zsh, Starship, fzf, zoxide, Atuin and more, with the reasoning behind each tool.",
};

export default function TerminalPage() {
    return (
        <PageShell
            title="Terminal"
            description="A modern macOS terminal setup, step by step: Ghostty, Zsh, Starship and the tools that make the command line fast."
        >
            <OnThisPage blocks={terminalGuide} />
            <div className="animate-in-up pt-4" style={{ animationDelay: "0.1s" }}>
                <ContentBlocks blocks={terminalGuide} />
            </div>
        </PageShell>
    );
}
