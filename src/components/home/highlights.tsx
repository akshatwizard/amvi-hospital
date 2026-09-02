"use client"

import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { highlights } from '@/constants/highlights'
import Image from 'next/image'

export default function Highlights() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                    {/* Left: heading + highlight grid */}
                    <div>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                Why choose us
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Professional care you can trust"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.25}>
                            <p className='text-warm-slate mt-4 max-w-md'>
                                Two decades of experience, a comfortable environment, and care that
                                stays reachable even outside the clinic.
                            </p>
                        </Reveal>

                        <StaggerContainer className='grid grid-cols-2 gap-4 md:gap-6 mt-10'>
                            {highlights.map((item) => (
                                <StaggerItem key={item.kind === "stat" ? item.label : item.title}>
                                    <div className='flex flex-col gap-3 p-5 md:p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <item.icon size={22} strokeWidth={1.5} className='text-rose-600' />
                                        {item.kind === "stat" ? (
                                            <>
                                                <p className='font-serif text-3xl md:text-4xl text-plum-ink'>
                                                    <Counter value={item.value} suffix={item.suffix} />
                                                </p>
                                                <p className='text-xs md:text-sm text-warm-slate'>{item.label}</p>
                                            </>
                                        ) : (
                                            <>
                                                <p className='font-serif text-base md:text-lg text-plum-ink'>{item.title}</p>
                                                <p className='text-xs md:text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                                            </>
                                        )}
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Right: sticky image — placeholder until real photo is provided */}
                    <div className='lg:sticky lg:top-24 lg:self-start'>
                        <div className='relative w-full aspect-9/8 rounded-card overflow-hidden'>
                            <Image
                                src="/images/doctor-consultation.jpg"
                                alt="Doctor providing professional maternity care to a patient"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}