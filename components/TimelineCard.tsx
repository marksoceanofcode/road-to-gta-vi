import { twMerge } from "tailwind-merge"

type TimelineCardProps = {
  id: string
  body: string
  key: string
  sources: string[]
  title: string
  classes?: string
  containerClasses?: string
}

const TimelineCard = ({
  id,
  body,
  key,
  sources,
  title,
  classes,
  containerClasses,
}: TimelineCardProps) => {
  const allClasses = twMerge(
    "bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid p-4 rounded-2xl w-full md:w-150",
    classes
  )
  const allContainerClasses = twMerge("", containerClasses)

  return (
    <div className={allContainerClasses !== "" ? allContainerClasses : undefined}>
      <div id={id} key={key} className={allClasses}>
        <div className="mb-2">
            <p className="inline font-bold text-2xl text-bright-yellow">{title}</p>
            <p className="inline float-right font-semibold text-sm text-gray-500">2025-01-01</p>
        </div>
        <p className="mb-0.5 text-base">{body}</p>
        <p className="italic text-xs text-gray-500">Sources:</p>
      </div>
    </div>
  )
}

export default TimelineCard
