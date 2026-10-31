import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import CertificateGrid from '@/components/certificates/certificate-grid'

export default function Awards() {
    return (
        <Section className='bg-rose-50/50'>
            <Wrapper className='gap-10!'>
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
                    <div className='max-w-xl'>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-petal-white rounded-full px-3.5 py-1.5 w-fit'>
                                Awards & recognitions
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Certified training behind every procedure"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                    </div>
                    <Link href="/certificates" className='group inline-flex items-center gap-1.5 text-sm text-rose-700 w-fit'>
                        View all certificates
                        <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' aria-hidden="true" />
                    </Link>
                </div>
                <CertificateGrid limit={3} />
            </Wrapper>
        </Section>
    )
}
