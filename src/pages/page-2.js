import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const seoData = {
  frontmatter: {
    title: "Page Two | Gatsby Starter StoutLabs",
    description: "Test description for page two.",
  },
};

const SecondPage = () => (
  <Layout>
    <SEO postData={seoData} />
    <div className="container">
      <section>
        <h1>Page Two</h1>
        <p>Welcome to page two!</p>

        <Link to="/">Go back to the homepage</Link>
      </section>
    </div>
  </Layout>
);

export default SecondPage;
