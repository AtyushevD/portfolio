import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
