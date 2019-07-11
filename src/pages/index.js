import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className="container">
      <section>
        <h1>Welcome</h1>
        <p>Here's a new base Gatsby.js site, ready for editing!</p>

        <Link to="/page-2/">Go to page 2</Link>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
