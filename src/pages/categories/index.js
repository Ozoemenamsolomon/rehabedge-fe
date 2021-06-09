import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import PageWrapper from "../../components/PageWrapper";
import styled from "styled-components";

const index = () => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        <CategoryTitle>Category</CategoryTitle>
        <AboutText>Hello from Categories</AboutText>
      </PageWrapper>
    </Layout>
  );
};

export default index;

const CategoryTitle = styled.h2`
  font-size: xxx-large;
  @media (max-width) {
    font-size: unset;
  }
`;

const AboutText = styled.p`
  font-size: x-large;
  @media (max-width) {
    font-size: unset;
  }
`;
