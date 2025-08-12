import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: { allowedOrigins: ["*"] }
  },
  reactStrictMode: true,
};

export default nextConfig;


