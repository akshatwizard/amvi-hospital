import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostHero from "@/components/blog/post-hero";
import BlogPostContent from "@/components/blog/post-content";
import { blogs } from "@/constants/blogs";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog) return {};

    return {
        title: `${blog.title} | AMVI Hospitals`,
        description: blog.excerpt,
        alternates: { canonical: `/blog/${blog.slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog) notFound();

    return (
        <main>
            <BlogPostHero blog={blog} />
            <BlogPostContent blog={blog} />
        </main>
    );
}
