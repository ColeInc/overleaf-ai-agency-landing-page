import type { MetadataRoute } from "next"

const BASE_URL = "https://www.overleaf.agency"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
