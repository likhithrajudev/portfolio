import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { DiagramName } from "@/lib/data";

// Diagrams for blog posts, drawn in code so they stay sharp and follow light/dark mode.
// Colors come from the site's theme (fill-primary, stroke-border, ...).

// ── Shared SVG pieces ───────────────────────────────────────────

function Arrowhead({ id }: { id: string }) {
    return (
        <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="fill-secondary" />
        </marker>
    );
}

// A labeled box (a service, a database, ...)
function Node({
    x,
    y,
    w,
    label,
    tone = "default",
}: {
    x: number;
    y: number;
    w: number;
    label: string;
    tone?: "default" | "green" | "blue" | "amber" | "violet";
}) {
    const tones = {
        default: "fill-background stroke-border",
        green: "fill-emerald-500/15 stroke-emerald-600/50",
        blue: "fill-sky-500/15 stroke-sky-600/50",
        amber: "fill-amber-500/15 stroke-amber-600/50",
        violet: "fill-violet-500/15 stroke-violet-600/50",
    };
    return (
        <g>
            <rect x={x} y={y} width={w} height={30} rx={8} className={tones[tone]} strokeWidth={1.5} />
            <text x={x + w / 2} y={y + 20} textAnchor="middle" fontSize={13} fontWeight={500} className="fill-primary">
                {label}
            </text>
        </g>
    );
}

// A UML class box: name on top, members below a divider
function ClassBox({
    x,
    y,
    w,
    name,
    stereotype,
    members,
}: {
    x: number;
    y: number;
    w: number;
    name: string;
    stereotype?: string;
    members: string[];
}) {
    const headerHeight = stereotype ? 46 : 28;
    const height = headerHeight + members.length * 18 + 10;
    return (
        <g>
            <rect x={x} y={y} width={w} height={height} rx={8} className="fill-background stroke-border" strokeWidth={1.5} />
            {stereotype && (
                <text x={x + w / 2} y={y + 18} textAnchor="middle" fontSize={11} className="fill-muted-foreground">
                    {stereotype}
                </text>
            )}
            <text x={x + w / 2} y={y + headerHeight - 9} textAnchor="middle" fontSize={14} fontWeight={700} className="fill-primary">
                {name}
            </text>
            <line x1={x} x2={x + w} y1={y + headerHeight} y2={y + headerHeight} className="stroke-border" strokeWidth={1.5} />
            {members.map((member, i) => (
                <text key={member} x={x + 12} y={y + headerHeight + 20 + i * 18} fontSize={12} className="fill-secondary font-mono">
                    {member}
                </text>
            ))}
        </g>
    );
}

