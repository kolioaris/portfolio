import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    legacyBrowsers: false,
    modern: true,
  },
};

export default nextConfig;
