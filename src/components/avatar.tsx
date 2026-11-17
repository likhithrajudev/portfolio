import { site } from "@/lib/data";

// Initials badge, e.g. "LR". To use a photo instead, put it in public/avatar.jpg and
// replace the <div> with: <img src="/avatar.jpg" alt="" className="size-24 shrink-0 rounded-full object-cover" />
export default function Avatar() {
    const initials = site.name
        .split(" ")
        .filter((word) => word.length > 1)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

    return (
        <div
            aria-hidden="true"
            className="flex size-24 shrink-0 select-none items-center justify-center rounded-full border border-border bg-muted text-3xl font-bold tracking-tight text-primary"
        >
            {initials}
        </div>
    );
}
