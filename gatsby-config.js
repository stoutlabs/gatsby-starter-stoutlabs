require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Note: I choose to do this, since I tend to use this info in various places.
// (You can hard-code all the values in below, if you prefer.)
const config = require("./src/config");

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author.name,
    company: config.company,
    siteUrl: config.url,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        host: config.url,
        sitemap: `${config.url}/sitemap.xml`,
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
  ],
};