// Filled diamond = composition ("owns")
function Diamond({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) {
    const points = vertical
        ? `${x},${y} ${x + 5},${y + 9} ${x},${y + 18} ${x - 5},${y + 9}`
        : `${x},${y} ${x + 9},${y - 5} ${x + 18},${y} ${x + 9},${y + 5}`;
    return <polygon points={points} className="fill-primary" />;
}

// ── 1. LLD vs HLD ───────────────────────────────────────────────

function LldVsHld() {
    return (
        <svg
            viewBox="0 0 640 300"
            role="img"
            aria-label="Side by side: low-level design shows classes ParkingLot, Level and ParkingSpot; high-level design shows a client, load balancer, two services, a cache and a database."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-lld-hld" />
            </defs>

            {/* Low-level design panel */}
            <rect x={8} y={8} width={304} height={284} rx={14} className="fill-background stroke-border" strokeWidth={1.5} />
            <text x={28} y={42} fontSize={18} fontWeight={700} className="fill-primary">Low-Level Design</text>
            <text x={28} y={64} fontSize={13} className="fill-secondary">How one service’s code is structured</text>

            <ClassBox x={28} y={92} w={112} name="ParkingLot" members={["levels", "park()"]} />
            <ClassBox x={188} y={92} w={104} name="Level" members={["spots"]} />
            <ClassBox x={176} y={200} w={124} name="ParkingSpot" members={["type", "isFree()"]} />

            <Diamond x={140} y={118} />
            <line x1={158} y1={118} x2={188} y2={118} className="stroke-secondary" strokeWidth={1.5} />
            <Diamond x={240} y={146} vertical />
            <line x1={240} y1={164} x2={240} y2={200} className="stroke-secondary" strokeWidth={1.5} />

            <polygon points="30,264 35,259 40,264 35,269" className="fill-primary" />
            <text x={48} y={268} fontSize={11} className="fill-muted-foreground">owns (composition)</text>

            {/* High-level design panel */}
            <rect x={328} y={8} width={304} height={284} rx={14} className="fill-background stroke-border" strokeWidth={1.5} />
            <text x={348} y={42} fontSize={18} fontWeight={700} className="fill-primary">High-Level Design</text>
            <text x={348} y={64} fontSize={13} className="fill-secondary">How services work together</text>

            <Node x={420} y={88} w={120} label="Client" />
            <Node x={420} y={138} w={120} label="Load balancer" />
            <Node x={350} y={192} w={110} label="Service" />
            <Node x={500} y={192} w={110} label="Service" />
            <Node x={350} y={250} w={110} label="Cache" tone="green" />
            <Node x={500} y={250} w={110} label="Database" tone="blue" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-lld-hld)">
                <line x1={480} y1={118} x2={480} y2={136} />
                <line x1={470} y1={168} x2={412} y2={190} />
                <line x1={490} y1={168} x2={548} y2={190} />
                <line x1={405} y1={222} x2={405} y2={248} />
                <line x1={555} y1={222} x2={555} y2={248} />
            </g>
        </svg>
    );
}

// ── 2. LLD roadmap (HTML, wraps nicely on phones) ───────────────

function Steps({ steps }: { steps: string[] }) {
    return (
        <ol className="flex flex-wrap items-center gap-2" aria-label="Learning path">
            {steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm">
                        <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-background">
                            {i + 1}
                        </span>
                        <span className="text-primary">{step}</span>
                    </span>
                    {i < steps.length - 1 && <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />}
                </li>
            ))}
        </ol>
    );
}

function LldRoadmap() {
    return (
        <Steps
            steps={[
                "OOP fundamentals",
                "Class relationships",
                "Design principles",
                "Design patterns",
                "UML",
                "Concurrency",
                "Practice problems",
            ]}
        />
    );
}

// ── 3. Strategy pattern as a UML class diagram ──────────────────

function StrategyUml() {
    return (
        <svg
            viewBox="0 0 640 280"
            role="img"
            aria-label="UML class diagram: ParkingTicket uses the PricingStrategy interface, which HourlyPricing and FlatDailyPricing implement."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-strategy" />
            </defs>

            <ClassBox x={40} y={24} w={200} name="ParkingTicket" members={["pricing: PricingStrategy", "fee(hours)"]} />
            <ClassBox x={360} y={24} w={200} name="PricingStrategy" stereotype="«interface»" members={["calculate(hours)"]} />
            <ClassBox x={300} y={180} w={150} name="HourlyPricing" members={["calculate(hours)"]} />
            <ClassBox x={470} y={180} w={150} name="FlatDailyPricing" members={["calculate(hours)"]} />

            {/* ParkingTicket uses PricingStrategy */}
            <line x1={240} y1={62} x2={358} y2={62} className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-strategy)" />
            <text x={299} y={54} textAnchor="middle" fontSize={12} className="fill-muted-foreground">uses</text>

            {/* The two classes implement the interface (dashed line, hollow arrow) */}
            <g className="stroke-secondary" strokeWidth={1.5} strokeDasharray="5 4" fill="none">
                <polyline points="375,180 375,150 545,150 545,180" />
                <line x1={460} y1={150} x2={460} y2={118} />
            </g>
            <polygon points="460,102 452,118 468,118" className="fill-background stroke-secondary" strokeWidth={1.5} />

            {/* Legend */}
            <text x={40} y={196} fontSize={12} className="fill-secondary">Solid arrow: uses</text>
            <text x={40} y={216} fontSize={12} className="fill-secondary">Dashed line, hollow arrow: implements</text>
            <text x={40} y={252} fontSize={12} fontWeight={600} className="fill-primary">New pricing rule = one new class.</text>
            <text x={40} y={270} fontSize={12} className="fill-secondary">Nothing else changes.</text>
        </svg>
    );
}

