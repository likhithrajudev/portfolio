import Avatar from "@/components/avatar";
import Mascot from "@/components/mascot";
import SocialLinks from "@/components/social-links";
import CopyEmail from "@/components/copy-email";
import { mascot, site } from "@/lib/data";

export default function Profile() {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                {mascot ? (
                    <Mascot
                        directions={mascot.directions}
                        reactions={mascot.reactions}
                        followCursor={mascot.followCursor}
                        size={96}
                        label={`${site.name.split(" ")[0]}'s mascot`}
                    />
                ) : (
                    <Avatar />
                )}
                <div>
                    <h1 className="whitespace-nowrap text-lg font-bold sm:text-2xl">{site.name}</h1>
                    <p className="flex flex-wrap items-center gap-x-1 gap-y-1 text-base text-secondary">
                        <span>{site.roles}</span>
                        <span>·</span>
                        <CopyEmail email={site.email} />
                    </p>
                </div>
            </div>

            <p className="max-w-xl text-sm text-muted-foreground">{site.bio}</p>

            <SocialLinks />
        </section>
    );
}
