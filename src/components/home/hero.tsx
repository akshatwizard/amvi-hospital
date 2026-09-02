import Image from 'next/image'
import Link from 'next/link'
import { Phone, HeartHandshake } from 'lucide-react'
import HeroBg from '@/shared/hero_bg'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { Star } from 'lucide-react'

export default function HomeHero() {
    const initials = ["PS", "RK", "MN"]
    const initialColors = ["bg-rose-600", "bg-rose-700", "bg-sage-500"]
    return (
        <HeroBg className='min-h-screen'>
            <div className='w-full h-full grid md:grid-cols-[1.2fr_1fr] grid-cols-1 items-center gap-12 md:gap-8'>
                <div className='flex flex-col gap-6 md:pr-6'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-100 rounded-full px-3.5 py-1.5 w-fit'>
                            <span className='size-1.5 rounded-full bg-rose-500' />
                            Hyderabad's trusted women's hospital
                        </span>
                    </Reveal>

                    <RevealText
                        as="h1"
                        text="Compassionate care, from first consult to delivery day"
                        className='text-4xl md:text-5xl lg:text-6xl text-plum-ink leading-[1.1]'
                        delay={0.1}
                    />

                    <Reveal delay={0.3}>
                        <p className='text-warm-slate text-sm md:text-base max-w-lg'>
                            Specialised gynaecology, fertility and maternity care built around you —
                            led by doctors who've guided over 30,000 families through every stage of the journey.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className='flex flex-wrap items-center gap-4 pt-2'>
                            <Link
                                href="/contact"
                                className='inline-flex items-center rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-6 py-3.5 transition-colors'
                            >
                                Book an appointment
                            </Link>

                            <a href="tel:+919100009669"
                                className='inline-flex items-center gap-2 text-sm text-plum-ink hover:text-rose-700 transition-colors'
                            >
                                <Phone size={16} className='text-rose-500' />
                                +91 91000 09669
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <p className='text-xs text-warm-slate pt-4 border-t border-rose-100 max-w-md'>
                            20+ years of experience · 20,000+ successful surgeries · 30,000+ happy families
                        </p>
                    </Reveal>
                </div>

                <div className='relative w-full h-full flex items-center justify-center'>
                    <Reveal delay={0.2} y={40} className='relative w-full overflow-hidden'>
                        <Image
                            src="/images/hero/home-hero.png"
                            alt="Doctor consulting a patient at AMVI Hospital"
                            width={1080}
                            height={1080}
                            priority
                            sizes="(min-width: 768px) 480px, 90vw"
                            className='object-cover w-auto h-full'
                        />
                    </Reveal>

                    <Reveal delay={0.4} className='absolute md:bottom-4 -bottom-6 left-0 md:-left-8 bg-petal-white/20 backdrop-blur rounded-lg shadow-soft px-5 py-4 flex flex-col gap-3 w-74'>
                        {/* Avatar stack + trust pill */}
                        <div className='flex items-center gap-2'>
                            <div className='flex -space-x-2 shrink-0'>
                                {initials.map((initial, i) => (
                                    <span
                                        key={initial}
                                        className={`lg:size-8 size-6 rounded-full lg:ring-2 ring-1 ring-petal-white flex items-center justify-center lg:text-[10px] text-[8px] font-medium text-petal-white ${initialColors[i]}`}
                                    >
                                        {initial}
                                    </span>
                                ))}
                            </div>
                            <span className='text-[11px] text-rose-700 bg-rose-50 rounded-full px-2.5 py-1'>+30k</span>
                            <span className='ml-auto text-[11px] text-sage-600 bg-sage-50 rounded-full px-2.5 py-1'>Trusted</span>
                        </div>

                        <p className='text-xs text-plum-ink leading-snug'>
                            Compassionate care, trusted by families across Hyderabad.
                        </p>

                        <div className='flex items-end justify-between pt-1 border-t border-rose-100'>
                            <div className='flex items-start gap-1 pt-2'>
                                <span className='font-serif lg:text-7xl text-5xl  text-plum-ink leading-none'>4.4</span>
                                <Star size={18} className='text-rose-500 mb-0.5' fill="currentColor" />
                            </div>
                            <span className='text-[10px] text-warm-slate uppercase tracking-wide pt-2'>Google Reviews</span>
                        </div>
                    </Reveal>
                </div>
            </div >
        </HeroBg >
    )
}