import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import BlogLayout from "../../components/Layout";
import Seo from "../../components/SEO";

const StyledTagList = styled.ul`
  list-style: none;
  max-width: 600px;
  padding: 0;

  li {
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
    padding-bottom: 1rem;
    margin: 0 0 1rem;

    &:last-child {
      border-bottom: none;
    }

    a {
      text-decoration: none;
    }
  }
`;

const seoData = {
  frontmatter: {
    title: `All Tags | My Blog`,
    description: "List of all tags used in my blog.",
  },
};

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <BlogLayout>
    <div className="container">
      <section>
        <h1>All Tags:</h1>

        <Seo postData={seoData} />

        <StyledTagList className="taglist">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </StyledTagList>
      </section>
    </div>
  </BlogLayout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
