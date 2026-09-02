"use client"

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { testimonials } from '@/constants/testimonials'

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
    )

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-8'>
                    <div>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                Patient reviews
                            </span>
                        </Reveal>

                        <RevealText
                            as="h2"
                            text="Care that patients speak up about"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />

                        <Reveal delay={0.25}>
                            <div className='flex items-center gap-3 mt-6'>
                                <div className='flex items-center gap-1'>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={14} className='text-rose-500' fill="currentColor" />
                                    ))}
                                </div>
                                <p className='font-serif text-xl text-plum-ink'>4.4</p>
                                <span className='size-1 rounded-full bg-rose-300' />
                                <p className='text-sm text-warm-slate'>
                                    <Counter value={377} suffix="+" /> Google reviews
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.3}>
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={scrollPrev}
                                aria-label="Previous review"
                                className='size-11 rounded-full border border-rose-200 flex items-center justify-center text-plum-ink hover:bg-rose-50 transition-colors'
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <button
                                onClick={scrollNext}
                                aria-label="Next review"
                                className='size-11 rounded-full border border-rose-200 flex items-center justify-center text-plum-ink hover:bg-rose-50 transition-colors'
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <div className='overflow-hidden -mx-5 md:mx-0' ref={emblaRef}>
                        <div className='flex gap-5 md:gap-6 px-5 md:px-0'>
                            {testimonials.map((t, i) => {
                                const dark = i % 3 === 1
                                return (
                                    <div
                                        key={t.name}
                                        className={cn(
                                            'shrink-0 basis-[85%] sm:basis-[55%] md:basis-[36%] lg:basis-[30%] rounded-card p-8 md:p-9 flex flex-col justify-between min-h-88',
                                            dark ? 'bg-rose-800' : 'bg-rose-50/70'
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                'font-serif text-7xl md:text-8xl leading-none select-none',
                                                dark ? 'text-rose-600/60' : 'text-rose-200'
                                            )}
                                        >
                                            &ldquo;
                                        </span>

                                        <p
                                            className={cn(
                                                'font-serif text-lg md:text-xl leading-snug -mt-6',
                                                dark ? 'text-petal-white' : 'text-plum-ink'
                                            )}
                                        >
                                            {t.quote}
                                        </p>

                                        <div className='flex items-center gap-3 mt-8'>
                                            <span className={cn('h-px w-8', dark ? 'bg-rose-400' : 'bg-rose-300')} />
                                            <div>
                                                <p className={cn('text-sm', dark ? 'text-petal-white' : 'text-plum-ink')}>
                                                    {t.name}
                                                </p>
                                                <p className={cn('text-xs mt-0.5', dark ? 'text-rose-200' : 'text-warm-slate')}>
                                                    {t.service}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Reveal>
            </Wrapper>
        </Section>
    )
}