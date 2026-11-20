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
    | "streams-roadmap"
    | "eval-loop"
    | "eval-graders"
    | "harness-layers"
    | "harness-loop"
    | "voice-pipeline"
    | "voice-latency";

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

const evalCasesJsonl = `{"id": "refund-01", "question": "Can I return an opened item after 20 days?", "must_contain": ["30 days"], "tags": ["refunds"]}
{"id": "tone-04", "question": "My order is late and I am furious.", "rubric": "Apologises once, does not blame the customer, offers one concrete next step.", "tags": ["tone"]}
{"id": "scope-09", "question": "Write me a poem about my cat.", "rubric": "Politely says it can only help with orders and returns.", "tags": ["out-of-scope"]}`;

const evalRunnerPython = `import json
from pathlib import Path


def run_system(question: str) -> str:
    ...  # call your prompt, RAG pipeline or agent here


def grade(case: dict, answer: str) -> bool:
    # Code first: cheap, exact and repeatable
    if "must_contain" in case:
        return all(text.lower() in answer.lower() for text in case["must_contain"])
    # Judgement only where a rule can't express "good"
    return llm_judge(case["question"], answer, case["rubric"])


def main() -> None:
    lines = Path("evals/cases.jsonl").read_text().splitlines()
    cases = [json.loads(line) for line in lines]
    results = [(case["id"], grade(case, run_system(case["question"]))) for case in cases]

    passed = sum(ok for _, ok in results)
    print(f"{passed}/{len(results)} passed")
    for case_id, ok in results:
        if not ok:
            print("FAIL", case_id)  # read every failure: that is the useful part


if __name__ == "__main__":
    main()`;

const judgePrompt = `You are grading a customer-support reply.

Rubric: {rubric}

Question: {question}
Reply: {answer}

First write one or two sentences of reasoning.
Then, on its own line, write exactly PASS or FAIL.`;

const harnessLoopPython = `def run_agent(task: str, llm, tools: dict, max_steps: int = 20) -> str:
    messages = [system_prompt(), user_message(task)]

    for _ in range(max_steps):
        reply = llm.chat(messages, tools=tool_schemas(tools))
        messages.append(reply.as_message())

        if not reply.tool_calls:           # no tool requested: the model is done
            return reply.text

        for call in reply.tool_calls:
            result = execute(call, tools)  # permissions, sandbox and timeouts live here
            messages.append(tool_result(call.id, result))

    raise StepLimitExceeded(f"no answer after {max_steps} steps")`;

const harnessExecutePython = `READ_ONLY = {"read_file", "search"}


def execute(call, tools, approve) -> str:
    if call.name not in tools:
        return f"Error: unknown tool '{call.name}'. Available: {', '.join(tools)}"

    # Anything that changes state needs a human yes, enforced in code, not in the prompt
    if call.name not in READ_ONLY and not approve(call):
        return "Denied by the user. Ask what they would like instead."

    try:
        return tools[call.name](**call.arguments)
    except TimeoutError:
        return "Error: the tool timed out. Try a smaller input."
    except Exception as error:
        return f"Error: {error}"  # a clear error lets the model correct itself`;

const voiceStreamingPython = `async def speak_reply(llm_stream, tts) -> None:
    sentence = ""
    async for token in llm_stream:
        sentence += token
        if sentence.rstrip().endswith((".", "?", "!")):
            await tts.say(sentence)  # start talking before the model has finished
            sentence = ""
    if sentence.strip():
        await tts.say(sentence)`;

