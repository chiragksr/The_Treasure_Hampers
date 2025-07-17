import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "export", // ✅ Enables static export
  basePath: "/The_Treasure_Hampers", // ✅ Required for GitHub Pages
  assetPrefix: "/The_Treasure_Hampers/", // ✅ Required for GitHub Pages
};

export default nextConfig;
