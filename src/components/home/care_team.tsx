import { HeartPulse, Scissors, ScanLine, Baby, Stethoscope, Sparkles } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { departments } from '@/constants/care_team'

const icons = {
    gynaecology: HeartPulse,
    surgery: Scissors,
    radiology: ScanLine,
    paediatrics: Baby,
    physician: Stethoscope,
    cosmetic: Sparkles,
}

export default function CareTeam() {
    return (
        <Section>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-100 rounded-full px-3.5 py-1.5 w-fit'>
                            Beyond one doctor
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="A full team behind every visit"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.25}>
                        <p className='text-warm-slate mt-4 text-sm md:text-base max-w-md'>
                            AMVI brings multiple specialities together under one roof, so referrals and
                            follow-ups happen in-house instead of sending you elsewhere.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                    {departments.map((dept) => {
                        const Icon = icons[dept.icon]
                        return (
                            <StaggerItem key={dept.name}>
                                <div className='h-full flex flex-col gap-3 p-6 rounded-card bg-petal-white border border-rose-100'>
                                    <Icon size={22} strokeWidth={1.5} className='text-rose-600' />
                                    <p className='font-serif text-lg text-plum-ink'>{dept.name}</p>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{dept.description}</p>
                                </div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}