/**
 * Next.js App Router: automatically served at /sitemap.xml
 * Tells search engines about all public pages and their priority.
 */
export default function sitemap() {
  const baseUrl = "https://biddyasetu.org";
  const lastModified = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/structure`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/members`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
