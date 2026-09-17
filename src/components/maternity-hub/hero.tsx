import PageHero from '@/shared/page-hero'

export default function MaternityHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Maternity Care & Delivery Services in Hyderabad"
            description="Complete pregnancy care from your first scan through delivery and postnatal recovery — at our Puppalaguda and Attapur centres."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Maternity" }]}
            cta={{ label: "Book a consultation", href: "/contact" }}
        // TODO: add image="/images/hero/maternity-hero.png" once a hero photo is ready — falls back to the gradient hero for now
        />
    )
}
