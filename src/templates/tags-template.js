import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/SEO";

const StyledTagsSection = styled.section`
  padding: 1rem;
  
  ul.taglist {
    margin: 2rem 0;
    li {
      margin: 0 0 0.75rem;
      padding: 0 0 0.75rem;
      border-bottom: 1px solid rgba(250, 250, 250, 0.1);
      &:last-child {
        border-bottom: 0;
      }
    }
    
  }
`;

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={"/blog" + post.node.fields.slug}>
          <h3>{post.node.frontmatter.title}</h3>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = `Posts Tagged: ${tag} | Your Blog Name`;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”:`;

    const seoData = {
      frontmatter: {
        title: title,
        description: `List of all posts tagged with: ${tag}`,
      },
    };

    return (
      <Layout>
        <StyledTagsSection>
          <Seo postData={seoData} />

          <div className="content">
            <h2>{tagHeader}</h2>
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags">Browse all tags</Link> |{" "}
              <Link to="/blog">Back to Articles Home</Link>
            </p>
          </div>
        </StyledTagsSection>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
