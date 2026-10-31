import { MessageCircle } from 'lucide-react'

// Floating WhatsApp button shown on every page (the old website had one too).
// Opens a chat with the Puppalaguda number, with a greeting already typed.
const WHATSAPP_NUMBER = "919100009669"
const GREETING = "Hello AMVI Hospitals, I would like to book a consultation."

export default function WhatsAppButton() {
    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with AMVI Hospitals on WhatsApp"
            className='fixed z-30 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-6 md:bottom-6 inline-flex items-center gap-2 rounded-full bg-sage-500 hover:bg-sage-600 text-petal-white shadow-soft size-13 md:size-auto justify-center md:px-5 md:py-3.5 transition-colors print:hidden'
        >
            <MessageCircle size={22} aria-hidden="true" />
            <span className='hidden md:inline text-sm'>WhatsApp us</span>
        </a>
    )
}
