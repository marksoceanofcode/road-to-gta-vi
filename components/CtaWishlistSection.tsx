import { useState } from "react"

type CtaWishlistSectionProps = {
  id: string
}

const CtaWishlistSection = ({ id }: CtaWishlistSectionProps) => {
  const imgClasses = "text-white h-6 hover:cursor-pointer lg:h-8"
  const psGlowClasses = "drop-shadow-[0_0_16px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_16px_rgba(34,211,238,1)] transition duration-300"
  const xbGlowClasses = "drop-shadow-[0_0_16px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_16px_rgba(74,222,128,1)] transition duration-300"

  return (
    <div id={id}>
      <div className="flex flex-col items-center justify-center py-16 lg:py-24">
        <p className="cursor-default mb-6 text-center uppercase font-bold text-5xl lg:mb-8 lg:text-7xl">
          Wishlist Now
        </p>
        <div className="flex flex-row space-x-8">
          <div>
            <a href="https://www.playstation.com/en-us/games/grand-theft-auto-vi/" target="_blank">
              <img className={imgClasses + " " + psGlowClasses} src="https://cdn.sanity.io/images/verbey6h/production/caeeba428727e3824bbe9efcd28c651b2abbf740-10667x2321.svg" alt="PS5 Logo" />
            </a>
          </div>
          <div>
            <a href="https://www.xbox.com/en-US/games/store/grand-theft-auto-vi/9NL3WWNZLZZN" target="_blank">
              <img className={imgClasses + " " + xbGlowClasses} src="https://cdn.sanity.io/images/verbey6h/production/23e8fbdbd4672b110cbaae759b547485a8fd215c-228x29.svg" alt="Xbox Series X|S Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaWishlistSection
