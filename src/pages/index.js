import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import styled from "styled-components";

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
      <CardsWrapper>
        <Card
          title="How to be a man"
          readtime="4"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusamus officia aut quaerat veniam sunt corporis corrupti sequi
      ex quam non abi eleyi o bgo ni?"
          date="april 16, 2020"
          imageurl=""
        ></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardsWrapper>
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </PageWrapper>
  </Layout>
);

export default IndexPage;

const CardsWrapper = styled.section`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`;
