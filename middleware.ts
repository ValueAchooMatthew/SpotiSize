export { auth as middleware } from "@/auth";

// Don't invoke Middleware on paths that don't need it
export const config = {
  matcher: [
    /* Copied from Nextjs docs + edits for our pages
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - img (Static images)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - contact and about (Static pages)
     */
    "/((?!api|img|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|contact|about).*)",
  ],
};
