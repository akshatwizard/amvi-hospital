import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowUpRight, Baby, Bone, Brain, Dna, Flower2, HeartPulse, Microscope, ScanLine, Sprout, Stethoscope, Syringe,
    type LucideIcon,
} from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import JsonLd from '@/shared/json-ld'
import { cn } from '@/lib/utils'
import { SITE_URL } from '@/lib/site'
import { doctors } from '@/constants/doctors'
import { Doctor, DoctorSpeciality } from '@/types/doctor'

const specialityIcon: Record<DoctorSpeciality, { Icon: LucideIcon; label: string }> = {
    "gynaecology": { Icon: Flower2, label: "Obstetrics & Gynaecology" },
    "fertility": { Icon: Sprout, label: "Fertility & IVF" },
    "radiology": { Icon: ScanLine, label: "Radiology & Ultrasound" },
    "paediatrics": { Icon: Baby, label: "Paediatrics" },
    "internal-medicine": { Icon: HeartPulse, label: "Internal Medicine" },
    "psychology": { Icon: Brain, label: "Clinical Psychology" },
    "genetics": { Icon: Dna, label: "Genetic Counselling" },
    "embryology": { Icon: Microscope, label: "Embryology" },
    "anaesthesia": { Icon: Syringe, label: "Anaesthesia" },
    "orthopaedics": { Icon: Bone, label: "Orthopaedics" },
    "general-medicine": { Icon: Stethoscope, label: "General Medicine" },
}

function DoctorVisual({ doctor }: { doctor: Doctor }) {
    if (doctor.image) {
        return (
            <Image
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.designation}`}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className='object-cover object-top'
            />
        )
    }
    const { Icon, label } = specialityIcon[doctor.speciality ?? "gynaecology"]
    return (
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linear-to-br from-rose-100 via-rose-50 to-petal-white'>
            <span className='size-24 md:size-28 rounded-full bg-petal-white/80 border border-rose-200 flex items-center justify-center shadow-soft'>
                <Icon size={44} strokeWidth={1.4} className='text-rose-700' aria-hidden="true" />
            </span>
            <span className='text-xs tracking-[0.14em] uppercase text-rose-700/80'>{label}</span>
        </div>
    )
}

function DoctorRow({ doctor, index }: { doctor: Doctor; index: number }) {
    const reverse = index % 2 === 1
    return (
        <Reveal>
            <article
                id={doctor.id}
                className={cn(
                    'grid gap-6 md:gap-12 items-center scroll-mt-28',
                    reverse ? 'md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]' : 'md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]'
                )}
            >
                <div
                    className={cn(
                        'relative w-full mx-auto md:mx-0 rounded-card overflow-hidden border border-rose-100 bg-rose-50',
                        // Photos are portrait; icon panels are shorter so they don't leave a tall empty block.
                        doctor.image ? 'aspect-4/5 max-w-sm md:max-w-none' : 'aspect-4/3 md:aspect-square max-w-sm md:max-w-[22rem]',
                        reverse && 'md:order-2 md:justify-self-end'
                    )}
                >
                    <DoctorVisual doctor={doctor} />
                </div>

                <div className={cn('flex flex-col gap-3', reverse && 'md:order-1')}>
                    <span className='text-xs text-sage-600 bg-sage-50 rounded-full px-3 py-1 w-fit'>
                        {doctor.experience} years experience
                    </span>
                    <h3 className='font-serif text-2xl md:text-3xl text-plum-ink leading-tight'>{doctor.name}</h3>
                    <p className='text-sm md:text-base text-rose-700'>{doctor.designation}</p>
                    <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-1 max-w-xl'>{doctor.bio}</p>
                    <Link
                        href="/contact"
                        className='group inline-flex items-center gap-2 rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-5 py-2.5 w-fit mt-3 transition-colors'
                    >
                        Book a consultation
                        <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' aria-hidden="true" />
                    </Link>
                </div>
            </article>
        </Reveal>
    )
}

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
                            Specialists across gynaecology, fertility, radiology, paediatrics, anaesthesia and
                            general medicine work together under one roof, so referrals and follow-ups stay in-house.
                        </p>
                    </Reveal>
                </div>

                <div className='flex flex-col gap-14 md:gap-20'>
                    {doctors.map((doctor, i) => (
                        <DoctorRow key={doctor.id} doctor={doctor} index={i} />
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}
