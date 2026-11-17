import { ViewTransition } from "react";

// A template (unlike the layout) is re-created on every navigation, so each page's content
// can animate in and out. The animations are defined in globals.css (page-in / page-out).
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransition enter="page-in" exit="page-out" default="none">
            {children}
        </ViewTransition>
    );
}
