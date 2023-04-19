import { HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const IndexPage: React.FC = () => {
  return (
    <div className="h-screen bg-slate-50">
      <header className="container relative z-50 px-2 mx-auto border-b border-transparent">
        <div className="relative z-40 flex flex-row items-center justify-between pt-8 pb-2">
          <div className="flex flex-row items-center py-1">
            <button type="button" aria-label="Menu" className="relative block p-2 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.9889 11.9969H11.9945H3M20.9889 17.8745H3M21 6.12451H3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-row items-center py-1">
            <button type="button" aria-label="Search" className="relative block p-2 mr-2 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 21L15.8091 15.8091M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <button type="button" aria-label="Dark Mode" className="relative block p-2 mr-2 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 11.4489C3 16.7238 7.16904 21 12.3118 21C16.2709 21 19.6529 18.4657 21 14.8925C19.9331 15.4065 18.7418 15.6938 17.485 15.6938C12.9137 15.6938 9.20787 11.8928 9.20787 7.20396C9.20787 5.24299 9.85605 3.4373 10.9446 2C6.45002 2.6783 3 6.65034 3 11.4489Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <button type="button" aria-label="More" className="relative block p-2 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9L12 15L18 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <a className="flex flex-row items-center justify-center w-2/3 mx-auto my-5" href="/" aria-label="Yongtae.Kim">
          <StaticImage src="../images/yongtae-logo.png" alt="Yongtae Logo" className="w-12 mr-1"/>
          <h1 className="mr-4 font-sans text-2xl font-medium leading-relaxed text-center text-black break-words">
            Yongtae.Kim
          </h1>
        </a>
      </header>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Index Page</title>
