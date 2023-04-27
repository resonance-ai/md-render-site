import * as React from "react"
import { Link, graphql } from "gatsby"

const _test_BlogIndex = ({ data: { site, markdownRemark: post }, location, posts }) => {
    const siteTitle = site.siteMetadata?.title || `Title`
  
    if (post === null) {
      return (
        <Layout location={location} title={siteTitle}>
          <Bio />
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
          </p>
        </Layout>
      )
    }
  
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
  
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <hr />
          <a>test here</a>
  
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{posts[4].frontmatter.date}</p>
          </header>
          <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
          />
  
          <a>end</a>
          <hr />
        </article>
  
        <button>test</button>
      </Layout>
    )
  }

  export default _test_BlogIndex