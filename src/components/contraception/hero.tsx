import PageHero from '@/shared/page-hero'

export default function ContraceptionHero() {
    return (
        <PageHero
            eyebrow="Contraception"
            title="Contraception & Birth Control Options in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Contraception" },
            ]}
            image="/images/hero/contraception-hero.png"
            imageAlt="Contraception consultation at AMVI Hospital"
        />
    )
}