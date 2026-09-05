"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { cn } from '@/lib/utils'
import { Breadcrumb } from '@/types/breadcrumb'

type PageHeroProps = {
    eyebrow?: string
    title: string
    description?: string
    breadcrumbs: Breadcrumb[]
    image?: string
    imageAlt?: string
    cta?: { label: string; href: string }
    className?: string
}

export default function PageHero({ eyebrow, title, description, breadcrumbs, image, imageAlt, cta, className }: PageHeroProps) {
    const hasImage = !!image

    return (
        <Section
            className={cn(
                'relative overflow-hidden border-b border-rose-100',
                hasImage ? 'bg-plum-ink' : 'bg-rose-50',
                className
            )}
        >
            {hasImage ? (
                <>
                    <Image
                        src={image}
                        alt={imageAlt ?? ""}
                        fill
                        priority
                        sizes="100vw"
                        quality={90}
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-linear-to-r from-plum-ink/90 via-plum-ink/60 to-plum-ink/20' />
                    <div className='absolute inset-0 bg-linear-to-t from-plum-ink/50 via-transparent to-transparent' />
                </>
            ) : (
                <>
                    <motion.div
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className='pointer-events-none select-none absolute -right-24 -top-24 size-72 rounded-full bg-rose-200/40 blur-3xl'
                    />
                    <motion.div
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                        className='pointer-events-none select-none absolute -left-16 bottom-0 size-56 rounded-full bg-sage-200/30 blur-3xl'
                    />
                </>
            )}

            <Wrapper bare
                className={cn(
                    'relative py-14 md:py-24 gap-4!',
                    hasImage && 'md:py-28 min-h-[46vh] flex flex-col justify-center'
                )}>
                <Reveal>
                    <nav className={cn('flex items-center gap-1.5 text-xs mb-3', hasImage ? 'text-rose-100/70' : 'text-warm-slate')}>
                        {breadcrumbs.map((crumb, i) => (
                            <span key={crumb.label} className='flex items-center gap-1.5'>
                                {crumb.href ? (
                                    <Link
                                        href={crumb.href}
                                        className={cn('transition-colors', hasImage ? 'hover:text-petal-white' : 'hover:text-rose-700')}
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className={hasImage ? 'text-petal-white' : 'text-plum-ink'}>{crumb.label}</span>
                                )}
                                {i < breadcrumbs.length - 1 && (
                                    <span className={hasImage ? 'text-rose-200/40' : 'text-rose-300'}>/</span>
                                )}
                            </span>
                        ))}
                    </nav>
                </Reveal>

                {eyebrow && (
                    <Reveal delay={0.05}>
                        <span
                            className={cn(
                                'inline-flex items-center gap-2 text-xs rounded-full px-3.5 py-1.5 w-fit mb-2',
                                hasImage ? 'text-rose-100 bg-petal-white/10' : 'text-rose-700 bg-rose-100'
                            )}
                        >
                            {eyebrow}
                        </span>
                    </Reveal>
                )}

                <RevealText
                    as="h1"
                    text={title}
                    className={cn(
                        'font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-2xl',
                        hasImage ? 'text-petal-white' : 'text-plum-ink'
                    )}
                    delay={0.1}
                />

                {description && (
                    <Reveal delay={0.2}>
                        <p className={cn('mt-5 max-w-lg text-sm md:text-base leading-relaxed', hasImage ? 'text-rose-100/80' : 'text-warm-slate')}>
                            {description}
                        </p>
                    </Reveal>
                )}

                {cta && (
                    <Reveal delay={0.3}>
                        <Link
                            href={cta.href}
                            className={cn(
                                'inline-flex items-center rounded-full text-sm px-6 py-3.5 transition-colors mt-7',
                                hasImage
                                    ? 'bg-petal-white hover:bg-rose-50 text-rose-700'
                                    : 'bg-rose-700 hover:bg-rose-800 text-petal-white'
                            )}
                        >
                            {cta.label}
                        </Link>
                    </Reveal>
                )}
            </Wrapper>
        </Section>
    )
}