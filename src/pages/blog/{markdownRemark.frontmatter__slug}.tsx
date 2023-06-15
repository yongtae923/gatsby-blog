import * as React from "react"
import { graphql, PageProps } from "gatsby"

interface Frontmatter {
  title: string
  date: string
}

interface MarkdownRemark {
  frontmatter: Frontmatter
  html: string
}

interface Data {
  markdownRemark: MarkdownRemark
}

interface TemplateProps extends PageProps {
  data: Data
}

export default function BlogPostTemplate({ data }: TemplateProps) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
  }
`
