import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <section>
        <h1>Not Found</h1>

        <p>Hmm... this route doesn't exist yet.</p>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
