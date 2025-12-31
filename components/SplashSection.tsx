type SplashSectionProps = {
  id: string
}

const SplashSection = ({ id }: SplashSectionProps) => {
  return (
    <div id={id} className="h-screen">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <img
            className="w-64"
            src="/images/grand_theft_auto_vi_wordmark.png"
            alt="GTA VI Logo"
          />
          <div className="text-center">
            <h2 className="font-bold my-2 text-4xl">Release Date</h2>
            <h4 className="font-semibold text-xl">November 19th, 2026</h4>
            <h6 className="decoration-2 decoration-red-500 line-through text-base">
              May 26, 2026
              <br />
              Fall 2025
              <br />
              2025
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashSection
