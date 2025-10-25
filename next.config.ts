import type { NextConfig } from "next";

const RemoveServiceWorkerPlugin = require('webpack-remove-serviceworker-plugin');

const nextConfig: NextConfig = {
  webpack: (config) => {
    plugins: [new RemoveServiceWorkerPlugin()];
    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu'],
  },
  
  transpilePackages: [],
  
  productionBrowserSourceMaps: false,
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;