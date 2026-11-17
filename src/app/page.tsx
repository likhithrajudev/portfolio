import Profile from "@/components/profile";
import Experience from "@/components/experience";
import BlogList from "@/components/blog-list";
import LinkCards from "@/components/link-cards";
import Achievements from "@/components/achievements";
import { achievements, developmentLinks, jobs, personalLinks, posts } from "@/lib/data";

export default function Home() {
    const sections = [
        <Profile key="profile" />,
        <Experience key="experience" jobs={jobs} limit={3} showAllHref="/work" />,
        <Achievements key="achievements" items={achievements} />,
        <BlogList key="blog" posts={posts.slice(0, 3)} showAllHref="/blog" />,
        <LinkCards key="development" title="Development" links={developmentLinks} />,
        <LinkCards key="personal" title="Personal" links={personalLinks} />,
    ];

    return (
        <main className="mx-auto w-full max-w-2xl space-y-10 px-4 pb-16 pt-8">
            {/* Each section fades up a moment after the one before it */}
            {sections.map((section, index) => (
                <div key={section.key} className="animate-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    {section}
                </div>
            ))}
        </main>
    );
}
