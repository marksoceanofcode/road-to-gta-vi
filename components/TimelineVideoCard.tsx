import { twMerge } from "tailwind-merge"
import {
  PlayCircleIcon,
} from "@heroicons/react/24/solid"

type TimelineVideoCardProps = {
  id: string
  date: string
  key: string
  media: string
  sources: string[]
  title: string
  classes?: string
  containerClasses?: string
}

const TimelineVideoCard = ({
  id,
  date,
  key,
  media,
  sources,
  title,
  classes,
  containerClasses,
}: TimelineVideoCardProps) => {
  const allClasses = twMerge(
    "bg-midnight-blue/50 backdrop-blur-md border-4 border-white border-solid group p-4 relative rounded-2xl h-48 w-full hover:border-light-yellow md:w-150",
    classes
  )
  const allContainerClasses = twMerge("", containerClasses)
  const videoLink = sources[0].toString()

  return (
    <div
      id={id}
      key={key}
      className={allContainerClasses !== "" ? allContainerClasses : undefined}
    >
      <a href={sources[0]} className="w-full md:w-150" target="_blank">
        <div className={allClasses}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 rounded-xl w-full h-full object-cover"
          >
            <source src={media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 text-center flex items-center justify-center h-full">
            <PlayCircleIcon
              aria-hidden="true"
              className="text-white/70 size-16 group-hover:text-light-yellow/80"
            />
            {/* <p className="inline font-bold text-2xl group-hover:text-light-yellow">
              {title}
            </p> */}
          </div>
        </div>
      </a>
    </div>
  )
}

export default TimelineVideoCard
