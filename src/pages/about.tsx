import { HeadFC } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const AboutPage: React.FC = () => {
    return (
        <Layout>
            Hi, this is About Page.
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>용태 소개</title>