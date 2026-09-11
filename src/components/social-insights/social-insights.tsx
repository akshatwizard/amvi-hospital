"use client"

import { useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
} from "lucide-react"

import { Section, Wrapper } from "@/shared/sections"
import RevealText from "@/shared/reveal_text"
import Reveal from "@/shared/reveal"
import { socialInsights } from "@/constants/social-insights"
import { FacebookIcon, InstagramIcon } from "@/shared/social_icons"

function SocialIcon({
    type,
}: {
    type: "Instagram Reel" | "Instagram Post" | "Facebook Post"
}) {
    if (type === "Facebook Post") {
        return <FacebookIcon size={14} />
    }

    return <InstagramIcon size={14} />
}

export default function SocialInsights() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            Autoplay({
                delay: 4500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    )

    const scrollPrev = useCallback(
        () => emblaApi?.scrollPrev(),
        [emblaApi]
    )

    const scrollNext = useCallback(
        () => emblaApi?.scrollNext(),
        [emblaApi]
    )

    return (
        <Section className="bg-petal-white">
            <Wrapper>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

                    <div className="max-w-2xl">
                        <Reveal>
                            <span className="inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit">
                                Social insights
                            </span>
                        </Reveal>

                        <RevealText
                            as="h2"
                            text="Small insights. Better health decisions."
                            className="font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4"
                            delay={0.1}
                        />

                        <Reveal delay={0.25}>
                            <p className="text-sm md:text-base text-warm-slate leading-relaxed mt-5 max-w-xl">
                                Short, useful health insights from our doctors
                                and care team — shared across our social
                                channels.
                            </p>
                        </Reveal>
                    </div>

                    {/* Controls */}
                    <Reveal delay={0.3}>
                        <div className="flex items-center gap-3">

                            <button
                                onClick={scrollPrev}
                                aria-label="Previous insight"
                                className="size-11 rounded-full border border-rose-200 flex items-center justify-center text-plum-ink hover:bg-rose-50 transition-colors"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <button
                                onClick={scrollNext}
                                aria-label="Next insight"
                                className="size-11 rounded-full border border-rose-200 flex items-center justify-center text-plum-ink hover:bg-rose-50 transition-colors"
                            >
                                <ArrowRight size={18} />
                            </button>

                        </div>
                    </Reveal>
                </div>

                {/* Carousel */}
                <Reveal delay={0.2}>
                    <div
                        className="overflow-hidden -mx-5 md:mx-0 mt-10"
                        ref={emblaRef}
                    >
                        <div className="flex gap-5 md:gap-6 px-5 md:px-0">

                            {socialInsights.map((item) => (
                                <article
                                    key={item.id}
                                    className="shrink-0 basis-[85%] sm:basis-[55%] md:basis-[42%] lg:basis-[31%]"
                                >
                                    <Link
                                        href={item.href}
                                        target={
                                            item.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            item.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="group flex flex-col h-full rounded-card overflow-hidden bg-white border border-rose-100"
                                    >

                                        {/* Image */}
                                        {item.image ? (
                                            <div className="relative aspect-16/10 overflow-hidden bg-rose-50">

                                                <Image
                                                    src={item.image}
                                                    alt={
                                                        item.imageAlt ??
                                                        item.title
                                                    }
                                                    fill
                                                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 55vw, (max-width: 1024px) 42vw, 31vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />

                                                {/* Content type */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-petal-white/95 border border-rose-100 px-3 py-1.5 text-xs text-rose-700">
                                                        <SocialIcon
                                                            type={item.type}
                                                        />
                                                        {item.type}
                                                    </span>
                                                </div>

                                            </div>
                                        ) : (
                                            <div className="px-6 pt-6">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-100 px-3 py-1.5 text-xs text-rose-700">
                                                    <SocialIcon
                                                        type={item.type}
                                                    />
                                                    {item.type}
                                                </span>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-6">

                                            <div className="flex items-center gap-2 text-xs text-warm-slate mb-4">
                                                <span>
                                                    {item.category}
                                                </span>

                                                <span className="size-1 rounded-full bg-rose-300" />

                                                <span>
                                                    {item.date}
                                                </span>
                                            </div>

                                            <h3 className="font-serif text-xl md:text-2xl text-plum-ink leading-snug group-hover:text-rose-700 transition-colors">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-warm-slate leading-relaxed mt-4">
                                                {item.description}
                                            </p>

                                            <div className="flex items-center gap-2 mt-auto pt-7 text-sm text-rose-700">
                                                <span>
                                                    View insight
                                                </span>

                                                <ArrowUpRight
                                                    size={16}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </div>

                                        </div>
                                    </Link>
                                </article>
                            ))}

                        </div>
                    </div>
                </Reveal>

            </Wrapper>
        </Section>
    )
}