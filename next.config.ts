import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "png.pngtree.com", port: "" },
      { protocol: "https", hostname: "static.vecteezy.com", port: "" },
    ],
  },
};

export default nextConfig;