// Newest first
export const posts: Post[] = [
    {
        slug: "evals-how-to-know-your-ai-system-works",
        title: "Evals: How to Know Your AI System Actually Works",
        description: "What an eval is, how to build a dataset and choose graders, how to handle non-determinism and agents, and how to run evals in CI and production.",
        date: "2026-11-20",
        tags: ["Evals", "LLMs", "Testing", "AI Engineering"],
        body: [
            // Introduction
            { type: "p", text: "You change a prompt. The case that was bothering you now works, so you ship it. A week later someone mentions that three other things quietly got worse. Nobody noticed because nobody was checking." },
            { type: "p", text: "That’s what working by feel looks like, and it’s the default way people build with language models. **Evals** are the alternative: a repeatable way to measure whether your AI system does what you want, so you can change it without guessing." },

            // What
            { type: "h2", text: "What Is an Eval?" },
            { type: "p", text: "An eval is a test for behaviour that isn’t fully deterministic. It has four parts:" },
            {
                type: "ul",
                items: [
                    "**A task:** the thing the system should do, such as answering a support question or fixing a bug.",
                    "**A dataset:** a set of example inputs, each with a way to tell what a good result looks like.",
                    "**A grader:** the code, model or person that decides pass or fail, or gives a score.",
                    "**A score:** usually a pass rate, tracked over time so you can see regressions.",
                ],
            },
            { type: "p", text: "It’s close to a unit-test suite, with one big difference. A normal test asserts an exact output. A language model can word the same correct answer a hundred ways, so the grader has to judge meaning, and the same input can pass today and fail tomorrow." },
            { type: "h3", text: "Why they matter" },
            {
                type: "ul",
                items: [
                    "**Safe changes:** you can edit a prompt, swap a model or change a tool and see what moved.",
                    "**Honest upgrades:** a new model isn’t automatically better for your task. An eval tells you.",
                    "**Faster iteration:** once there’s a number, you can try ten ideas in an afternoon instead of arguing about them.",
                    "**A shared definition of good:** writing the cases forces you to decide what “good” means.",
                ],
            },

            // Loop
            { type: "h2", text: "The Eval Loop" },
            {
                type: "figure",
                diagram: "eval-loop",
                caption: "Evals aren’t a one-off report. They’re a loop you run every time you change something.",
            },
            { type: "p", text: "The steps that people skip are the first and the fifth. Without a written definition of good you can’t grade anything, and without reading the actual failures you’ll only change the score, not the system." },

            // Dataset
            { type: "h2", text: "Start With the Dataset" },
            { type: "p", text: "You don’t need thousands of examples. Twenty to fifty real ones, chosen well, beat a large set of generic ones. Where to get them:" },
            {
                type: "ul",
                items: [
                    "**Real usage:** logs, support tickets, chat transcripts. Real inputs are messier than anything you’d invent.",
                    "**Failures you’ve already seen:** every bug report is a free test case. Add it, so it can never come back unnoticed.",
                    "**Edge cases on purpose:** empty input, very long input, other languages, ambiguous requests, and attempts to push the system out of scope.",
                    "**Cases where the right answer is “no”:** refusing, asking a question back, or handing off to a human.",
                ],
            },
            { type: "p", text: "Tag each case by category so that you can see *where* the score changed, not just that it did. Keep part of the set aside and don’t tune against it, or you’ll end up with a prompt that’s brilliant at your test cases and average everywhere else." },
            { type: "code", filename: "evals/cases.jsonl", code: evalCasesJsonl },
            { type: "note", text: "Synthetic data from a model can help you widen coverage, but review it by hand. A generated case with a wrong “expected answer” will quietly punish a correct system." },

            // Graders
            { type: "h2", text: "Choosing Graders" },
            {
                type: "figure",
                diagram: "eval-graders",
                caption: "Layer the three. Use the cheapest grader that can do the job.",
            },
            { type: "h3", text: "Code-based graders" },
            { type: "p", text: "Use them whenever a rule can express correctness: output matches a schema, a unit test passes, the right tool was called with the right arguments, a database row now exists. They’re fast, free and perfectly repeatable. Their weakness is rigidity. A grader that compares code to one reference solution will fail a different but correct implementation." },
            { type: "h3", text: "LLM judges" },
            { type: "p", text: "For open-ended output (tone, helpfulness, faithfulness to a source) a rule can’t decide, so a model grades against a written rubric. A few habits keep a judge useful:" },
            {
                type: "ul",
                items: [
                    "**Keep each rubric narrow.** One judge, one question. A prompt that scores five things at once is hard to debug.",
                    "**Prefer a clear pass or fail** over a 1 to 10 scale, where the difference between a 6 and a 7 is noise.",
                    "**Ask for reasoning before the verdict,** and store it. When the judge is wrong, the reasoning shows why.",
                    "**Check it against people.** Hand-label a small sample and see how often the judge agrees. If it doesn’t, fix the rubric before trusting any score.",
                    "**Watch for bias.** Judges can prefer longer answers, the first option in a pairwise comparison, or text written by the same model family. Swap the order on a sample, and where you can, use a different model to judge.",
                ],
            },
            { type: "code", filename: "judge_prompt.txt", code: judgePrompt },
            { type: "h3", text: "Human review" },
            { type: "p", text: "People are the reference standard, but they’re slow, costly and not perfectly consistent either. Use them to create the first labels, to settle disagreements between graders, to review odd edge cases, and to check now and then that your LLM judge hasn’t drifted. Give reviewers a written rubric so two of them reach the same verdict." },

            // Runner
            { type: "h2", text: "A Runner Small Enough to Start Today" },
            { type: "p", text: "You don’t need a platform to begin. A script that loads cases, runs your system, grades each one and prints the failures is enough, and it can live in your repo." },
            { type: "code", filename: "run_evals.py", code: evalRunnerPython },

            // Non-determinism
            { type: "h2", text: "Dealing With Randomness" },
            { type: "p", text: "Run the same case twice and you can get two different answers, so a single run is weak evidence. Two habits help:" },
            {
                type: "ul",
                items: [
                    "**Run each case several times** and look at the rate, not one result.",
                    "**Know which question you’re asking.** *pass@k* asks whether at least one of k tries succeeds, which suits tasks where you can retry. *pass^k* asks whether all k tries succeed, which is the honest measure when a user needs it to work every time.",
                ],
            },
            { type: "p", text: "A system that succeeds 90% of the time on one try succeeds on all five tries only about 59% of the time (0.9 to the power of 5). That gap is why a demo that “worked when I tried it” can still be unreliable in production." },

            // Agents
            { type: "h2", text: "Evaluating Agents" },
            { type: "p", text: "An agent takes many steps and calls tools, so there’s more to grade than one answer. What works in practice:" },
            {
                type: "ul",
                items: [
                    "**Grade the outcome, not the exact path.** Agents find routes you didn’t imagine. Check the end state: is the file fixed, does the row exist, did the tests pass?",
                    "**Check the dangerous things directly.** Did it call a destructive tool? Did it stay inside its allowed folder?",
                    "**Track the cost of success:** number of steps, tokens, time and money. An agent that passes in 40 steps is a different product from one that passes in 6.",
                    "**Read transcripts.** A pass can hide a lucky guess, and a fail can be a broken grader. Reading a dozen full runs teaches more than any dashboard.",
                ],
            },
            { type: "p", text: "The setup around the model matters as much as the model, which is the subject of my post on [the agent harness](/blog/agent-harness-everything-around-the-model)." },

            // Offline / online
            { type: "h2", text: "Offline, in CI and in Production" },
            {
                type: "ol",
                items: [
                    "**On every commit:** fast code-based graders over a small set. They should finish in minutes.",
                    "**Before merging or releasing:** the full set, including LLM judges, which cost more and take longer.",
                    "**In production:** sample real traffic, grade it, and collect user feedback such as thumbs-down and escalations.",
                    "**Close the loop:** every real failure you find becomes a new case in the dataset.",
                ],
            },
            { type: "p", text: "That last step is what makes evals compound. Your test set slowly turns into a record of everything that has ever gone wrong, and it’s specific to your product." },

            // Mistakes
            { type: "h2", text: "Common Mistakes" },
            {
                type: "ul",
                items: [
                    "**Generic metrics.** A made-up “helpfulness score” can look precise and mean nothing. Grade what your users actually need.",
                    "**Too few, too clean examples.** If every case is a polite, well-formed request, you’re testing the easy part.",
                    "**Tuning to the test.** Edit a prompt until the set passes and you may only have memorised it. Keep a held-out set.",
                    "**Trusting the judge blindly.** An uncalibrated LLM judge is another unverified component.",
                    "**Chasing 100%.** When an eval is saturated it can no longer tell you anything. Add harder cases.",
                    "**Never reading the failures.** The score tells you something is wrong. The failures tell you what.",
                    "**Ignoring cost and latency.** A better answer that takes ten times longer may be a worse product.",
                ],
            },

            // Start
            { type: "h2", text: "A Starter Checklist" },
            {
                type: "ol",
                items: [
                    "Write down what a good result looks like, in a few sentences.",
                    "Collect 20 to 50 real examples, including some failures and some “should refuse” cases.",
                    "Add code-based graders wherever a rule can decide.",
                    "Add one narrow LLM judge for the rest, and check it against 20 hand-labelled cases.",
                    "Run it on every change, and look at the failing cases, not just the number.",
                    "Add every new production failure to the set.",
                ],
            },

            // Takeaway
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "Building with models is easy to start and hard to keep reliable. Evals are what turn a clever demo into something you can improve on purpose." },
            { type: "quote", text: "If you can’t measure a change, you’re guessing about it." },
            { type: "p", text: "Begin small. Twenty honest cases and a script you actually run will do more than an elaborate platform you never set up." },
        ],
    },
    {
        slug: "agent-harness-everything-around-the-model",
        title: "The Agent Harness: Everything Around the Model",
        description: "What an agent harness is, the loop at its core, and the layers around the model: tools, context, memory, permissions, guardrails and observability.",
        date: "2026-11-20",
        tags: ["AI Agents", "LLMs", "Harness", "AI Engineering"],
        body: [
            // Introduction
            { type: "p", text: "Give two teams the same language model and they can ship very different agents. One keeps losing track of what it was doing and breaks things. The other finishes real work reliably. The model is the same. What differs is everything built around it." },
            { type: "p", text: "That surrounding code is the **harness**. Tools like coding assistants and research agents are harnesses wrapped around a model. This post explains what the harness is, what’s inside it, and what I’d keep in mind when building one." },

            // What
            { type: "h2", text: "What Is a Harness?" },
            { type: "p", text: "A language model on its own reads text and writes text. It can’t open a file, run a command or remember yesterday. The **harness** is the program that turns that into an agent: it feeds the model the right information, lets the model ask for actions, carries those actions out safely, and feeds the results back." },
            {
                type: "figure",
                diagram: "harness-layers",
                caption: "The model is one box. The harness is every box around it.",
            },
            { type: "p", text: "A useful rule of thumb: if it’s not the model’s weights, it’s the harness. That includes your system prompt, your tool definitions, how you trim a long conversation, and the check that stops a destructive command." },

            // Loop
            { type: "h2", text: "The Core Loop" },
            { type: "p", text: "At the centre of nearly every agent is a short loop. The model replies, and if it asks for a tool, the harness runs it and sends the result back. When the model replies without asking for a tool, it’s finished." },
            {
                type: "figure",
                diagram: "harness-loop",
                caption: "Each turn through the loop is one step. Most useful work takes many steps.",
            },
            { type: "code", filename: "agent_loop.py", code: harnessLoopPython },
            { type: "p", text: "That’s the whole skeleton. Everything below is about what goes into those few lines: what `system_prompt()` contains, what `tools` exist, how `messages` stays under control, and what `execute` is allowed to do." },

            // Instructions
            { type: "h2", text: "Layer 1: Instructions" },
            { type: "p", text: "The system prompt tells the model who it is, what it should do, and how to behave. Good instructions are specific and short on rules that restate the obvious. Many harnesses also load project instructions from a file in your repository, such as `AGENTS.md` or `CLAUDE.md`, so that the agent learns your commands, conventions and no-go areas without you repeating them." },
            { type: "note", text: "Instructions are advice, not enforcement. The model can ignore them. Anything that must never happen belongs in code (see permissions below), not in the prompt." },

            // Tools
            { type: "h2", text: "Layer 2: Tools" },
            { type: "p", text: "Tools are how the model acts: read a file, search, run a command, call an API. The model sees only each tool’s name, description and parameters, so these are effectively its documentation. Tool design is a big lever:" },
            {
                type: "ul",
                items: [
                    "**Few, clear tools** beat many overlapping ones. If two tools look similar to a person, the model will mix them up too.",
                    "**Describe when to use each tool,** not just what it does.",
                    "**Return concise results.** Dumping a 10,000-line file into the context wastes space and hides the part that matters.",
                    "**Make errors useful.** “Path is outside the workspace, try a path under ./src” lets the model fix itself. “Error 500” doesn’t.",
                    "**Make tools safe to repeat** where you can, because models retry.",
                ],
            },

            // Context
            { type: "h2", text: "Layer 3: Context Management" },
            { type: "p", text: "The model can only look at a limited amount of text at once, and quality tends to drop when that space fills with noise. Long tasks therefore need active management of what the model sees:" },
            {
                type: "ul",
                items: [
                    "**Load just in time.** Let the agent search and open the file it needs, instead of pasting the whole codebase up front.",
                    "**Trim old tool output.** Results from ten steps ago are rarely needed in full.",
                    "**Summarise (compact)** a long conversation into a short brief when it gets close to the limit, and keep the important decisions.",
                    "**Use sub-agents.** Hand a side task, such as “search the repo and report”, to a fresh agent with its own clean context, and take back only a short summary.",
                ],
            },

            // Memory
            { type: "h2", text: "Layer 4: Memory" },
            { type: "p", text: "The model starts every session knowing nothing about you. Memory is whatever the harness saves and reloads: notes files, a task list the agent keeps updating, preferences, or a summary of last time. Plain files are often enough, and they have a bonus: you can open them, read them and correct them." },

            // Permissions
            { type: "h2", text: "Layer 5: Permissions and Sandboxing" },
            { type: "p", text: "An agent that can run commands can also run the wrong ones. Safety has to be enforced by the harness, since a prompt can be ignored or overridden by text the agent reads along the way (a web page or a file can contain instructions)." },
            {
                type: "ul",
                items: [
                    "**Least privilege:** give the agent only the tools and folders the task needs.",
                    "**Approval for risky actions:** deleting, pushing, spending money and sending messages need a human yes.",
                    "**Isolation:** run commands in a sandbox with limited file and network access, plus time limits.",
                    "**Treat outside text as untrusted:** content fetched from the web or a file is data, not orders.",
                ],
            },
            { type: "code", filename: "execute.py", code: harnessExecutePython },

            // Hooks
            { type: "h2", text: "Layer 6: Hooks and Guardrails" },
            { type: "p", text: "Hooks are small pieces of deterministic code that run at set moments: before a tool call, after an edit, when the agent says it’s done. Use them for things that should happen every time without the model remembering: run the formatter after each edit, block writes to a protected folder, or refuse to finish while the tests fail." },
            { type: "p", text: "The principle is to let code do what code does well. A linter is more reliable than asking the model to be careful." },

            // Errors
            { type: "h2", text: "Failing Gracefully" },
            {
                type: "ul",
                items: [
                    "**Step and cost limits,** so a confused agent can’t loop forever.",
                    "**Spot repetition.** The same failing call five times in a row means stop and rethink, not try again.",
                    "**Bounded retries** with backoff for flaky tools, and no retries for actions that aren’t safe to repeat.",
                    "**A way to hand back control:** when it’s stuck, ask the user instead of guessing.",
                ],
            },

            // Observability
            { type: "h2", text: "Layer 7: Observability and Evals" },
            { type: "p", text: "You can’t improve what you can’t see. Record every step: the context sent, the tool calls, results, tokens, time and cost. When an agent fails, the trace usually shows exactly where it went wrong." },
            { type: "p", text: "Then measure changes. Whenever you edit a tool description or a prompt, you’re changing the product, and the only honest check is an eval. I cover how to build them in [Evals: How to Know Your AI System Actually Works](/blog/evals-how-to-know-your-ai-system-works)." },

            // Principles
            { type: "h2", text: "Principles I’d Follow" },
            {
                type: "ol",
                items: [
                    "**Start with the simplest loop that works.** Add a layer only when you can point to the failure it fixes.",
                    "**Put rules in code, advice in prompts.** Never rely on a prompt for safety.",
                    "**Spend effort on tools and context,** not on clever prompt wording.",
                    "**Keep the harness thin over time.** Models improve, and scaffolding that once helped can start to get in the way. Re-test old workarounds and remove the ones that no longer pay for themselves.",
                    "**Make everything inspectable:** logs, traces and plain-file memory.",
                    "**Measure every change** against a fixed set of tasks.",
                ],
            },

            // Framework
            { type: "h2", text: "Harness vs Framework" },
            { type: "p", text: "An agent framework gives you parts: a loop, tool wrappers, memory helpers. Your harness is what you assemble from them, including the decisions: which tools, what permissions, how context is trimmed. A framework can speed you up, but it can’t make those choices for you, and you still need to understand the loop underneath." },

            // Takeaway
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "The model supplies the intelligence. The harness supplies the reliability: what it can see, what it can do, what it’s allowed to do, and how you find out when it goes wrong." },
            { type: "quote", text: "A great model in a careless harness is still a careless agent." },
            { type: "p", text: "If you’re building an agent, spend your first week on the loop, the tools and the permissions, and write a handful of evals before you touch the prompt." },
        ],
    },
    {
        slug: "age-of-voice-ai",
        title: "The Age of Voice AI: Why Talking to Software Finally Works",
        description: "Why voice agents are taking off now, how they work, the latency and turn-taking problems that decide whether they feel natural, and where they’re being used.",
        date: "2026-11-20",
        tags: ["Voice AI", "AI Agents", "Latency", "Real-Time Systems"],
        body: [
            // Introduction
            { type: "p", text: "For years, talking to software meant shouting “representative!” at a phone menu, or asking a smart speaker the same question three different ways. Voice was the interface everyone expected to win and that mostly disappointed." },
            { type: "p", text: "That’s changing quickly. Voice agents can now hold a conversation that is fast and flexible enough to feel natural, and they’re being put on real phone lines, in apps, cars and devices. This post covers why this is happening now, how these systems work, and what makes them hard to get right." },

            // Why now
            { type: "h2", text: "Why Now?" },
            { type: "p", text: "Older voice assistants worked by matching what you said to a fixed list of commands. Anything off the list failed. Several things changed together:" },
            {
                type: "ul",
                items: [
                    "**Language models understand messy speech.** People don’t speak in commands. They interrupt themselves, change their mind and trail off. A model can handle “actually, make that Thursday, no wait, Friday morning”.",
                    "**Speech recognition got far better,** and works as a stream, producing words while the person is still talking.",
                    "**Synthetic voices stopped sounding robotic.** Modern text-to-speech can sound natural and expressive, and can start speaking within a fraction of a second.",
                    "**Models that work on audio directly.** Some can take speech in and give speech back, without turning it into text in the middle.",
                    "**Better turn-taking.** Systems are much better at knowing when you’ve finished and when you’re interrupting.",
                    "**Falling costs and open tooling.** Running a voice agent is cheaper than it was, and open-source frameworks such as Pipecat and LiveKit Agents give small teams a head start.",
                ],
            },
            { type: "note", text: "Much of the public information on this space comes from vendors who sell voice platforms. Treat claimed latency numbers and benchmarks as directional, and measure on your own calls." },

            // How
            { type: "h2", text: "How a Voice Agent Works" },
            { type: "p", text: "There are two main designs, and many real products mix them." },
            {
                type: "figure",
                diagram: "voice-pipeline",
                caption: "The cascaded pipeline is easy to inspect. Speech-to-speech has fewer hops.",
            },
            { type: "h3", text: "Cascaded: speech to text, a language model, then text to speech" },
            {
                type: "ul",
                items: [
                    "**Pros:** you can pick the best part for each stage, read the transcript, log everything, test it, and plug in your own tools and business rules.",
                    "**Cons:** every stage adds delay, and tone, emotion and pauses are lost when speech is flattened to text.",
                ],
            },
            { type: "h3", text: "Speech-to-speech: one model that listens and talks" },
            {
                type: "ul",
                items: [
                    "**Pros:** fewer hops, so it can respond quickly, and it can pick up on how you said something and not only what you said.",
                    "**Cons:** less control and visibility at each step, and harder to audit or to force exact wording when you need it.",
                ],
            },
            { type: "p", text: "A common compromise is a speech-native model for the flow of conversation, with a text-based layer for tool calls, business rules and records." },

            // Latency
            { type: "h2", text: "Latency Is the Whole Game" },
            { type: "p", text: "In human conversation, the pause between one person finishing and the other starting is very short, roughly a fifth of a second. A voice agent that waits two seconds feels broken, even if its answer is perfect. Commonly quoted targets for a natural feel are well under a second from the end of your speech to the start of the reply." },
            {
                type: "figure",
                diagram: "voice-latency",
                caption: "Every stage eats part of the budget, and the waiting for the speaker to finish is often the biggest single piece.",
            },
            { type: "p", text: "Ways teams claw time back:" },
            {
                type: "ul",
                items: [
                    "**Stream everything.** Don’t wait for a full transcript, a full reply or a full audio file. Start each stage as soon as the previous one has something to give it.",
                    "**Speak the first sentence early.** Send text to the voice as soon as the first sentence is complete, while the model is still writing the rest.",
                    "**Use a fast model for simple turns,** and keep the larger one for turns that need it.",
                    "**Run close to the caller.** Keep the services in the same region, and use low-latency transport such as WebRTC.",
                    "**Cover tool delays.** When the agent must look something up, a short “let me check that for you” keeps the line from going silent.",
                ],
            },
            { type: "code", filename: "speak_early.py", code: voiceStreamingPython },
            { type: "note", text: "That snippet is simplified. Real text such as “Dr.” or “3.5” contains full stops that aren’t the end of a sentence, so production code needs a smarter splitter." },

            // Turn taking
            { type: "h2", text: "Turn-Taking and Interruptions" },
            { type: "p", text: "Knowing *when to speak* is harder than it sounds. A simple voice detector treats any pause as the end of a turn, so the agent cuts in while you’re thinking mid-sentence. Wait longer and every reply feels slow." },
            {
                type: "ul",
                items: [
                    "**Semantic turn detection** looks at the words as well as the silence. “My number is 98…” is clearly unfinished, even after a pause.",
                    "**Barge-in:** a person must be able to interrupt. The agent has to stop speaking quickly, drop what it was saying, and listen.",
                    "**Echo cancellation:** the agent must not hear its own voice through the speaker and respond to itself.",
                    "**Small acknowledgements** like “mm-hm” show that it’s listening, without taking over the turn.",
                ],
            },

            // Telephony
            { type: "h2", text: "The Phone Is a Harsh Environment" },
            {
                type: "ul",
                items: [
                    "**Poor audio:** phone calls are narrow-band and compressed, and callers are on roads, in kitchens and on weak signals.",
                    "**Accents and mixed languages:** many speakers switch between languages mid-sentence, as with Hindi and English. A system tested only on clean, single-language audio will struggle.",
                    "**Phone details:** keypad tones, call transfers, voicemail detection, hold, and dropped calls.",
                    "**Rules:** recording consent, telling people they’re talking to an AI, and limits on automated outbound calls vary by country and region. Check them before launching.",
                ],
            },

            // Where
            { type: "h2", text: "Where Voice AI Is Taking Off" },
            {
                type: "ul",
                items: [
                    "**Customer support and call centres:** answering common questions, collecting details, and handing off to a person with the context.",
                    "**Reception and booking:** clinics, salons, restaurants and services that miss calls when busy.",
                    "**Outbound calls:** reminders, confirmations and follow-ups, with careful attention to consent.",
                    "**Healthcare intake and admin,** where staff time is scarce.",
                    "**Learning:** language practice, tutoring and interview rehearsal, with a patient partner at any hour.",
                    "**Accessibility:** a natural interface for people who can’t easily type or read a screen.",
                    "**Hands-busy settings:** driving, cooking, workshops and coding with your hands off the keyboard.",
                    "**Local languages:** in places like India, many people find speaking far easier than typing, especially in regional languages, so voice can open services to people that text-based apps leave out.",
                ],
            },

            // Hard
            { type: "h2", text: "The Hard Problems" },
            {
                type: "ul",
                items: [
                    "**Mistakes are spoken out loud,** and a confident wrong answer about a refund or a medicine can do real harm. You need grounding in real data and clear rules for what the agent may promise.",
                    "**Reliability across many calls.** One good demo proves little. You need to test with recorded and simulated calls, which is the topic of [my post on evals](/blog/evals-how-to-know-your-ai-system-works).",
                    "**Tool use under time pressure,** where every API call eats into a latency budget the caller can hear.",
                    "**Safety:** a caller can try to talk the agent into ignoring its rules, and it can be fed misleading content, just like a chat agent.",
                    "**Privacy:** a voice recording is personal data, and in some places can count as biometric data. Store as little as you can, for as short as you can.",
                    "**Trust:** be upfront that it’s an AI, and always give an easy route to a human.",
                    "**Cost per minute,** which adds up quickly at call-centre volumes.",
                ],
            },

            // Build
            { type: "h2", text: "If You Want to Build One" },
            {
                type: "ol",
                items: [
                    "**Pick a narrow job** such as booking one kind of appointment, not “handle all calls”.",
                    "**Start with a managed realtime API or an open framework** (Pipecat and LiveKit Agents are two) instead of wiring audio yourself.",
                    "**Measure latency from day one,** from the end of speech to the first audible reply, and look at the slow calls, not just the average.",
                    "**Log transcripts and audio (with consent)** so you can see what happened.",
                    "**Write evals on real calls,** including noisy audio, interruptions and tricky accents.",
                    "**Design the handoff to a human** before you design anything clever.",
                ],
            },

            // Future
            { type: "h2", text: "Where It’s Heading" },
            {
                type: "ul",
                items: [
                    "**Speech-native models** that sound more natural and respond faster.",
                    "**Voice together with a screen,** where the agent talks while it shows you a form or a map.",
                    "**Agents that act,** not just chat: booking, paying, filing and following up for you.",
                    "**On-device voice** for privacy and for places with poor connections.",
                    "**Voice as one channel** among text, email and chat, all backed by the same agent.",
                ],
            },

            // Takeaway
            { type: "h2", text: "My Takeaway" },
            { type: "p", text: "Voice agents work now because several hard parts improved at once: understanding, speech, speed and turn-taking. What separates a good one from a frustrating one is rarely the model alone. It’s latency, interruption handling, grounding and testing." },
            { type: "quote", text: "In voice, a half-second is the difference between a conversation and a phone menu." },
            { type: "p", text: "If you build one, begin with a narrow use case, measure the delay from the first day, and test on real, messy calls." },
        ],
    },
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
