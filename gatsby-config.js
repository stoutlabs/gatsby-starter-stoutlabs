require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Note: I choose to do this, since I tend to use this info in various places. 
// (You can hard-code all the values in below, if you prefer.)
const config = require("./src/config");

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author.name,
    company: config.company
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: `articles`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // This plugin copies all linked files (non-images, e.g. PDFs) from
            // markdown pages into a specified directory on build. Images in Markdown
            // are handled with 'gatsby-remark-images' plugin below
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // note - this is relative to the 'public' folder, and MUST reside inside it.
              destinationDir: "myfiles",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              linkImagesToOriginal: false,
              quality: 81,
              withWebp: {
                quality: 81,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.yoursite.com",
        sitemap: "https://www.yoursite.com/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.titleshort,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: config.imageRel, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
