import Link from "next/link";
import type { Job } from "@/lib/data";
import { outlineButton } from "@/lib/ui";

// Company, badge, role, dates and location: used on the homepage and the Work page
export function JobHeader({ job, as: Heading = "h3" }: { job: Job; as?: "h2" | "h3" }) {
    return (
        <div className="flex flex-row flex-nowrap items-start justify-between gap-3">
            <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-2">
                    <Heading className="text-lg font-bold">{job.company}</Heading>
                    {job.current && (
                        <div className="flex items-center gap-1 rounded-md border border-green-300 bg-green-500/10 px-2 py-1 text-xs dark:border-green-600">
                            <div className="size-2 animate-pulse rounded-full bg-green-500" />
                            <span>Working</span>
                        </div>
                    )}
                </div>
                <p className="text-sm text-secondary">{job.role}</p>
            </div>

            <div className="flex min-w-[88px] shrink-0 flex-col text-right text-sm text-secondary md:min-w-[140px]">
                <p>
                    {job.start} – {job.end}
                </p>
                <p>{job.location}</p>
            </div>
        </div>
    );
}

type Props = {
    jobs: Job[];
    limit?: number;
    showAllHref?: string;
};

// The short list on the homepage
export default function Experience({ jobs, limit, showAllHref }: Props) {
    const visibleJobs = limit ? jobs.slice(0, limit) : jobs;

    return (
        <section className="space-y-2">
            <h2 className="text-xl font-bold">Experience</h2>

            <ul className="flex flex-col gap-4">
                {visibleJobs.map((job) => (
                    <li key={`${job.company}-${job.start}-${job.role}`}>
                        <JobHeader job={job} />
                    </li>
                ))}
            </ul>

            {showAllHref && (
                <div className="flex justify-center pt-2">
                    <Link href={showAllHref} className={outlineButton}>
                        Show all work experiences
                    </Link>
                </div>
            )}
        </section>
    );
}
