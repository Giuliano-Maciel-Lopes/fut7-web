import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_BASE_API!], 
  },
};

export default nextConfig;
