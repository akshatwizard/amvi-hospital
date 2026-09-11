"use client"

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import {
    follicularIntro, follicularWhatIsIt, follicularQuickFacts, follicularFeatures,
    follicularUse, follicularHowItsDone, follicularWhoNeedsIt, follicularOtherFindings,
} from '@/constants/follicular-monitoring'

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

export default function FollicularMonitoringContent() {
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
                            <RevealText as="h2" text="Follicular monitoring — ovulation tracking in IVF" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {follicularIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/infertility/follicular-monitoring-overview.png" alt="Follicular monitoring ultrasound" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <StaggerContainer className='grid sm:grid-cols-3 gap-4'>
                        {follicularQuickFacts.map((f) => (
                            <StaggerItem key={f.label}>
                                <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 text-center'>
                                    <p className='font-serif text-xl text-rose-700'>{f.value}</p>
                                    <p className='text-xs text-warm-slate mt-1'>{f.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <Reveal>
                        <div className='p-6 md:p-8 rounded-card bg-sage-50 border border-sage-100'>
                            <p className='font-serif text-lg text-plum-ink mb-2'>What is a follicular study?</p>
                            <p className='text-sm text-warm-slate leading-relaxed'>{follicularWhatIsIt}</p>
                        </div>
                    </Reveal>

                    <div>
                        <RevealText as="h2" text="Features of follicular monitoring" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={follicularFeatures} />
                    </div>

                    <div>
                        <RevealText as="h2" text="What is it used for?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl'>{follicularUse}</p>
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="How is a follicular study done?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl'>{follicularHowItsDone}</p>
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Who should get a follicular study?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6 max-w-2xl'>
                                Any woman trying to conceive can have a follicle scan, but it's most often
                                recommended as a first step for couples who haven't conceived after more than a
                                year of unprotected intercourse — particularly if either of the following applies:
                            </p>
                        </Reveal>
                        <CheckList items={follicularWhoNeedsIt} />
                    </div>

                    <div>
                        <RevealText as="h2" text="What else can a follicular scan detect?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6 max-w-2xl'>
                                A follicular study can also flag issues that might otherwise stand in the way of
                                conception, including:
                            </p>
                        </Reveal>
                        <CheckList items={follicularOtherFindings} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}