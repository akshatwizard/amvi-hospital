"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { gynaecologyConditions } from '@/constants/gynaecology'

export default function GynaecologyConditions() {
    return (
        <Section className='bg-rose-50/40'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-100 rounded-full px-3.5 py-1.5 w-fit'>
                            Conditions we treat
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Gynaecological conditions we treat"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                        delay={0.1}
                    />
                </div>

                <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {gynaecologyConditions.map((condition) => (
                        <StaggerItem key={condition.href}>
                            <Link
                                href={condition.href}
                                className='group flex flex-col rounded-card overflow-hidden bg-petal-white border border-rose-100 h-full hover:border-rose-300 transition-colors'
                            >
                                <div className='relative w-full aspect-4/3'>
                                    <Image
                                        src={condition.image}
                                        alt={condition.name}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className='object-cover'
                                    />
                                </div>
                                <div className='p-5 flex flex-col gap-2 flex-1'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-serif text-lg text-plum-ink'>{condition.name}</p>
                                        <ArrowUpRight size={18} className='text-warm-slate group-hover:text-rose-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0' />
                                    </div>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{condition.description}</p>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}