// All the site's content lives here, so every page reads from one place.

import type { TechKey } from "@/lib/tech";

export const site = {
    name: "Likhith Raju P",
    email: "likhithraju0@gmail.com",
    roles: "Engineer · Polyglot",
    bio: "Love to build cool stuff",
};

// The head next to your name that looks toward the cursor (components/mascot.tsx).
// Put the two 3×3 sprite sheets in public/mascot/ and fill in the paths, e.g.
//   { directions: "/mascot/directions.png", reactions: "/mascot/reactions.png" }
// While this is null, the profile shows the initials badge instead.
export const mascot: { directions: string; reactions?: string; followCursor?: boolean } | null = {
    directions: "/mascot/directions.webp",
    reactions: "/mascot/reactions.webp",
    followCursor: false, // faces forward; set to true (with a full directions sheet) to look toward the cursor
};

export type NavLink = { href: string; label: string };

// Links in the top navbar
export const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/certificates", label: "Certificates" },
    { href: "/resume", label: "Resume" },
];

// Links in the footer's "Navigate" column
export const footerLinks: NavLink[] = [
    ...navLinks,
    { href: "/projects", label: "Projects" },
    { href: "/playground", label: "Playground" },
    { href: "/gears", label: "Gears" },
    { href: "/setup", label: "Setup" },
    { href: "/terminal", label: "Terminal" },
    { href: "/contact", label: "Contact" },
    { href: "/guestbook", label: "Guestbook" },
    { href: "/books", label: "Books" },
    { href: "/movies", label: "Movies" },
];

export type Job = {
    company: string;
    role: string;
    start: string;
    end: string;
    location: string;
    current?: boolean;
    tech?: TechKey[]; // shown as icon chips on the Work page (keys from src/lib/tech.ts)
    highlights?: string[]; // "What I've done" bullets; wrap words in **double stars** to bold them
};

export const jobs: Job[] = [
    {
        company: "Webknot Technologies",
        role: "Associate Software Developer",
        start: "Feb 2026",
        end: "Present",
        location: "Bengaluru, Karnataka",
        current: true,
        tech: [
            "java",
            "springboot",
            "springai",
            "hibernate",
            "postgresql",
            "redis",
            "rabbitmq",
            "python",
            "fastapi",
            "langchain",
            "langgraph",
            "langsmith",
            "nextjs",
            "react",
            "typescript",
            "tailwind",
            "tanstackquery",
            "docker",
            "kubernetes",
            "aws",
            "vercel",
            "k6",
            "postman",
        ],
        highlights: [
            "Owned the company's **HR and performance management platform** end to end as the sole engineer: gathered requirements from **HR and the leadership team**, aligned both on a written specification, then designed the **architecture, schema, role-based access** and performance-rating model.",
            "**Load-tested** the APIs with concurrent virtual users, tracking **p95 latency** rather than averages, and tuned queries and schema before rollout; **deployed it with Docker**, and it now runs the company's live review cycles.",
            "Built the **support-ticket backend** for the Cenomi Malls (Saudi Arabia) tenant platform serving **10,000+ users**, moving **SLA-breach detection** off the request path into a **RabbitMQ consumer** so overdue tickets are flagged even when no user touches them.",
            "Made that consumer safe to **scale horizontally**: each ticket is processed under a **Redis distributed lock**, so parallel instances never escalate the same ticket twice; in production it has processed **close to 5,000 tickets** and caught **500+ SLA breaches**.",
            "Traced slow endpoints in production to an **N+1 query problem** and fixed it with **JOIN FETCH**, loading related entities in one query instead of one per row; added a **circuit breaker** on latency-prone endpoints so a slow call fails fast instead of holding up request threads.",
        ],
    },
    {
        company: "Mphasis Limited",
        role: "Full Stack Developer Intern",
        start: "Feb 2025",
        end: "Jul 2025",
        location: "Bengaluru, Karnataka",
        tech: ["java", "springboot", "react"],
        highlights: [
            "Designed and built an **internal API code-generation tool** to automate CRUD endpoint boilerplate, reducing **API development time by 93%** and streamlining backend engineering workflows.",
        ],
    },
];

export type Gear = {
    name: string;
    href: string;
    icon: "laptop" | "phone" | "monitor" | "stand" | "keyboard" | "mouse" | "mat" | "headphones" | "desk" | "cable";
};

// Gears page → "Devices & Accessories"
export const gears: Gear[] = [
    // 14-inch M2 Pro models start at 512 GB storage; add yours to the name (e.g. "512GB" or "1TB")
    { name: "Apple MacBook Pro 14\" M2 Pro", href: "https://support.apple.com/en-in/111340", icon: "laptop" },
    { name: "iPhone 16 Teal 128GB", href: "https://www.apple.com/in/iphone-16/", icon: "phone" },
    { name: "BenQ GW2790Q 27\" QHD Monitor", href: "https://www.benq.com/en-in/monitor/home/gw2790q.html", icon: "monitor" },
    { name: "STRIFF Adjustable Laptop Stand", href: "https://www.amazon.in/dp/B07XCM6T4N", icon: "stand" },
    { name: "Logitech Pebble Keys 2 K380s Keyboard", href: "https://www.logitech.com/en-in/shop/p/pebble-keys-2", icon: "keyboard" },
    { name: "Logitech M240 Silent Bluetooth Mouse", href: "https://www.logitech.com/en-in/shop/p/m240-silent-bluetooth-mouse", icon: "mouse" },
    { name: "DailyObjects Turf Vegan Leather Desk Mat (Tan)", href: "https://www.dailyobjects.com/turf-vegan-leather-desk-mat-tan", icon: "mat" },
    { name: "JBL Wireless Headphones", href: "https://www.amazon.in/dp/B08QTYYNDN", icon: "headphones" },
    { name: "The Sleep Company Adjustable Standing Desk", href: "https://thesleepcompany.in/products/adjustable-desk", icon: "desk" },
    { name: "Cable Management", href: "https://www.amazon.in/dp/B0FPB73FPZ", icon: "cable" },
];

export type LinkItem = { name: string; href: string };

// Gears page → "Software" (numbered in this order)
export const software: LinkItem[] = [
    { name: "Dia", href: "https://www.diabrowser.com/" },
    { name: "Raycast", href: "https://www.raycast.com/" },
    { name: "Wispr Flow", href: "https://wisprflow.ai/" },
    { name: "Warp", href: "https://www.warp.dev/" },
    { name: "Claude", href: "https://claude.ai/" },
    { name: "IntelliJ IDEA", href: "https://www.jetbrains.com/idea/" },
    { name: "WebStorm", href: "https://www.jetbrains.com/webstorm/" },
    { name: "PyCharm", href: "https://www.jetbrains.com/pycharm/" },
];

export type Movie = {
    title: string;
    year: number;
    blurb: string;
    imdb: string; // IMDb title ID, e.g. "tt1285016" → imdb.com/title/tt1285016/
    poster: { src: string; position?: string }; // file in public/movies/; position picks which part shows when cropped
};

