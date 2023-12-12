/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    images : {
        domains: ["i.scdn.co", "highprofiles.info","avatars.githubusercontent.com"],
    },
}
module.exports = nextConfig
