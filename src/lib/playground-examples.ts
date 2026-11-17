// Starter programs for the Playground page. The first one loads by default.

export type PlaygroundExample = { name: string; code: string };

export const playgroundExamples: PlaygroundExample[] = [
    {
        name: "Hello, world",
        code: `// Write JavaScript and press Run (or ⌘/Ctrl + Enter).
// console.log output appears below. Top-level await works too.

const stack = ["Java", "Spring Boot", "Redis", "Kafka", "Next.js"];

stack.forEach((tool, i) => console.log(\`\${i + 1}. \${tool}\`));

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
await wait(500);

console.log("Printed after 500 ms");
console.log({ name: "Likhith", role: "Backend Engineer", stack });
`,
    },
    {
        name: "LRU cache",
        code: `// A Least Recently Used cache, the classic LLD interview problem.
// A Map remembers insertion order, so the first key is always the oldest.

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Map();
    }

    get(key) {
        if (!this.items.has(key)) return -1;
        const value = this.items.get(key);
        this.items.delete(key);      // move to the "most recent" end
        this.items.set(key, value);
        return value;
    }

    put(key, value) {
        this.items.delete(key);
        this.items.set(key, value);
        if (this.items.size > this.capacity) {
            const oldest = this.items.keys().next().value;
            this.items.delete(oldest);
            console.log("evicted", oldest);
        }
    }
}

const cache = new LRUCache(2);
cache.put("a", 1);
cache.put("b", 2);
cache.get("a");      // "a" is now the most recent
cache.put("c", 3);   // evicts "b"

console.log([...cache.items.keys()]); // ["a", "c"]
`,
    },
    {
        name: "Promise.all",
        code: `// Run independent async tasks in parallel instead of one after another.

const fakeRequest = (name, ms) =>
    new Promise((resolve) => setTimeout(() => resolve(\`\${name} (\${ms} ms)\`), ms));

console.time("sequential");
await fakeRequest("users", 300);
await fakeRequest("orders", 300);
console.timeEnd("sequential");

console.time("parallel");
const results = await Promise.all([fakeRequest("users", 300), fakeRequest("orders", 300)]);
console.timeEnd("parallel");

console.log(results);
`,
    },
    {
        name: "Rate limiter",
        code: `// Token bucket: allows short bursts but caps the average rate.

class TokenBucket {
    constructor(capacity, refillPerSecond) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillPerSecond = refillPerSecond;
        this.lastRefill = Date.now();
    }

    tryRequest() {
        const now = Date.now();
        const elapsed = (now - this.lastRefill) / 1000;
        this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillPerSecond);
        this.lastRefill = now;

        if (this.tokens >= 1) {
            this.tokens -= 1;
            return true;
        }
        return false;
    }
}

const limiter = new TokenBucket(3, 1);

for (let i = 1; i <= 5; i++) {
    console.log(\`request \${i}:\`, limiter.tryRequest() ? "allowed" : "rejected");
}
`,
    },
    {
        name: "Infinite loop (safe)",
        code: `// Code runs in a background worker, so even this can't freeze the page.
// It's stopped automatically after 5 seconds.

console.log("Starting a loop that never ends...");
while (true) {}
`,
    },
];
