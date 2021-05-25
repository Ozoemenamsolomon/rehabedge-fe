import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import PageWrapper from "../components/PageWrapper";
import CardsSection from "../components/CardsSection";
import FeaturedCard from "../components/FeaturedCard";
// import styled from "styled-components";

const IndexPage = () => (
  <Layout>
    <PageWrapper>
      <Seo title="Home" />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p> 
       <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      <FeaturedCard></FeaturedCard>
      <CardsSection></CardsSection>
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </PageWrapper>
  </Layout>
);

export default IndexPage;
