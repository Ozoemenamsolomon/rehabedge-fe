import * as React from "react";

import Layout from "../components/layout";
import PageWrapper from "../components/PageWrapper";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <PageWrapper>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageWrapper>
  </Layout>
);

export default NotFoundPage;
