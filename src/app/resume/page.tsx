import type { Metadata } from "next";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import PageShell from "@/components/page-shell";
import { outlineButton } from "@/lib/ui";

export const metadata: Metadata = { title: "Resume" };

// The PDF lives at public/resume.pdf. Replace that file to update the resume.
const RESUME_URL = "/resume.pdf";

export default function ResumePage() {
    return (
        <PageShell title="Resume" description="Backend engineer working with Java, Spring Boot, and distributed systems.">
            <div className="mb-4 flex flex-wrap gap-2">
                <a href={RESUME_URL} download="LikhithRaju_Resume.pdf" className={`${outlineButton} gap-1.5`}>
                    <DownloadSimple className="size-4" />
                    Download PDF
                </a>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={`${outlineButton} gap-1.5`}>
                    <ArrowUpRight className="size-4" />
                    Open in new tab
                </a>
            </div>

            {/*
              The settings after "#" tell the browser's PDF viewer how to open the file:
              no thumbnail sidebar (navpanes, pagemode), no toolbar, and fit the page to the width.
              Chrome and Firefox follow them; Safari ignores them and shows its own plain viewer.
              Some phone browsers only show the first page here; the buttons above open the full PDF.
            */}
            <iframe
                src={`${RESUME_URL}#toolbar=0&navpanes=0&pagemode=none&view=FitH`}
                title="Likhith Raju P resume"
                className="aspect-[1/1.414] w-full rounded-xl border border-border bg-white"
            />
        </PageShell>
    );
}
