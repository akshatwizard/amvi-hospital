"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Modal from '@/shared/modal'
import { doctors } from '@/constants/doctors'
import type { Doctor } from '@/types/doctor'

export default function TeamCarousel() {
    const [activeId, setActiveId] = useState(doctors[0].id)
    const [modalDoctor, setModalDoctor] = useState<Doctor | null>(null)
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const focusDoctor = (id: string) => {
        setActiveId(id)
        cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }

    const shift = (dir: 1 | -1) => {
        const idx = doctors.findIndex((d) => d.id === activeId)
        const next = doctors[(idx + dir + doctors.length) % doctors.length]
        focusDoctor(next.id)
    }

    return (
        <div className='relative'>
            <div className='flex items-center gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-[10%] py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none'>
                {doctors.map((doctor) => {
                    const active = doctor.id === activeId
                    return (
                        <div
                            key={doctor.id}
                            ref={(el) => { cardRefs.current[doctor.id] = el }}
                            onClick={() => focusDoctor(doctor.id)}
                            className={cn(
                                'snap-center shrink-0 rounded-card overflow-hidden cursor-pointer transition-all duration-500',
                                active
                                    ? 'relative w-64 h-96 bg-linear-to-br from-rose-600 to-rose-900'
                                    : 'relative flex flex-col w-44 h-80 bg-petal-white border border-rose-100'
                            )}
                        >
                            {active ? (
                                <>
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        sizes="256px"
                                        className='object-cover'
                                    />
                                    <div className='absolute inset-x-0 bottom-0 bg-linear-to-t from-plum-ink/95 via-plum-ink/70 to-transparent pt-16 pb-5 px-5 flex flex-col gap-3'>
                                        <div>
                                            <p className='font-serif text-lg text-petal-white leading-tight'>{doctor.name}</p>
                                            <p className='text-xs text-rose-200 mt-1'>{doctor.designation}</p>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setModalDoctor(doctor) }}
                                            className='self-start text-xs text-petal-white bg-petal-white/15 hover:bg-petal-white/25 rounded-full px-3.5 py-1.5 transition-colors'
                                        >
                                            Know more
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='relative flex-1 min-h-0'>
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            sizes="176px"
                                            className='object-cover'
                                        />
                                    </div>
                                    <div className='flex-1 min-h-0 flex flex-col justify-center gap-1 p-4'>
                                        <p className='font-serif text-sm text-plum-ink leading-tight'>{doctor.name}</p>
                                        <p className='text-xs text-warm-slate'>{doctor.designation}</p>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setModalDoctor(doctor) }}
                                            className='self-start text-xs text-rose-700 mt-1 hover:underline'
                                        >
                                            Know more
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>

            <button
                onClick={() => shift(-1)}
                aria-label="Previous doctor"
                className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center size-10 rounded-full bg-petal-white shadow-soft text-plum-ink hover:text-rose-700 transition-colors'
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={() => shift(1)}
                aria-label="Next doctor"
                className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center size-10 rounded-full bg-petal-white shadow-soft text-plum-ink hover:text-rose-700 transition-colors'
            >
                <ChevronRight size={18} />
            </button>

            <Modal open={!!modalDoctor} onClose={() => setModalDoctor(null)} labelledBy="doctor-modal-title">
                {modalDoctor && (
                    <div className='flex flex-col'>
                        <div className='relative w-full aspect-4/3'>
                            <Image src={modalDoctor.image} alt={modalDoctor.name} fill sizes="512px" className='object-cover' />
                        </div>
                        <div className='p-6 flex flex-col gap-3'>
                            <p id="doctor-modal-title" className='font-serif text-2xl text-plum-ink'>{modalDoctor.name}</p>
                            <p className='text-sm text-rose-700'>{modalDoctor.designation}</p>
                            <p className='text-xs text-sage-600 bg-sage-50 rounded-full px-3 py-1 w-fit'>{modalDoctor.experience} Years Experience</p>
                            <p className='text-sm text-warm-slate leading-relaxed mt-2'>{modalDoctor.bio}</p>
                            <Link
                                href="/contact"
                                className='inline-flex items-center justify-center rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-6 py-3 transition-colors mt-3'
                            >
                                Book a consultation
                            </Link>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}