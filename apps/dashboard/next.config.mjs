import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
      {
        protocol: process.env.NODE_ENV === "development" ? "http" : "https",
        hostname: process.env.NEXT_PUBLIC_API_HOST,
      },
    ],
  },
};

export default nextConfig;
