import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import JsonLd from '@/shared/json-ld'
import { SITE_URL } from '@/lib/site'
import { doctors } from '@/constants/doctors'
import DoctorCard from './doctor-card'

// Lets Google connect each doctor to the hospital (Person + worksFor).
const teamSchema = doctors.map((d) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about/doctors#${d.id}`,
    name: d.name,
    jobTitle: d.designation,
    description: d.bio,
    ...(d.image ? { image: `${SITE_URL}${d.image}` } : {}),
    worksFor: { "@id": `${SITE_URL}/#organization` },
}))

// Every doctor gets an identical card (same photo frame, same layout);
// "View full profile" opens the complete bio.
export default function Team() {
    return (
        <Section className='bg-petal-white'>
            <JsonLd data={teamSchema} />
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
                    <Reveal delay={0.15}>
                        <p className='text-warm-slate text-sm md:text-base leading-relaxed mt-4'>
                            Specialists across fertility, gynaecology, radiology, paediatrics, anaesthesia and
                            general medicine work together under one roof, so referrals and follow-ups stay in-house.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6'>
                    {doctors.map((doctor) => (
                        <StaggerItem key={doctor.id} className='h-full'>
                            <DoctorCard doctor={doctor} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}
