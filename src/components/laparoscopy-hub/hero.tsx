import PageHero from '@/shared/page-hero'

export default function LaparoscopyHero() {
    return (
        <PageHero
            eyebrow="Laparoscopic Surgery"
            title="Laparoscopic Surgery in Hyderabad — Minimally Invasive Gynaecological Care"
            description="Keyhole surgery for fibroids, endometriosis, ovarian cysts and more — smaller incisions, less pain, faster recovery."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Laparoscopic Surgery" }]}
            cta={{ label: "Book a consultation", href: "/contact" }}
        // TODO: add image="/images/hero/laparoscopy-hero.png" once a hero photo is ready — falls back to the gradient hero for now
        />
    )
}
