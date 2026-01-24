import TimelineCard from "@/components/TimelineCard"
import timelineData from "@/data/timelineData.json"
import TimelineVideoCard from "./TimelineVideoCard"

type TimelineSectionProps = {
  id: string
}

const TimelineSection = ({ id }: TimelineSectionProps) => {
  const cardCss =
    "bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid p-4 rounded-2xl w-72 lg:w-150"
  const gradient =
    "bg-gradient-to-b from-sunset-orange via-sunset-pink to-sunset-purple"

  const data = timelineData.data

  return (
    <div id={id} className="min-h-screen max-w-340 mx-auto relative">
      <div className="flex items-center justify-center h-full py-8">
        <div className={"rounded-full w-4 h-full " + gradient}>
          <div className="invisible space-y-8 lg:space-y-16">
            {/* These will be ghost cards to add height to the div with the gradient timeline bar.
            Using a min width to prevent squishing of <div> and overflow clip so <div> ghost containers do not overflow the view. */}
            {data.map((item, index) =>
              item.type === "video" ? (
                <TimelineVideoCard
                  id={"timeline-card-invisible-" + index}
                  date={item.date}
                  key={"tci-" + index}
                  media={item.media}
                  sources={item.sources}
                  title={item.title}
                  classes="min-w-96"
                  containerClasses="overflow-clip"
                />
              ) : (
                <TimelineCard
                  id={"timeline-card-invisible-" + index}
                  body={item.body}
                  date={item.date}
                  key={"tci-" + index}
                  sources={item.sources}
                  title={item.title}
                  classes="min-w-96"
                  containerClasses="overflow-clip"
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="absolute px-8 top-8 w-full">
        <div className="space-y-8 lg:space-y-16">
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
