/**
 * Next.js App Router: automatically served at /robots.txt
 * Tells search engine crawlers what to index.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://biddyasetu.org/sitemap.xml",
    host: "https://biddyasetu.org",
  };
}
