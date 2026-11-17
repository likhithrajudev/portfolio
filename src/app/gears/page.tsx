import type { Metadata } from "next";
import { Monitor } from "@phosphor-icons/react/dist/ssr";
import PageShell from "@/components/page-shell";
import GearList from "@/components/gear-list";
import NumberedList from "@/components/numbered-list";
import { gears, software } from "@/lib/data";

export const metadata: Metadata = { title: "Gears" };

export default function GearsPage() {
    return (
        <PageShell title="Gears" description="The gear I use to get my work done.">
            <hr className="animate-in-up border-border" style={{ animationDelay: "0.05s" }} />

            <div className="animate-in-up" style={{ animationDelay: "0.1s" }}>
                <GearList title="Devices & Accessories" items={gears} />
            </div>

            <div className="animate-in-up pt-10" style={{ animationDelay: "0.3s" }}>
                <NumberedList
                    title="Software"
                    icon={<Monitor className="size-4" aria-hidden="true" />}
                    items={software}
                    delay={0.35}
                />
            </div>
        </PageShell>
    );
}
