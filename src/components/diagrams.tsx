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

// ── 6. Pub/sub model ────────────────────────────────────────────

function PubSubModel() {
    return (
        <svg
            viewBox="0 0 640 300"
            role="img"
            aria-label="Two publishers, an order service and a payment service, send messages to a topic called orders. Three subscribers, billing, email and analytics, each receive every message from the topic."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-pubsub" />
            </defs>

            <text x={85} y={64} textAnchor="middle" fontSize={12} className="fill-muted-foreground">Publishers</text>
            <Node x={20} y={90} w={130} label="Order service" />
            <Node x={20} y={170} w={130} label="Payment service" />

            {/* The topic: a log of messages */}
            <rect x={250} y={70} width={140} height={160} rx={12} className="fill-amber-500/15 stroke-amber-600/50" strokeWidth={1.5} />
            <text x={320} y={96} textAnchor="middle" fontSize={13} fontWeight={700} className="fill-primary">Topic: orders</text>
            {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={266 + i * 28} y={118} width={22} height={22} rx={4} className="fill-background stroke-amber-600/50" strokeWidth={1.2} />
            ))}
            <text x={320} y={168} textAnchor="middle" fontSize={11} className="fill-secondary">messages are stored,</text>
            <text x={320} y={184} textAnchor="middle" fontSize={11} className="fill-secondary">not deleted on read</text>

            <text x={555} y={44} textAnchor="middle" fontSize={12} className="fill-muted-foreground">Subscribers</text>
            <Node x={490} y={60} w={130} label="Billing" />
            <Node x={490} y={135} w={130} label="Email" />
            <Node x={490} y={210} w={130} label="Analytics" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-pubsub)">
                <line x1={150} y1={105} x2={248} y2={130} />
                <line x1={150} y1={185} x2={248} y2={170} />
                <line x1={392} y1={110} x2={488} y2={78} />
                <line x1={392} y1={150} x2={488} y2={150} />
                <line x1={392} y1={190} x2={488} y2={222} />
            </g>

            <text x={320} y={268} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">
                Publishers don’t know who is listening. Every subscriber gets every message.
            </text>
        </svg>
    );
}

// ── 7. Kafka partitions and a consumer group ────────────────────

function KafkaPartitions() {
    const rows = [
        { name: "P0", y: 60 },
        { name: "P1", y: 140 },
        { name: "P2", y: 220 },
    ];
    return (
        <svg
            viewBox="0 0 640 330"
            role="img"
            aria-label="A producer writes to a topic split into three partitions, P0, P1 and P2, each an ordered log with offsets 0 to 5. In a consumer group called billing, consumer 1 reads partitions P0 and P1, and consumer 2 reads partition P2."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-partitions" />
            </defs>

            <Node x={14} y={140} w={110} label="Producer" />
            <text x={69} y={192} textAnchor="middle" fontSize={11} className="fill-muted-foreground">same key →</text>
            <text x={69} y={207} textAnchor="middle" fontSize={11} className="fill-muted-foreground">same partition</text>

            <text x={314} y={36} textAnchor="middle" fontSize={12} className="fill-muted-foreground">Topic: orders (an ordered log per partition)</text>
            {rows.map((row) => (
                <g key={row.name}>
                    <text x={187} y={row.y + 20} textAnchor="end" fontSize={13} fontWeight={700} className="fill-primary">{row.name}</text>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <g key={i}>
                            <rect
                                x={192 + i * 38}
                                y={row.y}
                                width={34}
                                height={30}
                                rx={5}
                                className={i === 5 ? "fill-amber-500/25 stroke-amber-600/60" : "fill-background stroke-border"}
                                strokeWidth={1.4}
                            />
                            <text x={192 + i * 38 + 17} y={row.y + 20} textAnchor="middle" fontSize={11} className="fill-secondary font-mono">{i}</text>
                        </g>
                    ))}
                </g>
            ))}

            {/* Consumer group */}
            <rect x={470} y={40} width={160} height={250} rx={12} className="fill-none stroke-border" strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={550} y={62} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">Group: billing</text>
            <Node x={490} y={96} w={120} label="Consumer 1" tone="green" />
            <Node x={490} y={215} w={120} label="Consumer 2" tone="green" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-partitions)">
                <line x1={124} y1={155} x2={155} y2={78} />
                <line x1={124} y1={155} x2={155} y2={155} />
                <line x1={124} y1={155} x2={155} y2={236} />
                <line x1={424} y1={75} x2={488} y2={106} />
                <line x1={424} y1={155} x2={488} y2={118} />
                <line x1={424} y1={235} x2={488} y2={230} />
            </g>

            <text x={320} y={312} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">
                Order is guaranteed inside a partition, not across partitions.
            </text>
        </svg>
    );
}

