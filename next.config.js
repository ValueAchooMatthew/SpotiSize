/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    images : {
        domains: ["i.scdn.co"],
    },
}
module.exports = nextConfig
