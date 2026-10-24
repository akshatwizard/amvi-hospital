import { ShieldAlert } from 'lucide-react'

// Mandatory notice for any page offering prenatal ultrasound (PCPNDT Act, 1994).
// Wording can be replaced with the hospital's approved text once confirmed.
export default function PcpndtNotice() {
    return (
        <aside
            role="note"
            className='mt-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50/70 p-4'
        >
            <ShieldAlert size={18} className='mt-0.5 shrink-0 text-rose-700' aria-hidden="true" />
            <p className='text-sm text-plum-ink leading-relaxed'>
                <strong>Sex determination of the foetus is not done at AMVI Hospitals.</strong>{' '}
                Prenatal sex determination is prohibited and punishable under the PCPNDT Act, 1994.
            </p>
        </aside>
    )
}
