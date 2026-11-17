import { Code } from "@phosphor-icons/react/dist/ssr";
import { brandFill, tech, type Tech, type TechKey } from "@/lib/tech";

// Small dashed chip with the logo. The name appears in a tooltip above it on hover or
// keyboard focus, so the chip never changes width and the row never re-wraps.
export default function TechChip({ name }: { name: TechKey }) {
    const item: Tech = tech[name];
    const FallbackIcon = item.fallbackIcon ?? Code;

    return (
        <span
            tabIndex={0}
            aria-label={item.title}
            className="group relative inline-flex items-center rounded-md border border-dashed border-border bg-muted/50 px-2 py-1.5 outline-none transition-all duration-200 ease-out hover:scale-[1.06] hover:bg-muted hover:shadow-sm focus-visible:ring-2 focus-visible:ring-secondary/40"
        >
            {item.icon ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0" fill={brandFill(item.icon.hex)}>
                    <path d={item.icon.path} />
                </svg>
            ) : (
                <FallbackIcon className="size-4 shrink-0" aria-hidden="true" />
            )}

            {/* Tooltip: floats above the chip, so it takes no space in the row */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-primary px-2 py-1 text-xs font-medium text-background opacity-0 shadow-sm transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
            >
                {item.title}
            </span>
        </span>
    );
}
