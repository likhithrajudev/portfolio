import {
    Desk,
    DeviceMobile,
    Headphones,
    Keyboard,
    Laptop,
    LinkSimple,
    Monitor,
    Mouse,
    Plugs,
    Rectangle,
} from "@phosphor-icons/react/dist/ssr";
import type { Gear } from "@/lib/data";

const icons = {
    laptop: Laptop,
    phone: DeviceMobile,
    monitor: Monitor,
    stand: Laptop,
    keyboard: Keyboard,
    mouse: Mouse,
    mat: Rectangle,
    headphones: Headphones,
    desk: Desk,
    cable: Plugs,
};

// One row per item: icon box, then the name with a link icon. Rows fade in one after another.
export default function GearList({ title, items }: { title: string; items: Gear[] }) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>

            <ul className="flex flex-col gap-4">
                {items.map((item, index) => {
                    const Icon = icons[item.icon];
                    return (
                        <li
                            key={item.name}
                            className="animate-in-up flex min-w-0 items-center gap-4"
                            style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                        >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground">
                                <Icon className="size-4" aria-hidden="true" />
                            </div>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex min-w-0 flex-1 items-center gap-2"
                            >
                                <h3 className="min-w-0 truncate text-xs text-secondary group-hover:underline sm:text-sm">
                                    {item.name}
                                </h3>
                                <LinkSimple className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
