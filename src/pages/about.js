import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";

const about = () => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        <Section title="About US">
          <div></div>
        </Section>
      </PageWrapper>
    </Layout>
  );
};

export default about;
