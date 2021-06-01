import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageWrapper from "../components/PageWrapper";
import CardsSection from "../components/CardsSection";

const category = () => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        <div></div>
        <CardsSection></CardsSection>
      </PageWrapper>
    </Layout>
  );
};

export default category;
