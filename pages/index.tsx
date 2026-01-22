import { Inter } from "next/font/google"
import SplashSection from "@/components/SplashSection"
import CountDownSection from "@/components/CountDownSection"
import TimelineSection from "@/components/TimelineSection"
import CtaWishlistSection from "@/components/CtaWishlistSection"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="">
      <SplashSection
        id="splash-section"
      />
      <CtaWishlistSection
        id="cta-wishlist-section"
      />
      <CountDownSection
        id="count-down-section"
      />
      <TimelineSection
        id="timeline-section"
      />

    </main>
  )
}
