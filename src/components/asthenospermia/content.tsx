"use client"

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import {
    asthenoIntro, asthenoFertilityImpact, asthenoWhoShouldTest, asthenoComplications,
    asthenoDiagnosis, asthenoTreatments, asthenoPrevention, asthenoTestimonials, asthenoFaqs,
} from '@/constants/asthenospermia'

function CheckList({ items }: { items: string[] }) {
    return (
        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
            {items.map((item) => (
                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                        <Check size={12} strokeWidth={3} />
                    </span>
                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}

export default function AsthenospermiaContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} category='Infertility' />

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
                            <RevealText as="h2" text="What is asthenospermia (low sperm motility)?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {asthenoIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/infertility/asthenospermia-overview.jpeg" alt="Sperm motility consultation" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="How asthenospermia affects fertility" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={asthenoFertilityImpact} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Who should consider testing?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6 max-w-2xl'>
                                Consider an evaluation if you and your partner have been trying to conceive for more
                                than a year without success, if earlier fertility treatments haven&apos;t worked, or
                                if any of the following apply:
                            </p>
                        </Reveal>
                        <CheckList items={asthenoWhoShouldTest} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Complications associated with asthenospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={asthenoComplications} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Diagnosis of asthenospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={asthenoDiagnosis} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Treatment of asthenospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={asthenoTreatments} />
                    </div>

                    <div>
                        <RevealText as="h2" text="How to help prevent asthenospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={asthenoPrevention} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                            {asthenoTestimonials.map((t) => (
                                <StaggerItem key={t.name}>
                                    <div className='flex flex-col gap-4 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='text-sm text-warm-slate leading-relaxed'>&ldquo;{t.quote}&rdquo;</p>
                                        <p className='text-sm text-rose-700 mt-auto'>{t.name}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="FAQs related to low sperm motility" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={asthenoFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}