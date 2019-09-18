import path from "path";
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import config from "../config";

import {
  generateSchemaBase,
  generateHomepageSchemaAdditions,
  generateBreadcrumbSchema,
  generatePostSchema,
  generateProjectSchema,
} from "../helpers/seoHelpers";

const getSchemaOrgJSONLD = ({
  isProjectPage,
  isBlogPage,
  url,
  theTitle,
  image,
  theDescription,
  datePublished,
}) => {
  const schemaOrgJSONLD = generateSchemaBase(theTitle, theDescription, url);

  if (url === config.url) {
    return [...schemaOrgJSONLD, generateHomepageSchemaAdditions()];
  }

  if (isBlogPage) {
    return [
      ...schemaOrgJSONLD,
      generateBreadcrumbSchema(url, theTitle, image),
      generatePostSchema(url, theTitle, image, theDescription, datePublished),
    ];
  }

  if (isProjectPage) {
    return [
      ...schemaOrgJSONLD,
      generateBreadcrumbSchema(url, theTitle, image),
      generateProjectSchema(
        url,
        theTitle,
        image,
        theDescription,
        datePublished
      ),
    ];
  }

  return schemaOrgJSONLD;
};

const SEO = ({ postData, postImage, isProjectPage, isBlogPage }) => {
  const postMeta = postData.frontmatter || {};

  const theTitle = isBlogPage
    ? `${postMeta.title} | Your Blog`
    : postMeta.title
    ? postMeta.title
    : config.title;

  const theDescription =
    postMeta.description || postData.excerpt || config.description;

  const image = postImage ? `${config.url}${postImage}` : config.image;

  const url = isBlogPage
    ? `${config.url}${path.sep}blog${postData.fields.slug}`
    : config.url;

  const datePublished = isBlogPage ? postMeta.date : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPage,
    isProjectPage,
    url,
    theTitle,
    image,
    theDescription,
    datePublished,
  });

  return (
    <Helmet title={theTitle}>
      {/* General tags */}
      <html lang="en" />
      <meta name="description" content={theDescription} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isProjectPage ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={theTitle} />
      <meta property="og:description" content={theDescription} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={theTitle} />
      <meta name="twitter:description" content={theDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  isBlogPage: PropTypes.bool,
  isProjectPage: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }),
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isProjectPage: false,
  isBlogPage: false,
  postImage: null,
  postData: {
    frontmatter: PropTypes.object,
    excerpt: PropTypes.any,
  },
};

export default SEO;
