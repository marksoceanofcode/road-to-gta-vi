import TimelineCard from "@/components/TimelineCard"

type RoadmapSectionProps = {
  id: string
}

const RoadmapSection = ({ id }: RoadmapSectionProps) => {
  const cardCss =
    "bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid p-4 rounded-2xl w-72 lg:w-150"
  const gradient =
    "bg-gradient-to-b from-sunset-orange via-sunset-pink to-sunset-purple"

  return (
    <div id={id} className="min-h-screen relative">
      <div className="flex items-center justify-center h-full pt-8">
        <div className={"rounded-full w-4 h-full " + gradient}>
          <div className="invisible space-y-8 lg:space-y-16">
            <TimelineCard
              id=""
              body="Test body"
              key=""
              sources={["test"]}
              title="Test Title"
              classes=""
              containerClasses=""
            />
            <TimelineCard
              id=""
              body="Test body"
              key=""
              sources={["test"]}
              title="Test Title"
              classes=""
              containerClasses="flex justify-end"
            />
            <TimelineCard
              id=""
              body="Test body"
              key=""
              sources={["test"]}
              title="Test Title"
              classes=""
              containerClasses=""
            />
          </div>
        </div>
      </div>
      <div className="absolute px-8 top-8 w-full">
        <div className="space-y-8 lg:space-y-16">
          <TimelineCard
            id=""
            body="Test body"
            key=""
            sources={["test"]}
            title="Test Title"
            classes=""
            containerClasses=""
          />
          <TimelineCard
            id=""
            body="Test body"
            key=""
            sources={["test"]}
            title="Test Title"
            classes=""
            containerClasses="flex justify-end"
          />
          <TimelineCard
            id=""
            body="Test body"
            key=""
            sources={["test"]}
            title="Test Title"
            classes=""
            containerClasses=""
          />
        </div>
      </div>
    </div>
  )
}

export default RoadmapSection
