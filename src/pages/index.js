import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogIndex = ({ data, location }) => {
  // const post = data.MarkdownRemark.nodes
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}


export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />


export const pageQuery = graphql`
  {
    markdownRemark(fields: { slug: { eq: "/hello-world/" } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`


// export const pageQuery = graphql`
// {
//     query ($slug: String!){
//       markdownRemark(fields: { slug: { eq: $slug } }) {
//         frontmatter {
//           title
//           description
//         }
//         html
//       }
//     }


//   }
// `

// markdownRemark(id: { eq: "/hello-world/" }) {
//   id
//   excerpt(pruneLength: 160)
//   html
//   frontmatter {
//     title
//     date(formatString: "MMMM DD, YYYY")
//     description
//   }
// }