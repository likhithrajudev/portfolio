// All the site's content lives here, so every page reads from one place.

import type { TechKey } from "@/lib/tech";

export const site = {
    name: "Likhith Raju P",
    email: "likhithraju0@gmail.com",
    roles: "Engineer · Polyglot",
    bio: "Love to build cool stuff",
};

export type NavLink = { href: string; label: string };

// Links in the top navbar
export const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/resume", label: "Resume" },
];

// Links in the footer's "Navigate" column
export const footerLinks: NavLink[] = [
    ...navLinks,
    { href: "/projects", label: "Projects" },
    { href: "/gears", label: "Gears" },
    { href: "/setup", label: "Setup" },
    { href: "/terminal", label: "Terminal" },
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
        stat: "521 / 4090",
        detail: "Bronze medallist, ranked 521st out of 4,090 participants.",
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

export type DiagramName = "lld-vs-hld" | "lld-roadmap" | "strategy-uml" | "hld-architecture" | "interview-flow";

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

// Newest first
export const posts: Post[] = [
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
];

export const personalLinks: LinkCard[] = [
    { href: "/books", title: "Books", description: "Books I've read and recommend." },
    { href: "/movies", title: "Movies", description: "Films and shows I've enjoyed." },
];