// ── 4. A typical HLD architecture ───────────────────────────────

function HldArchitecture() {
    return (
        <svg
            viewBox="0 0 640 360"
            role="img"
            aria-label="Architecture: a client calls a CDN for static files and a load balancer, which routes through an API gateway to three services. Services use a cache, a primary database with a read replica, and a message queue processed by a worker."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-hld" />
            </defs>

            <Node x={260} y={20} w={120} label="Client" />
            <Node x={100} y={76} w={120} label="CDN" tone="violet" />
            <Node x={260} y={76} w={120} label="Load balancer" />
            <Node x={260} y={132} w={120} label="API gateway" />
            <Node x={130} y={188} w={120} label="Service A" />
            <Node x={260} y={188} w={120} label="Service B" />
            <Node x={390} y={188} w={120} label="Service C" />
            <Node x={40} y={258} w={110} label="Cache" tone="green" />
            <Node x={180} y={258} w={120} label="Primary DB" tone="blue" />
            <Node x={320} y={258} w={120} label="Read replica" tone="blue" />
            <Node x={460} y={258} w={130} label="Message queue" tone="amber" />
            <Node x={465} y={318} w={120} label="Worker" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-hld)">
                <line x1={300} y1={50} x2={190} y2={74} />
                <line x1={320} y1={50} x2={320} y2={74} />
                <line x1={320} y1={106} x2={320} y2={130} />
                <line x1={300} y1={162} x2={205} y2={186} />
                <line x1={320} y1={162} x2={320} y2={186} />
                <line x1={340} y1={162} x2={435} y2={186} />
                <line x1={170} y1={218} x2={105} y2={256} />
                <line x1={200} y1={218} x2={230} y2={256} />
                <line x1={300} y1={218} x2={255} y2={256} />
                <line x1={340} y1={218} x2={375} y2={256} />
                <line x1={470} y1={218} x2={515} y2={256} />
                <line x1={525} y1={288} x2={525} y2={316} />
            </g>
            {/* Replication from primary to replica */}
            <line x1={300} y1={273} x2={318} y2={273} className="stroke-sky-600/70" strokeWidth={1.5} strokeDasharray="3 3" />

            <text x={30} y={40} fontSize={11} className="fill-muted-foreground">static files</text>
            <text x={30} y={56} fontSize={11} className="fill-muted-foreground">from the edge</text>
            <text x={600} y={210} fontSize={11} textAnchor="end" className="fill-muted-foreground">slow work</text>
            <text x={600} y={226} fontSize={11} textAnchor="end" className="fill-muted-foreground">goes async</text>
        </svg>
    );
}

// ── 5. Interview answer framework ───────────────────────────────

function InterviewFlow() {
    const steps = [
        ["Clarify", "What must it do, and how well?"],
        ["Estimate", "Users, requests per second, storage"],
        ["Entities & APIs", "Classes, endpoints, data model"],
        ["Draw", "Classes or services and data stores"],
        ["Go deep", "The hardest part: concurrency, consistency"],
        ["Trade-offs", "What you chose, and what you gave up"],
    ];
    return (
        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label="Interview answer steps">
            {steps.map(([title, detail], i) => (
                <li key={title} className="rounded-lg border border-border bg-background p-3">
                    <div className="flex items-center gap-2">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-background">
                            {i + 1}
                        </span>
                        <span className="text-sm font-semibold text-primary">{title}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-snug text-secondary">{detail}</p>
                </li>
            ))}
        </ol>
    );
}

const diagrams: Record<DiagramName, () => React.ReactElement> = {
    "lld-vs-hld": LldVsHld,
    "lld-roadmap": LldRoadmap,
    "strategy-uml": StrategyUml,
    "hld-architecture": HldArchitecture,
    "interview-flow": InterviewFlow,
};

export default function Diagram({ name }: { name: DiagramName }) {
    const Component = diagrams[name];
    return <Component />;
}
