import { useEffect, useRef, useState } from 'react'
import TimelineCard from "@/components/TimelineCard"
import timelineData from "@/data/timelineData.json"
import TimelineVideoCard from "./TimelineVideoCard"

type TimelineSectionProps = {
  id: string
}

interface TimelineDimensions {
  height: number
  width: number
}

const TimelineSection = ({ id }: TimelineSectionProps) => {
  const cardCss =
    "bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid p-4 rounded-2xl w-72 lg:w-150"
  const gradient =
    "bg-gradient-to-b from-sunset-orange via-sunset-pink to-sunset-purple"

  const data = timelineData.data

  const [dimensions, setDimensions] = useState<TimelineDimensions>({height: 1880, width: 1328})

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = divRef.current
    if(!element) return
    
    const resizeObserver = new ResizeObserver((entries) => { //Gets called by the observer each time the element is resized
      for(const entry of entries){
        const {height, width} = entry.contentRect
        setDimensions({height, width})
      }
    })

    resizeObserver.observe(element) //Begin observing the element

    return () => {
      resizeObserver.disconnect()
    }

  }, []) //Watch for the element with the reference

  return (
    <div id={id} className="min-h-screen max-w-340 mx-auto relative">
      <div className="flex items-center justify-center h-full py-8">
        <div className={"rounded-full w-4 h-full " + gradient}>
          {/* Setting a dynamic height depending on the height of the container of the timeline cards. Much more stable now! */}
          <div style={{height: `${dimensions.height}px`}}> 

          </div>
        </div>
      </div>
      <div className="absolute px-4 top-8 w-full lg:px8">
        <div className="space-y-8 lg:space-y-16" ref={divRef}>
          {data.map((item, index) =>
            item.type === "video" ? (
              <TimelineVideoCard
                id={"timeline-card-" + index}
                date={item.date}
                key={"tc-" + index}
                media={item.media}
                sources={item.sources}
                title={item.title}
                classes=""
                containerClasses={
                  index == 0 || index % 2 === 0 ? "" : "flex justify-end"
                }
              />
            ) : (
              <TimelineCard
                id={"timeline-card-" + index}
                body={item.body}
                date={item.date}
                key={"tc-" + index}
                sources={item.sources}
                title={item.title}
                classes=""
                containerClasses={
                  index == 0 || index % 2 === 0 ? "" : "flex justify-end"
                }
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default TimelineSection
