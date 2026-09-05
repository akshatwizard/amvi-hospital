import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import TopBar from "@/components/layouts/top_bar";
import DesktopNav from "@/components/layouts/desktop_nav";
import SmoothScrollProvider from "@/providers/smooth_scroll_provider";
import Footer from "@/components/layouts/footer";
import { cn } from "@/lib/utils";

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
  title: "AMVI Hospitals Hyderabad | IVF, Maternity, Laparoscopy & Womens Care | Puppalaguda & Attapur",
  description: "AMVI Hospitals, Hyderabad — IVF, IUI, Maternity, Normal & Painless Delivery, Laparoscopy, PCOS & Womens Healthcare. Expert care at Puppalaguda & Attapur. Book appointment today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fraunces.variable, jakarta.variable, "font-sans", inter.variable)}
    >
      <SmoothScrollProvider>
        <body>
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