// Movies page, shown in this order. IMDb IDs come from Wikidata; posters from Wikipedia.
export const movies: Movie[] = [
    {
        title: "The Social Network",
        year: 2010,
        blurb: "How Facebook went from a Harvard dorm-room project to a billion-dollar company, and what it cost the friendships behind it.",
        imdb: "tt1285016",
        poster: { src: "/movies/the-social-network.png" },
    },
    {
        title: "Pirates of Silicon Valley",
        year: 1999,
        blurb: "The early rivalry between Steve Jobs and Bill Gates, and how Apple and Microsoft shaped personal computing.",
        imdb: "tt0168122",
        poster: { src: "/movies/pirates-of-silicon-valley.jpg" },
    },
    {
        title: "BlackBerry",
        year: 2023,
        blurb: "The rise and fall of the phone that defined mobile email, and how quickly a market leader can be overtaken.",
        imdb: "tt21867434",
        poster: { src: "/movies/blackberry.png" },
    },
    {
        title: "The Imitation Game",
        year: 2014,
        blurb: "Alan Turing and the team at Bletchley Park racing to break the Enigma code, laying groundwork for modern computing.",
        imdb: "tt2084970",
        poster: { src: "/movies/the-imitation-game.png" },
    },
    {
        title: "Hackers",
        year: 1995,
        blurb: "A group of teenage hackers uncovers a corporate scheme. Pure 90s cyberculture and a love letter to curiosity.",
        imdb: "tt0113243",
        poster: { src: "/movies/hackers.jpg" },
    },
    {
        title: "Tron",
        year: 1982,
        blurb: "A programmer is pulled inside a computer and fights its programs from within. Groundbreaking computer graphics for its time.",
        imdb: "tt0084827",
        poster: { src: "/movies/tron.jpg" },
    },
    {
        title: "Troy",
        year: 2004,
        blurb: "Achilles and the Trojan War. A story about ambition, legacy and what it takes to be remembered.",
        imdb: "tt0332452",
        poster: { src: "/movies/troy.png" },
    },
    {
        title: "F1",
        year: 2025,
        blurb: "A veteran driver returns to Formula 1 to help a struggling team and its rookie. Experience, teamwork and performing under pressure.",
        imdb: "tt16311594",
        poster: { src: "/movies/f1.png" },
    },
    {
        title: "Ex Machina",
        year: 2014,
        blurb: "A programmer is asked to judge whether a reclusive CEO's AI is truly conscious. Sharp questions about intelligence and trust.",
        imdb: "tt0470752",
        // The official poster is landscape; keep Ava (on the right) in the frame
        poster: { src: "/movies/ex-machina.jpg", position: "75% center" },
    },
];

export type Book = {
    title: string;
    author: string;
    color: string; // used for the spine, and as the cover if there's no image
    cover?: { src: string; width: number; height: number }; // cover image in public/books/
};

// Books page, grouped onto shelves. Covers come from Open Library (openlibrary.org).
export const bookShelves: { title: string; books: Book[] }[] = [
    {
        title: "System Design & Architecture",
        books: [
            {
                title: "System Design Interview Vol 1",
                author: "Alex Xu",
                color: "#2f3a63",
                cover: { src: "/books/system-design-interview-vol-1.jpg", width: 333, height: 500 },
            },
            {
                title: "System Design Interview Vol 2",
                author: "Alex Xu & Sahn Lam",
                color: "#2e9c74",
                cover: { src: "/books/system-design-interview-vol-2.jpg", width: 350, height: 500 },
            },
            {
                title: "Designing Data-Intensive Applications",
                author: "Martin Kleppmann",
                color: "#d7263d",
                cover: { src: "/books/designing-data-intensive-applications.jpg", width: 381, height: 500 },
            },
            {
                title: "Fundamentals of Software Architecture",
                author: "Mark Richards & Neal Ford",
                color: "#3b6b3a",
                cover: { src: "/books/fundamentals-of-software-architecture.jpg", width: 381, height: 500 },
            },
        ],
    },
    {
        title: "Coding Interviews",
        books: [
            {
                title: "Cracking the Coding Interview",
                author: "Gayle Laakmann McDowell",
                color: "#7cc520",
                cover: { src: "/books/cracking-the-coding-interview.jpg", width: 350, height: 500 },
            },
        ],
    },
    {
        title: "Software Craft",
        books: [
            {
                title: "The Pragmatic Programmer",
                author: "David Thomas & Andrew Hunt",
                color: "#3a3a3a",
                cover: { src: "/books/pragmatic-programmer.jpg", width: 382, height: 500 },
            },
            {
                title: "Head First Java",
                author: "Kathy Sierra, Bert Bates & Trisha Gee",
                color: "#4b2e83",
                cover: { src: "/books/head-first-java.jpg", width: 432, height: 500 },
            },
        ],
    },
];

// Shown in a card above the footer on every page (see app/layout.tsx)
export const quote = {
    text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor be attached to inaction.",
    source: "Bhagavad Gita",
};

export type Achievement = {
    title: string;
    stat: string; // the headline number, shown on the right
    detail: string;
    platform: "leetcode" | "codechef" | "hackerrank" | "paytm" | "hackathon"; // picks the logo
    date?: string; // "YYYY-MM" (or just "YYYY"); used to sort newest first. Leave out for ongoing profiles.
    location?: string; // shown as a small tag next to the title
    medal?: { label: string; image: string }; // e.g. a bronze medal tag with the medal's picture (file in public/)
    href?: string; // profile or leaderboard link; leave out if there isn't one
};

// The page sorts these by date (newest first); entries without a date go last, in this order
export type Certificate = {
    title: string;
    issuer: string;
    date: string; // "YYYY-MM-DD" (shown as "January 5, 2026") or "YYYY-MM" (shown as "Jan 2026")
    expires?: string; // same format as date
    detail: string;
    image?: string; // sharp render shown in the viewer (public/certificates/); leave out if there's no image
    thumb?: string; // small render shown on the card
    width?: number;
    height?: number;
    pdf?: string; // the original PDF, if there is one
    badge?: string; // small badge icon shown next to the title
    verifyUrl?: string; // the issuer's verification page
};

// Certificates, sorted newest first on the page. The homepage shows the first 4; /certificates shows all.
export const certificates: Certificate[] = [
    {
        title: "HackerRank Orchestrate: Rank #521",
        issuer: "HackerRank",
        date: "2026-10",
        detail: "Certificate of Achievement for building and deploying an AI agent; final rank 521 of 4,094.",
        image: "/certificates/hackerrank-orchestrate-2026.jpg",
        thumb: "/certificates/hackerrank-orchestrate-2026-thumb.jpg",
        width: 1440,
        height: 980,
    },
    {
        title: "Notion Academy: Essentials",
        issuer: "Notion Academy",
        date: "2026-03",
        expires: "2028-03",
        detail: "Completed the Essentials badge.",
        image: "/certificates/notion-academy-essentials.jpg",
        thumb: "/certificates/notion-academy-essentials-thumb.jpg",
        width: 2400,
        height: 1855,
        pdf: "/certificates/notion-academy-essentials.pdf",
        badge: "/certificates/notion-academy-essentials-badge.png",
        verifyUrl: "https://verify.skilljar.com/c/2zfy7crrtq24",
    },
    {
        title: "DevOps Essentials",
        issuer: "IBM · Coursera",
        date: "2025-10-03",
        detail: "IBM Developer Skills Network digital credential.",
        image: "/certificates/ibm-devops-essentials.jpg",
        thumb: "/certificates/ibm-devops-essentials-thumb.jpg",
        width: 1925,
        height: 1487,
        badge: "/certificates/ibm-devops-essentials-badge.png",
        verifyUrl: "https://www.credly.com/badges/76510c13-af92-4dc2-81f9-fa6f7051e6f5",
    },
    {
        title: "Graphic Design Essentials",
        issuer: "Canva Design School",
        date: "2025-01-16",
        detail: "Certificate of completion, credential ID 2488f6.",
        image: "/certificates/canva-graphic-design-essentials.jpg",
        thumb: "/certificates/canva-graphic-design-essentials-thumb.jpg",
        width: 1929,
        height: 1364,
        badge: "/certificates/canva-graphic-design-essentials-badge.png",
    },
    {
        title: "AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        date: "2023-11-03",
        detail: "AWS Academy Graduate, 20 course hours completed.",
        image: "/certificates/aws-academy-cloud-foundations.jpg",
        thumb: "/certificates/aws-academy-cloud-foundations-thumb.jpg",
        width: 1925,
        height: 1487,
        badge: "/certificates/aws-academy-cloud-foundations-badge.png",
        verifyUrl: "https://www.credly.com/go/Ztsn5eTT",
    },
    {
        title: "Shaastra Programming Contest: 39th Position",
        issuer: "Shaastra, IIT Madras",
        date: "2026-01-05",
        detail: "Certificate of Merit for finishing 39th.",
        image: "/certificates/shaastra-programming-contest-39th.jpg",
        thumb: "/certificates/shaastra-programming-contest-39th-thumb.jpg",
        pdf: "/certificates/shaastra-programming-contest-39th.pdf",
        width: 2400,
        height: 1698,
    },
    {
        title: "Shaastra Programming Contest: Participation",
        issuer: "Shaastra, IIT Madras",
        date: "2025-12-03",
        detail: "Certificate of Merit for participating.",
        image: "/certificates/shaastra-programming-contest-participation.jpg",
        thumb: "/certificates/shaastra-programming-contest-participation-thumb.jpg",
        pdf: "/certificates/shaastra-programming-contest-participation.pdf",
        width: 2400,
        height: 1698,
    },
];

