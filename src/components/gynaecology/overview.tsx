"use client"

import Image from 'next/image'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { stats } from '@/constants/stats'
import { gynaecologyIntro } from '@/constants/gynaecology'

export default function GynaecologyOverview() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
                    <div>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                Overview
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Expert gynaecology care at AMVI Hospitals, Hyderabad"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                        <div className='flex flex-col gap-4 mt-5'>
                            {gynaecologyIntro.map((para, i) => (
                                <Reveal key={i} delay={0.2 + i * 0.1}>
                                    <p className='text-warm-slate text-sm md:text-base leading-relaxed'>{para}</p>
                                </Reveal>
                            ))}
                        </div>

                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-rose-100'>
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-2xl md:text-3xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-1'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                        <Image
                            src="/images/gynaecology/pcod-overview.jpeg"
                            alt="Laparoscopic myomectomy procedure at AMVI Hospital"
                            fill
                            sizes="(min-width: 768px) 480px, 90vw"
                            className='object-cover'
                        />
                    </Reveal>
                </div>
            </Wrapper>
        </Section>
    )
}