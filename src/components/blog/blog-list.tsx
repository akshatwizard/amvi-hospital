"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { Section, Wrapper } from "@/shared/sections"
import Reveal from "@/shared/reveal"
import RevealText from "@/shared/reveal_text"
import { blogs } from "@/constants/blogs"

export default function BlogList() {
    return (
        <Section className="bg-petal-white">
            <Wrapper>

                <div className="flex flex-col gap-10">

                    {/* Heading */}
                    <div className="max-w-2xl">
                        <Reveal>
                            <p className="text-xs uppercase tracking-[0.18em] text-sage-500 mb-3">
                                From AMVI Hospitals
                            </p>
                        </Reveal>

                        <RevealText
                            as="h2"
                            text="Health insights for every stage of life"
                            className="font-serif text-3xl md:text-4xl text-plum-ink"
                        />

                        <Reveal>
                            <p className="text-sm md:text-base text-warm-slate leading-relaxed mt-4">
                                Explore expert-backed information on maternity,
                                women&apos;s health, fertility, treatments,
                                diagnostics and everyday wellbeing.
                            </p>
                        </Reveal>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter((blog) => blog.published).map((blog, index) => (
                            <Reveal
                                key={blog.slug}
                                delay={index * 0.08}
                            >
                                <motion.article
                                    whileHover={{ y: -5 }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeOut",
                                    }}
                                    className="group h-full"
                                >
                                    <Link
                                        href={`/blog/${blog.slug}`}
                                        className="flex flex-col h-full overflow-hidden rounded-card bg-white border border-rose-100"
                                    >

                                        {/* Image */}
                                        <div className="relative aspect-16/10 overflow-hidden bg-rose-50">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />

                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center rounded-full bg-petal-white/95 border border-rose-100 px-3 py-1.5 text-xs text-rose-700">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-5">

                                            <div className="flex items-center gap-2 text-xs text-warm-slate mb-3">
                                                <span>{blog.date}</span>
                                                <span className="size-1 rounded-full bg-rose-300" />
                                                <span>{blog.readTime}</span>
                                            </div>

                                            <h3 className="font-serif text-xl text-plum-ink leading-snug group-hover:text-rose-700 transition-colors">
                                                {blog.title}
                                            </h3>

                                            <p className="text-sm text-warm-slate leading-relaxed mt-3 line-clamp-3">
                                                {blog.excerpt}
                                            </p>

                                            <div className="flex items-center gap-2 mt-auto pt-6 text-sm text-rose-700">
                                                <span>
                                                    Read article
                                                </span>

                                                <ArrowUpRight
                                                    size={16}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </div>

                                        </div>
                                    </Link>
                                </motion.article>
                            </Reveal>
                        ))}
                    </div>

                </div>

            </Wrapper>
        </Section>
    )
}