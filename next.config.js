/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    images : {
        domains: ["i.scdn.co", "highprofiles.info"],
    },
}
module.exports = nextConfig
