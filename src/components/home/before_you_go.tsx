import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { bring_items, prep_items } from '@/constants/before_you_go'

export default function BeforeYouGo() {
    return (
        <Section className='bg-plum-ink'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-200 bg-petal-white/10 rounded-full px-3.5 py-1.5 w-fit'>
                            Before your first visit
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="A little preparation goes a long way"
                        className='font-serif text-3xl md:text-4xl text-petal-white leading-[1.15] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.25}>
                        <p className='text-rose-100/70 mt-4 text-sm md:text-base'>
                            Coming prepared means less paperwork on the day and more time actually
                            talking with your doctor.
                        </p>
                    </Reveal>
                </div>

                <div className='grid md:grid-cols-2 gap-12 md:gap-16 mt-4'>
                    <div>
                        <Reveal>
                            <p className='font-serif text-xl text-petal-white mb-2'>What to bring</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {bring_items.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className='flex items-start gap-3 py-4 border-b border-petal-white/10 last:border-0'
                                >
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm md:text-base text-rose-50/90 leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <Reveal>
                            <p className='font-serif text-xl text-petal-white mb-2'>How to prepare</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {prep_items.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className='flex items-start gap-3 py-4 border-b border-petal-white/10 last:border-0'
                                >
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-sage-400/20 text-sage-300 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm md:text-base text-rose-50/90 leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}