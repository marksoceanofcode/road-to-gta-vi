import { Inter } from "next/font/google"
import SplashSection from "@/components/SplashSection"
import CountDownSection from "@/components/CountDownSection"
import TimelineSection from "@/components/TimelineSection"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="">
      <SplashSection
        id="splash-section"
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
