import { useState } from "react"

type CountDownSectionProps = {
  id: string
}

const CountDownSection = ({ id }: CountDownSectionProps) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const countDownDate = new Date("Nov 19, 2026 00:00:00").getTime()

  const gradientClipText = "group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-sunset-orange group-hover:via-sunset-pink group-hover:to-sunset-purple group-hover:text-transparent"
  const gridHeaderClasses = "bg-light-yellow text-midnight-blue rounded"

  // Update the count down every 1 second
  const updateCountDown = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime()

    // Find the distance between now and the count down date
    let distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

    // Display the result in the element with id="demo"
    //document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(updateCountDown)
      //document.getElementById("demo").innerHTML = "EXPIRED"
    }
  }, 1000)

  return (
    <div id={id} className="bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('images/Real_Dimez_ultrawide.jpg')"}}>
      <div className="flex items-center justify-center h-96 lg:h-[512px]">
        <div className={"bg-midnight-blue/50 backdrop-blur-md gta-border-gradient-rounded group max-w-sm p-4 my-4 rounded-2xl w-full lg:p-8 lg:my-8 lg:max-w-xl"}>
          
          {/* <p className={"text-center text-xl " + gradientClipText}>
            <span className="font-bold text-4xl">Release Countdown</span><br/>
            {days}d {hours}h {minutes}m {seconds}s
          </p> */}

          <p className={"mb-4 text-center text-xl"}>
            <span className="font-bold text-2xl lg:text-4xl">Release Date Countdown</span>
          </p>

          <div className="grid grid-cols-4 gap-2 text-center text-lg lg:text-xl">
            <div className={gridHeaderClasses}>
              days
            </div>
            <div className={gridHeaderClasses}>
              hours
            </div>
            <div className={gridHeaderClasses}>
              minutes
            </div>
            <div className={gridHeaderClasses}>
              seconds
            </div>{/* End First Row */}
            <div>
              {days} 
            </div>
            <div>
              {hours} 
            </div>
            <div>
              {minutes} 
            </div>
            <div>
              {seconds}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountDownSection
