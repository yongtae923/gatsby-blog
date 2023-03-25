import * as React from "react"
import { HeadFC, Link } from "gatsby"

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404: Page not found</h1>
      <p className="text-gray-600 mb-8 px-5">
        We're sorry, the page you requested could not be found.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go back to homepage
      </Link>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>About Page</title>
