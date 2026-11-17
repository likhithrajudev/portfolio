import { JobHeader } from "@/components/experience";
import TechChip from "@/components/tech-chip";
import RichText from "@/components/rich-text";
import type { Job } from "@/lib/data";

// The detailed list on the Work page: header, tech chips, and what you did
export default function WorkList({ jobs }: { jobs: Job[] }) {
    return (
        <div className="flex flex-col gap-4">
            {jobs.map((job, index) => {
                const hasTech = Boolean(job.tech?.length);
                const hasHighlights = Boolean(job.highlights?.length);

                return (
                    <article
                        key={`${job.company}-${job.start}-${job.role}`}
                        className="animate-in-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <JobHeader job={job} as="h2" />

                        {(hasTech || hasHighlights) && (
                            <div className="mt-4 space-y-4 border-t border-border pt-4">
                                {hasTech && (
                                    <div>
                                        <h3 className="mb-2 text-sm font-semibold">Technologies & Tools</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {job.tech!.map((name) => (
                                                <TechChip key={name} name={name} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {hasHighlights && (
                                    <div>
                                        <h3 className="mb-2 text-sm font-semibold">What I&apos;ve done</h3>
                                        <ul className="flex flex-col gap-1 text-sm text-secondary">
                                            {job.highlights!.map((point) => (
                                                <li key={point} className="flex gap-2">
                                                    <span aria-hidden="true" className="select-none">
                                                        •
                                                    </span>
                                                    <span>
                                                        <RichText text={point} />
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </article>
                );
            })}
        </div>
    );
}
