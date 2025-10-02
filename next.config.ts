import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "pino-pretty"],
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
