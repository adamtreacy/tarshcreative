import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The wedding page became the landing page on 12 Sep 2026. Anything
      // already pointing at /wedding (Instagram bio, old cards, search
      // results) lands on the same content at the root instead of a 404.
      { source: "/wedding", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
