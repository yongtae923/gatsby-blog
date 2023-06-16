import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../../components/layout"

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

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

export default function BlogPostTemplate({ data }: TemplateProps) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{formatDate(frontmatter.date)}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
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
