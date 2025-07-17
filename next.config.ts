import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ disables image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "export",
  basePath: isProd ? "/" : "",
  assetPrefix: isProd ? "/The_Treasure_Hampers/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/The_Treasure_Hampers" : "",
  },
};

export default nextConfig;
