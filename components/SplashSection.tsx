import {
  PlusCircleIcon,
} from "@heroicons/react/24/solid"

type SplashSectionProps = {
  id: string
}

const SplashSection = ({ id }: SplashSectionProps) => {
  return (
    <div id={id} className="h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.sanity.io/files/verbey6h/production/23416712fe3705edcb103b8c56052c0bcff58aac.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
        <div className="flex flex-col">
          <img
            className="w-64"
            src="/images/grand_theft_auto_vi_wordmark.png"
            alt="GTA VI Logo"
          />
          <div className="text-center">
            <h2 className="font-bold my-2 text-4xl">Release Date</h2>
            <h4 className="font-semibold mb-6 text-xl">
              November 19, 2026
            </h4>
            {/* <h6 className="animate-slideUp decoration-2 decoration-red-500 line-through text-base">
              May 26, 2026
              <br />
              Fall 2025
              <br />
              2025
            </h6> */}
          </div>
        </div>
        <a href="#cta-wishlist-section" className="animate-slideUp absolute bottom-4">
          <div className="bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid font-bold py-2 px-6 text-2xl rounded-full hover:border-light-yellow hover:text-light-yellow">
            {/* <PlusCircleIcon className="inline size-6" /> add to wishlist */}
            Wishlist GTA VI
          </div>
        </a>
      </div>
    </div>
  )
}

export default SplashSection