// ── 8. The dual-write problem ───────────────────────────────────

function DualWrite() {
    return (
        <svg
            viewBox="0 0 640 250"
            role="img"
            aria-label="An order service first saves the order to the database, which succeeds, then publishes an event to Kafka, but crashes before the publish. The order exists, but the event is lost."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-dual" />
            </defs>

            <Node x={20} y={100} w={120} label="Order service" />
            <Node x={300} y={50} w={120} label="Database" tone="blue" />
            <Node x={300} y={150} w={120} label="Kafka" tone="amber" />

            <line x1={140} y1={110} x2={298} y2={70} className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-dual)" />
            <text x={150} y={72} fontSize={12} className="fill-emerald-700 dark:fill-emerald-400">1. save order ✓</text>

            <line x1={140} y1={130} x2={298} y2={168} className="stroke-red-500" strokeWidth={1.5} strokeDasharray="5 4" markerEnd="url(#arrow-dual)" />
            <text x={150} y={190} fontSize={12} className="fill-red-600 dark:fill-red-400">2. publish ✗ (crash)</text>

            <text x={440} y={70} fontSize={12} className="fill-secondary">The order is saved…</text>
            <text x={440} y={170} fontSize={12} className="fill-secondary">…but nobody hears about it.</text>
            <text x={320} y={232} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">
                Two systems, two writes, no shared transaction.
            </text>
        </svg>
    );
}

// ── 9. The outbox pattern ───────────────────────────────────────

function OutboxPattern() {
    return (
        <svg
            viewBox="0 0 640 310"
            role="img"
            aria-label="The order service commits the order row and an outbox row in one database transaction. A relay reads unpublished outbox rows and publishes them to Kafka. Consumers read from Kafka at least once."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-outbox" />
            </defs>

            <Node x={10} y={110} w={96} label="Service" />

            <rect x={166} y={50} width={170} height={170} rx={12} className="fill-background stroke-sky-600/50" strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={251} y={72} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">Database: one transaction</text>
            <Node x={186} y={92} w={130} label="orders" tone="blue" />
            <Node x={186} y={142} w={130} label="outbox" tone="amber" />
            <text x={251} y={198} textAnchor="middle" fontSize={11} className="fill-secondary">both rows commit,</text>
            <text x={251} y={212} textAnchor="middle" fontSize={11} className="fill-secondary">or neither does</text>

            <Node x={396} y={110} w={84} label="Relay" tone="violet" />
            <Node x={540} y={110} w={90} label="Kafka" tone="amber" />
            <Node x={520} y={240} w={110} label="Consumers" tone="green" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-outbox)">
                <line x1={106} y1={125} x2={164} y2={125} />
                <line x1={336} y1={125} x2={394} y2={125} />
                <line x1={480} y1={125} x2={538} y2={125} />
                <line x1={585} y1={140} x2={585} y2={238} />
            </g>
            <text x={135} y={116} textAnchor="middle" fontSize={11} className="fill-muted-foreground">1. commit</text>
            <text x={365} y={116} textAnchor="middle" fontSize={11} className="fill-muted-foreground">2. read</text>
            <text x={509} y={116} textAnchor="middle" fontSize={11} className="fill-muted-foreground">3. publish</text>
            <text x={575} y={196} textAnchor="end" fontSize={11} className="fill-muted-foreground">4. consume</text>
            <text x={575} y={211} textAnchor="end" fontSize={11} className="fill-muted-foreground">(at least once)</text>

            <text x={320} y={290} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">
                The event can be late, but it can’t be lost.
            </text>
        </svg>
    );
}

