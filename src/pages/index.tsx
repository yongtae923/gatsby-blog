import { HeadFC } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-900">
          From brainwaves, To Innovation
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Yongtae, software developer
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Index Page</title>
