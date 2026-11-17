import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves files, so the whole site is built into plain HTML in out/
  output: "export",
  // Image optimization needs a server; serve images as they are instead
  images: { unoptimized: true },
  // cacheComponents and partialPrefetching are off: they need a server and can't be used with output: "export"
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
