import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-10 py-10 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <StaticImage alt="Yongtae Kim" src="../images/icon.png"/>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/cv" className="text-gray-600 hover:text-gray-900">
              CV
            </Link>
            <Link to="/resume" className="text-gray-600 hover:text-gray-900">
              Resume
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-gray-600">
            Your information goes here
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
