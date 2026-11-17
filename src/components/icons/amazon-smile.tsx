import type { SVGProps } from "react";

// The orange Amazon "smile" arrow, used for the AWS chip (simple-icons has no AWS logo)
export default function AmazonSmile(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF9900"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* The curve */}
            <path d="M2.5 11.5c5.6 4.2 13.3 4.5 19 .7" />
            {/* The arrowhead at the right end */}
            <path d="M17.6 10.8l3.9 1.4-1.2 3.8" />
        </svg>
    );
}