// ── 10. Idempotent consumer flow (HTML, wraps on phones) ────────

function IdempotentConsumer() {
    return (
        <Steps
            steps={[
                "Receive event",
                "Insert event ID (unique key)",
                "Duplicate? Skip it",
                "Apply the change",
                "Commit the transaction",
                "Commit the offset",
            ]}
        />
    );
}

function ReliablePipeline() {
    return (
        <Steps
            steps={[
                "Business change + outbox row (one transaction)",
                "Relay publishes (at least once)",
                "Kafka, keyed by entity ID",
                "Idempotent consumer",
                "Offset commit after the transaction",
            ]}
        />
    );
}

// ── 11. Java streams ────────────────────────────────────────────

function StreamPipeline() {
    return (
        <svg
            viewBox="0 0 640 190"
            role="img"
            aria-label="A stream pipeline: a source list of orders, then the intermediate operations filter, map and sorted, then a terminal operation, collect. Nothing runs until the terminal operation is called."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-stream" />
            </defs>

            <text x={65} y={42} textAnchor="middle" fontSize={12} className="fill-muted-foreground">source</text>
            <Node x={10} y={70} w={110} label="orders" tone="blue" />

            <line x1={150} y1={52} x2={450} y2={52} className="stroke-border" strokeWidth={1.5} />
            <text x={300} y={42} textAnchor="middle" fontSize={12} className="fill-muted-foreground">intermediate operations (lazy)</text>
            <Node x={150} y={70} w={80} label="filter" />
            <Node x={260} y={70} w={80} label="map" />
            <Node x={370} y={70} w={80} label="sorted" />

            <text x={555} y={42} textAnchor="middle" fontSize={12} className="fill-muted-foreground">terminal operation</text>
            <Node x={480} y={70} w={150} label="collect(toList())" tone="green" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-stream)">
                <line x1={120} y1={85} x2={148} y2={85} />
                <line x1={230} y1={85} x2={258} y2={85} />
                <line x1={340} y1={85} x2={368} y2={85} />
                <line x1={450} y1={85} x2={478} y2={85} />
            </g>

            <text x={320} y={150} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-primary">
                Nothing runs until the terminal operation is called.
            </text>
            <text x={320} y={170} textAnchor="middle" fontSize={12} className="fill-secondary">
                Then each element flows through the whole pipeline, one at a time.
            </text>
        </svg>
    );
}

function StreamsRoadmap() {
    return (
        <Steps
            steps={[
                "Basics (01-03)",
                "flatMap and Optional (04)",
                "Primitive streams (05)",
                "Collectors and grouping (06-08)",
                "Laziness and parallel (09-10)",
                "Patterns and capstones (11-18)",
            ]}
        />
    );
}

// ── 12. Evals ───────────────────────────────────────────────────

function EvalLoop() {
    return (
        <Steps
            steps={[
                "Define what “good” means",
                "Collect real examples",
                "Write graders",
                "Run and score",
                "Read the failures",
                "Change one thing",
                "Re-run and compare",
            ]}
        />
    );
}

