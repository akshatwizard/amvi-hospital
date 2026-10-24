import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import TopBar from "@/components/layouts/top_bar";
import DesktopNav from "@/components/layouts/desktop_nav";
import SmoothScrollProvider from "@/providers/smooth_scroll_provider";
import Footer from "@/components/layouts/footer";
import { cn } from "@/lib/utils";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import JsonLd from "@/shared/json-ld";
import { hospitalSchema } from "@/lib/schema";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // Makes every relative canonical/OG URL absolute on the www domain.
  metadataBase: new URL(SITE_URL),
  title: "AMVI Hospitals Hyderabad | IVF, Maternity & Women's Care",
  description: "AMVI Hospitals, Hyderabad — IVF, IUI, maternity, normal & painless delivery, laparoscopy and PCOS care. Expert women's healthcare at Puppalaguda & Attapur.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero/home-hero.png", alt: "AMVI Hospitals, Hyderabad" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fraunces.variable, jakarta.variable, "font-sans", inter.variable)}
    >
      <SmoothScrollProvider>
        <body>
          <JsonLd data={hospitalSchema} />
          <TopBar />
          <Header />
          <DesktopNav />
          {children}
          <Footer />
        </body>
      </SmoothScrollProvider>
    </html>
  );
}
