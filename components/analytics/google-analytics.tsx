"use client"

import Script from "next/script"
import { useEffect } from "react"

// Google Analytics 4 property for amvihospitals.com
export const GA_MEASUREMENT_ID = "G-N2P2PFMGRS"

type Gtag = (...args: unknown[]) => void

// Classifies clicks that mean "a patient is trying to reach us", so GA can
// report which pages produce calls, WhatsApp chats, directions and bookings.
function leadEventFor(href: string): { name: string; params: Record<string, string> } | null {
    if (href.startsWith("tel:")) {
        const number = href.replace("tel:", "")
        const branch = number.includes("9100009669") ? "Puppalaguda" : number.includes("8008842200") ? "Attapur" : "Other"
        return { name: "click_call", params: { phone_number: number, branch } }
    }
    if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        return { name: "click_whatsapp", params: { link_url: href } }
    }
    if (href.startsWith("mailto:")) {
        return { name: "click_email", params: { link_url: href } }
    }
    if (href.includes("google.com/maps") || href.includes("maps.app.goo.gl")) {
        return { name: "click_directions", params: { link_url: href } }
    }
    try {
        const url = new URL(href, window.location.origin)
        if (url.origin === window.location.origin && url.pathname === "/contact" && window.location.pathname !== "/contact") {
            return { name: "click_book_appointment", params: { from_page: window.location.pathname } }
        }
    } catch {
        // ignore malformed links
    }
    return null
}

export default function GoogleAnalytics() {
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
            if (!link) return
            const lead = leadEventFor(link.getAttribute("href") ?? "")
            const gtag = (window as unknown as { gtag?: Gtag }).gtag
            if (lead && gtag) {
                gtag("event", lead.name, { ...lead.params, page_path: window.location.pathname, link_text: link.textContent?.trim().slice(0, 80) })
            }
        }
        document.addEventListener("click", onClick, { capture: true })
        return () => document.removeEventListener("click", onClick, { capture: true })
    }, [])

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
    )
}
