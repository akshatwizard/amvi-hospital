import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostHero from "@/components/blog/post-hero";
import BlogPostContent from "@/components/blog/post-content";
import { blogs, blogImage } from "@/constants/blogs";
import JsonLd from "@/shared/json-ld";
import { SITE_URL } from "@/lib/site";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return blogs.filter((blog) => blog.published).map((blog) => ({ slug: blog.slug }));
}

// Only pre-generated (published) slugs are servable — an unpublished or
// unknown slug renders 404 instead of being generated on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug && b.published);
    if (!blog) return {};

    return {
        title: `${blog.title} | AMVI Hospitals`,
        description: blog.excerpt,
        alternates: { canonical: `/blog/${blog.slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug && b.published);
    if (!blog) notFound();

    const published = new Date(blog.date)
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.excerpt,
        ...(isNaN(published.getTime()) ? {} : { datePublished: published.toISOString().slice(0, 10) }),
        author: { "@type": "Person", name: "Dr. Shaivalini Kamarapu", url: `${SITE_URL}/about/doctors` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
        ...(blogImage(blog) ? { image: `${blogImage(blog)!.startsWith("http") ? "" : SITE_URL}${blogImage(blog)}` } : {}),
    }

    return (
        <main>
            <JsonLd data={articleSchema} />
            <BlogPostHero blog={blog} />
            <BlogPostContent blog={blog} />
        </main>
    );
}
