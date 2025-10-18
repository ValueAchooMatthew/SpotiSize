import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const IMAGE_PATTERNS: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "i.scdn.co",
    port: "",
    pathname: "/image/*", //All the spotify images will be request from this resource
    search: "",
  },
  {
    protocol: "https",
    hostname: "avatars.githubusercontent.com",
    port: "",
    pathname: "/u/*", //All the github images will be request from this resource
    search: "",
  },
];

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: IMAGE_PATTERNS,
  },
};

module.exports = nextConfig;
