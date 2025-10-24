import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  
  transpilePackages: [],
};

export default nextConfig;
