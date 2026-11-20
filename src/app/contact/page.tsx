import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import ContactForm from "@/components/contact-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
    title: "Contact",
    description: "Send me a message. It goes straight to my inbox.",
};

export default function ContactPage() {
    return (
        <PageShell title="Contact" description="Have a project, a question or just want to say hi? Send me a message.">
            <div className="animate-in-up" style={{ animationDelay: "0.1s" }}>
                <ContactForm fallbackEmail={site.email} />
            </div>
        </PageShell>
    );
}
