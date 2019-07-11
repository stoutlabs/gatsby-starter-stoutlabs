import path from "path";
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import config from "../config";

const getSchemaOrgJSONLD = ({
  isProjectPage,
  isBlogPage,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: url,
      name: title,
      alternateName: config.title,
      author: {
        "@type": "Person",
        name: config.author.name,
      },
      description: description,
      publisher: config.company,
    },
  ];

  if (url === config.url) {
    return [
      ...schemaOrgJSONLD,
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Your Town",
          addressRegion: "NY",
          postalCode: "23456",
          streetAddress: "221B Your St.",
        },
        description: config.description,
        name: config.company,
        telephone: "423-343-4274",
        openingHours: "Mo,Tu,We,Th,Fr 8:00-17:00",
        image: config.image,
        geo: {
          "@type": "GeoCoordinates",
          latitude: "36.1",
          longitude: "-82.0",
        },
        sameAs: [
          "http://www.facebook.com/yourFBpage",
          "http://www.twitter.com/yourTwitter",
          "https://plus.google.com/u/1/YOUR_ID",
        ],
      },
    ];
  }

  if (isBlogPage) {
    return [
      ...schemaOrgJSONLD,
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": url,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "Article",
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
        author: {
          "@type": "Person",
          name: "Daniel Stout",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        datePublished: datePublished,
        publisher: {
          "@type": "Organization",
          name: config.company,
          logo: {
            "@type": "ImageObject",
            width: 226,
            height: 60,
            url: config.logo,
          },
        },
      },
    ];
  }

  if (isProjectPage) {
    return [
      ...schemaOrgJSONLD,
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": url,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
        author: {
          "@type": "Person",
          name: "Daniel Stout",
        },
        mainEntityOfPage: {
          "@type": "WebSite",
          "@id": config.url,
        },
        datePublished: datePublished,
      },
    ];
  }

  return schemaOrgJSONLD;
};

const SEO = ({ title, description, postData, postImage, isProjectPage, isBlogPage }) => {
  const postMeta = postData.frontmatter || {};

  const theTitle = isBlogPage
    ? postMeta.title + " | Your Blog"
    : postMeta.title ? postMeta.title 
    : title ? title 
    : config.title;

  const theDescription =
    description || postMeta.description || postData.excerpt || config.description;

  const image = postImage ? `${config.url}${postImage}` : config.image;

  const url = isBlogPage
    ? `${config.url}${path.sep}blog${postData.fields.slug}`
    : config.url;

  const datePublished = isBlogPage ? postMeta.date : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPage,
    isProjectPage,
    url,
    title,
    image,
    description,
    datePublished,
  });

  return (
    <Helmet title={theTitle}>
      {/* General tags */}
      <html lang="en" />
      <meta name="description" content={theDescription} />
      <meta name="image" content={image} />
      <meta
        name="google-site-verification"
        content="1Uqm6h9_iawEMYdHmb86lBBUQv_1CJTzeXmcOiLuOpo"
      />

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
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isProjectPage: false,
  isBlogPage: false,
  postImage: null,
  postData: {}
};

export default SEO;
