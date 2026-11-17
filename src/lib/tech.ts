import type { ComponentType, SVGProps } from "react";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import AmazonSmile from "@/components/icons/amazon-smile";
import {
    siApachekafka,
    siDocker,
    siFastapi,
    siFfmpeg,
    siGrafana,
    siHibernate,
    siJunit5,
    siK6,
    siKubernetes,
    siLangchain,
    siLanggraph,
    siMysql,
    siNextdotjs,
    siOpenjdk,
    siPostgresql,
    siPostman,
    siPrometheus,
    siPython,
    siRabbitmq,
    siReact,
    siReactquery,
    siRedis,
    siSpring,
    siSpringboot,
    siTailwindcss,
    siTypescript,
    siVercel,
} from "simple-icons";

export type Tech = {
    title: string;
    icon?: { path: string; hex: string }; // brand logo from simple-icons
    fallbackIcon?: ComponentType<SVGProps<SVGSVGElement>>; // used when simple-icons has no logo
};

// Every technology a job can list. Add new ones here, then use the key in data.ts.
export const tech = {
    // Backend
    java: { title: "Java", icon: siOpenjdk },
    springboot: { title: "Spring Boot", icon: siSpringboot },
    springai: { title: "Spring AI", icon: siSpring },
    hibernate: { title: "JPA / Hibernate", icon: siHibernate },
    python: { title: "Python", icon: siPython },
    fastapi: { title: "FastAPI", icon: siFastapi },

    // Data and messaging
    postgresql: { title: "PostgreSQL", icon: siPostgresql },
    mysql: { title: "MySQL", icon: siMysql },
    redis: { title: "Redis", icon: siRedis },
    rabbitmq: { title: "RabbitMQ", icon: siRabbitmq },
    kafka: { title: "Apache Kafka", icon: siApachekafka },

    // Frontend
    react: { title: "React", icon: siReact },
    nextjs: { title: "Next.js", icon: siNextdotjs },
    typescript: { title: "TypeScript", icon: siTypescript },
    tailwind: { title: "Tailwind CSS", icon: siTailwindcss },
    tanstackquery: { title: "TanStack Query", icon: siReactquery },

    // AI
    langchain: { title: "LangChain", icon: siLangchain },
    langgraph: { title: "LangGraph", icon: siLanggraph },
    langsmith: { title: "LangSmith", fallbackIcon: ChartLineUp }, // no logo in simple-icons

    // Infrastructure and testing
    docker: { title: "Docker", icon: siDocker },
    kubernetes: { title: "Kubernetes", icon: siKubernetes },
    aws: { title: "AWS", fallbackIcon: AmazonSmile }, // simple-icons has no AWS logo
    vercel: { title: "Vercel", icon: siVercel },
    postman: { title: "Postman", icon: siPostman },
    k6: { title: "Grafana k6", icon: siK6 },
    grafana: { title: "Grafana", icon: siGrafana },
    prometheus: { title: "Prometheus", icon: siPrometheus },
    junit: { title: "JUnit", icon: siJunit5 },
    ffmpeg: { title: "FFmpeg", icon: siFfmpeg },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof tech;

// Brand color for a logo, except near-black ones (Java, Kafka, Next.js), which would
// vanish in dark mode; those use the current text color instead.
export function brandFill(hex: string) {
    const n = parseInt(hex, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    const isVeryDark = 0.299 * r + 0.587 * g + 0.114 * b < 60;
    return isVeryDark ? "currentColor" : `#${hex}`;
}
