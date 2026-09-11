import PageHero from "@/shared/page-hero";

export default function NiptHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Non-Invasive Prenatal Testing (NIPT)"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Chromosome Test" },
                { label: "NIPT" },
            ]}
            image="/images/hero/nipt-hero.png"
            imageAlt="Non-invasive prenatal testing at AMVI Hospital"
        />
    );
}