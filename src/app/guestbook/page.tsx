import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import Guestbook from "@/components/guestbook";

export const metadata: Metadata = {
    title: "Guestbook",
    description: "Leave a note. I read every one.",
};

export default function GuestbookPage() {
    return (
        <PageShell title="Guestbook" description="Stopped by? Leave a note. I read every one, and approve them by hand.">
            <div className="animate-in-up" style={{ animationDelay: "0.1s" }}>
                <Guestbook />
            </div>
        </PageShell>
    );
}
