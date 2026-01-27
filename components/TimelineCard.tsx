import { twMerge } from "tailwind-merge"
import moment from "moment"

type TimelineCardProps = {
  id: string
  body: string
  date: string
  key: string
  sources: string[]
  title: string
  classes?: string
  containerClasses?: string
}

const TimelineCard = ({
  id,
  body,
  date,
  key,
  sources,
  title,
  classes,
  containerClasses,
}: TimelineCardProps) => {
  const allClasses = twMerge(
    "bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid p-4 rounded-2xl text-wrap w-full md:w-150",
    classes
  )
  const allContainerClasses = twMerge("", containerClasses)
  const fmtDate = moment(date).format("LL")

  return (
    <div id={id} key={key} className={allContainerClasses !== "" ? allContainerClasses : undefined}>
      <div className={allClasses}>
        {/* <div className="mb-2">
            <p className="inline font-bold text-2xl text-bright-yellow">{title}</p>
            <p className="inline float-right font-semibold text-sm text-gray-500">{date}</p>
        </div> */}
        <p className="font-bold mb-0.5 text-2xl text-bright-yellow">{title}</p>
        <p className="mb-2 font-semibold text-sm text-gray-500">{fmtDate}</p>
        <p className="mb-0.5 text-base">{body}</p>
        <p className="italic text-xs text-gray-500">Source:{" "}
            <a href={sources[0]} className="underline" target="_blank">{sources[0]}</a>
        </p>
      </div>
    </div>
  )
}

export default TimelineCard
