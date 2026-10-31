import { SITE_URL } from "./site"
import type { ContactData } from "./contact_validation"

// Builds the email the hospital receives for each appointment request.
// Everything that came from the visitor is escaped before it goes into HTML.

export type EnquiryContext = {
    fromPath?: string
    fromTitle?: string
    landingPath?: string
    landingTitle?: string
    source?: string
    pagesViewed?: number
}

const PATH_RE = /^\/[A-Za-z0-9\-_/.]*$/

const oneLine = (v: unknown, max: number) =>
    typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max) : ""

const cleanPath = (v: unknown) => {
    const s = oneLine(v, 200)
    return s && PATH_RE.test(s) && !s.includes("..") ? s : undefined
}

// The visit details are optional extras: anything malformed is dropped, never rejected.
export function sanitizeContext(raw: unknown): EnquiryContext {
    const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>
    const n = Number(r.pagesViewed)
    return {
        fromPath: cleanPath(r.fromPath),
        fromTitle: oneLine(r.fromTitle, 150) || undefined,
        landingPath: cleanPath(r.landingPath),
        landingTitle: oneLine(r.landingTitle, 150) || undefined,
        source: oneLine(r.source, 100) || undefined,
        pagesViewed: Number.isInteger(n) && n > 0 && n < 1000 ? n : undefined,
    }
}

const escapeHtml = (str: string) =>
    str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")

// "+91 98765-43210" / "098765 43210" -> "9876543210"
function tenDigits(phone: string) {
    const d = phone.replace(/\D/g, "")
    if (d.length === 12 && d.startsWith("91")) return d.slice(2)
    if (d.length === 11 && d.startsWith("0")) return d.slice(1)
    return d.slice(-10)
}

function pageLabel(path?: string, title?: string) {
    if (!path) return "Contact page (opened directly)"
    if (path === "/") return "Home page"
    return title || path
}

function istNow(date: Date) {
    return new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(date) + " IST"
}

