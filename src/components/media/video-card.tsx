"use client"

import { useState } from 'react'
import { Play } from 'lucide-react'
import type { Video } from '@/constants/media'

// Shows the YouTube thumbnail and only loads the player when clicked,
// so pages with many videos stay fast.
export default function VideoCard({ video }: { video: Video }) {
    const [playing, setPlaying] = useState(false)
    return (
        <figure className='flex flex-col gap-3'>
            <div className='relative w-full aspect-video rounded-card overflow-hidden bg-plum-ink'>
                {playing ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='absolute inset-0 size-full'
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label={`Play video: ${video.title}`}
                        className='group absolute inset-0 size-full cursor-pointer'
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                            alt=""
                            loading="lazy"
                            className='size-full object-cover opacity-90 group-hover:opacity-100 transition-opacity'
                        />
                        <span className='absolute inset-0 flex items-center justify-center'>
                            <span className='size-14 rounded-full bg-rose-700/90 group-hover:bg-rose-700 text-petal-white flex items-center justify-center shadow-soft transition-colors'>
                                <Play size={22} fill="currentColor" aria-hidden="true" />
                            </span>
                        </span>
                    </button>
                )}
            </div>
            <figcaption className='flex flex-col gap-1'>
                <span className='text-sm md:text-base text-plum-ink leading-snug'>{video.title}</span>
                {video.language && <span className='text-xs text-warm-slate'>In {video.language}</span>}
            </figcaption>
        </figure>
    )
}
