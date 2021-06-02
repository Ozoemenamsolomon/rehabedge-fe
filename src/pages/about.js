import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageWrapper from "../components/PageWrapper";
// import styled from "styled-components";

const about = () => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        {/*<AboutTitle>About</AboutTitle>
        <AboutText>
          Rehab Edge is a media publication for physical and Orthopaedic
          rehabilitation professionals which delivers valuable news, insights,
          articles, job postings, and magazine publications to your doorstep.
         </AboutText> */}
      </PageWrapper>
    </Layout>
  );
};

export default about;

// const AboutTitle = styled.h2`
//   font-size: xxx-large;
//   @media (max-width) {
//     font-size: unset;
//   }
// `;
// const AboutText = styled.p`
//   font-size: x-large;
//   @media (max-width) {
//     font-size: unset;
//   }
// `;
