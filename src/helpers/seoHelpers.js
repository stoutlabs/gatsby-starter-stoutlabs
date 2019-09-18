import config from "../config";

export const generateSchemaBase = (title, description, url) => [
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url,
    name: title,
    alternateName: config.title,
    author: {
      "@type": "Person",
      name: config.author.name,
    },
    description,
    publisher: config.company,
  },
];

export const generateHomepageSchemaAdditions = () => ({
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
  telephone: "555-555-1212",
  openingHours: "Mo,Tu,We,Th,Fr 8:00-17:00",
  image: config.image,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.1",
    longitude: "-81.0",
  },
  sameAs: [
    "http://www.facebook.com/yourFBpage",
    "http://www.twitter.com/yourTwitter",
    "https://plus.google.com/u/1/YOUR_ID",
  ],
});

export const generateBreadcrumbSchema = (url, title, image) => ({
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
});

export const generatePostSchema = (
  url,
  title,
  image,
  description,
  datePublished
) => ({
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
  datePublished,
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
});

export const generateProjectSchema = (
  url,
  title,
  image,
  description,
  datePublished
) => ({
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
  datePublished,
});
