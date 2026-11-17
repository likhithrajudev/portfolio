import {
    Envelope,
    GithubLogo,
    InstagramLogo,
    LinkedinLogo,
    MusicNotes,
    PinterestLogo,
    XLogo,
    YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

// Add your URLs to `href` later. Entries with an empty href show as faded, non-clickable icons.
const socials = [
    { label: "X", href: "https://x.com/likhithrajuuu", Icon: XLogo },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/likhith-raju-p-775564179/", Icon: LinkedinLogo },
    { label: "GitHub", href: "https://github.com/likhithrajudev", Icon: GithubLogo },
    { label: "YouTube", href: "https://www.youtube.com/@liki_raju", Icon: YoutubeLogo },
    { label: "Instagram", href: "https://instagram.com/likhithrajuuu", Icon: InstagramLogo },
    { label: "Pinterest", href: "https://in.pinterest.com/likhithraju0/_profile/", Icon: PinterestLogo },
    { label: "Email", href: "mailto:likhithraju0@gmail.com", Icon: Envelope },
    // Phosphor has no Apple Music logo, so this uses a music-note icon for now
    { label: "Apple Music", href: "https://music.apple.com/profile/likhithrajuuu", Icon: MusicNotes },
];

// `className` sets the spacing: tight on the profile, wider in the footer
export default function SocialLinks({ className = "gap-0.5" }: { className?: string }) {
    return (
        <div className={`flex flex-wrap items-center ${className}`}>
            {socials.map(({ label, href, Icon }) =>
                href ? (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-secondary transition-colors hover:text-primary"
                    >
                        <Icon className="size-6" />
                    </a>
                ) : (
                    <span
                        key={label}
                        aria-label={`${label} (link not added yet)`}
                        className="cursor-not-allowed text-secondary/60"
                    >
                        <Icon className="size-6" />
                    </span>
                )
            )}
        </div>
    );
}
