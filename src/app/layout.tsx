import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import QuoteCard from "@/components/quote-card";
import { quote, site } from "@/lib/data";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Inner pages set their own title, e.g. "Blog · Likhith Raju P"
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      // The script below may add the "dark" class before React loads
      suppressHydrationWarning
    >
      <head>
        {/* Applies the saved theme before the page paints, so dark mode doesn't flash white */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        {/* Bhagavad Gita quote: on every page, just above the footer */}
        <aside aria-label="Quote" className="mx-auto w-full max-w-2xl px-4 pb-16">
          <QuoteCard text={quote.text} source={quote.source} />
        </aside>
        <Footer />
        <CustomCursor />
        <SmoothScroll />
        {/* Soft fade at the bottom of the screen, like ramx.in */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-[60px] select-none bg-linear-to-t from-background to-transparent backdrop-blur-[5px] [mask-image:linear-gradient(to_top,black_50%,transparent)]"
        />
      </body>
    </html>
  );
}