export const achievements: Achievement[] = [
    {
        title: "Paytm AI Hackathon",
        stat: "Top 10",
        detail: "Our team finished in the top 10.",
        platform: "paytm",
        date: "2026-11",
        location: "Chennai",
    },
    {
        title: "HackerRank Orchestrate AI Hackathon 2026",
        stat: "521 / 4094",
        detail: "Bronze medallist, ranked 521st out of 4,094 participants.",
        platform: "hackerrank",
        date: "2026-10",
        medal: { label: "Bronze medal", image: "/achievements/hackerrank-orchestrate-bronze.png" },
        href: "https://www.hackerrank.com/contests/hackerrank-orchestrate-october26/challenges/ghost-data-still-exists/leaderboard?username=likhithraju0",
    },
    {
        title: "IITM x CRED Hiring Hackathon",
        stat: "39 / 2590",
        detail: "Ranked 39th out of 2,590 participants.",
        platform: "hackathon",
        date: "2026", // month unknown; add it (e.g. "2026-08") to place it exactly
    },
    {
        title: "LeetCode",
        stat: "1766 rating",
        detail: "400+ problems solved · top 10.1% globally in contests.",
        platform: "leetcode",
        href: "https://leetcode.com/u/likhithraju1/",
    },
    {
        title: "CodeChef",
        stat: "3 Star",
        detail: "Rated 3 Star in competitive programming.",
        platform: "codechef",
        href: "https://www.codechef.com/users/likhithraju0",
    },
];

// One piece of a long-form page (blog posts, the Setup guide).
// Text supports **bold**, `inline code` and [link text](https://...).
export type Block =
    | { type: "p"; text: string } // paragraph
    | { type: "h2"; text: string; id?: string } // section heading; id makes it linkable (/page#id)
    | { type: "h3"; text: string; id?: string } // sub-heading
    | { type: "ul"; items: string[] } // bullet list
    | { type: "ol"; items: string[] } // numbered steps
    | { type: "quote"; text: string } // pull quote
    | { type: "code"; code: string; filename?: string } // code block with a copy button
    | { type: "note"; text: string } // highlighted tip
    | { type: "figure"; diagram: DiagramName; caption?: string }; // a diagram from components/diagrams.tsx

export type DiagramName =
    | "lld-vs-hld"
    | "lld-roadmap"
    | "strategy-uml"
    | "hld-architecture"
    | "interview-flow"
    | "pubsub-model"
    | "kafka-partitions"
    | "dual-write"
    | "outbox-pattern"
    | "idempotent-consumer"
    | "reliable-pipeline"
    | "stream-pipeline"
    | "streams-roadmap";

export type Post = {
    slug: string; // the URL: /blog/<slug>
    title: string;
    description: string; // one-line summary shown in the blog list
    date: string; // YYYY-MM-DD
    tags?: string[];
    originalUrl?: string; // if first published elsewhere (e.g. Medium); shown as a link and told to search engines
    cover?: { src: string; alt: string; width: number; height: number }; // image at the top; file goes in public/
    body: Block[];
};

const LLD_REPO = "https://github.com/ashishps1/awesome-low-level-design";
const HLD_REPO = "https://github.com/ashishps1/awesome-system-design-resources";

const strategyPatternExample = `interface PricingStrategy {
    double calculate(long hoursParked);
}

class HourlyPricing implements PricingStrategy {
    public double calculate(long hoursParked) {
        return hoursParked * 40;
    }
}

class FlatDailyPricing implements PricingStrategy {
    public double calculate(long hoursParked) {
        return Math.ceil(hoursParked / 24.0) * 500;
    }
}

class ParkingTicket {
    private final PricingStrategy pricing;

    ParkingTicket(PricingStrategy pricing) {
        this.pricing = pricing;
    }

    double fee(long hoursParked) {
        return pricing.calculate(hoursParked);
    }
}`;

const STREAMS_REPO = "https://github.com/likhithrajudev/java-streams-practice";

const outboxTableSql = `CREATE TABLE outbox (
    id           UUID        PRIMARY KEY,
    aggregate_id TEXT        NOT NULL,           -- e.g. the order ID; becomes the Kafka key
    type         TEXT        NOT NULL,           -- e.g. 'OrderPlaced'
    payload      JSONB       NOT NULL,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    published_at TIMESTAMPTZ                     -- NULL until the relay has sent it
);

-- The relay only ever looks at unpublished rows
CREATE INDEX outbox_unpublished ON outbox (created_at) WHERE published_at IS NULL;`;

const outboxWriteJava = `@Transactional
public Order placeOrder(PlaceOrder command) {
    Order order = orders.save(Order.create(command));

    outbox.save(new OutboxEvent(
            UUID.randomUUID(),
            order.getId().toString(),
            "OrderPlaced",
            json.write(OrderPlaced.from(order))));

    return order; // the order row and the outbox row commit together, or not at all
}`;

const outboxRelayJava = `@Scheduled(fixedDelay = 500)
@Transactional
public void publishPending() {
    List<OutboxRow> batch = jdbc.query("""
            SELECT id, aggregate_id, type, payload
            FROM outbox
            WHERE published_at IS NULL
            ORDER BY created_at
            LIMIT 100
            FOR UPDATE SKIP LOCKED
            """, OutboxRow.MAPPER);

    for (OutboxRow row : batch) {
        ProducerRecord<String, String> record =
                new ProducerRecord<>("orders", row.aggregateId(), row.payload());
        record.headers().add("event-id", row.id().toString().getBytes(UTF_8));

        kafka.send(record).get(10, TimeUnit.SECONDS); // wait for the broker's ack
        jdbc.update("UPDATE outbox SET published_at = now() WHERE id = ?", row.id());
    }
}`;

const producerConfig = `acks=all
enable.idempotence=true                 # the default since Kafka 3.0
max.in.flight.requests.per.connection=5 # 5 or fewer keeps ordering with idempotence on
delivery.timeout.ms=120000`;

const processedEventsSql = `CREATE TABLE processed_events (
    consumer     TEXT        NOT NULL,   -- one row per consumer, so two services can see the same event
    event_id     UUID        NOT NULL,
    processed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (consumer, event_id)
);`;

const idempotentConsumerJava = `@Transactional
public void handle(UUID eventId, OrderPlaced event) {
    int inserted = jdbc.update("""
            INSERT INTO processed_events (consumer, event_id)
            VALUES ('billing', ?)
            ON CONFLICT DO NOTHING
            """, eventId);

    if (inserted == 0) {
        return; // seen this event already: a duplicate delivery, so do nothing
    }

    billing.charge(event); // same transaction: the charge and the "seen" row commit together
}

// In the poll loop: commit the offset only after handle() has committed
//   enable.auto.commit=false
//   consumer.commitSync();`;

const naturallyIdempotent = `-- Not idempotent: running it twice charges twice
UPDATE accounts SET balance = balance - 500 WHERE id = 42;

-- Idempotent: running it twice leaves the same result
INSERT INTO payments (payment_id, account_id, amount)
VALUES ('9f1c...', 42, 500)
ON CONFLICT (payment_id) DO NOTHING;`;

const consumerConfig = `enable.auto.commit=false
max.poll.records=100                  # a batch you can finish well inside the poll interval
max.poll.interval.ms=300000           # the default; exceed it and the group kicks you out
partition.assignment.strategy=org.apache.kafka.clients.consumer.CooperativeStickyAssignor
group.instance.id=billing-1           # optional: static membership, fewer rebalances on restart`;

