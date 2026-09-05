import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import TeamCarousel from './team-carousel'

export default function Team() {
    return (
        <Section className='bg-petal-white overflow-hidden'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                            Our specialist doctors
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="A full team behind every visit"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                        delay={0.1}
                    />
                </div>

                <div className='mt-10 -mx-5 md:-mx-10 lg:-mx-16'>
                    <TeamCarousel />
                </div>
            </Wrapper>
        </Section>
    )
}