import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Wrapper } from '@/shared/sections'
import { specialties } from '@/constants/specialties'
import { locations } from '@/constants/locations'
import { FacebookIcon, InstagramIcon } from '@/shared/social_icons'

const quick_links = [
    { name: "About AMVI", href: "/about" },
    { name: "About the Doctor", href: "/about/doctor" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/#faq" },
]

export default function Footer() {
    return (
        <footer className='w-full bg-plum-ink lg:px-16 md:px-10 px-5'>
            <Wrapper className='gap-12! py-16! md:py-20!'>
                <div className='grid md:grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-10 md:gap-8'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-serif text-2xl text-petal-white'>AMVI Hospitals</p>
                        <p className='text-sm text-rose-100/60 leading-relaxed max-w-xs'>
                            Hyderabad&apos;s trusted IVF, fertility and maternity hospital — complete,
                            personalised care for women through every stage of life.
                        </p>
                        <div className='flex items-center gap-3 mt-2'>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className='size-9 rounded-full border border-rose-800 flex items-center justify-center text-rose-100 hover:bg-rose-800 transition-colors'
                            >
                                <InstagramIcon size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className='size-9 rounded-full border border-rose-800 flex items-center justify-center text-rose-100 hover:bg-rose-800 transition-colors'
                            >
                                <FacebookIcon size={16} />
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-xs text-rose-100/50'>Specialities</p>
                        {specialties.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='text-sm text-rose-100/80 hover:text-petal-white transition-colors w-fit'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-xs text-rose-100/50'>Quick links</p>
                        {quick_links.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='text-sm text-rose-100/80 hover:text-petal-white transition-colors w-fit'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col gap-5'>
                        {locations.map((loc) => (
                            <div key={loc.name} className='flex flex-col gap-1.5'>
                                <p className='text-sm text-petal-white'>{loc.name}</p>
                                <p className='text-xs text-rose-100/60 leading-relaxed max-w-xs'>{loc.address}</p>
                                <a
                                    href={`tel:${loc.phoneHref}`}
                                    className='inline-flex items-center gap-2 text-xs text-rose-100/80 hover:text-petal-white transition-colors mt-1'
                                >
                                    <Phone size={12} />
                                    {loc.phoneDisplay}
                                </a>
                            </div>
                        ))}
                        <a
                            href="mailto:amvihospitals@gmail.com"
                            className='inline-flex items-center gap-2 text-xs text-rose-100/80 hover:text-petal-white transition-colors'
                        >
                            <Mail size={12} />
                            amvihospitals@gmail.com
                        </a>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-rose-900/60'>
                    <p className='text-xs text-rose-100/50'>
                        © {new Date().getFullYear()} AMVI Hospitals. All rights reserved.
                    </p>
                    <div className='flex items-center gap-5'>
                        <Link href="/privacy-policy" className='text-xs text-rose-100/50 hover:text-petal-white transition-colors'>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className='text-xs text-rose-100/50 hover:text-petal-white transition-colors'>
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}