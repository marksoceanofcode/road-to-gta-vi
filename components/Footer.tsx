import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { version } from "../data/site"

export type FooterProps = {
  id?: string
}

class LinkObj {
  id: string
  link: string
  name: string
  constructor(id: string, link: string, name: string) {
    this.id = id
    this.link = link
    this.name = name
  }
}

const Footer = ({ id = "footer" }: FooterProps) => {
  const linkClasses = "font-medium text-base hover:text-light-yellow hover:underline"

  const links = [
    new LinkObj("footer-official-link", "https://www.rockstargames.com/VI", "Official"),
    new LinkObj("footer-news-link", "https://www.rockstargames.com/newswire", "Newswire"),
  ]

  return (
    <footer className="border-t-2 border-solid border-gray-900 mt-12">
      <div id={id} className="mx-auto max-w-340">
        <div className="mt-6 pb-8 pt-2 px-4 lg:pb-16 lg:mt-12">
          <div>
            <p className="mb-2 text-xs lg:mb-4">
              <sup>*</sup>This site is a <b>fan site</b> and <b>not</b> affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>
          <div className="inline-grid grid-cols-1 gap-0.5">
            <p className="font-bold text-base">Links</p>
            {links.map((link, index) => (
              <a
                id={link.id}
                href={link.link}
                className={linkClasses}
                key={link.id + index}
                target="_blank"
              >
                {link.name}
                <ArrowTopRightOnSquareIcon
                  aria-hidden="true"
                  className="ml-1 inline size-4"
                />
              </a>
            ))}
          </div>
          <div className="flex justify-end items-end">
            <div className="italic text-gray-500 text-xs">v{version}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
