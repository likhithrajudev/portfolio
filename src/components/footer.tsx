import Link from "next/link";
import SocialLinks from "@/components/social-links";
import CurrentYear from "@/components/current-year";
import { footerLinks, site } from "@/lib/data";

const label = "text-xs font-medium uppercase tracking-wider text-muted-foreground";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="mx-auto w-full max-w-2xl px-4 py-12">
                <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div className="flex flex-col gap-4">
                        <p className={label}>Navigate</p>
                        <nav className="flex flex-wrap gap-x-6 gap-y-1">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-secondary transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className={label}>Connect</p>
                        <SocialLinks className="gap-2" />
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-8 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © <CurrentYear /> {site.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
