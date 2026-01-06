import { Inter } from "next/font/google"
import SplashSection from "@/components/SplashSection"
import CountDownSection from "@/components/CountDownSection"
import RoadmapSection from "@/components/RoadmapSection"

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
      <RoadmapSection
        id="roadmap-section"
      />

    </main>
  )
}
