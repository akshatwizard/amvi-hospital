"use client"

import { useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowUpRight, Award, Baby, Bone, Brain, Dna, Flower2, HeartPulse, Microscope, ScanLine, Sprout, Stethoscope, Syringe,
    type LucideIcon,
} from 'lucide-react'
import Modal from '@/shared/modal'
import type { Doctor, DoctorSpeciality } from '@/types/doctor'

type SpecialityInfo = { Icon: LucideIcon; label: string }

const specialityInfo: Record<DoctorSpeciality, SpecialityInfo> = {
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

// Same frame for every doctor: photos are cropped to 4:5, and doctors
// without a photo get their speciality icon in the same space.
function Visual({ doctor, spec, sizes }: { doctor: Doctor; spec: SpecialityInfo; sizes: string }) {
    if (doctor.image) {
        return (
            <Image
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.designation}`}
                fill
                sizes={sizes}
                className='object-cover object-top'
            />
        )
    }
    const { Icon } = spec
    return (
        <div className='absolute inset-0 flex items-center justify-center bg-linear-to-br from-rose-100 via-rose-50 to-petal-white'>
            <span className='size-24 rounded-full bg-petal-white/80 border border-rose-200 flex items-center justify-center shadow-soft'>
                <Icon size={42} strokeWidth={1.4} className='text-rose-700' aria-hidden="true" />
            </span>
        </div>
    )
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
    const spec = specialityInfo[doctor.speciality ?? "gynaecology"]
    const [open, setOpen] = useState(false)
    const titleId = useId()

    return (
        <article id={doctor.id} className='scroll-mt-28 h-full flex flex-col rounded-card overflow-hidden bg-white border border-rose-100 hover:border-rose-300 hover:shadow-soft transition-all'>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`View full profile of ${doctor.name}`}
                className='relative w-full aspect-4/5 bg-rose-50 cursor-pointer'
            >
                <Visual doctor={doctor} spec={spec} sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw" />
                <span className='absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-petal-white/90 backdrop-blur px-3 py-1 text-xs text-rose-700'>
                    <spec.Icon size={13} aria-hidden="true" />
                    {spec.label}
                </span>
            </button>

            <div className='flex flex-col gap-2 p-5 flex-1'>
                <span className='text-xs text-sage-600 bg-sage-50 rounded-full px-3 py-1 w-fit'>
                    {doctor.experience} years experience
                </span>
                <h3 className='font-serif text-xl text-plum-ink leading-tight mt-1'>{doctor.name}</h3>
                <p className='text-sm text-rose-700 leading-snug line-clamp-2 min-h-[2.5rem]'>{doctor.designation}</p>
                {/* Full bio stays in the page for search engines; it is shortened on screen. */}
                <p className='text-sm text-warm-slate leading-relaxed line-clamp-3'>{doctor.bio}</p>
                <div className='mt-auto pt-4 flex items-center justify-between gap-3'>
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className='text-sm text-rose-700 hover:text-rose-800 underline underline-offset-4 decoration-rose-300 cursor-pointer'
                    >
                        View full profile
                    </button>
                    <Link href="/contact" aria-label={`Book a consultation with ${doctor.name}`} className='inline-flex items-center gap-1 text-sm text-plum-ink hover:text-rose-700'>
                        Book <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId}>
                <div className='flex flex-col'>
                    <div className='relative w-full aspect-[4/3] sm:aspect-[16/10] bg-rose-50'>
                        <Visual doctor={doctor} spec={spec} sizes="512px" />
                    </div>
                    <div className='flex flex-col gap-3 p-6'>
                        <div className='flex flex-wrap gap-2'>
                            <span className='inline-flex items-center gap-1.5 text-xs text-rose-700 bg-rose-50 rounded-full px-3 py-1'>
                                <spec.Icon size={13} aria-hidden="true" />
                                {spec.label}
                            </span>
                            <span className='inline-flex items-center gap-1.5 text-xs text-sage-600 bg-sage-50 rounded-full px-3 py-1'>
                                <Award size={13} aria-hidden="true" />
                                {doctor.experience} years experience
                            </span>
                        </div>
                        <h3 id={titleId} className='font-serif text-2xl text-plum-ink leading-tight'>{doctor.name}</h3>
                        <p className='text-sm text-rose-700'>{doctor.designation}</p>
                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{doctor.bio}</p>
                        <Link
                            href="/contact"
                            className='group inline-flex items-center gap-2 rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-5 py-2.5 w-fit mt-2 transition-colors'
                        >
                            Book a consultation
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </Modal>
        </article>
    )
}
