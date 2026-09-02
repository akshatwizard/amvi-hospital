"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { expertise_areas, memberships, credentials } from '@/constants/about_hospital'

export default function AboutDoctor() {
    return (
        <Section>
            <Wrapper>
                <div className='grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start'>
                    <div className='md:sticky md:top-24'>
                        <Reveal y={40}>
                            <div className='relative w-full aspect-4/5 rounded-card overflow-hidden'>
                                <Image
                                    src="/images/doctor/dr-shaivalini.png"
                                    alt="Dr. Shaivalini Kamarapu, Senior Cosmetic Gynaecologist at AMVI Hospital"
                                    fill
                                    className='object-cover'
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                        </Reveal>

                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-6'>
                            {credentials.map((c) => (
                                <StaggerItem key={c.label} className='flex flex-col gap-1'>
                                    <p className='font-serif text-2xl md:text-3xl text-plum-ink'>
                                        <Counter value={c.value} suffix={c.suffix} />
                                    </p>
                                    <p className='text-[11px] md:text-xs text-warm-slate leading-snug'>
                                        {c.label}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-100 rounded-full px-3.5 py-1.5 w-fit'>
                                Meet your doctor
                            </span>
                        </Reveal>

                        <RevealText
                            as="h2"
                            text="Dr. Shaivalini Kamarapu"
                            className='font-serif text-3xl md:text-5xl text-plum-ink leading-[1.1] mt-4'
                            delay={0.1}
                        />

                        <Reveal delay={0.2}>
                            <p className='text-sm md:text-base text-rose-700 mt-2'>
                                Senior Cosmetic Gynaecologist, Fertility Specialist & Robotic Surgeon
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className='flex flex-col gap-4 mt-6 max-w-xl'>
                                <p className='text-warm-slate text-sm md:text-base leading-relaxed'>
                                    With more than two decades in women&apos;s health, reproductive medicine
                                    and minimally invasive surgery, Dr. Shaivalini is recognised as one of
                                    Hyderabad&apos;s leading robotic gynaecological surgeons, having performed
                                    over 100 robotic procedures on the SSi Mantra system alongside 1,000+
                                    complex gynaecological and laparoscopic surgeries.
                                </p>
                                <p className='text-warm-slate text-sm md:text-base leading-relaxed'>
                                    She founded AMVI Hospitals to bring accessible, evidence-based reproductive
                                    care to families across Hyderabad, personally overseeing more than 1,000
                                    IVF cycles and 5,000 deliveries over the course of her practice.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className='flex flex-wrap gap-2 mt-8'>
                                {expertise_areas.map((area) => (
                                    <span
                                        key={area}
                                        className='text-xs md:text-sm text-plum-ink bg-petal-white border border-rose-100 rounded-full px-4 py-2'
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className='flex flex-col gap-2 mt-8 pt-6 border-t border-rose-100'>
                                <p className='text-xs text-warm-slate'>Professional memberships</p>
                                <div className='flex flex-col gap-1.5 mt-1'>
                                    {memberships.map((m) => (
                                        <div key={m} className='flex items-center gap-2'>
                                            <span className='size-1.5 rounded-full bg-rose-500 shrink-0' />
                                            <p className='text-sm text-plum-ink'>{m}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <Link
                                href="/contact"
                                className='inline-flex items-center rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-6 py-3.5 transition-colors mt-8'
                            >
                                Book a consultation
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}