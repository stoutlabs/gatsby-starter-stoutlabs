import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// import Summary from "./Summary";

const PostsList = styled.div`
  div.posts-list-items {
    div {
      margin: 0 0 1rem;
      padding: 0 0 1rem;
      border-bottom: rgba(100, 100, 100, 1);
    }
  }
`;

export default ({ posts }) => {
  return (
    <PostsList>
      <h1>Blog Posts: </h1>
      {posts.length > 0 && (
        <div className="posts-list-items">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title
              ? node.frontmatter.title
              : node.fields.slug;

            return (
              <div key={node.fields.slug}>
                <Link to={`/blog${node.fields.slug}`}>
                  {title}
                </Link>
              </div>
              );
          })}
        </div>
      )}
    </PostsList>
  );
};
