import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { staticRoutes } from "@/lib/routes"
import { locationAreas } from "@/constants/location-areas"
import { publishedBlogs } from "@/constants/blogs"

// Served at /sitemap.xml — submit this URL in Google Search Console.
export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    const priorityFor = (path: string) => {
        if (path === "/") return 1
        // Top-level speciality hubs
        if (/^\/(gynaecology|infertility|maternity|laparoscopy|cosmetic-gynecology|fertility-preservation|contact)$/.test(path)) return 0.9
        return 0.7
    }

    const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
        url: `${SITE_URL}${path === "/" ? "" : path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: priorityFor(path),
    }))

    const areas: MetadataRoute.Sitemap = locationAreas.map((area) => ({
        url: `${SITE_URL}/location/${area.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
    }))

    const posts: MetadataRoute.Sitemap = publishedBlogs.map((blog) => {
        const date = new Date(blog.date)
        return {
            url: `${SITE_URL}/blog/${blog.slug}`,
            lastModified: isNaN(date.getTime()) ? now : date,
            changeFrequency: "yearly",
            priority: 0.5,
        }
    })

    return [...pages, ...areas, ...posts]
}
