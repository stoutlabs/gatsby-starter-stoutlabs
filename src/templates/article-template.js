import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Post from "../components/Blog/Article";
import { HTMLContent } from "../components/Content";
import Seo from "../components/SEO";

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  
  return (
    <Layout>
      <Seo
        postData={post}
        isBlogPage={true}
        postImage={post.frontmatter.featureimg.childImageSharp.fluid.src}
      />
      <Post
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        prev={pageContext.previous}
        next={pageContext.next}
        featureimg={post.frontmatter.featureimg}
        timetoread={post.timeToRead}
        slug={post.fields.slug}
        allNode={post}
        shareImg={post.frontmatter.featureimg.childImageSharp.fluid.src}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featureimg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
