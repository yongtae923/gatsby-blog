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
        <div className="flex flex-row items-center justify-center mb-4">
          <button type="button" aria-label="Follow" className="flex flex-row items-center px-4 py-2 text-xs font-medium text-center text-gray-800 transition-colors duration-150 ease-in-out border border-black border-opacity-100 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M2.5 19.25C2.5 15.5221 5.52208 12.5 9.25 12.5V12.5C12.9779 12.5 16 15.5221 16 19.25V19.5C16 20.6046 15.1046 21.5 14 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V19.25Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.75 6C12.75 7.933 11.183 9.5 9.25 9.5C7.317 9.5 5.75 7.933 5.75 6C5.75 4.067 7.317 2.5 9.25 2.5C11.183 2.5 12.75 4.067 12.75 6Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H16M19 10.5H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span className="ml-2 text-sm">Follow</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-2">
          <a href="https://twitter.com/yongtae923" aria-label="Find me on Twitter" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 512 512" stroke="currentColor">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/yongtae.kim_" aria-label="Find me on Instagram" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-6 h-6 fill-gray-600" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          </a>
          <a href="https://github.com/yongtae923" aria-label="Find me on GitHub" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yongtae923" aria-label="Find me on Linkedin" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
          <a href="https://planet.moe/@yongtae923" aria-label="Find me on Mastodon" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 448 512">
              <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"></path>
            </svg>
          </a>
          <a href="/rss.xml" aria-label="Blog's XML Feed" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 448 512">
              <path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path>
            </svg>
          </a>
        </div>
      </header>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Index Page</title>
