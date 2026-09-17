import PageHero from '@/shared/page-hero'
import { Blog } from '@/constants/blogs'

export default function BlogPostHero({ blog }: { blog: Blog }) {
    return (
        <PageHero
            eyebrow={blog.category}
            title={blog.title}
            description={`${blog.date} · ${blog.readTime}`}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: blog.title },
            ]}
            image={blog.image}
            imageAlt={blog.title}
        />
    )
}
