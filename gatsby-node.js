/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slugify = require("slugify");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// This will auto-generate article pages from the folders in /pages/articles/
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // query articles
  const allArticles = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "article" } } }
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        limit: 500
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              tags
              title
            }
          }
        }
      }
    }
  `);

  //create article pages
  try {
    const articles = allArticles.data.allMarkdownRemark.edges;

    articles.forEach((article, index) => {
      // set up prev/next links for each article
      const previous = index === 0 ? null : articles[index - 1].node;
      const next = index === articles.length - 1 ? null : articles[index + 1].node;

      createPage({
        path: `blog${article.node.fields.slug}`,
        tags: article.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(
            article.node.frontmatter.templateKey
          )}-template.js`
        ),
        context: {
          id: article.node.id,
          slug: article.node.fields.slug,
          previous,
          next,
        },
      });
    });

    // sets up tags for each article
    let tags = [];
    allArticles.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.tags !== undefined) {
        tags = tags.concat(node.frontmatter.tags);
      }
    });

    const uniqueTags = [...new Set(tags)];

    uniqueTags.forEach(tag => {
      const tagPath = `/tags/${slugify(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags-template.js`),
        context: {
          tag,
        },
      });
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};