import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-navigation-menu",
    ],
  },
  transpilePackages: [],
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/steamgg/staff-application',
        destination: 'https://tally.so/r/68LN6Y',
        permanent: false,
      },
      {
        source: '/steamgg/ban-appeal',
        destination: 'https://tally.so/r/A7zLpN',
        permanent: false,
      },
      {
        source: '/cs2-launch-options',
        destination: '/cs2-launch-options.txt',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
