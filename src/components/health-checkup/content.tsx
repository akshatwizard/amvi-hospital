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
import { gynaecologyConditionNav } from '@/constants/gynaecology-nav'
import {
    papWhoNeeds, papAbnormalLevels, sonoWhenNeeded, sonoAdvantages, dexaUses, dexaWhoNeeds, dexaRiskFactors,
} from '@/constants/health-checkup'

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

const contents = [
    { id: "pap-smear", label: "Pap Smear Test" },
    { id: "sonomammography", label: "Sonomammography / Breast Examination" },
    { id: "dexa-scan", label: "DEXA / Bone Density Scan" },
]

export default function HealthCheckupContent() {
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

                    <Reveal>
                        <div className='flex flex-col gap-2 p-6 rounded-card bg-rose-50 border border-rose-100 max-w-md'>
                            <p className='font-serif text-lg text-plum-ink mb-1'>On this page</p>
                            {contents.map((c) => (
                                <a key={c.id} href={`#${c.id}`} className='text-sm text-rose-700 hover:text-rose-800 transition-colors'>
                                    {c.label}
                                </a>
                            ))}
                        </div>
                    </Reveal>

                    {/* Pap Smear */}
                    <div id="pap-smear" className='scroll-mt-24'>
                        <RevealText as="h2" text="Pap smear test" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-4 max-w-2xl'>
                                A Pap smear is a screening procedure for cervical cancer, checking for precancerous
                                or cancerous cells on the cervix. Cells are gently collected during a routine office
                                procedure and examined for abnormal growth — it may be mildly uncomfortable but
                                doesn&apos;t usually cause lasting pain.
                            </p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mt-10 mb-4'>Who needs a Pap smear?</p>
                        <CheckList items={papWhoNeeds} />

                        <div className='grid sm:grid-cols-2 gap-6 mt-10'>
                            <Reveal>
                                <div className='p-6 rounded-card bg-sage-50 border border-sage-100 h-full'>
                                    <p className='font-serif text-base text-plum-ink mb-2'>Normal result</p>
                                    <p className='text-sm text-warm-slate leading-relaxed'>
                                        No abnormal cells were found. A normal result usually means your next Pap
                                        smear isn&apos;t needed for another three years.
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <div className='p-6 rounded-card bg-plum-ink h-full'>
                                    <p className='font-serif text-base text-petal-white mb-2'>Abnormal result</p>
                                    <p className='text-sm text-rose-100/70 leading-relaxed mb-3'>
                                        This doesn&apos;t mean cancer — it means abnormal cells were found, at one
                                        of several levels of severity:
                                    </p>
                                    <p className='text-sm text-rose-100/90'>{papAbnormalLevels.join(" · ")}</p>
                                </div>
                            </Reveal>
                        </div>
                        <Reveal delay={0.15}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6 max-w-2xl'>
                                Depending on the result, your doctor may recommend more frequent testing or a
                                colposcopy — a closer examination of cervical tissue using light and magnification,
                                sometimes alongside a small tissue biopsy.
                            </p>
                        </Reveal>
                    </div>

                    {/* Sonomammography */}
                    <div id="sonomammography" className='scroll-mt-24'>
                        <RevealText as="h2" text="Sonomammography / breast examination" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-4 max-w-2xl'>
                                Sonomammography, or breast ultrasound, is a non-invasive imaging technique used to
                                examine breast tissue and screen for abnormalities. It's often used alongside
                                mammography to study a mass or lump more closely, and — unlike mammography — can be
                                performed at any point in the menstrual cycle with no special preparation.
                            </p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mt-10 mb-4'>When is it recommended?</p>
                        <CheckList items={sonoWhenNeeded} />

                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-8 max-w-2xl'>
                                The procedure itself is simple: you lie down on an examining table while a
                                radiologist applies gel and uses a high-frequency probe to scan the breast and
                                underarm area for any lump or mass.
                            </p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mt-10 mb-4'>Advantages</p>
                        <CheckList items={sonoAdvantages} />
                    </div>

                    {/* DEXA Scan */}
                    <div id="dexa-scan" className='scroll-mt-24'>
                        <RevealText as="h2" text="DEXA / bone density scan" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-4 max-w-2xl'>
                                A DEXA scan is a low-dose X-ray test that measures bone density — how strong and
                                thick your bones are. Bones naturally thin with age; when they thin more than
                                normal, it's called osteopenia, which can progress to the more serious, brittle-bone
                                condition osteoporosis if left unaddressed.
                            </p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mt-10 mb-4'>What it's used for</p>
                        <CheckList items={dexaUses} />

                        <p className='font-serif text-lg text-plum-ink mt-10 mb-4'>Who should get one?</p>
                        <CheckList items={dexaWhoNeeds} />

                        <p className='font-serif text-lg text-plum-ink mt-10 mb-4'>Other risk factors</p>
                        <CheckList items={dexaRiskFactors} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}