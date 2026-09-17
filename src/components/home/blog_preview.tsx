import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { blogs } from '@/constants/blogs'

export default function BlogPreview() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
                    <div className='max-w-lg'>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                From the blog
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Reading before your appointment"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                    </div>

                    <Reveal delay={0.2}>
                        <Link
                            href="/blog"
                            className='inline-flex items-center gap-1.5 text-sm text-rose-700 hover:text-rose-800 transition-colors shrink-0'
                        >
                            View all posts
                            <ArrowUpRight size={16} />
                        </Link>
                    </Reveal>
                </div>

                <StaggerContainer className='grid md:grid-cols-3 gap-6'>
                    {blogs.filter((post) => post.published).slice(0, 3).map((post) => (
                        <StaggerItem key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className='group flex flex-col gap-4'>
                                <div className='relative w-full aspect-4/3 rounded-card overflow-hidden bg-rose-100'>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div>
                                    <span className='text-xs text-rose-700 bg-rose-50 rounded-full px-3 py-1'>
                                        {post.category}
                                    </span>
                                    <p className='font-serif text-lg text-plum-ink mt-3 group-hover:text-rose-700 transition-colors'>
                                        {post.title}
                                    </p>
                                    <p className='text-sm text-warm-slate mt-1.5 leading-relaxed'>
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}