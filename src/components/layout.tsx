import { Link } from "gatsby"
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="container relative px-2 mx-auto border-b border-transparent">
        <div className="relative flex flex-row items-center justify-between pt-8 pb-2">
          <div className="flex flex-row items-center py-1">
            <button type="button" aria-label="Menu" onClick={toggleModal} className="relative block p-2 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none">
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
        <Link to="/" className="flex flex-row items-center justify-center w-2/3 mx-auto my-5" aria-label="Yongtae.Kim">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="mr-3 h-7 w-7" viewBox="0 0 1200 1200" fill="none">
            <g><path fill="#5E3FAE" d="M 1.5,2.5 C 267.999,1.50021 534.666,1.16688 801.5,1.5C 668.549,135.284 535.049,268.618 401,401.5C 268.005,268.338 134.838,135.338 1.5,2.5 Z"/></g>
            <g><path fill="#6BB290" d="M 801.5,1.5 C 934.833,1.5 1068.17,1.5 1201.5,1.5C 1201.5,401.5 1201.5,801.5 1201.5,1201.5C 801.5,1201.5 401.5,1201.5 1.5,1201.5C 1.5,801.833 1.5,402.167 1.5,2.5C 134.838,135.338 268.005,268.338 401,401.5C 535.049,268.618 668.549,135.284 801.5,1.5 Z"/></g>
          </svg>
          <h1 className="font-sans text-2xl font-medium leading-relaxed text-center text-black break-words ">
            Yongtae.Kim
          </h1>
        </Link>
        <div className="flex flex-row items-center justify-center mb-4">
          <button type="button" aria-label="Follow" className="flex flex-row items-center px-4 py-2 text-xs font-medium text-center text-gray-800 transition-colors duration-150 ease-in-out bg-white border border-black border-opacity-100 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M2.5 19.25C2.5 15.5221 5.52208 12.5 9.25 12.5V12.5C12.9779 12.5 16 15.5221 16 19.25V19.5C16 20.6046 15.1046 21.5 14 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V19.25Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.75 6C12.75 7.933 11.183 9.5 9.25 9.5C7.317 9.5 5.75 7.933 5.75 6C5.75 4.067 7.317 2.5 9.25 2.5C11.183 2.5 12.75 4.067 12.75 6Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H16M19 10.5H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span className="ml-2 text-sm">Follow</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-2">
          <a href="https://twitter.com/yongtae923" target='_blank' aria-label="Find me on Twitter" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 512 512" stroke="currentColor">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </a>
          <a href="https://instagram.com/yongtae923_" target='_blank' aria-label="Find me on Instagram" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-6 h-6 fill-gray-600" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          </a>
          <a href="https://github.com/yongtae923" target='_blank' aria-label="Find me on GitHub" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/yongtae923" target='_blank' aria-label="Find me on Linkedin" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
          <a href="https://planet.moe/@yongtae923" target='_blank' aria-label="Find me on Mastodon" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 448 512">
              <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"></path>
            </svg>
          </a>
          <a href="https://blog.naver.com/yongtae923" target='_blank' aria-label="Find me on Naver blog" className="flex flex-row items-end justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 32C11.8333 32 8.125 33.5833 4.875 36.75C1.625 39.9167 0 43.6667 0 48V464C0 468.333 1.625 472.083 4.875 475.25C8.125 478.417 11.8333 480 16 480H432C436.167 480 439.875 478.417 443.125 475.25C446.375 472.083 448 468.333 448 464V48C448 43.6667 446.375 39.9167 443.125 36.75C439.875 33.5833 436.167 32 432 32H16ZM100.25 144H186.5L261.5 256V144H347.75V368H261.5L186.5 256V368H100.25V144Z"></path>
            </svg>
          </a>
          <a href="https://yongtae923.medium.com/" target='_blank' aria-label="Find me on Medium blog" className="flex flex-row items-end justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.955 16c0 3.951-0.661 7.166-1.483 7.166s-1.483-3.215-1.483-7.166 0.661-7.166 1.483-7.166 1.483 3.215 1.483 7.166zM27.167 16c0 4.412-1.882 8.001-4.212 8.001s-4.225-3.589-4.225-8.001 1.894-8.001 4.225-8.001 4.212 3.589 4.212 8.001zM17.919 16c-0.014 4.67-3.803 8.45-8.475 8.45-4.68 0-8.475-3.794-8.475-8.475s3.794-8.475 8.475-8.475c2.351 0 4.479 0.957 6.014 2.504l0.001 0.001c1.521 1.531 2.46 3.641 2.46 5.97 0 0.009 0 0.018-0 0.026v-0.001z"></path>
            </svg>
          </a>
          <a href="https://velog.io/@yongtae923" target='_blank' aria-label="Find me on Velog blog" className="flex flex-row items-end justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 192 192">
              <path d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"></path>
            </svg>
          </a>
          <a href="/rss.xml" target='_blank' aria-label="Blog's XML Feed" className="flex flex-row items-center justify-center p-2 transition-colors duration-150 ease-in-out rounded-full ">
            <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 448 512">
              <path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path>
            </svg>
          </a>
        </div>
      </header>
      <main className="relative flex items-center w-full p-8 mt-12 sm:justify-center min-h-96">
        <div className="flex flex-col items-start">
          {children}
        </div>
      </main>
      <footer className="container bottom-0 left-0 w-full bg-slate-100">
        <p className="p-8 mt-12 text-xs font-medium leading-normal uppercase text-slate-600">
          Copyright © 2023<br/>
          <Link to="/">Yongtae Kim.</Link><br/>
          All rights reserved.
        </p>
      </footer>
      {isModalOpen &&
        <div>
          <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-25" onClick={toggleModal} />
          <div className="fixed top-0 left-0 z-20 h-screen bg-white w-60" >
            모달
          </div>
        </div>
      }
    </div>
  )
}

export default Layout