function EvalGraders() {
    const graders = [
        ["Code-based", "Exact match, schema checks, unit tests, tool-call and end-state checks.", "Fast, cheap, repeatable. Rigid: misses anything it can’t express as a rule."],
        ["LLM judge", "A model scores an answer against a written rubric.", "Handles open-ended output at scale. Needs a narrow rubric and checking against humans."],
        ["Human", "A person reviews outputs against clear criteria.", "The reference standard. Slow and costly, so use it to calibrate the other two."],
    ];
    return (
        <ul className="grid gap-2 sm:grid-cols-3" aria-label="Types of graders">
            {graders.map(([title, what, tradeoff]) => (
                <li key={title} className="rounded-lg border border-border bg-background p-3">
                    <p className="text-sm font-semibold text-primary">{title}</p>
                    <p className="mt-1.5 text-xs leading-snug text-secondary">{what}</p>
                    <p className="mt-2 text-xs leading-snug text-muted-foreground">{tradeoff}</p>
                </li>
            ))}
        </ul>
    );
}

// ── 13. The agent harness ───────────────────────────────────────

function HarnessLayers() {
    return (
        <svg
            viewBox="0 0 640 330"
            role="img"
            aria-label="The model sits in the middle. Around it, the harness provides prompts and instructions, context management, memory, tools, permissions and sandbox, hooks and guardrails, and observability and evals."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-harness" />
            </defs>

            <rect x={20} y={14} width={600} height={300} rx={16} className="fill-none stroke-border" strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={320} y={40} textAnchor="middle" fontSize={13} fontWeight={700} className="fill-primary">The harness: everything except the model</text>

            <Node x={40} y={75} w={170} label="Prompts & instructions" />
            <Node x={40} y={150} w={170} label="Context management" />
            <Node x={40} y={225} w={170} label="Memory" />

            <Node x={250} y={150} w={140} label="Model" tone="violet" />

            <Node x={430} y={75} w={170} label="Tools" tone="blue" />
            <Node x={430} y={150} w={170} label="Permissions & sandbox" tone="amber" />
            <Node x={430} y={225} w={170} label="Hooks & guardrails" tone="amber" />

            <Node x={225} y={262} w={190} label="Observability & evals" tone="green" />

            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-harness)">
                <line x1={210} y1={90} x2={248} y2={160} />
                <line x1={210} y1={165} x2={248} y2={165} />
                <line x1={210} y1={240} x2={248} y2={172} />
                <line x1={430} y1={90} x2={392} y2={160} />
                <line x1={430} y1={165} x2={392} y2={165} />
                <line x1={430} y1={240} x2={392} y2={172} />
                <line x1={320} y1={262} x2={320} y2={182} />
            </g>
        </svg>
    );
}

function HarnessLoop() {
    return (
        <Steps
            steps={[
                "Assemble the context",
                "Model replies",
                "Tool call? Check permissions",
                "Run it in a sandbox",
                "Feed the result back",
                "Repeat until done",
            ]}
        />
    );
}

// ── 14. Voice AI ────────────────────────────────────────────────

function VoicePipeline() {
    const cascaded: [string, "default" | "amber" | "blue" | "violet"][] = [
        ["Mic", "default"],
        ["Turn detect", "amber"],
        ["STT", "blue"],
        ["LLM", "violet"],
        ["TTS", "blue"],
        ["Speaker", "default"],
    ];
    return (
        <svg
            viewBox="0 0 640 300"
            role="img"
            aria-label="Two designs. A cascaded pipeline: microphone, turn detection, speech-to-text, language model, text-to-speech, speaker. A speech-to-speech design: microphone, one speech-to-speech model, speaker."
            className="h-auto w-full"
        >
            <defs>
                <Arrowhead id="arrow-voice" />
            </defs>

            <text x={12} y={30} fontSize={13} fontWeight={700} className="fill-primary">Cascaded pipeline</text>
            {cascaded.map(([label, tone], i) => (
                <Node key={label} x={12 + i * 106} y={46} w={86} label={label} tone={tone} />
            ))}
            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-voice)">
                {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1={98 + i * 106} y1={61} x2={116 + i * 106} y2={61} />
                ))}
            </g>
            <text x={12} y={106} fontSize={12} className="fill-secondary">Every stage can be swapped, logged and tested, but each one adds delay.</text>

            <text x={12} y={170} fontSize={13} fontWeight={700} className="fill-primary">Speech-to-speech</text>
            <Node x={12} y={186} w={86} label="Mic" />
            <Node x={170} y={186} w={300} label="Speech-to-speech model" tone="violet" />
            <Node x={542} y={186} w={86} label="Speaker" />
            <g className="stroke-secondary" strokeWidth={1.5} markerEnd="url(#arrow-voice)">
                <line x1={98} y1={201} x2={168} y2={201} />
                <line x1={470} y1={201} x2={540} y2={201} />
            </g>
            <text x={12} y={246} fontSize={12} className="fill-secondary">Fewer hops, and it keeps tone and pauses, but you control less of each step.</text>
            <text x={12} y={276} fontSize={12} fontWeight={600} className="fill-primary">Many production agents mix both.</text>
        </svg>
    );
}

