"use client"

import Image from 'next/image'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import { stats } from '@/constants/stats'
import { gynaecologyConditionNav } from '@/constants/gynaecology-nav'
import { endocrineIntro, endocrineConditions, endocrineTreatments } from '@/constants/endocrine-disorders'

export default function EndocrineDisordersContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={gynaecologyConditionNav} category='Gynaecology' />

                <div className='flex flex-col gap-20'>
                    <div>
                        <Reveal>
                            <p className='text-xs text-warm-slate'>
                                Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                                <br />
                                MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                            </p>
                        </Reveal>
                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-rose-100 max-w-md'>
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-xl md:text-2xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-1'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div className='grid md:grid-cols-2 gap-10 items-center'>
                        <div>
                            <RevealText as="h2" text="What are gynaecological endocrine disorders?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {endocrineIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/gynaecology/endocrine-disorders-overview.jpeg" alt="Hormonal health consultation" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Conditions we address" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={endocrineConditions} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Treatment for hormonal imbalances" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={endocrineTreatments} />
                    </div>

                    <Reveal>
                        <div className='p-6 md:p-8 rounded-card bg-rose-50 border border-rose-100'>
                            <p className='font-serif text-lg text-plum-ink mb-2'>A team-based approach</p>
                            <p className='text-sm text-warm-slate leading-relaxed'>
                                Advanced diagnostics are used to identify the specific type of endocrine disorder and
                                any underlying cause. From there, gynaecologists, endocrinologists, surgeons, and
                                other specialists work together on a custom treatment plan suited to each patient&apos;s
                                condition.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Wrapper>
        </Section>
    )
}