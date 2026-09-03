import { MapPin, Phone, Clock } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { locations } from '@/constants/locations'

export default function Locations() {
    return (
        <Section>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                            Find us
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Two locations across Hyderabad"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.25}>
                        <p className='text-warm-slate mt-4 text-sm md:text-base'>
                            Open Monday to Saturday, 10:00 AM to 6:00 PM. Walk-ins are welcome at either branch.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className='grid md:grid-cols-2 gap-6'>
                    {locations.map((loc) => (
                        <StaggerItem key={loc.name}>
                            <div className='h-full flex flex-col gap-6 rounded-card bg-rose-50/60 border border-rose-100 p-7 md:p-8'>
                                <p className='font-serif text-2xl text-plum-ink'>{loc.name}</p>

                                <div className='flex items-start gap-3'>
                                    <MapPin size={18} className='text-rose-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{loc.address}</p>
                                </div>

                                <div className='flex items-center gap-3'>
                                    <Clock size={18} className='text-rose-500 shrink-0' />
                                    <p className='text-sm text-plum-ink'>Mon – Sat, 10:00 AM – 6:00 PM</p>
                                </div>

                                <div className='flex items-center gap-3'>
                                    <Phone size={18} className='text-rose-500 shrink-0' />
                                    <a href={`tel:${loc.phoneHref}`} className='text-sm text-plum-ink hover:text-rose-700 transition-colors'>
                                        {loc.phoneDisplay}
                                    </a>
                                </div>

                                <div className='flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-rose-100'>
                                    <a
                                        href={loc.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='inline-flex items-center rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-5 py-2.5 transition-colors'
                                    >
                                        Get directions
                                    </a>
                                    <a
                                        href={`tel:${loc.phoneHref}`}
                                        className='inline-flex items-center rounded-full border border-rose-200 hover:bg-rose-100 text-plum-ink text-sm px-5 py-2.5 transition-colors'
                                    >
                                        Call branch
                                    </a>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper >
        </Section >
    )
}