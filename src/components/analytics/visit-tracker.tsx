"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Remembers, for the current browser tab only (sessionStorage), how a visitor
// reached the site and which pages they looked at. The appointment form sends
// this along so the enquiry email can say which page the request came from.
// Nothing is stored after the tab is closed, and nothing personal is recorded.

const KEY = "amvi_visit"
const MAX_PAGES = 12

type PageView = { path: string; title: string }
type Visit = { source: string; landing: PageView | null; pages: PageView[] }

export type VisitContext = {
    fromPath?: string
    fromTitle?: string
    landingPath?: string
    landingTitle?: string
    source?: string
    pagesViewed?: number
}

function cleanTitle(title: string) {
    // "Endometriosis Treatment in Hyderabad | AMVI Hospitals" -> "Endometriosis Treatment in Hyderabad"
    return title.split(" | ")[0].trim().slice(0, 150)
}

function trafficSource(): string {
    const params = new URLSearchParams(window.location.search)
    const utm = params.get("utm_source")
    if (utm) {
        const medium = params.get("utm_medium")
        const campaign = params.get("utm_campaign")
        return [utm, medium, campaign].filter(Boolean).join(" / ")
    }
    if (params.has("gclid") || params.has("gbraid") || params.has("wbraid")) return "Google Ads"
    if (params.has("fbclid")) return "Facebook / Instagram"

    let host = ""
    try {
        host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : ""
    } catch {
        host = ""
    }
    if (!host || host.endsWith("amvihospitals.com")) return "Direct (typed the address, a bookmark or an app)"
    if (/(^|\.)google\./.test(host)) return "Google search"
    if (host.includes("bing.")) return "Bing search"
    if (host.includes("yahoo.") || host.includes("duckduckgo.")) return "Web search"
    if (host.includes("facebook.") || host === "fb.com" || host.startsWith("l.facebook")) return "Facebook"
    if (host.includes("instagram.")) return "Instagram"
    if (host.includes("youtube.")) return "YouTube"
    if (host.includes("whatsapp.")) return "WhatsApp"
    if (host.includes("chatgpt.") || host.includes("openai.") || host.includes("perplexity.") || host.includes("gemini.") || host.includes("claude.ai")) return `AI assistant (${host})`
    return `Another website (${host})`
}

function read(): Visit | null {
    try {
        const raw = sessionStorage.getItem(KEY)
        return raw ? (JSON.parse(raw) as Visit) : null
    } catch {
        return null
    }
}

function write(visit: Visit) {
    try {
        sessionStorage.setItem(KEY, JSON.stringify(visit))
    } catch {
        // storage blocked (private mode etc.) — the form still works without it
    }
}

// Called by the appointment form when it is submitted.
export function getVisitContext(): VisitContext {
    const visit = read()
    if (!visit) return {}
    const current = window.location.pathname
    const from = [...visit.pages].reverse().find((p) => p.path !== current)
    return {
        fromPath: from?.path,
        fromTitle: from?.title,
        landingPath: visit.landing?.path,
        landingTitle: visit.landing?.title,
        source: visit.source,
        pagesViewed: visit.pages.length,
    }
}

export default function VisitTracker() {
    const pathname = usePathname()

    useEffect(() => {
        // Wait briefly so document.title has switched to the new page's title.
        const timer = window.setTimeout(() => {
            const view: PageView = { path: pathname, title: cleanTitle(document.title) }
            const visit = read() ?? { source: trafficSource(), landing: view, pages: [] }
            const last = visit.pages[visit.pages.length - 1]
            if (!last || last.path !== view.path) {
                visit.pages = [...visit.pages, view].slice(-MAX_PAGES)
            }
            write(visit)
        }, 400)
        return () => window.clearTimeout(timer)
    }, [pathname])

    return null
}
