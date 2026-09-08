"use client"

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
    assessmentIntro, assessmentQuestionGroups, testingIntro, maleTesting,
    femaleLabTestsIntro, femaleLabTests, femaleImagingIntro, femaleImagingTests, femaleTestingNote,
} from '@/constants/infertility-assessment'

export default function InfertilityAssessmentContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} />

                <div className='flex flex-col gap-20'>
                    {/* Author byline + stats */}
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

                    {/* First visit */}
                    <div>
                        <RevealText as="h2" text="What should I expect during my first visit?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{assessmentIntro}</p>
                        </Reveal>
                        <div className='grid md:grid-cols-2 gap-8'>
                            {assessmentQuestionGroups.map((group) => (
                                <div key={group.heading}>
                                    <p className='font-serif text-base text-plum-ink mb-3'>{group.heading}</p>
                                    <StaggerContainer className='flex flex-col'>
                                        {group.items.map((item) => (
                                            <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                                <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                                <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                            </StaggerItem>
                                        ))}
                                    </StaggerContainer>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testing overview */}
                    <div>
                        <RevealText as="h2" text="What tests are done for infertility?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{testingIntro}</p>
                        </Reveal>
                    </div>

                    {/* Male testing */}
                    <div>
                        <RevealText as="h2" text="Testing for men" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{maleTesting}</p>
                        </Reveal>
                    </div>

                    {/* Female testing */}
                    <div>
                        <RevealText as="h2" text="What does the basic testing for women include?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />

                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{femaleLabTestsIntro}</p>
                        </Reveal>
                        <ul className='flex flex-col gap-1.5 mb-8'>
                            {femaleLabTests.map((item) => (
                                <li key={item} className='flex items-start gap-2'>
                                    <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
                                    <span className='text-sm text-warm-slate'>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{femaleImagingIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                            {femaleImagingTests.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='p-4 rounded-card bg-rose-50/60 border border-rose-100 text-center'>
                                        <p className='text-sm text-plum-ink'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <Reveal delay={0.15}>
                            <p className='text-sm text-warm-slate leading-relaxed'>{femaleTestingNote}</p>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}