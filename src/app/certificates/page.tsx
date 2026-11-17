import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import Certificates from "@/components/certificates";
import { certificates } from "@/lib/data";

export const metadata: Metadata = { title: "Certificates" };

export default function CertificatesPage() {
    return (
        <PageShell title="Certificates" description="Courses, credentials and contest certificates. Click one to view it.">
            <div className="animate-in-up" style={{ animationDelay: "0.05s" }}>
                <Certificates items={certificates} title={null} />
            </div>
        </PageShell>
    );
}
