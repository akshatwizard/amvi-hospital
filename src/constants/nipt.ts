export const niptIntro = [
    `NIPT is a prenatal screening test that looks at DNA from the baby's placenta in a sample of the mother's blood to identify whether there is an increased risk of certain genetic disorders.`,
    `NIPT is a screening test and cannot determine with certainty whether a baby has a chromosomal disorder. However, it is highly accurate for the three most common trisomies.`,
];

export const niptTestsFor = [
    "Down syndrome (Trisomy 21)",
    "Edwards syndrome (Trisomy 18)",
    "Patau syndrome (Trisomy 13)",
    "Turner syndrome",
];

export const niptReasons = [
    "A combined first-trimester screening test shows an increased risk of Down syndrome.",
    "The combined first-trimester screening was not performed because it was too late or unavailable.",
    "You want additional screening information before considering an invasive diagnostic test such as amniocentesis or chorionic villus sampling (CVS).",
    "You have an increased risk because of maternal age or a previous pregnancy or baby affected by a chromosomal condition.",
];

export const niptResults = [
    {
        title: "Negative / Low risk",
        description:
            "A negative, normal or low-risk result means the baby is unlikely to have the chromosomal disorders included in the screening.",
    },
    {
        title: "Positive / High risk",
        description:
            "A positive, abnormal or high-risk result means the baby is more likely to be affected. A diagnostic test such as CVS or amniocentesis may be recommended to confirm the result.",
    },
];

export const niptPerformance = [
    {
        chromosome: "Trisomy 21 (Down syndrome)",
        detectionRate: "More than 99%",
        falsePositiveRate: "0.1%",
    },
    {
        chromosome: "Trisomy 18",
        detectionRate: "95%",
        falsePositiveRate: "Less than 0.1%",
    },
    {
        chromosome: "Trisomy 13",
        detectionRate: "88%",
        falsePositiveRate: "88%",
    },
];

export const niptTiming = [
    "NIPT can be performed as early as 9 or 10 weeks of pregnancy depending on the laboratory.",
    "A nuchal translucency (NT) ultrasound in the first trimester can still provide additional information about the baby's health.",
    "Some pregnant individuals first undergo traditional screening such as eFTS or MSS and may then choose NIPT if the screening result is high risk.",
    "NIPT may also be considered when there are concerns identified during an ultrasound examination.",
];

export const niptBenefits = [
    {
        title: "Accuracy",
        description:
            "NIPT is more accurate for screening trisomies 21, 18 and 13 than traditional screening methods such as eFTS and MSS.",
    },
    {
        title: "Early timing",
        description:
            "NIPT can be performed as early as 9 weeks of pregnancy at some laboratories, subject to the laboratory's gestational-age requirements.",
    },
    {
        title: "No risk to pregnancy",
        description:
            "Because NIPT is performed using a maternal blood sample, it does not involve an invasive procedure and poses no procedural risk to the pregnancy.",
    },
];

export const niptLimitations = [
    {
        title: "Not a diagnostic test",
        description:
            "NIPT is a highly effective screening test but cannot provide a definitive yes-or-no diagnosis. Invasive diagnostic testing such as CVS or amniocentesis is required for confirmation.",
    },
    {
        title: "Incidental findings",
        description:
            "Some DNA in the maternal blood sample comes from the mother. In rare cases, NIPT may therefore identify a genetic difference in maternal DNA that requires further evaluation.",
    },
];

export const niptUnavailable = [
    "Vanishing twin — residual DNA from a fetus that has miscarried may remain in the mother's blood and affect interpretation of the result.",
    "Pregnancies involving more than two babies, such as triplets or quadruplets.",
];