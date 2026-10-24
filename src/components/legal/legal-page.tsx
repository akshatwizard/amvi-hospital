import PageHero from '@/shared/page-hero'
import { Section, Wrapper } from '@/shared/sections'

export type LegalSection = { heading: string; paragraphs: string[] }

export default function LegalPage({ title, updated, intro, sections }: {
    title: string
    updated: string
    intro: string
    sections: LegalSection[]
}) {
    return (
        <main>
            <PageHero
                eyebrow="Legal"
                title={title}
                description={`Last updated: ${updated}`}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
            />
            <Section className='bg-petal-white'>
                <Wrapper className='max-w-3xl! gap-8!'>
                    <p className='text-warm-slate text-sm md:text-base leading-relaxed'>{intro}</p>
                    {sections.map((section) => (
                        <div key={section.heading} className='flex flex-col gap-3'>
                            <h2 className='font-serif text-xl md:text-2xl text-plum-ink'>{section.heading}</h2>
                            {section.paragraphs.map((p, i) => (
                                <p key={i} className='text-warm-slate text-sm md:text-base leading-relaxed'>{p}</p>
                            ))}
                        </div>
                    ))}
                </Wrapper>
            </Section>
        </main>
    )
}
