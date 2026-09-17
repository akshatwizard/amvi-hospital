"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { blogs, Blog } from '@/constants/blogs'

export default function BlogPostContent({ blog }: { blog: Blog }) {
    const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3)

    return (
        <>
            <Section className='bg-petal-white'>
                <Wrapper className='max-w-3xl'>
                    <Reveal>
                        <p className='text-xs text-warm-slate'>
                            Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                            <br />
                            MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                        </p>
                    </Reveal>

                    <div className='flex flex-col gap-10 mt-10'>
                        {blog.sections.map((section, i) => (
                            <div key={section.heading}>
                                <RevealText
                                    as="h2"
                                    text={section.heading}
                                    className='font-serif text-2xl md:text-3xl text-plum-ink mb-4'
                                    delay={i * 0.05}
                                />
                                <div className='flex flex-col gap-4'>
                                    {section.paragraphs.map((p, j) => (
                                        <Reveal key={j} delay={0.1 + j * 0.08}>
                                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Reveal delay={0.2}>
                        <div className='mt-14 p-6 md:p-8 rounded-card bg-rose-50 border border-rose-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>
                            <div>
                                <p className='font-serif text-lg text-plum-ink'>Have questions about this?</p>
                                <p className='text-sm text-warm-slate mt-1'>Talk it through with our team at Puppalaguda or Attapur.</p>
                            </div>
                            <Link
                                href="/contact"
                                className='inline-flex items-center rounded-full text-sm px-6 py-3.5 bg-rose-700 hover:bg-rose-800 text-petal-white transition-colors shrink-0'
                            >
                                Book a consultation
                            </Link>
                        </div>
                    </Reveal>
                </Wrapper>
            </Section>

            {related.length > 0 && (
                <Section className='bg-rose-50/40'>
                    <Wrapper>
                        <RevealText as="h2" text="More from the blog" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {related.map((post) => (
                                <StaggerItem key={post.slug}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className='group flex flex-col h-full overflow-hidden rounded-card bg-petal-white border border-rose-100 hover:border-rose-300 transition-colors'
                                    >
                                        <div className='relative w-full aspect-16/10'>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className='p-5 flex flex-col gap-2 flex-1'>
                                            <span className='text-xs text-rose-700 bg-rose-50 rounded-full px-3 py-1 w-fit'>{post.category}</span>
                                            <p className='font-serif text-lg text-plum-ink mt-2 group-hover:text-rose-700 transition-colors'>{post.title}</p>
                                            <div className='flex items-center gap-1.5 text-sm text-rose-700 mt-auto pt-4'>
                                                Read article
                                                <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                                            </div>
                                        </div>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </Wrapper>
                </Section>
            )}
        </>
    )
}