function VoiceLatency() {
    const parts: { label: string; ms: number; cls: string }[] = [
        { label: "Wait to confirm the speaker is done", ms: 200, cls: "fill-amber-500/20 stroke-amber-600/50" },
        { label: "Speech-to-text", ms: 100, cls: "fill-sky-500/20 stroke-sky-600/50" },
        { label: "Language model, first tokens", ms: 300, cls: "fill-violet-500/20 stroke-violet-600/50" },
        { label: "Text-to-speech, first audio", ms: 150, cls: "fill-emerald-500/20 stroke-emerald-600/50" },
        { label: "Network and playback", ms: 50, cls: "fill-background stroke-border" },
    ];
    let x = 20;
    return (
        <svg
            viewBox="0 0 640 250"
            role="img"
            aria-label="An illustrative 800 millisecond voice-to-voice budget: 200 waiting for end of turn, 100 speech-to-text, 300 language model, 150 text-to-speech and 50 network and playback."
            className="h-auto w-full"
        >
            <text x={20} y={32} fontSize={13} fontWeight={700} className="fill-primary">An illustrative 800 ms voice-to-voice budget</text>
            {parts.map((part) => {
                const width = part.ms * 0.75;
                const left = x;
                x += width;
                return (
                    <g key={part.label}>
                        <rect x={left} y={52} width={width} height={44} className={part.cls} strokeWidth={1.5} />
                        <text x={left + width / 2} y={79} textAnchor="middle" fontSize={12} className="fill-primary">
                            {width > 60 ? `${part.ms} ms` : part.ms}
                        </text>
                    </g>
                );
            })}
            {parts.map((part, i) => (
                <g key={part.label}>
                    <rect x={20} y={124 + i * 20} width={12} height={12} rx={2} className={part.cls} strokeWidth={1.2} />
                    <text x={40} y={134 + i * 20} fontSize={12} className="fill-secondary">{part.label}</text>
                </g>
            ))}
            <text x={20} y={238} fontSize={12} className="fill-muted-foreground">Numbers are for illustration. Real systems vary a lot.</text>
        </svg>
    );
}

const diagrams: Record<DiagramName, () => React.ReactElement> = {
    "lld-vs-hld": LldVsHld,
    "lld-roadmap": LldRoadmap,
    "strategy-uml": StrategyUml,
    "hld-architecture": HldArchitecture,
    "interview-flow": InterviewFlow,
    "pubsub-model": PubSubModel,
    "kafka-partitions": KafkaPartitions,
    "dual-write": DualWrite,
    "outbox-pattern": OutboxPattern,
    "idempotent-consumer": IdempotentConsumer,
    "reliable-pipeline": ReliablePipeline,
    "stream-pipeline": StreamPipeline,
    "streams-roadmap": StreamsRoadmap,
    "eval-loop": EvalLoop,
    "eval-graders": EvalGraders,
    "harness-layers": HarnessLayers,
    "harness-loop": HarnessLoop,
    "voice-pipeline": VoicePipeline,
    "voice-latency": VoiceLatency,
};

export default function Diagram({ name }: { name: DiagramName }) {
    const Component = diagrams[name];
    return <Component />;
}
