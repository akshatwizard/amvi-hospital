import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { locationAreas } from '@/constants/location-areas'

export default function AreasServed() {
    return (
        <Section className='bg-rose-50/50'>
            <Wrapper className='gap-8!'>
                <div className='max-w-2xl'>
                    <h2 className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15]'>Areas we serve</h2>
                    <p className='text-warm-slate text-sm md:text-base leading-relaxed mt-4'>
                        Patients visit us from across West and South-West Hyderabad. Choose your area to see the
                        nearest branch and the care available.
                    </p>
                </div>
                <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {locationAreas.map((area) => (
                        <li key={area.slug}>
                            <Link
                                href={`/location/${area.slug}`}
                                className='group flex items-center justify-between gap-3 rounded-card bg-petal-white border border-rose-100 hover:border-rose-300 px-5 py-4 transition-colors'
                            >
                                <span className='flex items-center gap-3'>
                                    <MapPin size={16} className='text-rose-700 shrink-0' aria-hidden="true" />
                                    <span>
                                        <span className='block font-serif text-lg text-plum-ink'>{area.name}</span>
                                        <span className='block text-xs text-warm-slate'>Nearest branch: {area.nearestBranch}</span>
                                    </span>
                                </span>
                                <ArrowUpRight size={16} className='text-rose-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' aria-hidden="true" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </Section>
    )
}
