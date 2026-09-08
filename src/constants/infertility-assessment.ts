import { NamedGroup } from "@/types/condition-page"

export const assessmentIntro: string =
    "The first visit with a fertility specialist usually involves a detailed medical history and a physical exam. You will be asked questions about your menstrual period, abnormal vaginal bleeding or discharge, pelvic pain, and disorders that can affect reproduction, such as thyroid disease. You and your partner will be asked about health concerns and sexual history."

export const assessmentQuestionGroups: NamedGroup[] = [
    {
        heading: "Health concerns you'll be asked about",
        items: [
            "Medications (both prescription and over-the-counter) and herbal remedies",
            "Illnesses, including STIs and past surgery",
            "Birth defects in your family",
            "Past pregnancies and their outcomes",
            "Use of tobacco, alcohol, and illegal drugs",
            "Use of marijuana (recreational or medical)",
        ],
    },
    {
        heading: "Sexual history you'll be asked about",
        items: [
            "Methods of birth control",
            "How long you have been trying to get pregnant",
            "How often you have sex and whether you have difficulties",
            "If you use lubricants during sex",
            "Past sexual relationships",
        ],
    },
]

export const testingIntro: string =
    "Tests for infertility include laboratory tests, imaging tests, and certain procedures. Imaging tests and procedures look at the reproductive organs and how they work. Laboratory tests often involve testing samples of blood or semen."

export const maleTesting: string =
    "Testing for a man often involves a semen analysis (sperm count) to assess the amount of sperm, the shape of the sperm, and the way the sperm move. Blood tests measure levels of male reproductive hormones — too much or too little can cause problems with making sperm or with having sex. In some cases, an ultrasound exam of the scrotum may be done to look for problems in the testicles."

export const femaleLabTestsIntro: string =
    "Laboratory tests may include blood and urine tests. A urine test can tell when and if you ovulate. Blood tests can measure:"

export const femaleLabTests: string[] = [
    "Progesterone levels (to see if you have ovulated)",
    "Thyroid function (problems with the thyroid may cause infertility)",
    "Levels of the hormone prolactin (high levels can disrupt ovulation)",
    "Ovarian reserve (egg supply)",
]

export const femaleImagingIntro: string =
    "Imaging tests and procedures may include:"

export const femaleImagingTests: string[] = [
    "Ultrasound exam",
    "Sonohysterography",
    "Hysterosalpingography",
    "Hysteroscopy",
    "Laparoscopy",
]

export const femaleTestingNote: string =
    "You may not need all of these tests and procedures — some are done based on the results of previous ones. You may also be asked to track your basal body temperature (BBT) at home."