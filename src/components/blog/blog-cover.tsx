import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Blog, blogImage } from '@/constants/blogs'

// Blog card image. Falls back to a branded panel when the post has no usable
// image, so a missing file never shows as a broken image.
export default function BlogCover({ blog, sizes, className }: { blog: Blog; sizes: string; className?: string }) {
    const src = blogImage(blog)
    if (src) {
        return <Image src={src} alt={blog.title} fill sizes={sizes} className={cn('object-cover', className)} />
    }
    return (
        <div
            aria-hidden="true"
            className='absolute inset-0 flex items-end bg-linear-to-br from-rose-100 via-rose-50 to-petal-white p-5'
        >
            <span className='font-serif text-lg text-rose-700/70 leading-snug line-clamp-3'>{blog.category}</span>
        </div>
    )
}
