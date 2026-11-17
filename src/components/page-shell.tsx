// Wrapper for the inner pages (Work, Blog, Resume, ...) so they share one layout

type Props = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export default function PageShell({ title, description, children }: Props) {
    return (
        <main className="mx-auto w-full max-w-2xl px-4 pb-16 pt-8">
            <section className="space-y-4">
                <header className="animate-in-up pb-8">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    {description && <p className="text-xs text-secondary md:text-base">{description}</p>}
                </header>
                {children ?? <p className="text-sm text-muted-foreground">Coming soon.</p>}
            </section>
        </main>
    );
}