export function buildEnquiryEmail(data: ContactData, ctx: EnquiryContext, now = new Date()) {
    const digits = tenDigits(data.phone)
    const phoneDisplay = `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
    const telHref = `tel:+91${digits}`
    const firstName = data.name.split(" ")[0]
    const waText = encodeURIComponent(
        `Hello ${firstName}, this is AMVI Hospitals. Thank you for your appointment request for ${data.service}. When would be a good time to call you?`
    )
    const waHref = `https://wa.me/91${digits}?text=${waText}`

    const fromLabel = pageLabel(ctx.fromPath, ctx.fromTitle)
    const fromUrl = ctx.fromPath ? `${SITE_URL}${ctx.fromPath === "/" ? "" : ctx.fromPath}` : `${SITE_URL}/contact`
    const landingDiffers = ctx.landingPath && ctx.landingPath !== ctx.fromPath && ctx.landingPath !== "/contact"
    const landingLabel = pageLabel(ctx.landingPath, ctx.landingTitle)
    const landingUrl = ctx.landingPath ? `${SITE_URL}${ctx.landingPath === "/" ? "" : ctx.landingPath}` : ""
    const submittedAt = istNow(now)

    const shortFrom = fromLabel.length > 60 ? `${fromLabel.slice(0, 57)}…` : fromLabel
    const subject = `New appointment request: ${data.service} – ${data.name} | via ${shortFrom}`

    const e = {
        name: escapeHtml(data.name),
        service: escapeHtml(data.service),
        message: data.message ? escapeHtml(data.message).replace(/\n/g, "<br>") : "<span style=\"color:#9a8a8f;\">No message written</span>",
        fromLabel: escapeHtml(fromLabel),
        landingLabel: escapeHtml(landingLabel),
        source: escapeHtml(ctx.source ?? "Not known"),
    }

    const row = (label: string, value: string) => `
        <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f7e3f0;color:#6b5a5f;font-size:13px;width:150px;vertical-align:top;">${label}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f7e3f0;color:#2c1220;font-size:14px;vertical-align:top;">${value}</td>
        </tr>`

    const link = (href: string, text: string) =>
        `<a href="${escapeHtml(href)}" style="color:#8c296c;text-decoration:underline;">${text}</a>`

    const html = `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#fff7f6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff7f6;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #f7e3f0;border-radius:12px;overflow:hidden;">
    <tr>
        <td style="background:#8c296c;padding:18px 24px;">
            <div style="color:#fff7f6;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;">AMVI Hospitals · Website</div>
            <div style="color:#ffffff;font-size:20px;font-weight:bold;margin-top:4px;">New appointment request</div>
        </td>
    </tr>
    <tr>
        <td style="padding:22px 24px 6px;">
            <p style="margin:0 0 6px;font-size:15px;color:#2c1220;line-height:1.5;">
                <strong>${e.name}</strong> has asked for a consultation for <strong>${e.service}</strong>.
            </p>
            <p style="margin:0;font-size:14px;color:#6b5a5f;line-height:1.5;">
                Sent from: <strong style="color:#2c1220;">${e.fromLabel}</strong>. Please call the patient to confirm a time.
            </p>
        </td>
    </tr>
    <tr>
        <td style="padding:16px 24px 4px;">
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                <td style="padding-right:10px;padding-bottom:8px;">
                    <a href="${telHref}" style="display:inline-block;background:#8c296c;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:11px 20px;border-radius:999px;">Call ${phoneDisplay}</a>
                </td>
                <td style="padding-bottom:8px;">
                    <a href="${escapeHtml(waHref)}" style="display:inline-block;background:#1f8f4e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:11px 20px;border-radius:999px;">Reply on WhatsApp</a>
                </td>
            </tr></table>
        </td>
    </tr>
    <tr>
        <td style="padding:14px 24px 0;">
            <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#8c296c;font-weight:bold;">Patient details</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", e.name)}
                ${row("Phone", link(telHref, phoneDisplay))}
                ${row("Service", e.service)}
                ${row("Message", e.message)}
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding:22px 24px 0;">
            <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#8c296c;font-weight:bold;">Where the request came from</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Sent from page", link(fromUrl, e.fromLabel))}
                ${landingDiffers ? row("First page visited", link(landingUrl, e.landingLabel)) : ""}
                ${row("Found the website via", e.source)}
                ${ctx.pagesViewed ? row("Pages viewed", String(ctx.pagesViewed)) : ""}
                ${row("Submitted on", submittedAt)}
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding:22px 24px 24px;">
            <p style="margin:0;font-size:12px;color:#9a8a8f;line-height:1.5;">
                Sent automatically by the appointment form on ${link(SITE_URL, "amvihospitals.com")}.
                The patient did not give an email address, so please reply by phone or WhatsApp rather than replying to this email.
            </p>
        </td>
    </tr>
</table>
</td></tr>
</table>
</body>
</html>`

    const text = [
        `NEW APPOINTMENT REQUEST – AMVI Hospitals website`,
        ``,
        `${data.name} has asked for a consultation for ${data.service}.`,
        `Please call the patient to confirm a time.`,
        ``,
        `PATIENT DETAILS`,
        `Name:     ${data.name}`,
        `Phone:    ${phoneDisplay}`,
        `Service:  ${data.service}`,
        `Message:  ${data.message || "(no message written)"}`,
        ``,
        `WHERE THE REQUEST CAME FROM`,
        `Sent from page:        ${fromLabel} – ${fromUrl}`,
        ...(landingDiffers ? [`First page visited:    ${landingLabel} – ${landingUrl}`] : []),
        `Found the website via: ${ctx.source ?? "Not known"}`,
        ...(ctx.pagesViewed ? [`Pages viewed:          ${ctx.pagesViewed}`] : []),
        `Submitted on:          ${submittedAt}`,
        ``,
        `Call: +91${digits}`,
        `WhatsApp: https://wa.me/91${digits}`,
        ``,
        `Sent automatically by the appointment form on amvihospitals.com. The patient did not give an email address, so please reply by phone or WhatsApp.`,
    ].join("\n")

    return { subject: subject.replace(/[\r\n]+/g, " "), html, text }
}
