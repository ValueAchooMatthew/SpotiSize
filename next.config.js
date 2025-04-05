/** @type {import('next').NextConfig} */

const IMAGE_PATTERNS = [
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
]

const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images : {
    remotePatterns: IMAGE_PATTERNS,
  },
}
module.exports = nextConfig
