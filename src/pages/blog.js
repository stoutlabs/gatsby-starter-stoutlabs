import React, { Component } from "react";
import { graphql } from "gatsby";

import BlogLayout from "../components/Layout";
import PostList from "../components/Blog/PostList";
import Seo from "../components/SEO";

export class BlogIndex extends Component {
  render() {
    const seoData = {
      frontmatter: {
        title: "My Blog",
      },
    };

    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <BlogLayout location={this.props.location}>
        <Seo postData={seoData} />
        <div className="container">
          <section>
            <PostList posts={posts} />
          </section>
        </div>
      </BlogLayout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            tags
            date(formatString: "DD MMMM, YYYY")
            rawdate: date(formatString: "YYYY-MMM-DD")
            title
            description
            featureimg {
              childImageSharp {
                fluid(maxWidth: 800, quality: 81) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