const streamsPipelineJava = `record Order(String customer, String city, double amount) {}

List<String> bigSpenders = orders.stream()      // source
        .filter(o -> o.amount() > 1_000)         // intermediate: keep big orders
        .map(Order::customer)                    // intermediate: orders -> names
        .distinct()
        .sorted()
        .toList();                               // terminal: runs the pipeline`;

const streamsLazyJava = `Stream.of("a", "bb", "ccc")
        .filter(s -> { System.out.println("filter " + s); return s.length() > 1; })
        .map(s -> { System.out.println("map " + s); return s.toUpperCase(); })
        .findFirst();

// Prints:
//   filter a
//   filter bb
//   map bb
// "ccc" is never looked at: findFirst() short-circuits, and each element
// goes through the whole pipeline before the next one starts.`;

const streamsGroupingJava = `Map<String, Double> revenueByCity = orders.stream()
        .collect(Collectors.groupingBy(
                Order::city,
                Collectors.summingDouble(Order::amount)));

Map<Boolean, List<Order>> bigAndSmall = orders.stream()
        .collect(Collectors.partitioningBy(o -> o.amount() > 1_000));`;

const streamsFlatMapJava = `List<String> allTags = posts.stream()
        .flatMap(post -> post.tags().stream())   // many tags per post -> one flat stream
        .distinct()
        .sorted()
        .toList();`;

const streamsToMapJava = `// Throws IllegalStateException: Duplicate key ... when two orders share a customer
Map<String, Double> broken = orders.stream()
        .collect(Collectors.toMap(Order::customer, Order::amount));

// Fix: say what to do when keys collide
Map<String, Double> totals = orders.stream()
        .collect(Collectors.toMap(Order::customer, Order::amount, Double::sum));`;

const streamsParallelJava = `// Wrong: ArrayList isn't thread-safe, so elements get lost or an exception is thrown
List<Integer> broken = new ArrayList<>();
IntStream.range(0, 10_000).parallel().forEach(broken::add);

// Right: let the stream collect the results
List<Integer> safe = IntStream.range(0, 10_000).parallel().boxed().toList();`;

const streamsRunJava = `git clone https://github.com/likhithrajudev/java-streams-practice.git
cd java-streams-practice

./run.sh 01              # run lesson 1 with your code
./run.sh all             # progress summary for every lesson
./run.sh --solutions 05  # run the answer key for lesson 5`;

