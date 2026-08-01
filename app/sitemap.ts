import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { posts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/events', '/gallery', '/contact', '/legal', '/blog']
  const blogRoutes = posts.map((post) => `/blog/${post.slug}`)

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
