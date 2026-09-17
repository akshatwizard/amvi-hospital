import PageHero from '@/shared/page-hero'

export default function MaleInfertilityHero() {
    return (
        <PageHero
            eyebrow="Male Infertility"
            title="Male Infertility Treatment in Hyderabad — Causes, Tests & ICSI"
            description="40% of infertility cases involve a male factor. Straightforward testing, and treatment options that work for almost every diagnosis."
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility", href: "/infertility" },
                { label: "Male Infertility" },
            ]}
            cta={{ label: "Book a consultation", href: "/contact" }}
        // TODO: add image="/images/hero/male-infertility-hero.png" once a hero photo is ready — falls back to the gradient hero for now
        />
    )
}
