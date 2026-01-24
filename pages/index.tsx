import { Inter } from "next/font/google"
import SplashSection from "@/components/SplashSection"
import CountDownSection from "@/components/CountDownSection"
import TimelineSection from "@/components/TimelineSection"
import CtaWishlistSection from "@/components/CtaWishlistSection"
import Footer from "@/components/Footer"
import CustomHead from "@/components/CustomHead"
import { indexMetaData } from "@/data/metaData"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <CustomHead pageMetaData={indexMetaData} />
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
        <Footer
          id="footer-section"
        />
      </main>
    </>
    
  )
}
