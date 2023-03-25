import { HeadFC } from "gatsby";
import * as React from "react"
import Layout from "../components/layout"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-900">
          This is About page.
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          This page is preparing.
        </p>
      </div>
    </Layout>
  )
}
export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>
