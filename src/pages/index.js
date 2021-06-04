import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import CardsSection from "../components/CardsSection";
import FeaturedCardsSwiper from "../components/FeaturedCardsSwiper";
import Ad from "../components/Ad";
import NewsLetter from "../components/NewsLetter";
// import styled from "styled-components";

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <Seo title="Home" />
        {/*
       <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}<p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      /> */}
        <FeaturedCardsSwiper></FeaturedCardsSwiper>
        <Ad>AD Belongs Here!</Ad>
        <CardsSection sectionTitle="Recent">
          <Card
            title="How to be a man"
            readtime={12}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card
            title="How to be a woman"
            readtime={3}
            excerpt="jhdfgh15"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card></Card>
          <Card
            title="How to be a man"
            readtime={4}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card></Card>
          <Card></Card>
          <Card
            title="How to be a man"
            readtime={4}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card
            title="How to be a man"
            readtime={14}
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
            date="april 16, 2020"
            imageurl=""
          ></Card>
          <Card></Card>
        </CardsSection>
        <NewsLetter></NewsLetter>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;
