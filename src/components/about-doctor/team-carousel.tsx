"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Modal from '@/shared/modal'
import { doctors } from '@/constants/doctors'
import type { Doctor } from '@/types/doctor'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel'

export default function TeamCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [modalDoctor, setModalDoctor] = useState<Doctor | null>(null)

    useEffect(() => {
        if (!api) return
        setSelectedIndex(api.selectedScrollSnap())
        api.on("select", () => setSelectedIndex(api.selectedScrollSnap()))
    }, [api])

    return (
        <div className='relative md:h-110 h-90'>
            <Carousel
                setApi={setApi}
                opts={{ align: "center", loop: true }}
                className="w-full h-full"
            >
                <CarouselContent className="-ml-4 items-center h-full!">
                    {
                        doctors.map((doctor, index) => (
                            <CarouselItem
                                key={doctor.id}
                                className="pl-4 basis-[75%] sm:basis-[45%] md:basis-1/4 h-full"
                            >
                                <DoctorCard
                                    doctor={doctor}
                                    is_active={index === selectedIndex}
                                    on_select={() => api?.scrollTo(index)}
                                    viewDoc={() => setModalDoctor(doctor)}
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>

            <button
                onClick={() => api?.scrollPrev()}
                aria-label="Previous doctor"
                className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center size-10 rounded-full bg-petal-white shadow-soft text-plum-ink hover:text-rose-700 transition-colors'
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={() => api?.scrollNext()}
                aria-label="Next doctor"
                className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center size-10 rounded-full bg-petal-white shadow-soft text-plum-ink hover:text-rose-700 transition-colors'
            >
                <ChevronRight size={18} />
            </button>

            <Modal open={!!modalDoctor} onClose={() => setModalDoctor(null)} labelledBy="doctor-modal-title">
                {modalDoctor && (
                    <div className='flex flex-col pt-5'>
                        <div className='relative w-full aspect-4/3'>
                            <Image
                                src={modalDoctor.image}
                                alt={modalDoctor.name}
                                fill
                                sizes="512px"
                                className='object-cover object-top'
                            />
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

type Props = {
    doctor: Doctor,
    is_active: boolean,
    on_select: () => void,
    viewDoc: () => void,
}

const spring = { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.6 }

function DoctorCard({ doctor, is_active, on_select, viewDoc }: Props) {
    return (
        <div className='w-full h-full overflow-hidden' onClick={on_select}>
            <motion.div
                layout
                transition={spring}
                className={cn(
                    'relative overflow-hidden w-full border border-black/5 flex items-center justify-center h-[90%] flex-col gap-4 bg-white p-3 rounded-3xl',
                    is_active && "p-0 h-full border-rose-100"
                )}
            >
                <motion.div
                    layout
                    transition={spring}
                    className={cn(
                        'h-[55%] shrink-0 bg-rose-100 rounded-xl w-full overflow-hidden pt-3',
                        is_active && "rounded-3xl bg-linear-to-t from-rose-600 to-rose-50 pt-5 h-full"
                    )}
                >
                    <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={500}
                        height={500}
                        className={cn(
                            'w-full h-full object-contain scale-110 transition-scale duration-300 ease-in-out',
                            is_active && "scale-115 h-full w-full"
                        )}
                    />
                </motion.div>

                <motion.div
                    layout
                    transition={spring}
                    className={cn(
                        'relative flex-1 bg-white transition-colors duration-500 md:space-y-4 space-y-2',
                        is_active && "absolute z-10 md:inset-x-3 inset-x-1.5 md:bottom-3 bottom-1.5 bg-rose-50/20 backdrop-blur-lg md:p-5 p-2 rounded-xl"
                    )}
                >
                    <div>
                        <p className={cn(
                            'font-serif! md:text-2xl text-lg text-rose-600 leading-tight',
                        )}>
                            {doctor.name}
                        </p>
                        <p className={cn('md:text-sm text-xs text-zinc-500 mt-1',
                            is_active && "text-rose-500"
                        )}>
                            {doctor.designation}
                        </p>
                        <p className={cn('md:text-xs text-[10px] text-rose-200 mt-1 line-clamp-2',
                            is_active && "text-rose-400"
                        )}>
                            {doctor.bio}
                        </p>
                    </div>
                    <button
                        onClick={viewDoc}
                        className='self-start! cursor-pointer text-xs text-petal-white bg-rose-600 hover:bg-rose-500 rounded-full md:px-3.5 md:py-1.5 py-1 px-2 transition-colors'
                    >
                        Know more
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}