// Newest first
export const posts: Post[] = [
    {
        slug: "kafka-pub-sub-outbox-pattern-and-idempotency",
        title: "Kafka, Pub/Sub, the Outbox Pattern and Idempotency at Scale",
        description: "What the pub/sub model is, how Kafka implements it, why dual writes lose events, and how the outbox pattern and idempotent consumers fix it.",
        date: "2026-11-20",
        tags: ["Kafka", "System Design", "Outbox Pattern", "Idempotency", "Distributed Systems"],
        body: [
            // Introduction
            { type: "p", text: "Most Kafka tutorials stop at “send a message, read a message”. The hard part starts after that: what happens when the service crashes halfway through, when the same message arrives twice, or when you need ten consumers instead of one? Those questions decide whether your system is correct or only correct on a good day." },
            { type: "p", text: "This post walks through four ideas in order: the **pub/sub model**, how **Kafka** implements it, the **outbox pattern** that stops you losing events, and **idempotency**, which makes duplicates harmless. Each one fixes a problem the previous one leaves open." },

            // Pub/sub
            { type: "h2", text: "What Is the Pub/Sub Model?" },
            { type: "p", text: "In **publish/subscribe**, a *publisher* sends a message to a named channel called a *topic*, without knowing who will read it. Any number of *subscribers* listen to that topic, and each of them gets its own copy of every message." },
            {
                type: "figure",
                diagram: "pubsub-model",
                caption: "The order service publishes once. Billing, email and analytics each react on their own.",
            },
            { type: "p", text: "Compare that with calling services directly. If the order service has to call billing, email and analytics itself, it must know all three, wait for them, and handle each one being down. With pub/sub, adding a fourth consumer means subscribing to the topic. The publisher doesn’t change." },
            {
                type: "ul",
                items: [
                    "**Decoupling:** publishers and subscribers don’t know each other, only the topic and the message format.",
                    "**Fan-out:** one event can trigger many independent reactions.",
                    "**Buffering:** if a subscriber is slow or down, messages wait instead of failing the publisher.",
                    "**The cost:** work becomes asynchronous and eventually consistent, and you have to design for failure and duplicates.",
                ],
            },
            { type: "note", text: "A classic message queue gives each message to one consumer (competing consumers). Pub/sub gives each message to every subscriber. Kafka can do both, as you’ll see with consumer groups." },

            // Kafka
            { type: "h2", text: "How Kafka Implements It" },
            { type: "p", text: "Kafka isn’t a queue that deletes messages once they’re read. A topic is a **log**: messages are appended in order and kept for a retention period (7 days by default), whether or not anyone has read them. Each consumer remembers its own position in the log, so it can replay old messages by moving that position back." },
            {
                type: "ul",
                items: [
                    "**Topic:** a named stream of events, such as `orders`.",
                    "**Partition:** a topic is split into partitions, and each partition is an ordered log. Partitions are how Kafka spreads load over many machines.",
                    "**Offset:** a message’s position inside its partition (0, 1, 2, …).",
                    "**Key:** the producer can attach a key to a message. Messages with the same key always go to the same partition, so everything about one order stays in order.",
                    "**Consumer group:** consumers that share one name split the partitions between them. Each partition is read by exactly one consumer in the group, so the group processes each message once. A different group gets its own full copy of the stream. That’s how Kafka gives you both queue and pub/sub behaviour.",
                ],
            },
            {
                type: "figure",
                diagram: "kafka-partitions",
                caption: "Three partitions, two consumers in one group. Each partition has exactly one reader inside the group.",
            },
            { type: "note", text: "Kafka guarantees order only inside a partition. If two events must stay in order, give them the same key, for example the order ID." },

            // Delivery guarantees
            { type: "h2", text: "Delivery Guarantees: Why Duplicates Happen" },
            { type: "p", text: "Between a producer, the broker and a consumer, messages can be delayed, retried or redelivered. There are three possible promises:" },
            {
                type: "ul",
                items: [
                    "**At most once:** a message is delivered zero or one times. You can lose messages, but never see a duplicate.",
                    "**At least once:** a message is delivered one or more times. You never lose it, but you may see it twice. This is the usual default, and the one you should design for.",
                    "**Exactly once:** each message has exactly one effect. Kafka offers this inside Kafka (read, process, write back to Kafka, using transactions), but not across your database or an external API.",
                ],
            },
            { type: "p", text: "The classic duplicate: a consumer processes a message, charges the card, and crashes before it commits its offset. On restart it resumes from the last committed offset and processes the same message again. Retries after a network timeout and consumer-group rebalances cause the same thing." },
            { type: "p", text: "Committing the offset *before* processing instead would turn the duplicate into a lost message. Losing money events is worse than repeating them, so the standard choice is at-least-once delivery plus consumers that cope with repeats." },

            // Dual write
            { type: "h2", text: "The Dual-Write Problem" },
            { type: "p", text: "Here is the bug that the outbox pattern exists to fix. A service saves an order in its database and then publishes an `OrderPlaced` event to Kafka:" },
            { type: "code", filename: "OrderService.java", code: "orders.save(order);                 // 1. write to the database\nkafka.send(\"orders\", event);        // 2. publish to Kafka" },
            { type: "p", text: "These are two separate systems, so there is no transaction around both. If the service crashes (or Kafka is unreachable) between lines 1 and 2, the order exists but the event is never sent. Billing never charges, the warehouse never ships, and nothing in your logs shows an error." },
            {
                type: "figure",
                diagram: "dual-write",
                caption: "The database write succeeds and the publish fails. The two systems now disagree.",
            },
            { type: "p", text: "Swapping the order doesn’t help. Publishing first and then saving can announce an order that never got saved. Wrapping both in a try/catch can’t undo a crash. You need one atomic write." },

            // Outbox
            { type: "h2", text: "The Outbox Pattern" },
            { type: "p", text: "The idea: don’t publish to Kafka inside the request. Instead, write the event to an **outbox table in the same database, in the same transaction** as the business change. A separate process, the *relay*, reads the outbox and publishes to Kafka. The database transaction is now the only thing that has to succeed atomically." },
            {
                type: "figure",
                diagram: "outbox-pattern",
                caption: "The order and its event are committed together. A relay delivers the event to Kafka afterwards.",
            },
            { type: "h3", text: "Step 1: The outbox table" },
            { type: "code", filename: "outbox.sql", code: outboxTableSql },
            { type: "h3", text: "Step 2: Write both rows in one transaction" },
            { type: "code", filename: "OrderService.java", code: outboxWriteJava },
            { type: "p", text: "If the transaction rolls back, neither the order nor its event exists. If it commits, both do, and the relay will deliver the event even if the service dies right afterwards." },
            { type: "h3", text: "Step 3: The relay" },
            { type: "p", text: "There are two common ways to move rows from the outbox to Kafka:" },
            {
                type: "ul",
                items: [
                    "**Polling publisher:** a small job queries unpublished rows, sends them, and marks them published. Simple, and fine for modest volume.",
                    "**Change data capture (CDC):** a tool such as Debezium reads the database’s transaction log and publishes new outbox rows to Kafka, so nothing polls your tables. Debezium ships an Outbox Event Router for this. It adds low latency and less load on the database, but also one more system to run.",
                ],
            },
            { type: "code", filename: "OutboxRelay.java", code: outboxRelayJava },
            { type: "note", text: "That relay is simplified (checked exceptions and error handling are left out). `FOR UPDATE SKIP LOCKED` lets several relay instances work on different rows without blocking each other, but then rows for the same order can be published out of order. Either run one relay, or split the work by a hash of `aggregate_id` so one order always goes through the same relay." },
            { type: "h3", text: "What the outbox does and doesn’t give you" },
            {
                type: "ul",
                items: [
                    "**You get:** no lost events. If the order was committed, the event will be published.",
                    "**You don’t get exactly-once.** If the relay publishes a row and crashes before marking it published, it sends the row again. The outbox is at-least-once.",
                    "**You need cleanup:** delete or archive published rows on a schedule, or the table grows forever.",
                ],
            },
            { type: "p", text: "That second point is why the next section matters. The outbox moves the problem from “lost events” to “duplicate events”, and duplicates are a problem you can solve." },

            // Idempotency
            { type: "h2", text: "Idempotency: Making Duplicates Harmless" },
            { type: "p", text: "An operation is **idempotent** if doing it twice has the same effect as doing it once. Setting a status to `PAID` is idempotent. Adding 500 to a balance is not. You can’t stop at-least-once systems from repeating messages, so you make the consumer safe to repeat." },
            { type: "h3", text: "Where duplicates come from" },
            {
                type: "ul",
                items: [
                    "The producer retries after a timeout, although the broker had already stored the first attempt.",
                    "The outbox relay crashes after publishing but before marking the row as published.",
                    "A consumer crashes after doing the work but before committing its offset.",
                    "A rebalance moves a partition to another consumer while the first one is mid-batch.",
                    "A user double-clicks, or a client retries an HTTP call.",
                ],
            },
            { type: "h3", text: "Solution 1: Make the operation naturally idempotent" },
            { type: "p", text: "The cheapest fix is to design the write so repeating it is harmless: set values instead of incrementing them, use upserts, and give every business operation an ID that the database enforces as unique." },
            { type: "code", filename: "idempotent.sql", code: naturallyIdempotent },
            { type: "h3", text: "Solution 2: Record processed event IDs (the inbox pattern)" },
            { type: "p", text: "When the operation can’t be made idempotent by design, give every event a unique ID (the outbox row’s `id` works well, sent as a Kafka header) and store the IDs you’ve handled. The consumer inserts the ID in the **same transaction** as its business change. A unique key rejects the second attempt." },
            { type: "code", filename: "processed_events.sql", code: processedEventsSql },
            { type: "code", filename: "BillingConsumer.java", code: idempotentConsumerJava },
            {
                type: "figure",
                diagram: "idempotent-consumer",
                caption: "The duplicate check and the business change share one transaction, so they can’t get out of step.",
            },
            { type: "note", text: "Putting the ID check and the business write in the same database transaction is the whole trick. If you check in Redis and then write to the database, a crash between the two puts you back in the same dual-write problem." },
            { type: "h3", text: "Solution 3: Idempotency keys for outside systems" },
            { type: "p", text: "When the side effect is an API call you don’t own (a payment provider, an email service), pass your event ID as the **idempotency key**. Providers such as Stripe store the key and return the original result if they see it again. If the provider has no such feature, record the call in your own database first and only then make it, and accept that a rare crash can still repeat it." },
            { type: "h3", text: "Solution 4: Kafka’s own features, and their limits" },
            {
                type: "ul",
                items: [
                    "**Idempotent producer** (`enable.idempotence=true`): the broker drops duplicate sends caused by producer retries, per partition. It doesn’t protect you if the producer process restarts, and it knows nothing about your outbox relay re-sending a row.",
                    "**Transactions** (`transactional.id`, with consumers on `isolation.level=read_committed`): atomic read-process-write across Kafka topics. Useful for stream processing, but your database writes aren’t part of that transaction.",
                ],
            },
            { type: "code", filename: "producer.properties", code: producerConfig },
            { type: "p", text: "Use these as a base layer, because they remove a whole class of duplicates for free. They don’t replace an idempotent consumer." },

            // Scaling
            { type: "h2", text: "Scaling It Properly" },
            { type: "h3", text: "Partitions set your parallelism" },
            { type: "p", text: "Within a consumer group, a partition is read by at most one consumer. A topic with 6 partitions can use at most 6 consumers in a group, and a 7th sits idle. Pick the partition count from the throughput you’ll need, with some headroom. You can add partitions later but never remove them, and adding them changes which partition a key maps to, which breaks ordering for keys already in use." },
            { type: "h3", text: "Choose the key with care" },
            { type: "ul", items: [
                "Use an ID that groups the events which must stay in order, such as the order ID or account ID.",
                "Avoid keys that are very uneven. If one customer produces most of your traffic, one partition becomes a hot spot while the others stay idle.",
            ] },
            { type: "h3", text: "Consumer settings that matter" },
            { type: "code", filename: "consumer.properties", code: consumerConfig },
            {
                type: "ul",
                items: [
                    "**Commit after processing,** with auto-commit off, so a crash repeats work instead of losing it. Your idempotent consumer makes that safe.",
                    "**Finish each batch before `max.poll.interval.ms` passes.** A slow batch makes the broker think the consumer died, and it triggers a rebalance, which causes more duplicates.",
                    "**Use cooperative rebalancing** so a new consumer joining doesn’t pause the whole group.",
                ],
            },
            { type: "h3", text: "Handle bad messages without blocking the partition" },
            { type: "p", text: "One message that always fails will block its partition if you retry it forever. Retry a few times with backoff, then move it to a **dead-letter topic** and carry on. Spring Kafka’s `DefaultErrorHandler` with a `DeadLetterPublishingRecoverer` does this. Monitor that topic, because a growing dead-letter queue is a bug report." },
            { type: "h3", text: "Watch the right numbers" },
            {
                type: "ul",
                items: [
                    "**Consumer lag** per partition: how far behind the group is. This is your main health signal.",
                    "**Outbox backlog:** the count of unpublished rows and the age of the oldest one.",
                    "**Duplicate rate:** how often the processed-events insert hits a conflict. A sudden jump points to a rebalance storm or a relay problem.",
                    "**Dead-letter volume.**",
                ],
            },
            { type: "h3", text: "Keep the inbox table small" },
            { type: "p", text: "The processed-events table grows with every event. Delete rows older than your longest possible redelivery window (for example, a few times your topic retention), or partition the table by date so old data can be dropped cheaply." },

            // Together
            { type: "h2", text: "Putting It All Together" },
            {
                type: "figure",
                diagram: "reliable-pipeline",
                caption: "Each stage covers the weak spot of the one before it.",
            },
            {
                type: "ol",
                items: [
                    "Write the business change and an outbox row in one transaction, so no event is lost.",
                    "A relay publishes the outbox rows to Kafka, keyed by the entity ID so related events stay in order.",
                    "Run producers with `acks=all` and idempotence on, to remove retry duplicates.",
                    "Consumers insert the event ID and apply the change in one transaction, so duplicates do nothing.",
                    "Commit the offset after that transaction, and send poison messages to a dead-letter topic.",
                    "Watch lag, outbox backlog and duplicate rate.",
                ],
            },

            // Takeaway
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "“Exactly-once” is rarely something you buy. It’s something you assemble: at-least-once delivery, which is cheap and reliable, plus idempotent handling, which turns repeats into no-ops." },
            { type: "quote", text: "Make it hard to lose a message, and make it harmless to see one twice." },
            { type: "p", text: "The outbox covers the first half and the idempotent consumer covers the second. Start with those two and you’ll avoid most of the painful production incidents with Kafka." },
        ],
    },
    {
        slug: "learn-java-streams-zero-to-advanced",
        title: "Learn Java Streams from Zero to Advanced",
        description: "What a stream pipeline is, how laziness works, the collectors and pitfalls worth knowing, and a free 18-lesson practice repo with 185 exercises.",
        date: "2026-11-20",
        tags: ["Java", "Streams", "Functional Programming", "Practice"],
        body: [
            // Introduction
            { type: "p", text: "Java streams look easy in tutorials: `list.stream().filter(...).map(...).toList()`. Then you meet `groupingBy` with a downstream collector, a `flatMap` that returns an `Optional`, or a pipeline that prints in an order you didn’t expect, and reading alone stops helping." },
            { type: "p", text: `I built a practice repository for exactly that: [java-streams-practice](${STREAMS_REPO}). It has 18 short lessons and 185 exercises, and each exercise checks your answer for you. This post covers the ideas behind it, so you know what to look out for. The repo is where you build the skill.` },

            // What
            { type: "h2", text: "What Is a Stream?" },
            { type: "p", text: "A stream is not a collection and it doesn’t store data. It’s a description of a computation over a source (a list, an array, a file, a generator). You build a **pipeline** with three parts:" },
            {
                type: "ol",
                items: [
                    "**A source** that produces elements, such as `list.stream()` or `IntStream.range(0, 10)`.",
                    "**Intermediate operations** that transform the stream into another stream: `filter`, `map`, `sorted`, `distinct`, `limit`.",
                    "**A terminal operation** that produces a result and starts the work: `toList()`, `collect(...)`, `reduce`, `count`, `findFirst`.",
                ],
            },
            {
                type: "figure",
                diagram: "stream-pipeline",
                caption: "Intermediate operations only describe the work. The terminal operation runs it.",
            },
            { type: "code", filename: "Pipeline.java", code: streamsPipelineJava },
            { type: "p", text: "Two properties follow from this design. A stream can only be used **once**, because after a terminal operation it’s consumed. And it doesn’t change its source, since it produces new results instead of modifying the list." },

            // Laziness
            { type: "h2", text: "Laziness: The Idea That Explains Everything" },
            { type: "p", text: "Intermediate operations are **lazy**. Calling `filter` or `map` does no work. The pipeline only runs when a terminal operation is called, and then elements flow through it one at a time, not stage by stage." },
            { type: "code", filename: "Laziness.java", code: streamsLazyJava },
            { type: "p", text: "This is why short-circuiting operations such as `findFirst`, `limit` and `anyMatch` can stop early, and why even an infinite stream like `Stream.iterate(1, n -> n + 1)` works with `limit(10)`." },
            { type: "note", text: "The exceptions are barriers such as `sorted`: it has to see every element before it can pass the first one on. Put `filter` early to shrink the data, and `sorted` late." },

            // Collectors
            { type: "h2", text: "Collectors and Grouping" },
            { type: "p", text: "`collect` turns a stream into a result, and the `Collectors` class does most of the work. Group, count, sum and join without writing a loop:" },
            { type: "code", filename: "Grouping.java", code: streamsGroupingJava },
            { type: "p", text: "`groupingBy` takes a second collector (a *downstream collector*) that decides what to do with each group. Once you’re comfortable with this idea you can nest them: group by city, then by customer, then sum the amounts. The repo’s lessons 06 to 08 drill this, including `teeing` and writing your own collector with `Collector.of`." },

            // flatMap
            { type: "h2", text: "flatMap: One-to-Many" },
            { type: "p", text: "`map` turns one element into one element. `flatMap` turns one element into **a stream of elements** and flattens them into a single stream." },
            { type: "code", filename: "FlatMap.java", code: streamsFlatMapJava },
            { type: "p", text: "It’s the tool for nested lists, for splitting text into words, and for unwrapping optional values with `Optional.stream()`." },

            // Primitive
            { type: "h2", text: "Primitive Streams" },
            { type: "p", text: "`Stream<Integer>` boxes every number into an object. For numeric work use `IntStream`, `LongStream` and `DoubleStream`: they avoid the boxing cost, and they give you `sum()`, `average()` and `summaryStatistics()` directly. Convert with `mapToInt`, `mapToDouble` and back with `boxed()`." },

            // Pitfalls
            { type: "h2", text: "Pitfalls That Catch Everyone" },
            { type: "h3", text: "1. toMap throws on duplicate keys" },
            { type: "code", filename: "ToMap.java", code: streamsToMapJava },
            { type: "p", text: "If several elements can share a key, pass a merge function, or use `groupingBy` when you want a list per key." },
            { type: "h3", text: "2. filter and groupingBy’s filtering are not the same" },
            { type: "p", text: "Calling `.filter(...)` before `groupingBy` drops groups that end up empty. Putting `Collectors.filtering(...)` inside the grouping keeps every group, with an empty list for the ones that matched nothing. Choose based on whether you want those empty groups in the result." },
            { type: "h3", text: "3. count() may skip your pipeline" },
            { type: "p", text: "When the size can be worked out from the source, `count()` doesn’t run the stages at all. `List.of(1, 2, 3).stream().peek(System.out::println).count()` prints nothing. This is why `peek` is for debugging only and shouldn’t carry real logic." },
            { type: "h3", text: "4. Side effects inside a pipeline" },
            { type: "p", text: "Collecting with `forEach(list::add)` mixes a side effect into the pipeline. It’s harder to read, and it breaks the moment the stream goes parallel. Use a collector or `toList()` and let the stream build the result." },
            { type: "h3", text: "5. Parallel streams aren’t free speed" },
            { type: "code", filename: "Parallel.java", code: streamsParallelJava },
            { type: "p", text: "`parallel()` can help for large, CPU-heavy, side-effect-free work. It can hurt for small data, for blocking I/O (everything shares the common fork-join pool), and whenever the code touches shared mutable state. Measure before using it." },

            // Rules of thumb
            { type: "h2", text: "Ten Rules of Thumb" },
            {
                type: "ol",
                items: [
                    "Nothing runs without a terminal operation.",
                    "Each element flows through the whole pipeline before the next one, except at barriers like `sorted`.",
                    "Filter early, sort late, and limit as soon as you can.",
                    "Use `mapToInt`, `mapToDouble` and `mapToLong` for numeric work.",
                    "Use `flatMap` for one-to-many.",
                    "Collect with collectors, never `forEach(list::add)`.",
                    "`toMap` needs a merge function when keys can repeat. Prefer `groupingBy` for many values per key.",
                    "`groupingBy` with `filtering` keeps empty groups, while `.filter` before it drops them.",
                    "Use `parallel()` only for big, CPU-bound, side-effect-free work, and measure it.",
                    "If a plain `for` loop is clearer, use the loop.",
                ],
            },

            // Practice
            { type: "h2", text: "Practice: 18 Lessons, 185 Exercises" },
            { type: "p", text: `Reading about streams only goes so far. The [java-streams-practice](${STREAMS_REPO}) repo teaches them by doing. It needs only a JDK (17 or newer), with no Maven, no JUnit and no dependencies.` },
            {
                type: "figure",
                diagram: "streams-roadmap",
                caption: "The course path. Lessons 01 to 12 are the core, and 13 to 18 are extra practice.",
            },
            {
                type: "ul",
                items: [
                    "Each lesson starts with **theory** in the class Javadoc, followed by a runnable demo.",
                    "Then come `// TODO` exercises. A stub shows ⬜ TODO, a correct answer shows ✅ PASS, and a wrong one shows ❌ FAIL with the expected and actual values.",
                    "Stuck for more than ten minutes? Read the hint, then peek at the answer key in `solutions/`.",
                    "Lessons 13 to 16 are practice packs (strings, maps, stream sources, interview classics). Lesson 17 is a “predict the output” quiz, and lessons 12 and 18 are capstones.",
                ],
            },
            { type: "code", filename: "terminal", code: streamsRunJava },
            { type: "note", text: "Don’t read the solutions first. Type your own answer, run it, and only then compare. A week later, re-type the hard ones from memory." },

            // Takeaway
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "Streams stop feeling like magic once you hold on to three ideas: a pipeline is a description, a terminal operation starts it, and elements flow one at a time." },
            { type: "quote", text: "Use streams to say what you want. Use a loop when how it happens is the clearer story." },
            { type: "p", text: `Clone the [practice repo](${STREAMS_REPO}), do one lesson a day, and try rewriting a loop from your own project as a stream. Then decide honestly which one reads better.` },
        ],
    },
    {
        slug: "master-low-level-and-high-level-design",
        title: "How to Master Low-Level Design and High-Level Design",
        description: "A practical roadmap for LLD and HLD using two free GitHub repositories, plus a 6-week plan.",
        date: "2026-11-17",
        tags: ["System Design", "Low-Level Design", "High-Level Design", "Interviews"],
        body: [
            // Introduction
            { type: "p", text: "Most backend interviews test two different skills, and many people prepare for only one of them. **Low-Level Design (LLD)** is about how you structure code: classes, interfaces, relationships and patterns. **High-Level Design (HLD)** is about how you structure systems: services, databases, caches and queues, and how they hold up under load." },
            { type: "p", text: "I use both every day. At work I built a support-ticket backend where a RabbitMQ consumer had to scale across many instances without escalating the same ticket twice. That meant thinking about distributed locks with Redis (HLD) and about clean, testable consumer code (LLD) at the same time. The two skills feed each other." },
            { type: "p", text: `Two free GitHub repositories by ashishps1 have become my go-to roadmaps: [awesome-low-level-design](${LLD_REPO}) and [awesome-system-design-resources](${HLD_REPO}). Here’s how I’d use them to go from zero to interview-ready.` },

            // Difference
            { type: "h2", text: "LLD vs HLD in One Minute" },
            {
                type: "ul",
                items: [
                    "**Low-Level Design** answers: how should this feature be written? You design classes, choose design patterns and make the code easy to extend. A typical question: design a parking lot.",
                    "**High-Level Design** answers: how should this system be built so it scales? You choose components, data stores and communication styles, and explain the trade-offs. A typical question: design a URL shortener.",
                ],
            },
            {
                type: "figure",
                diagram: "lld-vs-hld",
                caption: "Low-level design looks inside one service. High-level design looks at how services fit together.",
            },
            { type: "note", text: "An easy way to remember it: LLD is about one service done well; HLD is about many services working together." },

            // LLD
            { type: "h2", text: "Part 1: The Low-Level Design Roadmap" },
            { type: "p", text: `The [awesome-low-level-design](${LLD_REPO}) repository is laid out in the order you should learn it:` },
            { type: "figure", diagram: "lld-roadmap", caption: "The LLD learning path, from first principles to interview problems." },
            {
                type: "ol",
                items: [
                    "**OOP fundamentals**: classes and objects, enums, interfaces, encapsulation, abstraction, inheritance and polymorphism.",
                    "**Class relationships**: association, aggregation, composition and dependency. Knowing when one object owns another (composition) versus simply uses it (dependency) shapes every design.",
                    "**Design principles**: SOLID, DRY, KISS and YAGNI. These are the rules you use to judge whether a design is good.",
                    "**Design patterns**: creational (Singleton, Factory Method, Builder), structural (Adapter, Decorator, Facade, Proxy) and behavioral (Strategy, Observer, State, Command). Learn the problem each one solves, not just its diagram.",
                    "**UML**: class, sequence and state diagrams, so you can sketch a design quickly on a whiteboard.",
                    "**Concurrency**: threads, locks, semaphores, deadlocks, and patterns like producer-consumer and thread pools. Many LLD rounds now end with a concurrency follow-up.",
                    "**Practice problems**: start with easy ones (Parking Lot, Vending Machine, Logging Framework), move to medium (LRU Cache, Elevator System, Pub Sub System), then hard (Splitwise, Chess, Movie Ticket Booking).",
                ],
            },

            { type: "h3", text: "A Pattern in Action" },
            { type: "p", text: "Patterns make more sense in code. Here’s the **Strategy pattern** applied to parking-lot pricing, a classic LLD problem. Each pricing rule is its own class, so adding a new one never changes existing code. That’s the Open/Closed principle from SOLID:" },
            { type: "code", filename: "ParkingTicket.java", code: strategyPatternExample },
            {
                type: "figure",
                diagram: "strategy-uml",
                caption: "The same code as a UML class diagram: ParkingTicket depends on the interface, never on a specific pricing rule.",
            },

            // HLD
            { type: "h2", text: "Part 2: The High-Level Design Roadmap" },
            { type: "p", text: `The [awesome-system-design-resources](${HLD_REPO}) repository builds up from fundamentals to complete systems:` },
            {
                type: "ol",
                items: [
                    "**Core concepts**: scalability, availability, reliability, single points of failure, latency vs throughput, consistent hashing and the CAP theorem.",
                    "**Networking**: DNS, proxies vs reverse proxies, HTTP and HTTPS, TCP vs UDP, and load balancing.",
                    "**APIs**: REST vs GraphQL, WebSockets, webhooks, API gateways, idempotency and rate limiting.",
                    "**Databases**: SQL vs NoSQL, ACID transactions, indexes, partitioning, sharding and replication.",
                    "**Caching**: caching strategies, eviction policies, distributed caches and CDNs.",
                    "**Asynchronous communication**: pub/sub, message queues, message brokers and change data capture.",
                    "**Distributed systems**: service discovery, consensus, distributed locking, circuit breakers and distributed tracing.",
                    "**Trade-offs**: strong vs eventual consistency, vertical vs horizontal scaling, batch vs stream processing, push vs pull. This is where interviews are won, because every good answer is a trade-off.",
                    "**Practice problems**: easy (URL Shortener, Distributed Cache, Authentication System), medium (WhatsApp, Notification Service, Rate Limiter), then hard (Uber, Google Docs, a BookMyShow-style ticket booking system).",
                ],
            },
            {
                type: "figure",
                diagram: "hld-architecture",
                caption: "Most HLD answers are variations of this shape: route traffic, keep services stateless, cache hot data, replicate the database and move slow work to a queue.",
            },
            { type: "note", text: "The repository also links classic papers (Dynamo, Kafka, Spanner, MapReduce, the Google File System and more) and engineering write-ups from companies like Discord, Netflix, Stripe and Slack. Reading one a week shows you how these ideas hold up at real scale." },

            // Framework
            { type: "h2", text: "How to Answer Any Design Question" },
            { type: "p", text: "Both repositories include a guide on structuring interview answers. This is the flow I follow:" },
            { type: "figure", diagram: "interview-flow", caption: "Six steps that work for both LLD and HLD questions." },
            {
                type: "ol",
                items: [
                    "**Clarify the requirements.** Ask what the system must do and how well it must do it (scale, latency, availability) before drawing anything.",
                    "**Estimate the scale.** Rough numbers for users, requests per second and storage tell you whether one database is enough or you need sharding and caching.",
                    "**Define the core entities and APIs.** In LLD these become your classes; in HLD, your service endpoints and data model.",
                    "**Draw the design.** Classes and relationships for LLD; services, data stores and queues for HLD.",
                    "**Go deep on the hard part.** Concurrency, consistency, a hot shard or a failure mode. Interviewers care most about how you handle the tricky part.",
                    "**Discuss the trade-offs.** Say what you chose, what you gave up and when you’d choose differently.",
                ],
            },

            // Plan
            { type: "h2", text: "A 6-Week Plan" },
            {
                type: "ul",
                items: [
                    "**Weeks 1–2: LLD foundations.** OOP, class relationships, SOLID and the most common patterns (Strategy, Factory, Observer, Singleton, Builder, Decorator). Solve one easy LLD problem every two days.",
                    "**Week 3: Concurrency and medium LLD.** Locks, thread pools and producer-consumer, then LRU Cache, Elevator System and Pub Sub System.",
                    "**Week 4: HLD foundations.** Core concepts, networking, APIs, databases and caching.",
                    "**Week 5: Distributed systems.** Queues, consistency, sharding, replication and the trade-offs section.",
                    "**Week 6: Mock interviews.** Two HLD and two LLD problems, each against a 45-minute timer, explained out loud.",
                ],
            },

            // Books
            { type: "h2", text: "Books That Go Deeper" },
            {
                type: "ul",
                items: [
                    "**Designing Data-Intensive Applications** by Martin Kleppmann: the best single book on how databases, replication and distributed systems really work.",
                    "**System Design Interview, Volumes 1 and 2** by Alex Xu: worked examples of classic HLD questions.",
                    "**Head First Design Patterns**: the friendliest introduction to design patterns, and one of the books the LLD repository recommends.",
                    "**Clean Code** and **Refactoring**: also on the LLD repository’s list, for writing code that stays easy to change.",
                ],
            },

            // Conclusion
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "LLD makes you a better engineer every day you write code; HLD makes you better at thinking in systems. You don’t need expensive courses for either. Two free repositories, a notebook and steady practice will take you a long way." },

            { type: "h2", text: "Resources" },
            {
                type: "ul",
                items: [
                    `Low-Level Design: [github.com/ashishps1/awesome-low-level-design](${LLD_REPO})`,
                    `High-Level Design: [github.com/ashishps1/awesome-system-design-resources](${HLD_REPO})`,
                ],
            },
        ],
    },
    {
        slug: "25x-faster-alternative-to-redis",
        title: "I Discovered a 25x Faster Alternative to Redis at AWS Summit — Here’s What I Learned",
        description: "DragonflyDB claims to be up to 25x faster than Redis. Here’s the engineering that makes it possible.",
        date: "2026-04-23",
        tags: ["In Memory Cache", "Database", "Redis", "Dragonflydb"],
        originalUrl:
            "https://medium.com/@likhithraju0/i-discovered-a-25x-faster-alternative-to-redis-at-aws-summit-heres-what-i-learned-566e4d88b4a3",
        cover: {
            src: "/blog/dragonfly-vs-redis.jpg",
            alt: "DragonflyDB vs Redis: single-threaded Redis at 1x baseline performance compared with multi-threaded DragonflyDB at up to 25x higher throughput",
            width: 1536,
            height: 1024,
        },
        body: [
            // Introduction
            { type: "p", text: "I happened to be at AWS Summit recently, and I came across a company that genuinely caught my attention. It wasn’t just another tool or startup pitch. It was something that made me pause and think:" },
            { type: "quote", text: "“Wait… how is this even possible?”" },
            { type: "p", text: "The company is **DragonflyDB**, and they claim their in-memory database can be **up to 25x faster** than traditional Redis. Yes, you read that right." },
            { type: "p", text: "Before dismissing this as marketing hype, I spent some time understanding how they achieve it, and it turns out there are some very interesting engineering decisions behind it." },

            // How it works
            { type: "h2", text: "How Dragonfly Achieves This Speed" },

            { type: "h3", text: "1. Multi-threaded Architecture" },
            { type: "p", text: "Most of us know that Redis is largely single-threaded when it comes to command execution. Dragonfly takes a different approach: it uses a multi-threaded architecture, allowing multiple CPU cores to process operations in parallel." },
            { type: "p", text: "**What this means:**" },
            { type: "ul", items: ["Better CPU utilization", "Higher throughput", "No single-core bottleneck"] },
            { type: "p", text: "This alone can lead to massive performance gains on modern multi-core machines." },

            { type: "h3", text: "2. Shared-Nothing Data Partitioning" },
            { type: "p", text: "Dragonfly internally partitions data so that each thread operates on its own subset, with minimal shared state. It’s a classic distributed systems idea applied within a single machine." },
            { type: "p", text: "**The result:**" },
            { type: "ul", items: ["Less contention between threads", "Reduced locking", "Better scalability under load"] },

            { type: "h3", text: "3. Fine-Grained Locking" },
            { type: "p", text: "Traditional systems often suffer from threads blocking each other, lock contention, and latency spikes under heavy traffic. Dragonfly addresses this with fine-grained locking and lock minimization." },
            { type: "p", text: "**The result:**" },
            { type: "ul", items: ["More predictable performance", "Consistent low latency", "Better behavior under high concurrency"] },

            { type: "h3", text: "4. Efficient Memory Management" },
            { type: "p", text: "Memory efficiency plays a huge role in performance. Dragonfly focuses on a better memory layout, reduced fragmentation, and improved cache locality. In short: faster reads, faster writes, and lower overhead." },

            { type: "h3", text: "5. High-Performance Networking" },
            { type: "p", text: "Handling high QPS isn’t just about storage; it’s also about networking. Dragonfly is optimized to handle large numbers of connections, reduce syscall overhead, and process requests efficiently." },

            // Features
            { type: "h2", text: "More Than Just Speed" },
            { type: "p", text: "Beyond performance, Dragonfly comes with a solid feature set:" },
            {
                type: "ul",
                items: [
                    "Redis-compatible API",
                    "In-memory key-value storage",
                    "Persistence support",
                    "High concurrency handling",
                    "Lua scripting (like Redis)",
                    "Built-in caching capabilities",
                    "Pub/Sub support",
                    "Vector similarity search",
                ],
            },
            { type: "p", text: "And yes, it’s **open source**." },

            // Limits
            { type: "h2", text: "A Quick Reality Check" },
            { type: "p", text: "As exciting as this sounds, it’s important to stay grounded. Dragonfly is incredibly fast, but that doesn’t mean it replaces everything." },
            { type: "p", text: "**It’s best suited for:**" },
            { type: "ul", items: ["Caching layers", "Rate limiting", "High-throughput ephemeral workloads"] },
            { type: "p", text: "**It’s not meant to replace:**" },
            { type: "ul", items: ["Your primary database", "Long-term storage systems"] },

            // Conclusion
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "What impressed me wasn’t just the “25x faster” claim. It was the engineering philosophy behind it:" },
            { type: "quote", text: "Fully utilizing modern multi-core systems while minimizing contention." },
            { type: "p", text: "That’s a powerful idea." },

            { type: "h2", text: "Learn More" },
            {
                type: "ul",
                items: [
                    "Website: [dragonflydb.io](https://www.dragonflydb.io/)",
                    "GitHub: [github.com/dragonflydb/dragonfly](https://github.com/dragonflydb/dragonfly)",
                ],
            },
        ],
    },
];

export type LinkCard = { href: string; title: string; description: string };

export const developmentLinks: LinkCard[] = [
    { href: "/gears", title: "Gears", description: "The devices and software I use every day." },
    { href: "/setup", title: "Setup", description: "My editor settings and extensions." },
    { href: "/terminal", title: "Terminal", description: "My shell, prompt, and terminal config." },
    { href: "/playground", title: "Playground", description: "Write JavaScript and run it right in your browser." },
];

export const personalLinks: LinkCard[] = [
    { href: "/books", title: "Books", description: "Books I've read and recommend." },
    { href: "/movies", title: "Movies", description: "Films and shows I've enjoyed." },
];
